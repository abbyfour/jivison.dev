import { FunctionComponent, PropsWithChildren } from "react";
import { Layer } from "../../map/layers";
import { MapElement, MapElementProps } from "./MapElement";

export enum MapFeatureType {
  Waterbody = "Waterbody",
}

type Props = PropsWithChildren<
  {
    src: string;
    name: string;
    type: MapFeatureType;
  } & Omit<MapElementProps, "layer">
>;

export const OtherMapFeature: FunctionComponent<Props> = ({
  children,
  src,
  name,
  type,
  ...rest
}) => {
  return (
    <MapElement
      className={type}
      {...rest}
      layer={type === MapFeatureType.Waterbody ? Layer.Waterbodies : undefined}
    >
      <img src={src} alt={name} className={`${type}-img`} />

      {children}
    </MapElement>
  );
};
