import homeFraserRiver from "../assets/home/fraser-river.svg";
import homeOrangeAndYellowLines from "../assets/home/orange-and-yellow-lines.svg";
import homeRedLine from "../assets/home/red-line.svg";
import doubleInterchangeStation from "../assets/shared/dual-line-stop.svg";
import singleOrangeLineStation from "../assets/shared/stop-orange.svg";
import singleYellowLineStation from "../assets/shared/stop-yellow.svg";
import { Map } from "../components/map/Map";
import { MapDirection, equallySpace } from "../components/map/MapElement";
import {
  MapFeatureType,
  OtherMapFeature,
} from "../components/map/OtherMapFeature";
import { Line } from "../components/map/transit/Line";
import { Station } from "../components/map/transit/Station";
import { StationLabel } from "../components/map/transit/StationLabel";
import { HomeOverlay } from "../components/overlays/HomeOverlay";
import { Lines } from "../map/lines";
import { Page } from "./Page";

export function Home() {
  const map = (
    <Map>
      <Line src={homeRedLine} name="red line" position={{ x: -350, y: 500 }} />

      <Line
        src={homeOrangeAndYellowLines}
        name="orange/yellow lines"
        position={{ x: -1000, y: 550 }}
      />

      {/* Contact */}
      <Station
        src={doubleInterchangeStation}
        name="contact station"
        position={{ x: -14, y: -105 }}
        orientation={-45}
      />

      <StationLabel
        interchange
        label="Contact"
        linkTo="/contact"
        position={{ x: -124, y: -115 }}
        align="right"
        servedLines={[Lines.red, Lines.orange, Lines.yellow]}
      />

      {/* About Me */}

      <Station
        src={doubleInterchangeStation}
        name="about me station"
        position={{ x: 215, y: 125 }}
        orientation={-45}
      />

      <StationLabel
        interchange
        label="About Me"
        linkTo="/about-me"
        position={{ x: 98, y: 135 }}
        align="right"
        servedLines={[Lines.orange, Lines.yellow]}
      />

      {/* Blog */}
      <Station
        src={singleYellowLineStation}
        name="blog station"
        position={({ width: quadrantWidth }) => ({
          x: equallySpace(MapDirection.Left, quadrantWidth, 2, -190),
          y: -239,
        })}
      />

      <StationLabel
        label="Blog"
        linkTo="https://blog.jivison.dev"
        position={({ width: quadrantWidth }) => ({
          x: equallySpace(MapDirection.Left, quadrantWidth, 2, -204),
          y: -210,
        })}
        align="right"
        servedLines={[Lines.yellow]}
      />

      {/* Coding Projects */}
      <Station
        src={singleOrangeLineStation}
        name="coding projects station"
        position={({ height: quadrantHeight }) => ({
          x: -84,
          y: equallySpace(MapDirection.Down, quadrantHeight, 2, -259),
        })}
      />

      <StationLabel
        label="Coding Projects"
        linkTo="/coding"
        position={({ height: quadrantHeight }) => ({
          x: -253,
          y: equallySpace(MapDirection.Down, quadrantHeight, 2, -266),
        })}
        align="right"
        servedLines={[Lines.orange]}
      />

      {/* Transit Maps & Design Projects */}
      <Station
        src={singleYellowLineStation}
        name="transit maps & design projects station"
        position={() => ({
          x: 451,
          y: 359,
        })}
      />

      <StationLabel
        label={["Transit Maps &", "Design Projects"]}
        linkTo="/design"
        position={() => ({
          x: 291,
          y: 399,
        })}
        align="right"
        servedLines={[Lines.yellow]}
      />

      {/* Map Elements */}

      <OtherMapFeature
        src={homeFraserRiver}
        type={MapFeatureType.Waterbody}
        name="fraser river"
        position={{ x: -100, y: 610 }}
      />
    </Map>
  );

  return <Page title="Home" map={map} overlay={HomeOverlay} />;
}
