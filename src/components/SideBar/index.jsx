import { Search } from "..";
import { AsideLogout } from "..";
import { AsideOption } from "..";
import "./SideBar.css";

const SideBar = () => {
  return (
    <aside className="aside">
      <div className="aside-content">
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
      </div>
      <div className="aside-bg-container">
        <img
          className="aside-img-bg"
          src="https://s3-alpha-sig.figma.com/img/61c7/d3d6/1087045232733f4311f1e26872edf61f?Expires=1680480000&Signature=XNcAKwRrEcPTQbqcZ96BovcBn6tOu969GZVOR~tee9pdZzdDlalBz6hfcoeP5LxYvd5Z2hQDffueKSkIjRH10BzIh0K-F-DL7AgdDhoQrSxxjFLV1alQAXM3FoYjaizKCKu~Ak~0XXRaGYBI2yhJzyDOG0hjpWrN8u02R-9KpqGI4-tP0oo2DsmOxjCdhn7fmMWvMqaEx-XfniXn~6-NuNktTBJ1TWefoywrvrcIVDoPrznAgDSTyciSlGW3eM0NCZcFhu-2aTqfrKntJOr63JwRC6kxPrd-ji9bGYxb8mUURITgsAOvireTnpz3dUpFZEuRxYHY3eIqGNc2gyYHnw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="sidebar background"
        />
      </div>
    </aside>
  );
};

export { SideBar };
