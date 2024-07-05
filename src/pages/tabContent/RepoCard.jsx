/* eslint-disable react/prop-types */
import React from "react";
import toast from "react-hot-toast";

const RepoCard = ({
  title,
  description,
  url,
  cloneUrl,
  language,
  stars,
  forks,
}) => {
  const handleCloneClick = () => {
    navigator.clipboard
      .writeText(cloneUrl)
      .then(() => {
        toast.success("Url copied successfully");
      })
      .catch((err) => {
        toast.error("Error while cpying!");
      });
  };

  return (
    <article className="card repo-card">
      <div className="card-body">
        <a href={url} target="_blank" className="card-title" rel="noreferrer">
          <h3 className="title-3">{title}</h3>
        </a>
        <p className="card-text">{description}</p>
        <span className="badge">Public</span>
        <button className="badge-clone" onClick={handleCloneClick}>
          Clone
        </button>
      </div>
      <div className="card-footer">
        <div className="meta-item">
          <span className="material-symbols-rounded" aria-hidden="true">
            code_blocks
          </span>
          <span className="span">{language}</span>
        </div>
        <div className="meta-item">
          <span className="material-symbols-rounded" aria-hidden="true">
            star_rate
          </span>
          <span className="span">{stars}</span>
        </div>
        <div className="meta-item">
          <span className="material-symbols-rounded" aria-hidden="true">
            family_history
          </span>
          <span className="span">{forks}</span>
        </div>
      </div>
    </article>
  );
};

export default RepoCard;
