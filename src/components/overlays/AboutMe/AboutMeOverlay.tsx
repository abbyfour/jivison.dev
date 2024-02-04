import { format } from "fecha";
import { FunctionComponent } from "react";
import { GenericOverlayProps, Overlay } from "../Overlay";
import "./AboutMeOverlay.scss";

export const AboutMeOverlay: FunctionComponent<GenericOverlayProps> = ({
  onHeightChange,
}) => {
  return (
    <Overlay className="AboutMeOverlay" onHeightChange={onHeightChange}>
      <small className="effectiveDate">
        Effective {format(new Date(), "MMMM Do, YYYY")}
      </small>

      <div className="intro">
        <div className="heading main">
          <h4>About Me</h4>
        </div>

        <p>
          My name is John Ivison, and I'm currently working my way through a
          Software Systems degree at SFU! I started learning to code in 2017,
          and I've never looked back since then. Through a combination of
          different schools and self-learning, I'm now a full-stack developer.
          <br />
          <br />
          During my experience as a front-end developer, I discovered that I was
          passionate about design. Combined with my love of transit, I started
          to learn graphic design by creating transit maps. Outside of
          development and design, I'm also passionate about photography, birds,
          and music!
        </p>
      </div>

      <div className="coding">
        <div className="heading">
          <h5>CODING</h5>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          porta imperdiet purus mollis placerat. Fusce volutpat sapien in justo
          euismod semper. Maecenas tempor pellentesque diam vitae rhoncus.
          Phasellus imperdiet erat et velit hendrerit, vel fermentum turpis
          ullamcorper. Donec ut nunc sed enim iaculis sagittis. Suspendisse
          accumsan arcu arcu, quis tempor dui hendrerit id. In placerat
          elementum dolor, ac dictum enim ultricies ac. Donec eget massa dolor.
          Nunc ornare pharetra pulvinar.
        </p>
      </div>

      <div className="advocacy">
        <div className="heading">
          <h5>ADVOCACY</h5>
        </div>

        <p>
          Spurred on by my passion for public transit and my frustration as a
          transit rider, I co-founded a transit advocacy group called{" "}
          <a href="https://transitmovement.ca">Movement</a>. We are a group of
          transit riders, professionals, and enthusiasts providing the everyday
          transit rider in Metro Vancouver with a voice to demand better
          transit. Our aim is to work with local governments and transit
          agencies to push for better and more inclusive transit.
          <br />
          <br />
          You can learn more at{" "}
          <a href="https://transitmovement.ca">https://transitmovement.ca</a>
        </p>
      </div>
    </Overlay>
  );
};
