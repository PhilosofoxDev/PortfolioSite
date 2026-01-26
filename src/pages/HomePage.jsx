export default function HomePage() {
  return (
    <div className="overscroll-x-none flex flex-col items-center justify-center min-h-screen min-w-screen bg-stone-500">
      {/* Video here in future ^^^ */}
      <h1 className="text-5xl font-bold mb-6 text-purple-400">
        Welcome to My Portfolio
      </h1>
      <p className="text-lg text-gray-300 max-w-xl text-center">
        Explore my projects and works showcasing my skills in web development,
        design, and more. Feel free to navigate through the portfolio to see
        detailed information about each project.
      </p>
    </div>
  );
}
