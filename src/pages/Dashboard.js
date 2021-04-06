import React, { useContext } from "react";
import { Info, Repos, User, Search, Navbar } from "../components";
import { GithubContext } from "../context/context";
import { BounceLoader } from "react-spinners";

const Dashboard = () => {
  const { isLoading } = useContext(GithubContext);

  if (isLoading) {
    return (
      <main>
        <Navbar />
        <Search />
        <div className="loading-img">
          <BounceLoader loading color={"#2caeba"} size={150} />
        </div>
      </main>
    );
  }

  return (
    <main>
      <Navbar />
      <Search />
      <Info />
      <User />
      <Repos />
    </main>
  );
};

export default Dashboard;
