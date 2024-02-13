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
          I love to work on software from all angles, from programming, to dev
          ops, to design, to testing. However my real passion lies in developing
          software, both back-end and front-end. I started learning to code in
          high school, where I was able to hone my skills and practice in an
          engineering program. Being the only one who really knew how to code in
          the class, I was often left to figure things out for myself. Because
          of this, through high school I was able to develop my skills even
          further in my own time working on personal projects.
          <br />
          After high school, I attended a 3 month developer bootcamp, where I
          was able to formally learn and practice a lot of the skills I learned
          in high school. After this bootcamp, I got my first job as a junior
          developer, which let me greatly expand my skills and learn from my
          talented coworkers. While working there, I also started working on a
          personal project in my spare time, Gowon. 4 years later, it now has
          over 10,000 users and a dedicated online community.
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
