import { FunctionComponent } from "react";
import jivisondevLogo from "../../../assets/shared/jivison.dev-translink-logo.png";
import { GenericOverlayProps, Overlay } from "../Overlay";
import { LargeProject } from "./projects/LargeProject";
import { SmallProject } from "./projects/SmallProject";

import "./DesignOverlay.scss";

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
        <SmallProject
          slug={"bpatp-phase-2-engagement-response"}
          page={page}
          title="BPATP Phase 2 Engagement Response"
          subtitle="Another round!"
          year={2025}
          align={"left"}
          description={
            <p>
              I compiled comments from Movement members and created this report
              in response to TransLink's Burrard Peninsula Area Transport Plan
              phase 2 engagement. Thank you to Michael and Gavin for providing
              the beautiful photos used in this report.
            </p>
          }
          imgSrc={"bpatp-engagement-response.png"}
          thumbnailImgSrc={"bpatp-engagement-response.png"}
          imgAlt="four pages of a report"
        />

        <SmallProject
          slug={"king-george-boulevard-safety-improvements"}
          page={page}
          title="King George Boulevard Improvements Report"
          subtitle="Imagining a new King George Boulevard"
          year={2025}
          align={"right"}
          description={
            <p>
              Created for my GEOG 324 Geography of Transportation class, we
              outlined our suggestions for improving safety for all road users
              on King George Boulevard. I designed this report, which we
              presented to planners from the City of Surrey.
            </p>
          }
          imgSrc={"kgb-safety-improvements.png"}
          thumbnailImgSrc={"kgb-safety-improvements.png"}
          imgAlt="four pages of a report"
        />

        <SmallProject
          slug={"movement-thank-you-cards"}
          page={page}
          title="Movement Thank You Cards"
          subtitle="For all the Movementarians who worked hard to save the bus"
          year={"2024, 2025"}
          align={"left"}
          description={
            <p>
              The top two cards were made for the 2025 Save the Bus campaign,
              dedicated to the many volunteers that helped us stop transit cuts
              and fund additional service expansion. The bottom card was made
              for non-Movementarians who help our cause.
            </p>
          }
          imgSrc={"movement-thank-you-cards.png"}
          thumbnailImgSrc={"movement-thank-you-cards.png"}
          imgAlt="three thank you cards"
        />

        <LargeProject
          slug={"ferries-of-the-north-pacific-coast"}
          page={page}
          title="Ferries of the North Pacific Coast"
          subtitle="A tribute to the ferries of the Salish Sea and beyond"
          year={2024}
          description={
            <p>
              I spent a lot of time of the ferries of BC, so as a tribute to the
              wonderful machines that get me around I made a map of the ferries
              up the pacific coast.
            </p>
          }
          imgSrc={"ferries-of-the-north-pacific-coast-big.png"}
          thumbnailImgSrc={"ferries-of-the-north-pacific-coast-thumbnail.png"}
          imgAlt="document cover and pages"
        />

        <SmallProject
          slug={"movement-modern"}
          page={page}
          align="center"
          title="Movement Modern"
          subtitle="Inspired by the Canada Modern design aesthetic"
          year={2024}
          description={
            <p>
              After a friend posted some of the content from{" "}
              <a href="https://canadamodern.org/">canadamodern.org</a>, I was
              inspired to try my hand at making some posters in the style. I
              made these three posters for Movement.
            </p>
          }
          thumbnailImgSrc={"movement-modern-thumbnail.png"}
          imgSrc={"movement-modern-big.png"}
          imgAlt="montreal rem map"
        />

        <LargeProject
          slug={"bc-intercity-transit-vision"}
          page={page}
          title="BC Intercity Transit Vision"
          subtitle="Buses are underrated..."
          year={2024}
          description={
            <p>
              BC has a loose patchwork of intercity transit, I created a vision
              for how buses and ferries could work together to enable public
              intercity transit across BC. You can read more about this map{" "}
              <a href="https://blog.jivison.dev/a-new-vision-for-intercity-transit-in-bc/">
                on my blog
              </a>
              .
            </p>
          }
          imgSrc={"bc-intercity-transit-vision-big.png"}
          thumbnailImgSrc={"bc-intercity-transit-vision-thumbnail.png"}
          imgAlt="document cover and pages"
        />

        <LargeProject
          slug={"a-better-burrard-peninsula"}
          page={page}
          title="A Better Burrard Peninsula"
          subtitle="Movement’s vision for transit in Vancouver, Burnaby and New Westminster"
          year={2024}
          description={
            <p>
              Movement was approached to give our suggestions on the (then)
              upcoming Burrard Peninsula Area Transport Plan. I worked with Mike
              Feaver and other Movement members and went all out on creating our
              plan. I designed and compiled the entire document, inspired by the{" "}
              <a href="https://metrovancouver.org/about-us/Documents/livable-region-strategic-plan.pdf">
                1996 Metro Vancouver Livable Region Plan
              </a>
              . You can read it at{" "}
              <a href="https://movementyvr.ca/bptatp">movementyvr.ca/bpatp</a>.
            </p>
          }
          imgSrc={"a-better-burrard-peninsula-sample.png"}
          imgAlt="document cover and pages"
        />

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
          imgSrc={"calgary-lrt-1933.png"}
          imgAlt="retro style calgary LRT map"
        />

        <LargeProject
          slug={"movement-posters"}
          page={page}
          title="Movement First Meeting Posters"
          subtitle="“We can fix the 49. Join the Movement.”"
          year={2023}
          description={
            <p>
              I created these posters to advertise Movement's first meeting!
              They contain statistics gathered from a survey we had put up
              earlier. The posters are intended to imitate the simple black and
              white style of the posters advertising the survey.
            </p>
          }
          imgSrc={"movement-posters.png"}
          imgAlt="black and white posters"
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
          thumbnailImgSrc={"skyrem-thumbnail.png"}
          imgSrc={"skyrem-big.png"}
          imgAlt="montreal rem map"
        />

        <SmallProject
          slug={"metrotown-bus-loop"}
          page={page}
          align="center"
          title="Metrotown Bus Loop Map"
          subtitle="In the style of TransLink’s “Where to catch your bus map”"
          year={2023}
          imgSrc={"metrotown-bus-loop-map.png"}
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
          thumbnailImgSrc={"future-vignelli-thumbnail.png"}
          imgSrc={"future-vignelli-big.png"}
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
          imgSrc={"retro-downtown-buses.png"}
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
          thumbnailImgSrc={"ttc-skytrain-thumbnail.png"}
          imgSrc={"ttc-skytrain-big.png"}
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
