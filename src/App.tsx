import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { SignUpPage } from './pages/SignUpPage';
import { SearchPage } from './pages/SearchPage';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <header className="bg-gray-800 text-white p-4">
          <nav className="flex justify-between items-center container mx-auto">
            <Link to="/" className="text-lg font-bold">Home</Link>
            <div>
              <Link to="/signup" className="mr-4">Sign Up</Link>
              <Link to="/search">Search</Link>
            </div>
          </nav>
        </header>

        <main className="flex-grow p-8">
          <Routes>
            <Route path="/" element={<h1>Welcome to the App</h1>} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </main>

        <footer className="bg-gray-800 text-white p-4 text-center">
          © 2024 Your Company
        </footer>
      </div>
    </Router>
  );
};

export default App;