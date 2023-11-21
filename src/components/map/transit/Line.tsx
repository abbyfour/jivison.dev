import { FunctionComponent, PropsWithChildren } from "react";
import { Layer } from "../../../map/layers";
import { MapElement, MapElementProps } from "../MapElement";

type Props = PropsWithChildren<
  {
    src: string;
    name: string;
  } & MapElementProps
>;

export const Line: FunctionComponent<Props> = ({
  children,
  src,
  name,
  ...rest
}) => {
  return (
    <MapElement className="Line" {...rest} layer={Layer.Lines}>
      <img src={src} alt={name} className="Line-img" />

      {children}
    </MapElement>
  );
};
