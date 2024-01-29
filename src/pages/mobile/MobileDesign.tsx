import { Map } from "../../components/map/Map";
import { Line } from "../../components/map/transit/Line";
import { Station } from "../../components/map/transit/Station";
import { StationLabel } from "../../components/map/transit/StationLabel";
import { DesignOverlay } from "../../components/overlays/Design/DesignOverlay";
import { Lines } from "../../map/lines";
import { Page } from "../Page";

import orangeLine from "../../assets/design/mobile/orange-line.svg";
import orangeLineStop from "../../assets/shared/stop-orange.svg";

export function MobileDesign() {
  return (
    <Page title="Design Projects">
      <Map>
        {/* Lines */}
        <Line
          src={orangeLine}
          name="orange line"
          position={({ width: quadrantWidth, height: quadrantHeight }) => ({
            x: -quadrantWidth - 80,
            y: quadrantHeight + 120,
          })}
        />

        {/* Home */}
        <Station
          src={orangeLineStop}
          name="home station"
          position={({ width: quadrantWidth, height: quadrantHeight }) => ({
            x: -quadrantWidth + 30,
            y: quadrantHeight - 33,
          })}
        />

        <StationLabel
          label="Home"
          linkTo="/"
          position={({ width: quadrantWidth, height: quadrantHeight }) => ({
            x: -quadrantWidth + 55,
            y: quadrantHeight - 51,
          })}
          align="center"
          servedLines={[Lines.orange]}
        />
      </Map>

      <DesignOverlay />
    </Page>
  );
}
