import { extendTheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  primary: {
    bg: "#F0F8F1 ",
    bgWhite: "#FFFFFF",
    teal: "#008080",
    black: "#000000",
    textPrimary: "#2D3748",
    gray: "#718096",
    textWhite: "#FFFFFF",
    red: "#E53E3E",
    linkColor: "#3182CE",
    lightGray: "#DCE1E7",
    blackAlpha700: "#000000A3",
    blackAlpha600: "#0000007A",
    blackAlpha400: "#0000003D",
    blackAlpha500: "#0000005C",
    green600: "#25855A",
    tagBgColor: "#C6F6F1",
    tagLabelColor: "#25855A",
    tagInactiveBgColor: "#EBEBEB",
    tagInactiveLabelColor: "#7A7A7A",
  },
  secondary: "#7f4eec",
  tertiary: {
    dark: "#1a3f3b",
    light: "#34c1a6",
  },
};

export const theme = extendTheme({ colors });
