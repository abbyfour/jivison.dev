import { FunctionComponent } from "react";
import { Overlay } from "../Overlay";
import "./CodingOverlay.scss";
import { CodingProject } from "./projects/CodingProject";

export const CodingOverlay: FunctionComponent = () => {
  return (
    <Overlay className="CodingOverlay">
      <div className="heading">
        <h3 className="title">
          Applications
          <br />
          and Coding Projects
        </h3>
        <h5 className="subtitle">
          October 18 2017 <span className="to">to</span> November 1 2023
        </h5>
      </div>

      <div className="projects">
        <CodingProject
          title="Gowon"
          startYear={2020}
          links={[
            { name: "Homepage", url: "https://gowon.ca" },
            { name: "Github", url: "https://github.com/gowon-bot" },
          ]}
        >
          <ul>
            <li>
              A Last.fm Discord bot, built with Typescript, Elixir, Go, Ruby,
              Postgres and GraphQL
            </li>
            <li>
              Deployed with Docker Compose, GitHub actions, and DigitalOcean
            </li>
          </ul>
        </CodingProject>

        <CodingProject
          title="jivison.dev"
          startYear={2022}
          links={[
            { name: "Homepage", url: "https://jivison.dev" },
            { name: "Github", url: "https://github.com/jivison/jivison.dev" },
            { name: "Behance", url: "erm um ummmm erm" },
          ]}
        >
          <ul>
            <li>This very website, built with Typescript, React, and Sass</li>
            <li>Designed with Figma</li>
          </ul>
        </CodingProject>

        <CodingProject
          title="Mino"
          endYear={2019}
          links={[
            { name: "Github", url: "https://github.com/jivison/mino-client" },
          ]}
        >
          <ul>
            <li>
              The final project I made for the developer bootcamp I was in
            </li>
            <li>Built with Ruby on Rails and React.</li>
          </ul>
        </CodingProject>

        <CodingProject
          title="“Text Based Game”"
          endYear={2017}
          links={[
            {
              name: "Github",
              url: "https://github.com/jivison/text-based-game",
            },
          ]}
        >
          <ul>
            <li>My very first coding project, never completed</li>
            <li>(Poorly) built with Python.</li>
          </ul>
        </CodingProject>
      </div>

      <div className="attributionContainer">
        <div className="grow" />
        <small className="attribution">jivison.dev/coding</small>
      </div>
    </Overlay>
  );
};
