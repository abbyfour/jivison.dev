import { FunctionComponent } from "react";

export interface ContactServiceProps {
  icon: string;
  iconAltText: string;
  handle: string;
  url: string;
  colour: string;
}

export const ContactService: FunctionComponent<ContactServiceProps> = ({
  icon,
  iconAltText,
  handle,
  url,
  colour,
}) => {
  return (
    <div className="ContactService">
      <a href={url} target="blank">
        <img className="icon" src={icon} alt={iconAltText} />
        <span className="handle" style={{ color: colour }}>
          {handle}
        </span>
      </a>
    </div>
  );
};
