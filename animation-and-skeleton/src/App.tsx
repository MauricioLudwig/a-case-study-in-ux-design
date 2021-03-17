import { useContext, Fragment } from 'react';
import styled from 'styled-components';
import { AnimationBox } from './components/AnimationBox';
import { AppContext } from './contexts/app-context';
import { ActivatePage } from './pages/Activate';

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .box {
    width: 25rem;
    padding: 3rem;
  }
`;

export const App = () => {
  const { page, handleOnSetPage } = useContext(AppContext);

  if (!handleOnSetPage) {
    return null;
  }

  const renderPageHandler = () => {
    switch (page) {
      case 0:
        return (
          <div>
            <h4>test</h4>
            <ul>
              <li>lorem ipsum 1</li>
              <li>lorem ipsum 2</li>
              <li>lorem ipsum 3</li>
              <li>lorem ipsum 4</li>
            </ul>
            <div>
              <button onClick={() => handleOnSetPage(1)}>Yes</button>
              <button onClick={() => handleOnSetPage(2)}>No</button>
            </div>
          </div>
        );
      case 1:
        return (
          <div>
            <h4>hello</h4>
            <p>form</p>
            <a href="www.google.com">my link here</a>
          </div>
        );
      case 2:
        return <ActivatePage />;
      default:
        throw new Error(`${page} did not match any cases.`);
    }
  };

  return (
    <Fragment>
      <Container>
        <div className="box">{renderPageHandler()}</div>
      </Container>
      <AnimationBox />
    </Fragment>
  );
};
