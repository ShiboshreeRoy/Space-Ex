import React, { useState } from 'react';
import { Code, ChevronRight } from 'lucide-react';

const examples = {
  python: [
    {
      title: 'Hello World',
      code: 'print("Hello, World!")',
      description: 'Simple program to print Hello World'
    },
    {
      title: 'Fibonacci Series',
      code: `def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        print(a, end=' ')
        a, b = b, a + b

fibonacci(10)`,
      description: 'Generate Fibonacci series up to n numbers'
    }
  ],
  javascript: [
    {
      title: 'Array Methods',
      code: `const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log(doubled);`,
      description: 'Working with array methods in JavaScript'
    }
  ]
};

export default function Examples() {
  const [selectedLanguage, setSelectedLanguage] = useState('python');

  return (
    <div id="examples" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Programming Examples</h2>
        
        <div className="grid md:grid-cols-4 gap-8">
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="font-semibold mb-4">Languages</h3>
            <div className="space-y-2">
              {Object.keys(examples).map(lang => (
                <button
                  key={lang}
                  onClick={() => setSelectedLanguage(lang)}
                  className={`w-full text-left px-4 py-2 rounded ${
                    selectedLanguage === lang ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'
                  }`}
                >
                  {lang.charAt(0).toUpperCase() + lang.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-3">
            <div className="space-y-6">
              {examples[selectedLanguage].map((example, index) => (
                <div key={index} className="bg-gray-100 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold flex items-center">
                      <Code className="w-5 h-5 mr-2" />
                      {example.title}
                    </h3>
                    <button className="text-blue-500 hover:text-blue-600 flex items-center">
                      Try it <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                  <p className="text-gray-600 mb-4">{example.description}</p>
                  <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
                    <code>{example.code}</code>
                  </pre>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}