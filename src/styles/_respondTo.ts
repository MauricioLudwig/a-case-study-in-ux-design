// @ts-nocheck
import { css } from "styled-components";
import { breakpoints } from "./_variables";

// TODO implement full type-checking
export const respondTo = Object.keys(breakpoints).reduce(
  (acc, curr) => ({
    ...acc,
    [curr]: (...args: TemplateStringsArray) => css`
      @media (min-width: ${breakpoints[curr]}) {
        ${css(...args)};
      }
    `,
  }),
  {} as Record<keyof typeof breakpoints, any>
);
