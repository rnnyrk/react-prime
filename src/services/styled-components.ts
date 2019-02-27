import * as styledTypes from '../../node_modules/@types/styled-components';
import * as styledComponents from '../../node_modules/styled-components/dist/styled-components.browser.cjs';
import theme from 'styles/theme';

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  ServerStyleSheet,
  StyleSheetManager,
} = styledComponents as styledTypes.ThemedStyledComponentsModule<typeof theme>;

export { css, createGlobalStyle, keyframes, ThemeProvider, ServerStyleSheet, StyleSheetManager };
export default styled;
