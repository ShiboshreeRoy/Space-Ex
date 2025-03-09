import React, { useState } from 'react';
import { BookOpen, Code2, Terminal, Database, Cloud, ChevronRight, PlayCircle, BookOpen as Book } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const tutorials = [
  {
    category: "Web Development",
    icon: <Code2 className="w-6 h-6" />,
    courses: [
      {
        title: "HTML & CSS Fundamentals",
        level: "Beginner",
        lessons: [
          {
            title: "Introduction to HTML",
            content: `
# Introduction to HTML

HTML (HyperText Markup Language) is the standard markup language for creating web pages.

## Basic Structure
\`\`\`html
<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello World!</h1>
  </body>
</html>
\`\`\`

## Common Elements
- Headings: \`<h1>\` to \`<h6>\`
- Paragraphs: \`<p>\`
- Links: \`<a href="url">link text</a>\`
- Images: \`<img src="image.jpg" alt="description">\`
            `
          }
        ]
      },
      {
        title: "JavaScript Complete Guide",
        level: "Intermediate",
        lessons: [
          {
            title: "JavaScript Basics",
            content: `
# JavaScript Fundamentals

JavaScript is a programming language that enables interactive web pages.

## Variables
\`\`\`javascript
let name = "John";
const age = 30;
var city = "New York"; // older way
\`\`\`

## Functions
\`\`\`javascript
function greet(name) {
  return \`Hello, \${name}!\`;
}

// Arrow function
const greet = (name) => \`Hello, \${name}!\`;
\`\`\`
            `
          }
        ]
      }
    ]
  },
  {
    category: "Programming Languages",
    icon: <Terminal className="w-6 h-6" />,
    courses: [
      {
        title: "Python Programming",
        level: "Beginner",
        lessons: [
          {
            title: "Python Basics",
            content: `
# Python Programming Basics

Python is a high-level, interpreted programming language.

## Variables and Data Types
\`\`\`python
# Numbers
age = 25
price = 19.99

# Strings
name = "Alice"
message = 'Hello, World!'

# Lists
numbers = [1, 2, 3, 4, 5]
names = ["Alice", "Bob", "Charlie"]

# Dictionaries
person = {
    "name": "Alice",
    "age": 25,
    "city": "New York"
}
\`\`\`

## Control Flow
\`\`\`python
# If statements
if age >= 18:
    print("Adult")
else:
    print("Minor")

# Loops
for i in range(5):
    print(i)

while count > 0:
    print(count)
    count -= 1
\`\`\`
            `
          }
        ]
      }
    ]
  }
];

export default function Tutorials() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);

  return (
    <div id="tutorials" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Programming Tutorials</h2>
        
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-3">
            {tutorials.map((section, index) => (
              <div key={index} className="mb-8">
                <div className="flex items-center space-x-2 mb-4">
                  {section.icon}
                  <h3 className="text-xl font-semibold">{section.category}</h3>
                </div>
                
                <div className="space-y-4">
                  {section.courses.map((course, courseIndex) => (
                    <div
                      key={courseIndex}
                      className={`p-4 rounded-lg cursor-pointer transition ${
                        selectedCourse === course
                          ? 'bg-blue-500 text-white'
                          : 'bg-white hover:bg-gray-100'
                      }`}
                      onClick={() => {
                        setSelectedCourse(course);
                        setSelectedLesson(course.lessons[0]);
                      }}
                    >
                      <h4 className="font-semibold mb-2">{course.title}</h4>
                      <div className="flex items-center justify-between text-sm">
                        <span className={`px-2 py-1 rounded ${
                          selectedCourse === course
                            ? 'bg-blue-600'
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {course.level}
                        </span>
                        <span>{course.lessons.length} lessons</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="md:col-span-9">
            {selectedCourse && selectedLesson ? (
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold">{selectedLesson.title}</h3>
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-2 text-blue-500 hover:text-blue-600">
                      <Book className="w-5 h-5" />
                      <span>Resources</span>
                    </button>
                    <button className="flex items-center space-x-2 text-green-500 hover:text-green-600">
                      <PlayCircle className="w-5 h-5" />
                      <span>Practice</span>
                    </button>
                  </div>
                </div>
                
                <div className="prose max-w-none">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {selectedLesson.content}
                  </ReactMarkdown>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Select a Course</h3>
                <p className="text-gray-600">Choose a course from the left to start learning</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}