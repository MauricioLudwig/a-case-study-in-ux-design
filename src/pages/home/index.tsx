import styled from "styled-components";
import { components } from "../";

const Grid = styled.div``;

export const Home = () => (
  <main>
    <h1>A case study in UX design</h1>
    <Grid>
      {components.map(({ path }) => (
        <div key={path}>{path}</div>
      ))}
    </Grid>
  </main>
);
