import headerIcon from "../assets/check-dark.svg";

import "./Header.css";

export const Header = () => {
  return (
    <header>
      <img src={headerIcon} alt="ToDoToday icon" className="header-icon" />
      <h1 className="header-text">ToDoToday</h1>
    </header>
  );
};
