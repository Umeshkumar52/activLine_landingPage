import "../styles/LoadingScreen.css";

const LoadingScreen = ({ visible }) => {
  return (
    <div
      id="site-preloader"
      className={visible ? "preloader-visible" : "preloader-hidden"}
    >
      <div className="preloader-content">
        <img src="/preloader1.gif" className="size-24" alt="Loading..." />
      </div>
    </div>
  );
};

export default LoadingScreen;
