import { FunctionComponent } from "react";
import jtaLogo from "../../../assets/contact/jta-logo.svg";
import { GenericOverlayProps, Overlay } from "../Overlay";
import "./ContactOverlay.scss";
import { ContactService } from "./ContactService";

import behanceLogo from "../../../assets/contact/services/behance.svg";
import blueskyLogo from "../../../assets/contact/services/bluesky.svg";
import discordLogo from "../../../assets/contact/services/discord.svg";
import emailLogo from "../../../assets/contact/services/email.svg";
import githubLogo from "../../../assets/contact/services/github.svg";
import lastfmLogo from "../../../assets/contact/services/lastfm.svg";
import linkedInLogo from "../../../assets/contact/services/linkedin.svg";
import mastodonLogo from "../../../assets/contact/services/mastodon.svg";
import rymLogo from "../../../assets/contact/services/rateyourmusic.svg";
import twitterLogo from "../../../assets/contact/services/twitter.svg";

export const ContactOverlay: FunctionComponent<GenericOverlayProps> = ({
  onHeightChange,
}) => {
  return (
    <Overlay className="ContactOverlay" onHeightChange={onHeightChange}>
      <div className="header">
        <h1 className="title">Contact</h1>
        <img
          src={jtaLogo}
          alt="JTA logo in the style of the MTA logo"
          className="jtaLogo"
          title="Please don't sue me MTA"
        />
      </div>

      <div className="services">
        <div className="service">
          <h2 className="codeAndDesign">Code & Design</h2>
          <div className="content">
            <p>
              For service to code repositories, follow&nbsp;
              <ContactService
                icon={githubLogo}
                iconAltText="github logo"
                colour="#0039A6"
                handle="jivison"
                url="https://github.com/jivison"
              />
              &nbsp;to Github. <br />
              For service to design projects, follow&nbsp;
              <ContactService
                icon={behanceLogo}
                iconAltText="behance logo"
                colour="#0039A6"
                handle="jogn"
                url="https://www.behance.net/jogn"
              />
              &nbsp;to LinkedIn.
              <br />
              For all other professional inquiries, follow&nbsp;
              <ContactService
                icon={linkedInLogo}
                iconAltText="linkedin logo"
                colour="#0039A6"
                handle="john-ivison"
                url="https://www.linkedin.com/in/john-ivison/"
              />
              &nbsp;to Behance.
            </p>
          </div>
        </div>

        <div className="service">
          <div className="subtitleContainer">
            <h5 className="subtitle">Social Media</h5>
          </div>

          <div className="content">
            <p>
              For general inquiries, follow&nbsp;
              <ContactService
                icon={discordLogo}
                iconAltText="discord logo"
                colour="#FF6319"
                handle="mahjogn"
                url="https://discordapp.com/users/267794154459889664"
              />
              &nbsp;to Discord. To keep in contact with John, follow&nbsp;
              <ContactService
                icon={twitterLogo}
                iconAltText="twitter logo"
                colour="#FF6319"
                handle="mahjogn"
                url="https://twitter.com/mahjogn"
              />
              &nbsp;via Twitter,&nbsp;
              <ContactService
                icon={blueskyLogo}
                iconAltText="bluesky logo"
                colour="#FF6319"
                handle="jogn.bsky.social"
                url="https://bsky.app/profile/jogn.bsky.social"
              />
              &nbsp;via Bluesky, or&nbsp;
              <ContactService
                icon={mastodonLogo}
                iconAltText="mastodon logo"
                colour="#FF6319"
                handle="jogn@mastodon.social"
                url="https://mastodon.social/@jogn"
              />
              &nbsp;via Mastodon.
            </p>
          </div>

          <div className="content">
            <p>
              For direct contact, use&nbsp;
              <ContactService
                icon={emailLogo}
                iconAltText="email logo"
                colour="#FF6319"
                handle="john@ivison.org"
                url="mailto:john@ivison.org"
              />
              &nbsp;through email sevices.
            </p>
          </div>
        </div>

        <div className="service">
          <div className="subtitleContainer">
            <h5 className="subtitle">Music Websites</h5>
          </div>

          <div className="content">
            <p>
              To connect on Last.fm, follow&nbsp;
              <ContactService
                icon={lastfmLogo}
                iconAltText="last.fm logo"
                colour="#6CBE45"
                handle="flushed_emoji"
                url="https://last.fm/user/flushed_emoji"
              />
              . To connect on RateYourMusic, follow&nbsp;
              <ContactService
                icon={rymLogo}
                iconAltText="rateyourmusic logo"
                colour="#6CBE45"
                handle="flushed_emoji"
                url="https://rateyourmusic.com/~flushed_emoji"
              />
              .
            </p>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="left">
          <div className="text-block">
            <small>Visit jivison.dev for travel info, travel tools,</small>
            <small>widgets, apps and more...</small>
          </div>
          <small>Inspired by the MTA’s service disruption wayfinding</small>
        </div>

        <div className="right">
          <div className="text-block">
            <small>POST: 01/19/24, n/b platforms, Chambers,</small>
            <small>14, 34, 42, 72, 96, 110, 116, 125 Sts,</small>
            <small>REMOVE: 8/14/99 Service Plans A-42-02,</small>
            <small>A-42-03, A-43-04 0108-18</small>
          </div>

          <small>
            <span className="bold">Wk 42</span> p 14
          </small>
        </div>
      </div>
    </Overlay>
  );
};
