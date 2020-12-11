import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../layout/reset';
import theme from '../layout/theme';

const withThemeProvider = (Story) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div style={{ margin: '2em' }}>
        <Story />
      </div>
    </ThemeProvider>
  );
};
export const decorators = [withThemeProvider];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'gray',
    values: [
      { name: 'gray', value: '#f2f2f2' },
      { name: 'white', value: '#fff' },
      { name: 'dark', value: '#101214' },
    ],
  },
};
