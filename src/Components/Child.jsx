import { Link } from "react-router-dom"
import abc from './style.module.css'
let Child = () => {
    return (
        <div className={abc.maindiv}>
            <Link className={abc.atag} to="/a">Register the Student</Link>
            <Link className={abc.atag} to="/b">Show the Student Details</Link>
        </div>
    )
}
export default Child