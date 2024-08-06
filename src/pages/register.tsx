import Link from 'next/link';
import Navbar from '../components/Navbar';

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-cover bg-center relative" style={{ backgroundImage: 'url(/background.jpg)' }}>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white bg-opacity-35 p-8 rounded-lg shadow-md max-w-md w-full">
          <h2 className="text-3xl font-bold mb-10 text-white text-center">Register</h2>
          <form>
            <div className="mb-4">
              <label className="block text-white mb-2" htmlFor="username">Username</label>
              <input
                className="w-full p-2 rounded bg-white bg-opacity-50 text-darkBlue border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellowHighlight"
                type="text"
                id="username"
                name="username"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-white mb-2" htmlFor="email">Email</label>
              <input
                className="w-full p-2 rounded bg-white bg-opacity-50 text-darkBlue border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellowHighlight"
                type="email"
                id="email"
                name="email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-white mb-2" htmlFor="password">Password</label>
              <input
                className="w-full p-2 rounded bg-white bg-opacity-50 text-darkBlue border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellowHighlight"
                type="password"
                id="password"
                name="password"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-white mb-2" htmlFor="role">Role</label>
              <select
                className="w-full p-2 rounded bg-white bg-opacity-50 text-darkBlue border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellowHighlight"
                id="role"
                name="role"
                required
              >
                <option value="">Select your role</option>
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
                <option value="parent">Parent</option>
              </select>
            </div>
            <button
              className="w-full bg-yellowHighlight hover:bg-yellow-600 text-darkBlue font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Register
            </button>
          </form>
          <div className="mt-4 text-center">
            <Link href="/login" className="text-darkBlue font-bold text-1xl">Already have an account? Login </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
