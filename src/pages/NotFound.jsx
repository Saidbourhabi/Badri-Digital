import { NavLink } from "react-router-dom"

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-transparent">
            <div className="text-center px-6">
                <h1 className="text-7xl md:text-8xl font-bold text-black">
                    404
                </h1>
                <p className="mt-4 text-lg text-black">
                    Page not found
                </p>
                <p className="mt-2 text-sm text-black/70">
                    The page you are looking for doesn't exist or has been moved.
                </p>
                <NavLink
                    to="/"
                    className="inline-block text-black mt-6 border border-black px-6 py-2 text-sm transition hover:bg-black hover:text-white">
                        Back Home
                </NavLink>
            </div>
        </div>
    )
}