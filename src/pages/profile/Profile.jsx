/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./style.css";

const formatNumber = (number) => {
  if (number === undefined || number === null) {
    return "0";
  }
  if (number >= 1000 && number < 1000000) {
    return (number / 1000).toFixed(1) + "k";
  } else if (number >= 1000000) {
    return (number / 1000000).toFixed(1) + "m";
  } else {
    return number.toString();
  }
};

const Profile = ({ userData, loading }) => {
  if (loading) {
    return (
      <section className="profile" data-profile-card>
        <div className="profile-skeleton">
          <div className="skeleton avatar-skeleton"></div>
          <div className="skeleton title-skeleton"></div>
          <div className="skeleton text-skeleton text-1"></div>
          <div className="skeleton text-skeleton text-2"></div>
          <div className="skeleton text-skeleton text-3"></div>
        </div>
      </section>
    );
  }

  if (!userData) {
    return null;
  }

  return (
    <section className="profile" data-profile-card>
      <figure
        className="avatar-circle img-holder"
        style={{ "--height": 280, "--width": 280 }}
      >
        <img
          src={userData.avatar_url}
          width={280}
          height={280}
          alt={userData.login}
          className="img-cover"
        />
      </figure>

      <h1 className="title-2">{userData.name || "No Name Provided"}</h1>
      <p className="username text-primary">{userData.login}</p>
      <p className="bio">{userData.bio || "No bio available."}</p>
      <a
        href={userData.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-secondary"
      >
        <span className="material-symbols-rounded" aria-hidden="true">
          open_in_new
        </span>
        <span className="span">See on Github</span>
      </a>
      <ul className="profile-meta">
        {userData.company && (
          <li className="meta-item">
            <span className="material-symbols-rounded" aria-hidden="true">
              apartment
            </span>
            <span className="meta-text">{userData.company}</span>
          </li>
        )}
        {userData.location && (
          <li className="meta-item">
            <span className="material-symbols-rounded" aria-hidden="true">
              location_on
            </span>
            <span className="meta-text">{userData.location}</span>
          </li>
        )}
        {userData.blog && (
          <li className="meta-item">
            <span className="material-symbols-rounded" aria-hidden="true">
              captive_portal
            </span>
            <a
              href={userData.blog}
              target="_blank"
              rel="noopener noreferrer"
              className="meta-text"
            >
              {userData.blog}
            </a>
          </li>
        )}
        {userData.twitter_username && (
          <li className="meta-item">
            <span className="icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.9441 7.92638C19.9568 8.10403 19.9568 8.28173 19.9568 8.45938C19.9568 13.8781 15.8325 20.1218 8.29441 20.1218C5.97207 20.1218 3.81473 19.4492 2 18.2817C2.32996 18.3198 2.64719 18.3325 2.98984 18.3325C4.90605 18.3325 6.67004 17.6853 8.07867 16.5812C6.27664 16.5431 4.76648 15.3629 4.24617 13.7386C4.5 13.7766 4.75379 13.802 5.02031 13.802C5.38832 13.802 5.75637 13.7512 6.09898 13.6624C4.22082 13.2817 2.81215 11.632 2.81215 9.63958V9.58884C3.35781 9.89341 3.99238 10.0838 4.66492 10.1091C3.56086 9.37306 2.83754 8.11673 2.83754 6.6954C2.83754 5.93399 3.04055 5.23603 3.3959 4.62688C5.41367 7.11419 8.44668 8.73853 11.8477 8.91622C11.7842 8.61165 11.7461 8.29442 11.7461 7.97716C11.7461 5.71825 13.5736 3.87817 15.8451 3.87817C17.0253 3.87817 18.0913 4.3731 18.84 5.17259C19.7664 4.99493 20.6547 4.65228 21.4416 4.18274C21.137 5.13454 20.4898 5.93403 19.6395 6.44161C20.4644 6.35282 21.2639 6.12435 21.9999 5.80712C21.4416 6.61927 20.7436 7.34259 19.9441 7.92638Z"
                  fill="var(--on-background)"
                ></path>
              </svg>
            </span>
            <a
              href={`https://twitter.com/${userData.twitter_username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="meta-text"
            >
              @{userData.twitter_username}
            </a>
          </li>
        )}
      </ul>

      <ul className="profile-stats">
        <li className="stats-item">
          <span className="body">{formatNumber(userData.public_repos)}</span>{" "}
          Repos
        </li>
        <li className="stats-item">
          <span className="body">{formatNumber(userData.followers)}</span>{" "}
          Followers
        </li>
        <li className="stats-item">
          <span className="body">{formatNumber(userData.following)}</span>{" "}
          Following
        </li>
      </ul>

      <div className="footer">
        <p className="copyright">&copy; 2024 {userData.login}</p>
      </div>
    </section>
  );
};

export default Profile;
