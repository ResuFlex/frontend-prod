import React from "react";
import Link from "next/link";

const AIToolsColumn: React.FC = () => {
  const aiTools = [
    {
      icon: "✓",
      title: "Resume Checker",
      description: "Get instant feedback for your resume."
    },
    {
      icon: "🤖",
      title: "AI Resume Writer",
      description: "Let AI write your resume."
    },
    {
      icon: "📝",
      title: "AI Cover Letter Writer",
      description: "GPT-4 powered cover letter writer."
    },
    {
      icon: "📨",
      title: "AI Resignation Letter Generator",
      description: "AI can help you quit your job too."
    }
  ];

  return (
    <div>
      <h3 className="font-semibold text-gray-900 mb-4 text-base">AI Tools</h3>
      <ul className="space-y-5">
        {aiTools.map((item, index) => (
          <li key={index}>
            <Link href="#" className="flex items-start group">
              <span className="mr-3 text-2xl group-hover:scale-110 transition-transform">{item.icon}</span>
              <div>
                <h4 className="font-medium text-gray-800 group-hover:text-primary-500 transition-colors">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-500 mt-0.5">{item.description}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AIToolsColumn;
