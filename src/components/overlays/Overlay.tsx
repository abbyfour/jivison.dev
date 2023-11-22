import React, { FunctionComponent, PropsWithChildren } from "react";
import "./Overlay.scss";

type Props = PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>;

export const Overlay: FunctionComponent<Props> = ({
  children,
  className,
  style,
  ...rest
}) => {
  return (
    <div className={`Overlay ${className}`} {...rest}>
      {children}
    </div>
  );
};
