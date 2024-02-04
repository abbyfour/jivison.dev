import { Map } from "../../components/map/Map";
import { Line } from "../../components/map/transit/Line";
import { Station } from "../../components/map/transit/Station";
import { StationLabel } from "../../components/map/transit/StationLabel";
import { Lines } from "../../map/lines";
import { Page } from "../Page";

import cyanLine from "../../assets/contact/mobile/cyan-line.svg";
import orangeLine from "../../assets/contact/mobile/orange-line.svg";
import interchangeStop from "../../assets/shared/stop-interchange.svg";
import { ContactOverlay } from "../../components/overlays/Contact/ContactOverlay";

export function MobileContact() {
  const map = (
    <Map>
      {/* Lines */}
      <Line
        src={cyanLine}
        name="cyan line"
        position={({ height: quadrantHeight }) => ({
          x: -430,
          y: quadrantHeight + 143,
        })}
      />

      <Line
        src={orangeLine}
        name="orange line"
        position={({ height: quadrantHeight }) => ({
          x: -161,
          y: quadrantHeight + 103,
        })}
      />

      {/* Home */}
      <Station
        src={interchangeStop}
        name="home station"
        position={({ height: quadrantHeight }) => ({
          x: -170,
          y: quadrantHeight - 50,
        })}
      />

      <StationLabel
        interchange
        label="Home"
        linkTo="/"
        position={({ height: quadrantHeight }) => ({
          x: -144,
          y: quadrantHeight - 34,
        })}
        align="center"
        servedLines={[Lines.orange, Lines.cyan]}
      />
    </Map>
  );
  return <Page title="Contact" map={map} overlay={ContactOverlay} />;
}
