import { FunctionComponent, ReactNode } from "react";
import { projectImageURL } from "../../../../helpers/images";
import { PageRef } from "../../../../structures/PageRef";
import { ImageView } from "../../../ImageView/ImageView";
import "./projects.scss";

export interface ProjectProps {
  slug: string;
  title: string;
  subtitle: string;
  year: number | string;
  description?: ReactNode;
  imgSrc: string;
  thumbnailImgSrc?: string;
  imgAlt: string;
  page: PageRef | undefined;
}

export const Project: FunctionComponent<
  ProjectProps & React.HTMLAttributes<HTMLDivElement>
> = ({
  slug,
  title,
  subtitle,
  year,
  description,
  imgSrc,
  thumbnailImgSrc,
  imgAlt,
  className,
  page,
  ...rest
}) => {
  return (
    <div className={`Project ${className}`} id={slug} {...rest}>
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

      <ImageView
        className="previewImage"
        description={description}
        src={projectImageURL(imgSrc)}
        thumnailSrc={projectImageURL(thumbnailImgSrc ?? imgSrc)}
        alt={imgAlt}
        page={page}
        originPath="/design"
      />
    </div>
  );
};
