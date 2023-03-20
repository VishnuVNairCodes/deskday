import "./AsideOption.css";

const AsideOption = ({ option }) => {
  return (
    <div className="aside-option-container">
      <p>{option}</p>
      <i className="fa-solid fa-angle-down aside-option-dropdown"></i>
    </div>
  );
};

export { AsideOption };
