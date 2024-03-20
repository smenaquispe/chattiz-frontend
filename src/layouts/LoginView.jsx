export function LoginView() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-96">
                <h1 className="text-3xl font-semibold text-center">Login</h1>
                <form className="mt-4">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-semibold">Email</label>
                        <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-semibold">Password</label>
                        <input type="password" id="password" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
                    </div>
                    <button type="submit" className="w-full bg-purple-500 text-white font-semibold py-2 rounded-md hover:bg-purple-600 transition duration-300 ease-in-out">Login</button>
                </form>
                <div>
                    Do not have an account? <a href="/register" className="text-purple-500">Register</a>
                </div>
            </div>

        </div>
    )
}