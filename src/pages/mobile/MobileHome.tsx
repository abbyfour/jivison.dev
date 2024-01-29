import { Map } from "../../components/map/Map";
import {
  MapFeatureType,
  OtherMapFeature,
} from "../../components/map/OtherMapFeature";
import { Line } from "../../components/map/transit/Line";
import { Station } from "../../components/map/transit/Station";
import { StationLabel } from "../../components/map/transit/StationLabel";
import { HomeOverlay } from "../../components/overlays/HomeOverlay";
import { Lines } from "../../map/lines";
import { Page } from "../Page";

import fraserRiver from "../../assets/home/mobile/fraser-river.svg";
import redLine from "../../assets/home/mobile/red-line.svg";
import yellowAndOrangeLines from "../../assets/home/mobile/yellow-and-orange-lines.svg";
import dualLineStop from "../../assets/shared/dual-line-stop.svg";
import orangeLineStop from "../../assets/shared/stop-orange.svg";
import redLineStop from "../../assets/shared/stop-red.svg";

export function MobileHome() {
  return (
    <Page title="Home">
      <Map>
        {/* Lines */}
        <Line
          src={redLine}
          name="red line"
          position={({ height: quadrantHeight }) => ({
            x: -412,
            y: quadrantHeight - 110,
          })}
        />

        <Line
          src={yellowAndOrangeLines}
          name="yellow and orange line"
          position={({ height: quadrantHeight }) => ({
            x: -411,
            y: quadrantHeight - 140,
          })}
        />

        {/* Design */}
        <Station
          src={dualLineStop}
          name="design station"
          position={({ height: quadrantHeight }) => ({
            x: -55,
            y: quadrantHeight - 477,
          })}
          orientation={-45}
        />

        <StationLabel
          interchange
          label="Design Projects"
          linkTo="/design"
          position={({ height: quadrantHeight }) => ({
            x: -22,
            y: quadrantHeight - 501,
          })}
          align="right"
          servedLines={[Lines.red, Lines.orange, Lines.yellow]}
        />

        {/* About */}
        <Station
          src={dualLineStop}
          name="about me station"
          position={({ height: quadrantHeight }) => ({
            x: 49,
            y: quadrantHeight - 373,
          })}
          orientation={-45}
        />

        <StationLabel
          interchange
          label="About Me"
          linkTo="/about-me"
          position={({ height: quadrantHeight }) => ({
            x: -51,
            y: quadrantHeight - 373,
          })}
          align="right"
          servedLines={[Lines.orange, Lines.yellow]}
        />

        {/* Contact */}
        <Station
          src={redLineStop}
          name="contact station"
          position={({ height: quadrantHeight }) => ({
            x: 50,
            y: quadrantHeight - 623,
          })}
        />

        <StationLabel
          label="Contact"
          linkTo="/contact"
          position={({ height: quadrantHeight }) => ({
            x: 78,
            y: quadrantHeight - 629,
          })}
          align="left"
          servedLines={[Lines.red]}
        />

        {/* Blog */}
        <Station
          src={redLineStop}
          name="blog station"
          position={({ height: quadrantHeight }) => ({
            x: 50,
            y: quadrantHeight - 773,
          })}
        />

        <StationLabel
          label="Blog"
          linkTo="https://blog.jivison.dev"
          position={({ height: quadrantHeight }) => ({
            x: 78,
            y: quadrantHeight - 778,
          })}
          align="left"
          servedLines={[Lines.red]}
        />

        {/* Coding */}
        <Station
          src={orangeLineStop}
          name="coding station"
          position={({ height: quadrantHeight }) => ({
            x: -82,
            y: quadrantHeight - 697,
          })}
        />

        <StationLabel
          wrap
          label="Coding Projects"
          linkTo="/coding"
          position={({ height: quadrantHeight }) => ({
            x: -50,
            y: quadrantHeight - 692,
          })}
          align="left"
          servedLines={[Lines.orange]}
        />

        {/* Map Elements */}

        <OtherMapFeature
          src={fraserRiver}
          type={MapFeatureType.Waterbody}
          name="fraser river"
          position={({ height: quadrantHeight }) => ({
            x: -400,
            y: quadrantHeight - 250,
          })}
        />
      </Map>

      <HomeOverlay />
    </Page>
  );
}
