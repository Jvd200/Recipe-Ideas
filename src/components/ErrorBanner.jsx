export default function ErrorBanner({ message }) {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md mb-6 text-center">
      {message}
    </div>
  );
}
