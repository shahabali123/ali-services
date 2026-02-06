import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BLOG_FILE_PATH = path.join(__dirname, 'src/blogs/blog.js');

const generateBlogs = async () => {
    try {
        console.log(`📂 Working directory: ${__dirname}`);

        // 1. Read current blogs to get the next ID
        let blogFileContent = fs.readFileSync(BLOG_FILE_PATH, 'utf-8');
        console.log('📄 Read blog.js successfully.');
        const idMatch = blogFileContent.match(/id:\s*(\d+)/g);
        let nextId = 1;
        if (idMatch) {
            const ids = idMatch.map(m => parseInt(m.match(/\d+/)[0]));
            nextId = Math.max(...ids) + 1;
        }

        // 2. Generate 3 Blogs
        
        const prompt = `
            You are an expert SEO content writer for "Naxgat Visa Services".
            Generate 3 distinct, professional blog posts about US Visa appointments, rescheduling, or travel tips for Pakistanis.
            
            Return ONLY a raw JSON array of 3 objects. Do not include markdown formatting like \`\`\`json.
            Each object must have:
            - "title": Catchy title.
            - "excerpt": Short summary (2 sentences).
            - "category": One word category (e.g., "Tips", "News").
            - "content": HTML string with <p>, <h5>, and <ul> tags.
            - "image_prompt": A short, descriptive English prompt for an AI image generator (e.g., "Visa passport with american flag background").
        `;

        let text;
        let success = false;
        const maxRetries = 3;
        const useHF = !!process.env.HF_TOKEN;

        console.log(useHF ? '🤖 Using Hugging Face API (Mistral)...' : '🤖 Using Pollinations.ai (Mistral)...');

        for (let i = 0; i < maxRetries; i++) {
            try {
                console.log(`⏳ Attempt ${i + 1}/${maxRetries} connecting to AI...`);
                let response;

                if (useHF) {
                    // Hugging Face Inference API (Reliable)
                    response = await fetch("https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.3", {
                        method: "POST",
                        headers: {
                            "Authorization": `Bearer ${process.env.HF_TOKEN}`,
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            inputs: `<s>[INST] ${prompt} [/INST]`,
                            parameters: { max_new_tokens: 2500, return_full_text: false }
                        })
                    });
                } else {
                    // Pollinations.ai Fallback (Free, no key)
                    // Switched model to 'mistral' to avoid 502 errors on openai model
                    response = await fetch("https://text.pollinations.ai/", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            messages: [
                                { role: "system", content: "You are a helpful assistant that outputs only JSON." },
                                { role: "user", content: prompt }
                            ],
                            model: "mistral", // Changed from 'openai' to 'mistral' for stability
                            seed: Math.floor(Math.random() * 1000)
                        })
                    });
                }

                if (response.ok) {
                    if (useHF) {
                        const data = await response.json();
                        text = Array.isArray(data) ? data[0].generated_text : data.generated_text;
                    } else {
                        text = await response.text();
                    }
                    success = true;
                    break;
                } else {
                    console.warn(`⚠️ API Error: ${response.status} ${response.statusText}`);
                }
            } catch (err) {
                console.warn(`⚠️ Connection Error: ${err.message}`);
            }
            // Wait 3 seconds before retrying
            await new Promise(res => setTimeout(res, 3000));
        }

        if (!success) throw new Error("Failed to generate blogs after multiple attempts.");
        
        // Robust JSON extraction
        const jsonStartIndex = text.indexOf('[');
        const jsonEndIndex = text.lastIndexOf(']');
        
        if (jsonStartIndex === -1 || jsonEndIndex === -1) {
            console.error("❌ Raw AI Response:", text);
            throw new Error("Could not find valid JSON array in AI response");
        }

        const jsonString = text.substring(jsonStartIndex, jsonEndIndex + 1);
        const newBlogsData = JSON.parse(jsonString);
        const dateStr = new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });

        let newEntriesString = '';

        newBlogsData.forEach((blogData, index) => {
            const currentId = nextId + index;
            // Generate a free AI image link using Pollinations.ai
            const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(blogData.image_prompt)}?width=800&height=600&nologo=true&seed=${currentId}`;

            console.log(`✅ Generated: ${blogData.title}`);

            newEntriesString += `
    {
        id: ${currentId},
        title: ${JSON.stringify(blogData.title)},
        image: "${imageUrl}",
        date: "${dateStr}",
        author: "AI Assistant",
        category: ${JSON.stringify(blogData.category)},
        excerpt: ${JSON.stringify(blogData.excerpt)},
        content: ${JSON.stringify(blogData.content)}
    },`;
        });

        // 3. Append to file
        const lastBracketIndex = blogFileContent.lastIndexOf('];');
        if (lastBracketIndex === -1) throw new Error("Could not find closing bracket in blog.js");

        const updatedContent = blogFileContent.slice(0, lastBracketIndex) + newEntriesString + "\n" + blogFileContent.slice(lastBracketIndex);
        
        fs.writeFileSync(BLOG_FILE_PATH, updatedContent, 'utf-8');
        console.log('🎉 Successfully added 3 new blogs!');

    } catch (error) {
        console.error('❌ Fatal Error:', error);
        process.exit(1);
    }
};

generateBlogs();