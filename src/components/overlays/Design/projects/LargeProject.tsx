import { FunctionComponent } from "react";
import { Project, ProjectProps } from "./Project";

export const LargeProject: FunctionComponent<ProjectProps> = ({ ...props }) => {
  return <Project className="large" {...props} />;
};
