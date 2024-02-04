import React, {
  FunctionComponent,
  PropsWithChildren,
  useEffect,
  useRef,
} from "react";
import { OnHeightChange } from "../../pages/Page";
import { PageRef } from "../../structures/PageRef";
import "./Overlay.scss";

export type GenericOverlayProps = PropsWithChildren<
  {
    onHeightChange: OnHeightChange;
    page?: PageRef;
  } & React.HTMLAttributes<HTMLDivElement>
>;

export const Overlay: FunctionComponent<GenericOverlayProps> = ({
  children,
  className,
  style,
  onHeightChange,
  ...rest
}) => {
  const overlay = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    onHeightChange(overlay.current?.style.height);

    return () => {};
  }, [overlay, onHeightChange]);

  return (
    <div className={`Overlay ${className}`} {...rest} ref={overlay}>
      {children}
    </div>
  );
};
