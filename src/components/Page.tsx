import styled from "styled-components";
import { Link } from "react-router-dom";
import { Typography } from "antd";
import { IoArrowUndoCircleOutline } from "react-icons/io5";

const { Title } = Typography;

const Container = styled.div`
  header.header {
    position: sticky;
    top: 0;
    z-index: 200;
    background: #fff;
    color: rgba(0, 0, 0, 0.85);
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 2px 8px #f0f1f2;

    a {
      display: flex;
      align-items: center;
      color: inherit;
      font-size: 2.5rem;
      margin-right: 1rem;
    }

    h1 {
      margin: 0;
    }
  }

  main.main {
    height: calc(100vh - 80px);
    width: 100vw;
  }
`;

type TProps = {
  title: string;
  children: React.ReactNode;
};

export const Page: React.FC<TProps> = ({ title, children }) => (
  <Container>
    <header className="header">
      <Link to="/">
        <IoArrowUndoCircleOutline />
      </Link>
      <Title level={1}>{title}</Title>
    </header>
    <main className="main">{children}</main>
  </Container>
);
