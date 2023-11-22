import { FunctionComponent, ReactNode } from "react";
import "./projects.scss";

export interface ProjectProps {
  title: string;
  subtitle: string;
  year: number;
  description?: ReactNode;
  imgSrc: string;
  imgAlt: string;
}

export const Project: FunctionComponent<
  ProjectProps & React.HTMLAttributes<HTMLDivElement>
> = ({
  title,
  subtitle,
  year,
  description,
  imgSrc,
  imgAlt,
  className,
  ...rest
}) => {
  return (
    <div className={`Project ${className}`} {...rest}>
      <div className="projectContent">
        <div className="heading">
          <h4 className="title">{title}</h4>
          <p className="subtitle">
            <span className="italic">{subtitle}</span>
            <span className="bold"> • {year}</span>
          </p>
        </div>

        <div className="description">{description}</div>
      </div>

      <img className="previewImage" src={imgSrc} alt={imgAlt} />
    </div>
  );
};
