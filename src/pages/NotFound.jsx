export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-700">
        The page you are looking for does not exist.
      </p>
      <p className="text-sm text-gray-500 mt-2">
        Please check the URL or return to the home page.
      </p>
    </div>
  );
};
