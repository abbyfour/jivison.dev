import { FunctionComponent } from "react";
import { Project, ProjectProps } from "./Project";

export const SmallProject: FunctionComponent<
  ProjectProps & { align: "left" | "right" }
> = ({ align, ...props }) => {
  return <Project className={`small ${align}`} {...props} />;
};
