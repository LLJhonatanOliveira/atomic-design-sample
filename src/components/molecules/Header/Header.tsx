import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <header className="flex justify-between p-4 bg-gray-800 text-white">
      <h1 className="text-lg font-bold">Catalog App</h1>
      <button 
        onClick={handleLogout} 
        className="bg-red-600 px-4 py-2 rounded hover:bg-red-700">
        Logout
      </button>
    </header>
  );
};
