import React, { ReactNode } from "react";
import Link from "next/link";
import { Toaster } from "react-hot-toast";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const now = new Date();
  return (
    <>
      <Toaster />
      <div className="flex flex-col items-center justify-center p-8 min-h-screen">
        <div className="bg-white border border-slate-300 rounded-lg shadow-lg w-full max-w-5xl h-[80vh] flex flex-col">
          <header className="bg-green-500 text-white flex items-center justify-between p-4 rounded-t-lg">
            <div className="text-xl font-bold">Temple</div>
            <nav>{/* TBC */}</nav>
            <div className="flex items-center">
              {/* Profile and settings */}
              <span className="cursor-pointer hover:text-gray-400">
                Profile
              </span>
            </div>
          </header>

          <div className="flex flex-1">
            <aside className="bg-green-50 w-64 p-4 border-r border-slate-300 rounded-bl-lg">
              <ul className="space-y-6 p-4 text-xl tracking-wide">
                <li>
                  <Link
                    href="/"
                    className="text-slate-800 hover:text-lime-400 transition"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/todo"
                    className="text-slate-800 hover:text-lime-400 transition"
                  >
                    To-Do
                  </Link>
                </li>
                <li>
                  <Link
                    href="/journal"
                    className="text-slate-800 hover:text-lime-400 transition"
                  >
                    Journal
                  </Link>
                </li>
                <li>
                  <Link
                    href="/meditate"
                    className="text-slate-800 hover:text-lime-400 transition"
                  >
                    Meditate
                  </Link>
                </li>
              </ul>
            </aside>
            <main className="flex-1 p-6 overflow-auto">{children}</main>
          </div>

          <footer className="bg-green-500 text-white p-4 rounded-b-lg">
            <p>&copy; {now.getFullYear()} Temple</p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Layout;
