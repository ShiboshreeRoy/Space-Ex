import React from 'react';
import { Code2, BookOpen, Layout, Terminal, Laptop } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-2">
            <Code2 className="w-8 h-8 text-blue-400" />
            <span className="text-2xl font-bold">Space-Ex</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#tutorials" className="flex items-center space-x-1 hover:text-blue-400 transition">
              <Layout className="w-4 h-4" />
              <span>Tutorials</span>
            </a>
            <a href="#compiler" className="flex items-center space-x-1 hover:text-blue-400 transition">
              <Terminal className="w-4 h-4" />
              <span>Compiler</span>
            </a>
            <a href="#examples" className="flex items-center space-x-1 hover:text-blue-400 transition">
              <BookOpen className="w-4 h-4" />
              <span>Examples</span>
            </a>
            <a href="#practice" className="flex items-center space-x-1 hover:text-blue-400 transition">
              <Laptop className="w-4 h-4" />
              <span>Practice</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}