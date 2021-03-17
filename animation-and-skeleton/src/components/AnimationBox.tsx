import { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../contexts/app-context';

const Container = styled.div`
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  max-width: 400px;
  border-radius: 4px;
  border: 1px solid #e9e9e9;
  background: #fff;
  padding: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  label {
    display: flex;
    align-items: center;

    > span {
      margin-left: 4px;
    }
  }
`;

export const AnimationBox = () => {
  const {
    enableAnimation,
    handleOnToggleAnimation,
    handleOnSetPage,
  } = useContext(AppContext);

  return (
    <Container>
      <div>
        <label>
          <input
            type="checkbox"
            checked={enableAnimation}
            onChange={handleOnToggleAnimation}
          />{' '}
          <span>Enable animation</span>
        </label>
      </div>
      <button onClick={() => (handleOnSetPage ? handleOnSetPage(0) : null)}>
        Start over
      </button>
    </Container>
  );
};
