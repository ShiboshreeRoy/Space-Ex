import React from 'react';
import { Code, Database, Globe, ShoppingCart, Users, MessageSquare } from 'lucide-react';

const projects = [
  {
    title: "E-commerce Platform",
    icon: <ShoppingCart className="w-6 h-6 text-purple-500" />,
    description: "Build a full-featured online store with shopping cart, payment processing, and inventory management.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    difficulty: "Advanced",
    duration: "4-6 weeks"
  },
  {
    title: "Social Media Dashboard",
    icon: <Users className="w-6 h-6 text-blue-500" />,
    description: "Create a responsive dashboard for social media analytics and user engagement tracking.",
    technologies: ["Vue.js", "Express", "PostgreSQL", "Chart.js"],
    difficulty: "Intermediate",
    duration: "3-4 weeks"
  },
  {
    title: "Real-time Chat Application",
    icon: <MessageSquare className="w-6 h-6 text-green-500" />,
    description: "Develop a chat application with real-time messaging, user presence, and file sharing.",
    technologies: ["React", "Socket.io", "Redis", "AWS S3"],
    difficulty: "Intermediate",
    duration: "2-3 weeks"
  }
];

export default function RealWorldProjects() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Real-World Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Apply your programming skills to build production-ready applications. Each project includes detailed tutorials, 
            code reviews, and best practices from industry experts.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="mb-4">{project.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-500">
                    <Code className="w-4 h-4 mr-2" />
                    <span>Technologies: {project.technologies.join(", ")}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Globe className="w-4 h-4 mr-2" />
                    <span>Difficulty: {project.difficulty}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Database className="w-4 h-4 mr-2" />
                    <span>Duration: {project.duration}</span>
                  </div>
                </div>

                <button className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
                  Start Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}