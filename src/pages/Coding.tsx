import yellowLine from "../assets/coding/yellow-line.svg";
import singleYellowLineStation from "../assets/shared/stop-yellow.svg";
import { Map } from "../components/map/Map";
import { MapDirection, equallySpace } from "../components/map/MapElement";
import { Line } from "../components/map/transit/Line";
import { StationLabel } from "../components/map/transit/StationLabel";
import { StationMarker } from "../components/map/transit/StationMarker";
import { CodingOverlay } from "../components/overlays/Coding/CodingOverlay";
import { Lines } from "../map/lines";
import { Page } from "./Page";

export function Coding() {
  const map = (
    <Map>
      {/* Lines */}
      <Line
        src={yellowLine}
        name="yellow line"
        position={{ x: -1140, y: 700 }}
      />

      {/* Stations */}
      <StationMarker
        src={singleYellowLineStation}
        name="home"
        position={({ width: quadrantWidth }) => ({
          x: equallySpace(MapDirection.Right, quadrantWidth, 2, 204),
          y: -219,
        })}
      />

      <StationLabel
        label="Home"
        linkTo="/"
        position={({ width: quadrantWidth }) => ({
          x: equallySpace(MapDirection.Right, quadrantWidth, 2, 172),
          y: -190,
        })}
        servedLines={[Lines.yellow]}
      />
    </Map>
  );

  return <Page title="Coding" map={map} overlay={CodingOverlay}></Page>;
}
