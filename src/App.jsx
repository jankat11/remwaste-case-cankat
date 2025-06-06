import SkipSelector from "./components/SkipSelector";

function App() {
  return (
    <div className="min-h-screen font-sans">
      <header className="shadow">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-semibold">Business Skip Hire</h1>
        </div>
      </header>
      <main className="py-8">
        <SkipSelector />
      </main>
    </div>
  );
}

export default App;
