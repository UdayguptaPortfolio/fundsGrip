import { createTheme } from "@mui/material/styles";
import { pirksColors } from "./colors";

const customSpacing = createTheme({
  spacing: (factor) => `${factor}px`
});

export const PirksTheme = createTheme(
  {
    ...customSpacing,
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: pirksColors.shamrock.default
          }
        }
      },
      MuiButton: {
        root: {
          styleOverrides: {
            borderRadius: "40px",
            backgroundColor: "transparent"
          }
        }
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: "black",
            fontSize: "18px",
            letterSpacing: "3px"
          }
        }
      },
      MuiInput: {
        styleOverrides: {
          input: {
            padding: "15px 0 15px"
          },
          root: {
            fontSize: "1.5rem"
          }
        }
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            height: "40px",
            borderRadius: "0px"
          }
        }
      },
      // MuiTypography: {
      //   root: {
      //     color: "black"
      //   }
      // },
      MuiListItemText: {
        styleOverrides: {
          root: {
            opacity: "none"
          }
        }
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: "0px"
          }
        }
      },
      MuiDialog: {
        styleOverrides: {
          paperWidthLg: {
            width: "100%",
            height: "100%",
            padding: "0px",
            margin: "0px",
            borderRadius: "none",
            boxShadow: "none"
          },
          container: {
            backgroundColor: "#fff",
            alignItems: "flex-end",
            alignItems: "center"
          }
        }
      },
      MuiTypography: {
        root: {
          color: "black"
        },
        styleOverrides: {
          fontFamily: "Averta-Semibold",
          margin: "0px",
          padding: "0px",
          h1: {
            fontSize: "2.25rem"
          },
          h2: {
            fontSize: "1.625rem"
          },
          h3: {
            fontSize: "1.5rem"
          },
          h4: {
            fontSize: "1.25rem"
          },
          h5: {
            fontSize: "1.25rem"
          },
          subTitle1: {
            fontSize: "1rem"
          },
          subTitle2: {
            fontSize: "0.75rem"
          }
        }
      }
    }
  },
  {
    pirksColors
  }
);
