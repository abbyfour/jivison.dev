import { FunctionComponent } from "react";
import jivisondevLogo from "../../../assets/shared/jivison.dev-translink-logo.png";
import { GenericOverlayProps, Overlay } from "../Overlay";
import "./DesignOverlay.scss";
import { LargeProject } from "./projects/LargeProject";
import { SmallProject } from "./projects/SmallProject";

import calgarysLightRailways from "../../../assets/design/projects/calgary-lrt-1933.png";
import futureVignelliBig from "../../../assets/design/projects/future-vignelli-big.png";
import futureVignelliThumbnail from "../../../assets/design/projects/future-vignelli-thumbnail.png";
import metrotownBusLoopMap from "../../../assets/design/projects/metrotown-bus-loop.png";
import retroDowntownBusMap from "../../../assets/design/projects/retro-downtown-buses.png";
import skyremBig from "../../../assets/design/projects/skyrem-big.png";
import skyremThumbnail from "../../../assets/design/projects/skyrem-thumbnail.png";
import ttcSkytrainBig from "../../../assets/design/projects/ttc-skytrain-big.png";
import ttcSkytrainThumbnail from "../../../assets/design/projects/ttc-skytrain-thumbnail.png";

export const DesignOverlay: FunctionComponent<GenericOverlayProps> = ({
  onHeightChange,
  page,
}) => {
  return (
    <Overlay className="DesignOverlay" onHeightChange={onHeightChange}>
      <div className="heading">
        <h3 className="title">
          Transit Maps
          <br />& Design Projects
        </h3>
        <p className="subtitle">Starting Monday, September 15, 2022</p>
      </div>

      <div className="projects">
        <LargeProject
          slug={"calgary-lrt"}
          page={page}
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
          slug={"skyrem"}
          page={page}
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
          thumbnailImgSrc={skyremThumbnail}
          imgSrc={skyremBig}
          imgAlt="montreal rem map"
        />

        <SmallProject
          slug={"metrotown-bus-loop"}
          page={page}
          align="center"
          title="Metrotown Bus Loop Map"
          subtitle="In the style of TransLink’s “Where to catch your bus map”"
          year={2023}
          imgSrc={metrotownBusLoopMap}
          imgAlt="metrotown bus loop map"
        />

        <LargeProject
          slug={"future-vancouver-vignelli"}
          page={page}
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
          thumbnailImgSrc={futureVignelliThumbnail}
          imgSrc={futureVignelliBig}
          imgAlt="70s new york style skytrain map"
        />

        <LargeProject
          slug={"retro-downtown-bus-map"}
          page={page}
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
          slug={"ttc-style-skytrain"}
          page={page}
          title="TTC Style SkyTrain Map"
          subtitle="In the style of TTC’s subway map"
          year={2022}
          description={
            <p>
              This was the first transit map I’ve ever made! I wanted to know
              what the SkyTrain map would look like if the TTC designed it.
            </p>
          }
          thumbnailImgSrc={ttcSkytrainThumbnail}
          imgSrc={ttcSkytrainBig}
          imgAlt="50s style bus map"
        />
      </div>

      <div className="footer">
        <div className="left">
          <p className="yellow">You've reached the bottom of the page.</p>
          <p
            className="scroll"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Scroll <span className="to-top">to top?</span>
          </p>
        </div>
        <div className="right">
          <img src={jivisondevLogo} alt="jivison.dev logo" />
        </div>
      </div>
    </Overlay>
  );
};
