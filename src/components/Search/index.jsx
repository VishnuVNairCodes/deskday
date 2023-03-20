import "./Search.css";

const Search = () => {
  return (
    <div className="search-container">
      <i className="fa-solid fa-magnifying-glass search-icon"></i>
      <input type="text" placeholder="Search" className="search-input" />
    </div>
  );
};

export { Search };
