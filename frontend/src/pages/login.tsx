import { useRouter } from 'next/router'; // Import useRouter
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const LoginPage = () => {
  const router = useRouter(); // Initialize useRouter

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    // Here, you can add authentication logic before redirecting
    router.push('/student_dashboard'); // Redirect to the student dashboard
  };

  return (
    <div className="min-h-screen bg-cover bg-center relative" style={{ backgroundImage: 'url(/background.jpg)' }}>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white bg-opacity-35 p-8 rounded-lg shadow-md max-w-md w-full">
          <h2 className="text-3xl font-bold mb-10 text-white text-center">Login</h2>
          <form onSubmit={handleSubmit}> {/* Attach handleSubmit to the form */}
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
            <div className="mb-6">
              <label className="block text-white mb-2" htmlFor="password">Password</label>
              <input
                className="w-full p-2 rounded bg-white bg-opacity-50 text-darkBlue border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellowHighlight"
                type="password"
                id="password"
                name="password"
                required
              />
            </div>
            <button
              className="w-full bg-yellowHighlight hover:bg-yellow-600 text-darkBlue font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit" // Keep type as submit
            >
              Login
            </button>
          </form>
          <div className="mt-4 text-center">
            <Link href="/register" className="text-darkBlue font-bold text-1xl">Don't have an account? Register Now </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
