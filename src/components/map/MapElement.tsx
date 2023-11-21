import React, {
  FunctionComponent,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import { Layer } from "../../map/layers";
import "./MapElement.scss";

export const MapDirection = {
  Up: -1,
  Down: 1,
  Left: 1,
  Right: -1,
} as const;
export type MapDirectionEnum = (typeof MapDirection)[keyof typeof MapDirection];

type RawMapPosition = {
  x: number;
  y: number;
};

export type MapPosition =
  | RawMapPosition
  | ((quadrantSizes: { width: number; height: number }) => RawMapPosition);

export interface MapElementProps {
  position: MapPosition;
  layer?: Layer;
}

type Props = PropsWithChildren<
  React.HTMLAttributes<HTMLDivElement> & MapElementProps
>;

export const MapElement: FunctionComponent<Props> = ({
  children,
  position,
  className,
  style,
  layer = Layer.Default,
  ...rest
}) => {
  const [htmlPosition, setHtmlPosition] = useState(
    calculateTopAndLeft(position)
  );

  useEffect(() => {
    const listener = () => {
      setHtmlPosition(calculateTopAndLeft(position));
    };

    window.addEventListener("resize", listener);

    return () => {
      window.removeEventListener("resize", listener);
    };
  }, [position]);

  return (
    <div
      className={`MapElement ${className}`}
      style={{
        ...htmlPosition,
        position: "absolute",
        zIndex: layer,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

function calculateTopAndLeft(position: MapPosition): {
  top: number;
  left: number;
} {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  const coordinates = getMapPositionAsCoords(position);

  return { top: centerY - coordinates.y, left: centerX + coordinates.x };
}

function getMapPositionAsCoords(position: MapPosition): RawMapPosition {
  if (typeof position === "function") {
    return position({
      width: window.innerWidth / 2,
      height: window.innerHeight / 2,
    });
  }

  return position;
}

export function equallySpace(
  direction: MapDirectionEnum,
  quadrantWidth: number,
  ratio: number,
  start: number = 0
) {
  return direction * start - (quadrantWidth + direction * start) / ratio;
}
