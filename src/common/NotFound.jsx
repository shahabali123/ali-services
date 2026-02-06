import {Link} from 'react-router-dom'
function NotFound() {
    return ( 
        <div>
            <h1>The page you are looking at does not exist <Link to={'/'}>Back Home</Link></h1>
        </div>
     );
}

export default NotFound;