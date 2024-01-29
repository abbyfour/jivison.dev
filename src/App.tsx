import { useAtom } from "jotai";
import { useCallback, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { DesktopRoutes } from "./DesktopRoutes";
import { MobileRoutes } from "./MobileRoutes";
import { windowHeightAtom, windowWidthAtom } from "./atoms";

function App() {
  const [, setWindowWidth] = useAtom(windowWidthAtom);
  const [, setWindowHeight] = useAtom(windowHeightAtom);

  const listener = useCallback(() => {
    if (window.screen.availWidth < 760) {
      setWindowWidth(window.screen.availWidth);
      setWindowHeight(window.screen.availHeight);
    } else {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    }
  }, [setWindowHeight, setWindowWidth]);

  useEffect(() => {
    listener();
  }, [listener]);

  useEffect(() => {
    window.addEventListener("resize", listener);

    return () => {
      window.removeEventListener("resize", listener);
    };
  }, [listener]);

  const isMobile = window.innerWidth <= 760;

  return (
    <div className={isMobile ? "mobile" : ""}>
      <BrowserRouter>
        {!isMobile && <DesktopRoutes />}
        {isMobile && <MobileRoutes />}
      </BrowserRouter>
    </div>
  );
}

export default App;
