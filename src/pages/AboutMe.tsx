import cyanLine from "../assets/about-me/cyan-line.svg";
import fraserRiver from "../assets/about-me/fraser-river.svg";
import redLine from "../assets/about-me/red-line.svg";
import singleCyanLineStation from "../assets/shared/stop-cyan.svg";
import { Map } from "../components/map/Map";
import { MapDirection, equallySpace } from "../components/map/MapElement";
import {
  MapFeatureType,
  OtherMapFeature,
} from "../components/map/OtherMapFeature";
import { Line } from "../components/map/transit/Line";
import { StationLabel } from "../components/map/transit/StationLabel";
import { StationMarker } from "../components/map/transit/StationMarker";
import { AboutMeOverlay } from "../components/overlays/AboutMe/AboutMeOverlay";
import { Lines } from "../map/lines";
import { Page } from "./Page";

export function AboutMe() {
  const map = (
    <Map>
      {/* Lines */}
      <Line src={cyanLine} name="cyan line" position={{ x: -2010, y: 250 }} />

      <Line src={redLine} name="red line" position={{ x: -400, y: 1130 }} />

      {/* Stations */}
      <StationMarker
        src={singleCyanLineStation}
        name="home"
        position={({ width: quadrantWidth }) => ({
          x: equallySpace(MapDirection.Left, quadrantWidth, 2, -290),
          y: 255,
        })}
      />

      <StationLabel
        label="Home"
        linkTo="/"
        position={({ width: quadrantWidth }) => ({
          x: equallySpace(MapDirection.Left, quadrantWidth, 2, -319),
          y: 219,
        })}
        servedLines={[Lines.cyan]}
      />

      {/* Map Elements */}

      <OtherMapFeature
        src={fraserRiver}
        type={MapFeatureType.Waterbody}
        name="fraser river"
        position={{ x: -100, y: 610 }}
      />
    </Map>
  );

  return <Page title="About Me" map={map} overlay={AboutMeOverlay} />;
}
