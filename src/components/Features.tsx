import React from 'react';
import { CheckCircle } from 'lucide-react';

const features = [
  "Interactive code editor with syntax highlighting",
  "Real-time code compilation and execution",
  "40+ programming languages supported",
  "Detailed explanations and examples",
  "Progress tracking and achievements",
  "Community support and discussion forums",
  "Downloadable course materials",
  "Mobile-friendly learning experience",
  "Regular coding challenges and hackathons",
  "Dedicated mentorship program",
  "Collaborative project opportunities",
  "Industry-relevant learning paths"
];

export default function Features() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Space-Ex?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We believe in fostering a collaborative environment where members can learn, grow, and create together. Our emphasis on hands-on learning and practical application sets us apart.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-2 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}