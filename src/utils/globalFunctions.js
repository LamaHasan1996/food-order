import { restaurants } from "./data";

export const makeTheme = (currentTheme) => {
  return {
    direction: "ltr",
    palette: {
      primary: {
        main: currentTheme?.elements?.colors?.orange,
      },
      secondary: {
        main: currentTheme?.elements?.colors?.blue,
      },
      black: {
        main: currentTheme?.elements?.colors?.black,
      },
      gray: {
        main: currentTheme?.elements?.colors?.gray,
        light: currentTheme?.elements?.colors?.lightGray,
      },
      green: {
        main: currentTheme?.elements?.colors?.green,
      },
    },
    globals: { ...currentTheme.elements },
  };
};

export const getDetails = (alias) => {
  return restaurants?.find((item) => item?.alias === alias);
};
