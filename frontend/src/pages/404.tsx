import {Link} from "react-router";

function _404() {
    return (
        <div className="min-h-dvh flex flex-col justify-center items-center text-pretty gap-y-4">
            <h1 className="text-6xl font-bold">404.</h1>
            <Link to="/" className="text-white bg-black py-2 px-4 rounded-md shadow-xs">Back to home</Link>
        </div>
    )
}

export default _404
