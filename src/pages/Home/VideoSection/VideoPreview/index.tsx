import React, { HTMLAttributes } from "react";
import PlayerImage from "../../../../images/player.png";
import { Container } from "./styles";

interface VideoPreviewProps extends HTMLAttributes<HTMLDivElement> {
  image: string;
  title: string;
  description: string;
  href: string;
}

const VideoPreview: React.FC<VideoPreviewProps> = ({
  image,
  title,
  description,
  href,
  className,
}) => {
  return (
    <Container
      href={href}
      className={className}
      target="_blank"
      rel="noreferrer"
      image={image}
    >
      <img src={PlayerImage} alt="Assistir" />

      <strong>{title}</strong>

      <p>{description}</p>
    </Container>
  );
};

export default VideoPreview;
