import React from 'react';
import { ArrowRight, Code, BookOpen, Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6">Welcome to Space-Ex Programming Group!</h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-300 mb-6">
              Space-Ex Programming Group is a dynamic and innovative community of programmers, developers, and tech enthusiasts who come together to share their passion for coding and technology. Named after the founder, ShiboshreeRoy, this group is dedicated to fostering a collaborative environment where members can learn, grow, and create together.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              Our group is open to programmers of all levels, from beginners taking their first steps in the world of coding to seasoned professionals looking to expand their knowledge and skills. We believe that diversity is a strength, and we welcome individuals from all backgrounds and walks of life, creating a rich and vibrant community that thrives on mutual respect and support.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-md text-lg font-semibold flex items-center space-x-2 mx-auto">
              <span>Start Learning</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            {
              icon: <Code className="w-8 h-8 text-blue-400" />,
              title: "Interactive Tutorials",
              description: "Step-by-step guidance with hands-on coding practice"
            },
            {
              icon: <Terminal className="w-8 h-8 text-green-400" />,
              title: "Online Compiler",
              description: "Write, compile and run code in 40+ programming languages"
            },
            {
              icon: <BookOpen className="w-8 h-8 text-purple-400" />,
              title: "Examples Library",
              description: "Extensive collection of programming examples and solutions"
            }
          ].map((feature, index) => (
            <div key={index} className="bg-slate-800 p-6 rounded-lg hover:transform hover:-translate-y-1 transition duration-300">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}