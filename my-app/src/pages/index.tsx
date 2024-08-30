import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center p-4 mt-5">
      <h1 className="text-3xl font-bold">ADMIN PORTAL</h1>
      <span>WELCOME TO MY ADMIN PORTAL</span>
      <div className="flex items-center justify-center">
        <button
          onClick={() => router.push("/login")}
          className="bg-blue-500 text-white p-2 mt-4 rounded-md hover:bg-blue-700"
        >
          Go to Login
        </button>
        <button
          onClick={() => router.push("/dashboard")}
          className="bg-gray-500 text-white p-2 mt-4 ml-2 rounded-md hover:bg-gray-700"
        >
          Go to Dashboard
        </button>
        <button
          onClick={() => router.push("/user-management")}
          className="bg-green-500 text-white p-2 mt-4 ml-2 rounded-md hover:bg-green-700"
        >
          Go to User Management
        </button>
      </div>
    </div>
  );
};

export default Home;
