import { useAtom } from "jotai";
import React, {
  FunctionComponent,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import { windowHeightAtom, windowWidthAtom } from "../../atoms";
import { Layer } from "../../map/layers";
import "./MapElement.scss";

export enum MapDirection {
  Up = 1,
  Down = -1,
  Left = -1,
  Right = 1,
}

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
  const [windowWidth] = useAtom(windowWidthAtom);
  const [windowHeight] = useAtom(windowHeightAtom);

  const [htmlPosition, setHtmlPosition] = useState(
    calculateTopAndLeft({ height: windowHeight, width: windowWidth }, position)
  );

  useEffect(() => {
    setHtmlPosition(
      calculateTopAndLeft(
        { width: windowWidth, height: windowHeight },
        position
      )
    );

    return () => {};
  }, [windowWidth, windowHeight, position]);

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

function calculateTopAndLeft(
  { width, height }: { height: number; width: number },
  position: MapPosition
): {
  top: number;
  left: number;
} {
  const centerX = width / 2;
  const centerY = height / 2;

  const coordinates = getMapPositionAsCoords({ height, width }, position);

  return { top: centerY - coordinates.y, left: centerX + coordinates.x };
}

function getMapPositionAsCoords(
  { width, height }: { height: number; width: number },
  position: MapPosition
): RawMapPosition {
  if (typeof position === "function") {
    return position({
      width: width / 2,
      height: height / 2,
    });
  }

  return position;
}

export function equallySpace(
  direction: MapDirection,
  quadrantWidth: number,
  ratio: number,
  start: number = 0,
  index: number = 1
) {
  const effectiveWidth = quadrantWidth - Math.abs(start);

  return start + (effectiveWidth / ratio) * direction * index;
}
