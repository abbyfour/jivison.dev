import { FunctionComponent, PropsWithChildren } from "react";
import "./Map.scss";

export const Map: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <div className="Map">{children}</div>;
};
