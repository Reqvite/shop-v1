import { extendTheme } from "@chakra-ui/react";

const activeLabelStyles = {
  transform: "scale(0.85) translateY(-35px)",
};

export const theme = extendTheme({
  colors: {
    mainBgColorLight: "#ffffff",
    mainBgColorDark: "#0c0d0d",
    mainColorLight: "#0c0d0d",
    mainColorDark: "#ffffff",
    errorColorLight: "#F56565",
    errorColorDark: "#E53E3E",
    accentColor: "#ff552e",
    accentColorTransparent: "rgba(255,85,46,0.3)",
  },
  shadows: {
    mainShadow: "2px 5px 50px rgba(255,85,46,0.4)",
  },
  sizes: {
    headerHeight: "60px",
    drawerFooterHeight: "113px",
    drawerWidth: "380px",
  },
  borders: {
    borderMain: "2px solid var(--chakra-colors-accentColor)",
  },
  zIndices: {
    navbar: 100,
    drawer: 101,
    drawerFooter: 102,
  },
  components: {
    Button: {
      variants: {
        primary: {
          color: "white",
          border: "2px solid transparent",
          display: "inline-flex",
          fontWeight: 600,
          bg: "var(--chakra-colors-accentColor)",
          _hover: {
            background: "transparent",
            border: "2px solid var(--chakra-colors-accentColor)",
            color: "var(--chakra-colors-accentColor)",
            _disabled: {
              backgroundColor: "#f57356",
            },
          },
          cursor: "pointer",
        },
        secondary: {
          border: "2px solid var(--chakra-colors-accentColor)",
          color: "var(--chakra-colors-accentColor)",
          _hover: {
            background: "var(--chakra-colors-accentColor)",
            borderColor: "transparent",
            color: "white",
          },
        },
      },
    },
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles,
              },
            },
            "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label":
              {
                ...activeLabelStyles,
              },
            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              position: "absolute",
              backgroundColor: "transparent",
              pointerEvents: "none",
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: "left top",
            },
          },
        },
      },
    },
  },
});
