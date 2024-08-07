

const Landing = () => {
  return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans">
        <header className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4">Welcome to Omegle Clone</h1>
          <p className="text-xl">Chat with strangers around the world anonymously!</p>
        </header>
        <main className="flex flex-col items-center">
          <button
            className="px-6 py-3 bg-blue-500 text-white text-lg rounded-md hover:bg-blue-600 transition duration-300"
            onClick={() => window.location.href = '/chat'}
          >
            Start Chatting
          </button>
        </main>
        <footer className="absolute bottom-4 text-center">
          <p className="text-sm">Developed by [Your Name]</p>
        </footer>
      </div>
    );
}

export default Landing      