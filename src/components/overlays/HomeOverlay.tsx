import { FunctionComponent } from "react";
import trainOrange from "../../assets/home/train-orange.svg";
import trainRed from "../../assets/home/train-red.svg";
import trainYellow from "../../assets/home/train-yellow.svg";
import "./HomeOverlay.scss";
import { GenericOverlayProps, Overlay } from "./Overlay";

export const HomeOverlay: FunctionComponent<GenericOverlayProps> = ({
  onHeightChange,
}) => {
  return (
    <Overlay className="HomeOverlay" onHeightChange={onHeightChange}>
      <div className="heading">
        <h2>John Ivison</h2>
      </div>

      <div className="content">
        <div className="subheading">
          <h4>Full Stack Developer</h4>
        </div>

        <p className="description">
          SFU Resource and Environmental Management student.
          <br /> Templeton STEM alum.
          <br /> Proudly based in East Vancouver, BC.
        </p>

        <div className="services">
          <img src={trainYellow} alt="yellow train icon" />
          <p className="serviceName yellow">Graphic Designer</p>
          <p className="serviceDescription">
            Still learning,
            <br />
            early morning to late evening
          </p>

          <img src={trainOrange} alt="orange train icon" />
          <p className="serviceName orange">Transit Advocate</p>
          <p className="serviceDescription">At all times of the day</p>

          <img src={trainRed} alt="red train icon" />
          <p className="serviceName red">Photographer</p>
          <p className="serviceDescription">During daylight hours</p>
        </div>
      </div>
    </Overlay>
  );
};
