import React from 'react';

const courses = [
  {
    title: "Python for Beginners",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=800&q=80",
    level: "Beginner",
    lessons: 42,
    students: "12.5K"
  },
  {
    title: "JavaScript Fundamentals",
    image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&w=800&q=80",
    level: "Beginner",
    lessons: 38,
    students: "10.2K"
  },
  {
    title: "Data Structures & Algorithms",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=800&q=80",
    level: "Intermediate",
    lessons: 56,
    students: "8.7K"
  }
];

export default function PopularCourses() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Popular Courses</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <span>{course.level}</span>
                  <span>{course.lessons} Lessons</span>
                  <span>{course.students} Students</span>
                </div>
                <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
                  Start Learning
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}