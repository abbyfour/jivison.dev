import { FunctionComponent } from "react";
import calgarysLightRailways from "../../../assets/design/projects/calgary-lrt-1933.png";
import futureVignelli from "../../../assets/design/projects/future-vignelli.png";
import metrotownBusLoopMap from "../../../assets/design/projects/metrotown-bus-loop.png";
import retroDowntownBusMap from "../../../assets/design/projects/retro-downtown-buses.png";
import skyrem from "../../../assets/design/projects/skyrem.png";
import ttcSkytrain from "../../../assets/design/projects/ttc-skytrain.png";
import { Overlay } from "../Overlay";
import "./DesignOverlay.scss";
import { LargeProject } from "./projects/LargeProject";
import { SmallProject } from "./projects/SmallProject";

export const DesignOverlay: FunctionComponent = () => {
  return (
    <Overlay className="DesignOverlay">
      <div className="heading">
        <h3 className="title">
          Transit Maps
          <br />& Design Projects
        </h3>
        <p className="subtitle">Starting Monday, September 15, 2022</p>
      </div>

      <div className="projects">
        <LargeProject
          title="Map of Calgary’s Light Railways"
          subtitle="In the style of Harry Beck’s 1933 Map"
          year={2023}
          description={
            <p>
              This map was inspired by iconic Tube Map designer{" "}
              <a
                href="https://uploads-ssl.webflow.com/5da734bbb8be40161936b461/61c67bf62392ae1031b5c596_gd-risd-history-landmark.pdf"
                target="blank"
              >
                Harry Beck’s 1933 map
              </a>
              . His map changed the way that transit maps were designed by being
              the first map to ignore geographical scale.
            </p>
          }
          imgSrc={calgarysLightRailways}
          imgAlt="retro style calgary LRT map"
        />

        <SmallProject
          align="left"
          title="SkyREM Map"
          subtitle="In the style of TransLink’s Fast & Frequent Transit Map"
          year={2023}
          description={
            <p>
              I made this map to celebrate the opening of Montréal’s awesome new
              transit line, the Réseau express métropolitain (REM). It was
              heavily inspired by SkyTrain’s Canada Line, so I made a SkyTrain
              inspired map for it.
            </p>
          }
          imgSrc={skyrem}
          imgAlt="montreal rem map"
        />

        <SmallProject
          align="right"
          title="Metrotown Bus Loop Map"
          subtitle="In the style of TransLink’s “Where to catch your bus map”"
          year={2023}
          imgSrc={metrotownBusLoopMap}
          imgAlt="montreal rem map"
        />

        <LargeProject
          title="Future Vancouver Vignelli"
          subtitle="In the style of Massimo Vignelli’s 1972 Map"
          year={2023}
          description={
            <p>
              This was a map of all existing, under construction and planned
              transit. It was inspired by Massimo Vignelli’s 1972 map, and
              @whatchyamacallit’s{" "}
              <a
                href="https://www.behance.net/gallery/185086659/Vignelli-Style-Rapid-Transit-Maps-Vancouver-Calgary"
                target="blank"
              >
                Vancouver and Calgary
              </a>{" "}
              Vignelli maps.
            </p>
          }
          imgSrc={futureVignelli}
          imgAlt="70s new york style skytrain map"
        />

        <LargeProject
          title="Retro Bus Map of Downtown Vancouver"
          subtitle="In the style of the Vancouver “Rail car and bus routes as at 1953” map"
          year={2023}
          description={
            <p>
              While searching through the Vancouver image archives, I found this
              1953 map of rail car and bus routes, and decided to remake it with
              the modern routing and street grid. It was my first try at trying
              a map in an older style.
            </p>
          }
          imgSrc={retroDowntownBusMap}
          imgAlt="50s style bus map"
        />

        <LargeProject
          title="TTC Style SkyTrain Map"
          subtitle="In the style of TTC’s subway map"
          year={2022}
          description={
            <p>
              This was the first transit map I’ve ever made! I wanted to know
              what the SkyTrain map would look like if the TTC designed it.
            </p>
          }
          imgSrc={ttcSkytrain}
          imgAlt="50s style bus map"
        />
      </div>
    </Overlay>
  );
};
