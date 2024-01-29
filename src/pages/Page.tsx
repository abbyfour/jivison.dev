import { FunctionComponent, useEffect } from "react";
import "./Page.scss";

export interface PageProps {
  title: string;
}

export const Page: FunctionComponent<
  PageProps & React.HTMLAttributes<HTMLDivElement>
> = ({ className, title, children, ...rest }) => {
  useEffect(() => {
    document.title = `jivison.dev | ${title}`;

    return () => {};
  }, [title]);

  return (
    <div className={`Page ${className ?? ""}`} {...rest}>
      {children}
    </div>
  );
};
