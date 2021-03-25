import styled from "styled-components";
import { colors } from "../styles";

const Container = styled.div`
  position: fixed;
  right: 3rem;
  bottom: 3rem;
  box-shadow: 0 19px 38px rgb(0 0 0 / 30%), 0 15px 12px rgb(0 0 0 / 22%);
  min-height: 180px;
  min-width: 180px;
  background: ${colors.white};
  padding: 3rem;
`;

export const Settings: React.FC = () => {
  return <Container>Settings</Container>;
};
