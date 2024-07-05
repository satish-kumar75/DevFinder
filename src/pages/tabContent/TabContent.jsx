/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import followerimg from "../../assets/follower-img.png";
import "./style.css";
import FollowerCard from "./FollowerCard";
import RepoCard from "./RepoCard";

const TabContent = ({
  repos = [],
  loadingRepos,
  errorRepos,
  followers = [],
  loadingFollowers,
  errorFollowers,
  following = [],
  loadingFollowing,
  errorFollowing,
  setUsername,
}) => {
  const [activeTab, setActiveTab] = useState("tab-1");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <section className="tab-container">
      <TabList
        activeTab={activeTab}
        onTabClick={handleTabClick}
        reposCount={repos?.length || 0}
        forkedCount={repos?.filter((repo) => repo.fork).length || 0}
        followersCount={followers?.length || 0}
        followingCount={following?.length || 0}
      />
      <TabPanel
        id="panel-1"
        label={`Repositories (${repos?.length || 0})`}
        hidden={activeTab !== "tab-1"}
      >
        {loadingRepos ? (
          renderSkeletons(6, RepoSkeleton)
        ) : errorRepos ? (
          <ErrorContent message="Doesn't have any public repositories yet." />
        ) : repos?.length > 0 ? (
          repos.map((repo) => (
            <RepoCard
              key={repo.id}
              title={repo.name}
              description={repo.description}
              url={repo.html_url}
              cloneUrl={repo.clone_url}
              language={repo.language}
              stars={repo.stargazers_count}
              forks={repo.forks_count}
            />
          ))
        ) : (
          <ErrorContent message="Doesn't have any public repositories yet." />
        )}
      </TabPanel>

      <TabPanel
        id="panel-2"
        label={`Forked repositories (${
          repos?.filter((repo) => repo.fork).length || 0
        })`}
        hidden={activeTab !== "tab-2"}
      >
        {loadingRepos ? (
          renderSkeletons(6, RepoSkeleton)
        ) : errorRepos ? (
          <ErrorContent message="Doesn't have any forked repositories yet." />
        ) : repos?.filter((repo) => repo.fork)?.length > 0 ? (
          repos
            ?.filter((repo) => repo.fork)
            .map((repo) => (
              <RepoCard
                key={repo.id}
                title={repo.name}
                description={repo.description}
                url={repo.html_url}
                cloneUrl={repo.clone_url}
                language={repo.language}
                stars={repo.stargazers_count}
                forks={repo.forks_count}
              />
            ))
        ) : (
          <ErrorContent message="Doesn't have any forked repositories yet." />
        )}
      </TabPanel>

      <TabPanel
        id="panel-3"
        label={`Followers (${followers?.length || 0})`}
        hidden={activeTab !== "tab-3"}
      >
        {loadingFollowers ? (
          renderSkeletons(10, FollowerSkeleton)
        ) : errorFollowers ? (
          <ErrorContent message="Doesn't have any followers yet." />
        ) : followers?.length > 0 ? (
          followers.map((follower) => (
            <FollowerCard
              key={follower.id}
              imgSrc={follower.avatar_url}
              username={follower.login}
              setUsername={setUsername}
            />
          ))
        ) : (
          <ErrorContent message="Doesn't have any followers yet." />
        )}
      </TabPanel>

      <TabPanel
        id="panel-4"
        label={`Following (${following?.length || 0})`}
        hidden={activeTab !== "tab-4"}
      >
        {loadingFollowing ? (
          renderSkeletons(10, FollowerSkeleton)
        ) : errorFollowing ? (
          <ErrorContent message="Doesn't have any followings yet." />
        ) : following?.length > 0 ? (
          following.map((follow) => (
            <FollowerCard
              key={follow.id}
              imgSrc={follow.avatar_url}
              username={follow.login}
              setUsername={setUsername}
            />
          ))
        ) : (
          <ErrorContent message="Doesn't have any followings yet." />
        )}
      </TabPanel>
    </section>
  );
};

const TabButton = ({
  id,
  isSelected,
  label,
  tabIndex,
  ariaControls,
  dataAttributes,
  onClick,
}) => (
  <button
    className="tab-btn"
    aria-selected={isSelected}
    role="tab"
    id={id}
    tabIndex={tabIndex}
    aria-controls={ariaControls}
    {...dataAttributes}
    onClick={onClick}
  >
    {label}
  </button>
);

const TabList = ({
  activeTab,
  onTabClick,
  reposCount,
  forkedCount,
  followersCount,
  followingCount,
}) => {
  return (
    <div className="tab-list" aria-label="Tab navigation" role="tablist">
      <TabButton
        id="tab-1"
        isSelected={activeTab === "tab-1"}
        label={`Repositories (${reposCount})`}
        tabIndex="0"
        ariaControls="panel-1"
        dataAttributes={{ "data-tab-btn": true }}
        onClick={() => onTabClick("tab-1")}
      />
      <TabButton
        id="tab-2"
        isSelected={activeTab === "tab-2"}
        label={`Forked (${forkedCount})`}
        tabIndex="-1"
        ariaControls="panel-2"
        dataAttributes={{ "data-tab-btn": true, "data-forked-tab-btn": true }}
        onClick={() => onTabClick("tab-2")}
      />
      <TabButton
        id="tab-3"
        isSelected={activeTab === "tab-3"}
        label={`Followers (${followersCount})`}
        tabIndex="-1"
        ariaControls="panel-3"
        dataAttributes={{ "data-tab-btn": true, "data-follower-tab-btn": true }}
        onClick={() => onTabClick("tab-3")}
      />
      <TabButton
        id="tab-4"
        isSelected={activeTab === "tab-4"}
        label={`Following (${followingCount})`}
        tabIndex="-1"
        ariaControls="panel-4"
        dataAttributes={{
          "data-tab-btn": true,
          "data-following-tab-btn": true,
        }}
        onClick={() => onTabClick("tab-4")}
      />
    </div>
  );
};

const TabPanel = ({ id, label, children, hidden }) => (
  <div
    className="tab-panel"
    role="tabpanel"
    id={id}
    aria-labelledby={label}
    tabIndex="0"
    data-tab-panel
    hidden={hidden}
  >
    <h2 className="sr-only">{label}</h2>
    {children}
  </div>
);

const ErrorContent = ({ message }) => (
  <div className="error-content">
    <p className="title-1">Oops! :(</p>
    <p className="text">{message}</p>
  </div>
);

const RepoSkeleton = () => (
  <div className="card repo-skeleton">
    <div className="card-body">
      <div className="skeleton title-skeleton"></div>
      <div className="skeleton text-skeleton text-1"></div>
      <div className="skeleton text-skeleton text-2"></div>
    </div>
    <div className="card-footer">
      <div className="skeleton text-skeleton"></div>
      <div className="skeleton text-skeleton"></div>
      <div className="skeleton text-skeleton"></div>
    </div>
  </div>
);

const FollowerSkeleton = () => (
  <div className="card follower-skeleton">
    <div className="skeleton avatar-skeleton"></div>
    <div className="skeleton title-skeleton"></div>
  </div>
);

const renderSkeletons = (count, SkeletonComponent) => {
  return Array.from({ length: count }).map((_, index) => (
    <SkeletonComponent key={index} />
  ));
};

export default TabContent;
