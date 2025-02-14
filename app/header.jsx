import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { LogoutBtn } from "../components/Clients";

const Header = () => {
  const router = useRouter();

  const navigateTo = (path) => {
    router.push(path);
  };

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => navigateTo("/")}>
        <h2>Task Management</h2>
      </div>
      <ul className="nav-links">
        <li><button className="nav-button" onClick={() => navigateTo("/")}>Home</button></li>
        <li><button className="nav-button" onClick={() => navigateTo("/profile")}>Profile</button></li>
        <li><LogoutBtn /></li>
      </ul>
    </nav>
  );
};

export default Header;
