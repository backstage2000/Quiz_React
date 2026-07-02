import { Footer, Header } from "@layouts";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Header />

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col">
        <main className="flex-1 px-4 py-6 md:px-6 lg:px-8">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4 shadow-xl md:p-6">
            <Outlet />
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default App;
