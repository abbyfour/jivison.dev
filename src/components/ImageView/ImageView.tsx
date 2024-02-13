import React, {
  FunctionComponent,
  PropsWithChildren,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PageRef } from "../../structures/PageRef";
import "./ImageView.scss";

export type ImageViewProps = PropsWithChildren<
  {
    src: string;
    thumnailSrc?: string;
    alt: string;
    description: ReactNode;
    page?: PageRef;
    originPath: string;
  } & React.HTMLAttributes<HTMLDivElement>
>;

export const ImageView: FunctionComponent<ImageViewProps> = ({
  className,
  style,
  src,
  thumnailSrc,
  alt,
  description,
  page,
  originPath,
  ...rest
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const openImageInNewTab = useCallback(() => {
    window.open(src, "_blank")?.focus();
  }, [src]);

  const enterFullscreen = useCallback(() => {
    setIsFullscreen(true);
    page?.freezeAtCurrentPosition();
    navigate(originPath + "/image");
  }, [page, navigate, originPath]);

  const exitFullscreen = useCallback(() => {
    setIsFullscreen(false);
    page?.unfreeze();
    navigate(originPath);
  }, [page, navigate, originPath]);

  const onKeypress = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        exitFullscreen();
      }
    },
    [exitFullscreen]
  );

  useEffect(() => {
    document.addEventListener("keyup", onKeypress);

    return () => {
      document.removeEventListener("keyup", onKeypress);
    };
  }, [onKeypress, exitFullscreen]);

  useEffect(() => {
    if (!location.pathname.endsWith("/image") && isFullscreen) {
      exitFullscreen();
    }

    return () => {};
  }, [location, exitFullscreen, isFullscreen]);

  return (
    <div className="ImageView" {...rest}>
      <img
        className="main-img"
        loading="lazy"
        onClick={enterFullscreen}
        src={thumnailSrc || src}
        alt={alt}
        {...{ fetchpriority: "low" }}
      />

      {isFullscreen ? (
        <div className="fullscreenImage">
          <button className="image-escape" onClick={exitFullscreen}>
            ×
          </button>

          <img src={src} alt={alt} onClick={openImageInNewTab} />
          <div className="image-description">{description}</div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
