import { FunctionComponent } from "react";
import { Project, ProjectProps } from "./Project";

export const SmallProject: FunctionComponent<
  ProjectProps & { align: "left" | "right" | "center" }
> = ({ align, ...props }) => {
  return <Project className={`small ${align}`} {...props} />;
};
