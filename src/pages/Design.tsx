import fraserRiver from "../assets/design/fraser-river.svg";
import orangeLine from "../assets/design/orange-line.svg";
import singleOrangeLineStation from "../assets/shared/stop-orange.svg";
import { Map } from "../components/map/Map";
import {
  MapFeatureType,
  OtherMapFeature,
} from "../components/map/OtherMapFeature";
import { Line } from "../components/map/transit/Line";
import { Station } from "../components/map/transit/Station";
import { StationLabel } from "../components/map/transit/StationLabel";
import { DesignOverlay } from "../components/overlays/Design/DesignOverlay";
import { Lines } from "../map/lines";
import { Page } from "./Page";

export function Design() {
  const map = (
    <Map>
      {/* Lines */}
      <Line
        src={orangeLine}
        name="orange line"
        position={({ width: quadrantWidth, height: quadrantHeight }) => ({
          x: -quadrantWidth - 390,
          y: quadrantHeight + 470,
        })}
      />

      {/* Stations */}
      <Station
        src={singleOrangeLineStation}
        name="home"
        position={({ width: quadrantWidth, height: quadrantHeight }) => ({
          x: -quadrantWidth + 217,
          y: quadrantHeight - 205,
        })}
      />

      <StationLabel
        label="Home"
        linkTo="/"
        position={({ width: quadrantWidth, height: quadrantHeight }) => ({
          x: -quadrantWidth + 252,
          y: quadrantHeight - 230,
        })}
        servedLines={[Lines.orange]}
      />

      {/* Other Map Features */}
      <OtherMapFeature
        type={MapFeatureType.Waterbody}
        src={fraserRiver}
        name="fraser river"
        position={{ x: -1470, y: 0 }}
      />
    </Map>
  );

  return <Page title="Design" map={map} overlay={DesignOverlay} />;
}
