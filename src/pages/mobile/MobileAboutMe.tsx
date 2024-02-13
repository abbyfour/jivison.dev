import { Map } from "../../components/map/Map";
import {
  MapFeatureType,
  OtherMapFeature,
} from "../../components/map/OtherMapFeature";
import { Line } from "../../components/map/transit/Line";
import { StationLabel } from "../../components/map/transit/StationLabel";
import { StationMarker } from "../../components/map/transit/StationMarker";
import { AboutMeOverlay } from "../../components/overlays/AboutMe/AboutMeOverlay";
import { Lines } from "../../map/lines";
import { Page } from "../Page";

import cyanLine from "../../assets/about-me/mobile/cyan-line.svg";
import fraserRiver from "../../assets/about-me/mobile/fraser-river.svg";
import cyanLineStop from "../../assets/shared/stop-cyan.svg";

export function MobileAboutMe() {
  const map = (
    <Map>
      {/* Lines */}
      <Line
        src={cyanLine}
        name="cyan line"
        position={({ height: quadrantHeight }) => ({
          x: -412,
          y: quadrantHeight - 38,
        })}
      />

      {/* Home */}
      <StationMarker
        src={cyanLineStop}
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
        servedLines={[Lines.cyan]}
      />

      {/* Map Elements */}

      <OtherMapFeature
        src={fraserRiver}
        type={MapFeatureType.Waterbody}
        name="fraser river"
        position={({ height: quadrantHeight }) => ({
          x: -32,
          y: quadrantHeight + 260,
        })}
      />
    </Map>
  );

  return <Page title="About Me" map={map} overlay={AboutMeOverlay} />;
}
