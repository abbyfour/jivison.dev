import { FunctionComponent } from "react";

export interface Link {
  name: string;
  url: string;
}

export interface LinksProps {
  links: Link[];
}

export const Links: FunctionComponent<
  LinksProps & React.HTMLAttributes<HTMLDivElement>
> = ({ className, links, ...rest }) => {
  return (
    <div className={`Links ${className}`} {...rest}>
      {links.map(({ name, url }, idx) => (
        <>
          <a href={url} target="blank" className="Link">
            {name}
          </a>
          {idx !== links.length - 1 ? (
            <span className="separator">● </span>
          ) : (
            <></>
          )}
        </>
      ))}
    </div>
  );
};
