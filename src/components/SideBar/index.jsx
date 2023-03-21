import { Search } from "..";
import { AsideLogout } from "..";
import { AsideOption } from "..";
import "./SideBar.css";

const SideBar = () => {
  return (
    <aside className="aside">
      <header className="aside-header">
        <img
          className="aside-logo"
          src="https://s3-alpha-sig.figma.com/img/98c6/d50b/1effdc32c2638fe3c401549dd755d500?Expires=1679875200&Signature=cX89WQNj8wsX6GEevjjwM8rmFM0-KtjbWFRanHruuu7tVzNGe624H482cAUvYaqcqYEXLqH1p96jQoQSpVy3t0EB7av0MMHTCjx5qLUVsNoq2sXvt8S89R6zpDN7M6e659gjHaj3kJ7D1KR62mNKSqMyg54~Xz81Tdsxcee3IstQYUCIaVGuH-dPfH7xISI5e0kkDAoCAO~7sr~LN8HK8E26tafNCVo7twWEjFTDVD9JYA1QW7e5yoOAxjLuVMfNp8mcqpN981BVhBLypYnAZXx40sBYfqc0qEjJqi7K6B~lFKa5uDDA8WLQ5n89aB~7AKxv4N0HUngvbGdR0wN5jQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="logo"
        />
        <button className="btn-icon btn-aside-notification">
          <i className="fa-regular fa-bell"></i>
        </button>
      </header>
      <Search />
      <div className="aside-options-container">
        <h6 className="aside-options-heading">Service Desk</h6>
        <AsideOption option="My Tickets" />
        <div className="aside-option-border"></div>
        <AsideOption option="My Requests" />
      </div>
      <AsideLogout />
    </aside>
  );
};

export { SideBar };
