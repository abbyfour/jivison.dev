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

export const StationMarker: FunctionComponent<Props> = ({
  children,
  src,
  name,
  orientation = 0,
  ...rest
}) => {
  return (
    <MapElement className="StationMarker" layer={Layer.Stations} {...rest}>
      <img
        style={{ transform: `rotate(${orientation}deg)` }}
        src={src}
        alt={name}
        className="Station-img"
        {...{ fetchpriority: "high" }}
      />

      {children}
    </MapElement>
  );
};
