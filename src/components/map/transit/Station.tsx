import { FunctionComponent, PropsWithChildren } from "react";
import { Layer } from "../../../map/layers";
import { MapElement, MapElementProps } from "../MapElement";

type Props = PropsWithChildren<
  {
    src: string;
    name: string;
    orientation?: number;
  } & MapElementProps
>;

export const Station: FunctionComponent<Props> = ({
  children,
  src,
  name,
  orientation = 0,
  ...rest
}) => {
  return (
    <MapElement
      className="Station"
      style={{ transform: `rotate(${orientation}deg)` }}
      layer={Layer.Stations}
      {...rest}
    >
      <img src={src} alt={name} className="Station-img" />

      {children}
    </MapElement>
  );
};
