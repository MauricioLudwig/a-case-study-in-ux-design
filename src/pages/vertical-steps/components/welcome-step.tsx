import { Typography, Button } from "antd";
import styled from "styled-components";

const { Title, Text } = Typography;

const Container = styled.main`
  display: flex;
  justify-content: center;

  .box {
    text-align: center;
    margin-top: 3rem;
    max-width: 55rem;

    &__btn {
      margin-top: 1rem;
    }
  }
`;

type TProps = {
  onClick: () => void;
};

export const WelcomeStep: React.FC<TProps> = ({ onClick }) => (
  <Container>
    <div className="box">
      <Title>What is Lorem Ipsum?</Title>
      <Text>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Text>
      <div className="box__btn">
        <Button type="primary" size="large" shape="round" onClick={onClick}>
          Let's get started!
        </Button>
      </div>
    </div>
  </Container>
);
