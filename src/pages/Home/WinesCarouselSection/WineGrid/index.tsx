import React from "react";

import { WineDetails } from "../../../../components/WineDetails";
import { Container } from "./styles";
import { wines } from "../winesData";

const WineGrid: React.FC = () => {
  return (
    <Container>
      {wines.map((wine) => (
        <WineDetails key={wine.name} data={wine} />
      ))}
    </Container>
  );
};

export { WineGrid };
