import { observer } from 'mobx-react';
import { ThemeProvider } from 'styled-components';

import { light, dark } from 'layout/theme';
import GlobalStyle from 'layout/reset';

import ThemeStore from 'stores/Theme';

interface Props {
  children: React.ReactNode;
}

const StyledProvider = observer(({ children }: Props) => {
  const { currentTheme } = ThemeStore;

  console.log('currentTheme', currentTheme);
  const theme = currentTheme === 'light' ? light : dark;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
});

export default StyledProvider;
