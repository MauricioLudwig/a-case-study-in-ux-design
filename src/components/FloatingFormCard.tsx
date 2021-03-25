import styled from "styled-components";

type TProps = {
  locked: boolean;
  children: React.ReactNode;
};

export const FloatingFormCard: React.FC<TProps> = ({
  locked = false,
  children,
}) => {
  return <div>floating card</div>;
};
