import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useState,
} from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';

import { lightTheme, darkTheme } from 'styles';

interface LMProps {
  isLightMode: boolean;
  toggleLightMode: () => void;
}

const LightModeContext = createContext<LMProps>({
  isLightMode: true,
  toggleLightMode: () => {},
});

const LightModeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isLightMode, setLightMode] = useState(true);
  const toggleLightMode = () => setLightMode(!isLightMode);

  return (
    <LightModeContext.Provider value={{ isLightMode, toggleLightMode }}>
      {children}
    </LightModeContext.Provider>
  );
};

const useToggleLightMode = () => useContext(LightModeContext);

const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { isLightMode } = useToggleLightMode();

  return (
    <SCThemeProvider theme={isLightMode ? lightTheme : darkTheme}>
      {children}
    </SCThemeProvider>
  );
};

export { ThemeProvider, useToggleLightMode, LightModeProvider };
