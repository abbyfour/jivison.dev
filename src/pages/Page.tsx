import {
  FunctionComponent,
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { Map } from "../components/map/Map";
import { PageRef } from "../structures/PageRef";
import "./Page.scss";

export type OnHeightChange = (height?: string) => void;
type GenericOverlay = ({
  onHeightChange,
  page,
}: {
  onHeightChange: OnHeightChange;
  page?: PageRef;
}) => ReactNode;

export interface PageProps {
  title: string;
  map: ReactElement<typeof Map>;
  overlay: GenericOverlay;
}

export const Page: FunctionComponent<
  PageProps & React.HTMLAttributes<HTMLDivElement>
> = ({ className, title, map, overlay, ...rest }) => {
  const page = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    document.title = `jivison.dev | ${title}`;

    return () => {};
  }, [title]);

  return (
    <div
      className={`Page ${className ?? ""}`}
      {...rest}
      style={{ height: contentHeight }}
      ref={page}
    >
      {map}

      {overlay({
        onHeightChange: setContentHeight,
        page: page.current ? new PageRef(page.current) : undefined,
      })}
    </div>
  );
};
