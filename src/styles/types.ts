import theme from './theme';
import { sizes } from './utils';
import { ThemedCssFunction } from '../../node_modules/@types/styled-components';

export type BaseStyled = {
  theme?: typeof theme;
  className?: string;
}

export type MediaUtils = {
  [x in keyof typeof sizes]: ThemedCssFunction<typeof theme>;
}
