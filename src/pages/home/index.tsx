import { Link } from "react-router-dom";
import styled from "styled-components";
import { components } from "../";
import { Card } from "../../components/Card";
import { respondTo } from "../../styles";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 25px;

  ${respondTo.sm`
    grid-template-columns: 1fr 1fr;
  `}

  ${respondTo.md} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const Home = () => (
  <main>
    <h1>A case study in UX design</h1>
    <Grid>
      {components.map(({ name, path }) => (
        <Link key={path} to={`/${path}`}>
          <Card>{name}</Card>
        </Link>
      ))}
    </Grid>
  </main>
);
