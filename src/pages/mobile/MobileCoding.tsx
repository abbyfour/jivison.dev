import { Map } from "../../components/map/Map";
import { Line } from "../../components/map/transit/Line";
import { Station } from "../../components/map/transit/Station";
import { StationLabel } from "../../components/map/transit/StationLabel";
import { CodingOverlay } from "../../components/overlays/Coding/CodingOverlay";
import { Lines } from "../../map/lines";
import { Page } from "../Page";

import yellowLine from "../../assets/coding/mobile/yellow-line.svg";
import yellowLineStop from "../../assets/shared/stop-yellow.svg";

export function MobileCoding() {
  const map = (
    <Map>
      {/* Lines */}
      <Line
        src={yellowLine}
        name="yellow line"
        position={({ height: quadrantHeight }) => ({
          x: -430,
          y: quadrantHeight - 37,
        })}
      />

      {/* Home */}
      <Station
        src={yellowLineStop}
        name="home station"
        position={({ height: quadrantHeight }) => ({
          x: -120,
          y: quadrantHeight - 30,
        })}
      />

      <StationLabel
        label="Home"
        linkTo="/"
        position={({ height: quadrantHeight }) => ({
          x: -134,
          y: quadrantHeight - 60,
        })}
        align="center"
        servedLines={[Lines.yellow]}
      />
    </Map>
  );

  return <Page title="Coding" map={map} overlay={CodingOverlay} />;
}
