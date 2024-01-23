import { FunctionComponent } from "react";
import "./CodingProject.scss";
import { Link, Links } from "./Links";

export interface CodingProjectProps {
  title: string;
  links: Link[];
  startYear?: number;
  endYear?: number;
}

export const CodingProject: FunctionComponent<
  CodingProjectProps & React.HTMLAttributes<HTMLDivElement>
> = ({ className, title, links, startYear, endYear, children, ...rest }) => {
  return (
    <div className={`CodingProject ${className}`} {...rest}>
      <div className="heading">
        <div className="title">
          <h4>{title}</h4>
          <small className="date">{displayYear(startYear, endYear)}</small>
        </div>
        <Links links={links} />
      </div>

      {children}
    </div>
  );
};

function displayYear(
  start: number | undefined,
  end: number | undefined
): string {
  if (start) {
    return `${start} - ${end ?? ""}`;
  } else if (end) {
    return `${end}`;
  } else return "";
}
