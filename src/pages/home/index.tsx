import { Link } from "react-router-dom";
import styled from "styled-components";
import { components } from "../";
import { Card } from "../../components/Card";
import { respondTo } from "../../styles";
import { Row, Col, Typography } from "antd";

const { Title } = Typography;

const Layout = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;

  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
  }

  .content {
    flex: 3;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 25px;

  > a {
    transition: all .25s ease-in-out;

    & > div {
      height: 100%;
    }

    &:hover {
      transform: translateY(-10px);
    }
  }

  a:hover {

  }

  ${respondTo.sm`
    grid-template-columns: 1fr 1fr;
  `}

  ${respondTo.md} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const Home = () => (
  <Layout>
    <div className="header">
      <Title level={1}>A case study in UX design</Title>
    </div>
    <div className="content">
      <Row justify="center">
        <Col span={12}>
          <Grid>
            {components.map(({ name, path }) => (
              <Link key={path} to={`/${path}`}>
                <Card>{name}</Card>
              </Link>
            ))}
          </Grid>
        </Col>
      </Row>
    </div>
  </Layout>
);
