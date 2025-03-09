import React, { useState, useEffect } from 'react';
import { Play, Download, Copy, Check, Save, Settings, RefreshCw } from 'lucide-react';
import Editor from '@monaco-editor/react';

const languages = [
  { 
    id: 'python',
    name: 'Python',
    version: '3.9',
    defaultCode: 'def greet(name):\n    return f"Hello, {name}!"\n\nprint(greet("World"))',
    samples: [
      { name: 'Hello World', code: 'print("Hello, World!")' },
      { name: 'Fibonacci', code: 'def fibonacci(n):\n    a, b = 0, 1\n    for _ in range(n):\n        print(a, end=" ")\n        a, b = b, a + b\n\nfibonacci(10)' },
      { name: 'Quick Sort', code: 'def quicksort(arr):\n    if len(arr) <= 1:\n        return arr\n    pivot = arr[len(arr) // 2]\n    left = [x for x in arr if x < pivot]\n    middle = [x for x in arr if x == pivot]\n    right = [x for x in arr if x > pivot]\n    return quicksort(left) + middle + quicksort(right)\n\nprint(quicksort([3, 6, 8, 10, 1, 2, 1]))' }
    ]
  },
  { 
    id: 'javascript',
    name: 'JavaScript',
    version: 'ES2021',
    defaultCode: 'function greet(name) {\n  return `Hello, ${name}!`;\n}\n\nconsole.log(greet("World"));',
    samples: [
      { name: 'Array Methods', code: 'const numbers = [1, 2, 3, 4, 5];\nconst doubled = numbers.map(n => n * 2);\nconsole.log(doubled);' },
      { name: 'Promise Example', code: 'async function fetchData() {\n  try {\n    const response = await fetch("https://api.example.com/data");\n    const data = await response.json();\n    console.log(data);\n  } catch (error) {\n    console.error("Error:", error);\n  }\n}' }
    ]
  },
  { 
    id: 'java',
    name: 'Java',
    version: '17',
    defaultCode: 'public class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello, World!");\n  }\n}',
    samples: [
      { name: 'Basic Class', code: 'class Person {\n    private String name;\n    private int age;\n\n    public Person(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n\n    public String toString() {\n        return "Person{name=\'" + name + "\', age=" + age + "}";\n    }\n\n    public static void main(String[] args) {\n        Person person = new Person("John", 30);\n        System.out.println(person);\n    }\n}' }
    ]
  },
  { 
    id: 'cpp',
    name: 'C++',
    version: '17',
    defaultCode: '#include <iostream>\n\nint main() {\n  std::cout << "Hello, World!" << std::endl;\n  return 0;\n}',
    samples: [
      { name: 'Vector Operations', code: '#include <iostream>\n#include <vector>\n\nint main() {\n    std::vector<int> numbers = {1, 2, 3, 4, 5};\n    \n    for(const auto& num : numbers) {\n        std::cout << num << " ";\n    }\n    \n    return 0;\n}' }
    ]
  }
];

const compileCode = async (language: string, code: string) => {
  // Simulate compilation with different behaviors per language
  const delay = Math.random() * 1000 + 500; // Random delay between 500-1500ms
  await new Promise(resolve => setTimeout(resolve, delay));

  // Simulate different outputs based on language and code
  if (code.includes('print') || code.includes('console.log') || code.includes('System.out') || code.includes('cout')) {
    return { success: true, output: 'Program output:\nHello, World!' };
  }
  
  if (code.includes('error')) {
    throw new Error(`${language} compilation error: Syntax error at line 1`);
  }

  return { success: true, output: 'Program executed successfully!' };
};

export default function Compiler() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [code, setCode] = useState(selectedLanguage.defaultCode);
  const [output, setOutput] = useState('');
  const [isCompiling, setIsCompiling] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState('vs-dark');
  const [fontSize, setFontSize] = useState(14);

  useEffect(() => {
    // Reset output when language changes
    setOutput('');
    setError(null);
  }, [selectedLanguage]);

  const handleLanguageChange = (e) => {
    const newLang = languages.find(lang => lang.id === e.target.value) || languages[0];
    setSelectedLanguage(newLang);
    setCode(newLang.defaultCode);
  };

  const handleRun = async () => {
    setIsCompiling(true);
    setError(null);
    setOutput('');

    try {
      const result = await compileCode(selectedLanguage.id, code);
      setOutput(result.output);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsCompiling(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([code], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `code.${selectedLanguage.id}`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const loadSample = (sample) => {
    setCode(sample.code);
    setOutput('');
    setError(null);
  };

  return (
    <div id="compiler" className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8">Online Compiler</h2>
        
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex items-center space-x-4 mb-4">
            <select 
              value={selectedLanguage.id}
              onChange={handleLanguageChange}
              className="bg-gray-700 text-white rounded px-3 py-2"
            >
              {languages.map(lang => (
                <option key={lang.id} value={lang.id}>
                  {lang.name} ({lang.version})
                </option>
              ))}
            </select>
            
            <button 
              onClick={handleRun}
              disabled={isCompiling}
              className={`${
                isCompiling ? 'bg-gray-500' : 'bg-green-500 hover:bg-green-600'
              } text-white px-4 py-2 rounded flex items-center space-x-2`}
            >
              {isCompiling ? (
                <RefreshCw className="w-4 h-4 animate-spin" />
              ) : (
                <Play className="w-4 h-4" />
              )}
              <span>{isCompiling ? 'Running...' : 'Run'}</span>
            </button>
            
            <button 
              onClick={handleCopy}
              className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded flex items-center space-x-2"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied!' : 'Copy'}</span>
            </button>
            
            <button 
              onClick={handleDownload}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded flex items-center space-x-2"
            >
              <Download className="w-4 h-4" />
              <span>Download</span>
            </button>

            <div className="flex items-center space-x-2 ml-auto">
              <select
                value={selectedTheme}
                onChange={(e) => setSelectedTheme(e.target.value)}
                className="bg-gray-700 text-white rounded px-2 py-1 text-sm"
              >
                <option value="vs-dark">Dark Theme</option>
                <option value="light">Light Theme</option>
              </select>
              
              <select
                value={fontSize}
                onChange={(e) => setFontSize(Number(e.target.value))}
                className="bg-gray-700 text-white rounded px-2 py-1 text-sm"
              >
                {[12, 14, 16, 18, 20].map(size => (
                  <option key={size} value={size}>{size}px</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-3">
              <div className="bg-gray-700 rounded-lg p-4">
                <h3 className="text-white font-semibold mb-3">Sample Programs</h3>
                <div className="space-y-2">
                  {selectedLanguage.samples.map((sample, index) => (
                    <button
                      key={index}
                      onClick={() => loadSample(sample)}
                      className="w-full text-left px-3 py-2 rounded bg-gray-600 text-white hover:bg-gray-500 transition"
                    >
                      {sample.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-span-9">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-900 rounded-lg">
                  <Editor
                    height="500px"
                    defaultLanguage={selectedLanguage.id}
                    language={selectedLanguage.id}
                    value={code}
                    onChange={(value) => setCode(value)}
                    theme={selectedTheme}
                    options={{
                      minimap: { enabled: false },
                      fontSize: fontSize,
                      scrollBeyondLastLine: false,
                      automaticLayout: true,
                      lineNumbers: 'on',
                      roundedSelection: false,
                      selectOnLineNumbers: true,
                      quickSuggestions: true,
                    }}
                  />
                </div>
                
                <div className="bg-gray-900 rounded-lg p-4">
                  <div className="font-mono text-white h-[500px] overflow-auto">
                    <h3 className="text-sm text-gray-400 mb-2">Output:</h3>
                    {error ? (
                      <pre className="text-red-400 whitespace-pre-wrap">{error}</pre>
                    ) : (
                      <pre className="whitespace-pre-wrap">{output}</pre>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}