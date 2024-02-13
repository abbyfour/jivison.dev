import cyanLine from "../assets/contact/cyan-line.svg";
import orangeLine from "../assets/contact/orange-line.svg";
import interchangeStation from "../assets/shared/stop-interchange.svg";
import { Map } from "../components/map/Map";
import { MapDirection, equallySpace } from "../components/map/MapElement";
import { Line } from "../components/map/transit/Line";
import { StationLabel } from "../components/map/transit/StationLabel";
import { StationMarker } from "../components/map/transit/StationMarker";
import { ContactOverlay } from "../components/overlays/Contact/ContactOverlay";
import { Lines } from "../map/lines";
import { Page } from "./Page";

export function Contact() {
  const map = (
    <Map>
      {/* Lines */}
      <Line
        src={orangeLine}
        name="orange line"
        position={({ width: quadrantWidth }) => ({
          x: equallySpace(MapDirection.Left, quadrantWidth, 2, -412),
          y: 730,
        })}
      />

      <Line src={cyanLine} name="cyan line" position={{ x: -1670, y: 580 }} />

      {/* Stations */}
      <StationMarker
        src={interchangeStation}
        name="home"
        position={({ width: quadrantWidth }) => ({
          x: equallySpace(MapDirection.Left, quadrantWidth, 2, -422),
          y: 244,
        })}
      />

      <StationLabel
        interchange
        label="Home"
        linkTo="/"
        position={({ width: quadrantWidth }) => ({
          x: equallySpace(MapDirection.Left, quadrantWidth, 2, -354),
          y: 269,
        })}
        servedLines={[Lines.orange, Lines.cyan]}
      />
    </Map>
  );

  return <Page title="Contact" map={map} overlay={ContactOverlay} />;
}
