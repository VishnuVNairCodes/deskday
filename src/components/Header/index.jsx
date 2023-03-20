import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <button className="btn-icon btn-header-back">
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      <h1 className="header-heading">Settings</h1>
    </header>
  );
};

export { Header };
