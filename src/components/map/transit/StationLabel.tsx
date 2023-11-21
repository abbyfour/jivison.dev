import { FunctionComponent, PropsWithChildren, useState } from "react";
import { Line, getLinearGradient } from "../../../map/classes/Line";
import { Layer } from "../../../map/layers";
import { MapElement, MapElementProps } from "../MapElement";
import "./StationLabel.scss";

type Props = PropsWithChildren<
  {
    label: string | string[];
    align?: "center" | "left" | "right";
    interchange?: boolean;
    linkTo?: string;
    servedLines: Line[];
  } & MapElementProps
>;

export const StationLabel: FunctionComponent<Props> = ({
  children,
  label,
  align = "center",
  interchange = false,
  linkTo,
  servedLines,
  ...rest
}) => {
  const [hover, setHover] = useState(false);

  return (
    <MapElement
      className="StationLabel"
      id={`station-${label}`}
      style={{
        fontWeight: interchange ? "bold" : "initial",
        textAlign: align,
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      layer={Layer.StationLabels}
      {...rest}
    >
      {linkTo ? (
        <a href={linkTo}>{getString(label)}</a>
      ) : (
        <p>{getString(label)}</p>
      )}
      <div
        className="hover-underline"
        style={{
          display: hover ? "initial" : "none",
          background: getLinearGradient(servedLines),
          zIndex: Layer.StationLabelUnderlines,
        }}
      />
    </MapElement>
  );
};

function getString(string: string | string[]): React.ReactNode {
  return typeof string === "string" ? (
    string
  ) : (
    <>
      {string.map((s) => (
        <>
          {s}
          <br />
        </>
      ))}
    </>
  );
}
