/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
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
  } = useFetchGitHubData(username ? `${username}/repos` : null);

  const {
    data: followers,
    loading: loadingFollowers,
    error: errorFollowers,
  } = useFetchGitHubData(username ? `${username}/followers` : null);

  const {
    data: following,
    loading: loadingFollowing,
    error: errorFollowing,
  } = useFetchGitHubData(username ? `${username}/following` : null);

  if (!username) {
    return (
      <main className="main" id="main">
        <div className="container">
          <section className="error" data-error>
            <p className="title-1">No Username Provided</p>
            <p className="text">Please enter a username to search.</p>
          </section>
        </div>
      </main>
    );
  }

  return (
    <main className="main" id="main">
      <div className="container">
        {errorUser ? (
          <section className="error" data-error>
            <p className="title-1">Oops! :(</p>
            <p className="text">There is no account with this username yet.</p>
          </section>
        ) : (
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
        )}
      </div>
    </main>
  );
};

export default Home;
