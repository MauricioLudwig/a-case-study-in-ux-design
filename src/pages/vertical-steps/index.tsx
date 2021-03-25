import { useState } from "react";
import styled from "styled-components";
import { WelcomeStep } from "./components/welcome-step";

const Container = styled.div`
  display: flex;
  height: 100%;
  min-height: 100vh;

  > div {
    flex: 1;
  }
`;

const WelcomeText = styled.div`
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 64px);

  .box {
    text-align: center;
    margin-top: 3rem;
    max-width: 55rem;
  }
`;

export const VerticalSteps = () => {
  const [inProgress, setInProgress] = useState(false);

  if (!inProgress) {
    return <WelcomeStep onClick={() => setInProgress(true)} />;
  }

  return (
    <Container>
      <div>get started</div>
      <div>my iamge</div>
    </Container>
  );
};
