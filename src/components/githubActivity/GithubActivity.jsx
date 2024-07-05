import React from "react";
import "./GithubActivity.css"; // Ensure correct path to CSS file
import GitHubCalendar from "react-github-calendar";
import { Tooltip as ReactTooltip } from "react-tooltip";

const GithubActivity = ({ username }) => {
  const colorTheme = {
    dark: ["#1a243d67", "#0d4f9b", "#085bc5", "#0077ff", "#068bff"],
  };

  return (
    <div className="gitContainer">
      <GitHubCalendar
        username={username}
        blockSize={15}
        blockMargin={5}
        theme={colorTheme}
        fontSize={16}
        tooltips={true}
      >
        <ReactTooltip
          delayShow={50}
          html
          backgroundColor="#000"
          textColor="#fff"
        />
      </GitHubCalendar>
    </div>
  );
};

export default GithubActivity;
