import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
  const navigate = useNavigate();

  const handleGoBackHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <h1 className="font-bold text-9xl mb-4">
          <span className="text-red-500">4</span>
          <span className="text-white inline-block w-24 h-24 animate-bounce text-6xl">
            😢
          </span>
          <span className="text-red-500">4</span>
        </h1>
        <h1 className="text-3xl font-bold tracking-tight mb-4 sm:text-5xl">
          Oops! Page Not Found
        </h1>
        <p className="text-base leading-7 mb-6">
          Sorry, but the page you're looking for does not exist, has been removed, or is temporarily unavailable.
        </p>
        <button
          onClick={handleGoBackHome}
          className="rounded bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-lg hover:bg-red-500 transition-colors duration-300"
        >
          Back to Homepage
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
