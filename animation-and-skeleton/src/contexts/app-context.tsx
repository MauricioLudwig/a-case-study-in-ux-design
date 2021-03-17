import React, { createContext, useState } from 'react';

type TAppContextProps = {
  page: number;
  handleOnSetPage?: (value: number) => void;
  enableAnimation: boolean;
  handleOnToggleAnimation?: () => void;
};

export const AppContext = createContext<TAppContextProps>({
  page: 0,
  enableAnimation: true,
});

type TProps = {
  children: React.ReactNode;
};

export const AppContextProvider: React.FC<TProps> = ({ children }) => {
  const [page, setPage] = useState(0);
  const [enableAnimation, toggleAnimation] = useState(true);

  const handleOnSetPage = (value: number): void => {
    setPage(value);
  };

  const handleOnToggleAnimation = (): void => {
    toggleAnimation(!enableAnimation);
  };

  return (
    <AppContext.Provider
      value={{
        page,
        handleOnSetPage,
        enableAnimation,
        handleOnToggleAnimation,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
