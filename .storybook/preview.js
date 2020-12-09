import { ThemeProvider } from 'styled-components';
import theme from '../layout/theme';

const withThemeProvider = (Story) => {
  return (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  );
};
export const decorators = [withThemeProvider];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
