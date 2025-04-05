import React from "react";
import Link from "next/link";

const ResumeFeatures: React.FC = () => {
  const resumeFeatures = [
    {
      icon: "📄",
      title: "Resume Builder",
      description: "Create your best resume yet. Get hired."
    },
    {
      icon: "🤖",
      title: "AI Resume Writer",
      description: "Let AI write your resume."
    },
    {
      icon: "✓",
      title: "Resume Checker",
      description: "Get instant feedback for your resume."
    },
    {
      icon: "🎨",
      title: "Resume Templates",
      description: "Designed by typographers, approved by recruiters."
    }
  ];

  return (
    <div>
      <h3 className="font-semibold text-gray-900 mb-4 text-base">Resume Features</h3>
      <ul className="space-y-5">
        {resumeFeatures.map((item, index) => (
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

export default ResumeFeatures;
