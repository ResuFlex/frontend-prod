import React from "react";
import FeatureToolsColumn from "./dropdown/FeatureToolsColumn";
import AIToolsColumn from "./dropdown/AIToolsColumn";
import ResumeExamplesColumn from "./dropdown/ResumeExamplesColumn";
import GuidesColumn from "./dropdown/GuidesColumn";

const MegaDropdown: React.FC = () => {
  return (
    <div className="fixed left-1/2 transform -translate-x-1/2 mt-2 w-full max-w-5xl bg-white shadow-lg rounded-md p-8 grid grid-cols-3 gap-8 border border-border-500">
      <FeatureToolsColumn />
      <div className="border-l border-border-500 pl-8">
        <AIToolsColumn />
      </div>
      <div className="border-l border-border-500 pl-8">
        <ResumeExamplesColumn viewAllLink="#" />
      </div>
    </div>
  );
};

export default MegaDropdown;
