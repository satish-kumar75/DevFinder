/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./style.css";
import Profile from "../profile/Profile";
import TabContent from "../tabContent/TabContent";
import useFetchGitHubData from "../../hook/useFetchGitHubData";

const Home = ({ username, setUsername }) => {
  const {
    data: userData,
    loading: loadingUser,
    error: errorUser,
  } = useFetchGitHubData(username);
  const {
    data: repos,
    loading: loadingRepos,
    error: errorRepos,
  } = useFetchGitHubData(`${username}/repos`);
  const {
    data: followers,
    loading: loadingFollowers,
    error: errorFollowers,
  } = useFetchGitHubData(`${username}/followers`);
  const {
    data: following,
    loading: loadingFollowing,
    error: errorFollowing,
  } = useFetchGitHubData(`${username}/following`);

  return (
    <main className="main" id="main">
      <div className="container">
        {!errorUser ? (
          <>
            <Profile
              userData={userData}
              loading={loadingUser}
              error={errorUser}
            />
            <TabContent
              repos={repos}
              loadingRepos={loadingRepos}
              errorRepos={errorRepos}
              followers={followers}
              loadingFollowers={loadingFollowers}
              errorFollowers={errorFollowers}
              following={following}
              loadingFollowing={loadingFollowing}
              errorFollowing={errorFollowing}
              setUsername={setUsername}
            />
          </>
        ) : (
          <section className="error" data-error>
            <p className="title-1">Oops! :(</p>
            <p className="text">There is no account with this username yet.</p>
          </section>
        )}
      </div>
    </main>
  );
};

export default Home;
