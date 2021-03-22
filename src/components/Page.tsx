import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div``;

type TProps = {
  title: string;
  children: React.ReactNode;
};

export const Page: React.FC<TProps> = ({ title, children }) => (
  <Container>
    <header>
      <Link to="/">Back</Link>
      <h1>{title}</h1>
    </header>
    <main>{children}</main>
  </Container>
);
