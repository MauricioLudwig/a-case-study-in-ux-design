import styled from "styled-components";
import { Card } from "antd";

const Container = styled.div`
  position: fixed;
  right: 3rem;
  bottom: 3rem;
`;

type TProps = {
  children: React.ReactNode;
};

export const Configuration: React.FC<TProps> = ({ children }) => (
  <Container>
    <Card title="Configuration">{children}</Card>
  </Container>
);
