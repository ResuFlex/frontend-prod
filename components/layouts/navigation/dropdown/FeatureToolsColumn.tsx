import React from "react";
import Link from "next/link";

const FeatureToolsColumn: React.FC = () => {
  const featureTools = [
    {
      icon: "📄",
      title: "Resume Builder",
      description: "Create your best resume yet. Get hired."
    },
    {
      icon: "✉️",
      title: "Cover Letter Builder",
      description: "Attach a matching cover letter."
    },
    {
      icon: "🌐",
      title: "Website Builder",
      description: "Let employers find you online."
    },
    {
      icon: "🗺️",
      title: "Career Map",
      description: "Find your ideal career path based on data."
    }
  ];

  return (
    <div>
      <h3 className="font-semibold text-gray-900 mb-4 text-base">Feature Tools</h3>
      <ul className="space-y-5">
        {featureTools.map((item, index) => (
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

export default FeatureToolsColumn;
