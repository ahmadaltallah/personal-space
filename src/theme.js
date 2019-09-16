const theme = {
  styles: {
    h3: {
      fontSize: 32,
      fontFamily: "heading",
      fontWeight: "heading",
      color: "primary",
      mt: 4,
      mb: 2
    }
  },
  breakpoints: ["30em", "60em"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 16, 20, 24, 36, 48, 80, 96, 128],
  borderWidths: [0, "1px", "2px", "4px", "8px", "16px", "32px"],
  radii: [0, "2px", "4px", "16px", "9999px", "100%"],
  lineHeights: ["1.0", "1.25", "1.5"],
  measures: ["20em", "30em", "34em"],
  typefaces: {
    helvetica: "Helvetica, sans-serif",
    serif: "athelas, georgia, times, serif",
    sansSerif:
      '"Segoe UI", system-ui, -apple-system, BlinkMacSystemFont, , "avenir next", avenir, "helvetica neue", helvetica, ubuntu, roboto, noto, "segoe ui", arial, sans-serif',
    mono: "Consolas, monaco, monospace"
  },
  textStyles: {
    caps: {
      textTransform: "uppercase",
      letterSpacing: "0.1em"
    },
    "tracked-tight": {
      letterSpacing: "-0.05em"
    },
    copy: {
      lineHeight: 1.5,
      maxWidth: "30em"
    },
    title: {
      lineHeight: 1.25,
      maxWidth: "30em"
    },
    capitalize: {
      textTransform: "capitalize"
    }
  },
  initialColorMode: "light",
  colors: {
    modes: {
      light: {
        text: "#000",
        background: "#fff",
        primary: "hsl(120, 100%, 40%)",
        secondary: "hsl(180, 50%, 40%)",
        accent: "hsl(120, 100%, 90%)",
        muted: "hsl(120, 20%, 7%)",
        gray: "hsl(0, 0%, 75%)"
      },
      black: {
        text: "#fff",
        background: "#000",
        primary: "#0ff",
        secondary: "#0fc",
        accent: "#f0f",
        muted: "#111",
        gray: "#888"
      },
      dark: {
        text: "#fff",
        background: "hsl(180, 5%, 15%)",
        primary: "hsl(180, 100%, 57%)",
        secondary: "hsl(50, 100%, 57%)",
        accent: "hsl(310, 100%, 57%)",
        muted: "hsl(180, 5%, 5%)",
        gray: "hsl(180, 0%, 70%)"
      },
      deep: {
        text: "#fff",
        background: "hsl(230,25%,18%)",
        primary: "hsl(260, 100%, 80%)",
        secondary: "hsl(290, 100%, 80%)",
        highlight: "hsl(260, 20%, 40%)",
        accent: "hsl(290, 100%, 80%)",
        muted: "hsla(230, 20%, 0%, 20%)",
        gray: "hsl(210, 50%, 60%)"
      },
      hack: {
        text: "hsl(120, 100%, 75%)",
        background: "hsl(120, 20%, 10%)",
        primary: "hsl(120, 100%, 40%)",
        secondary: "hsl(173, 50%, 40%)",
        accent: "hsl(120, 100%, 90%)",
        muted: "hsl(120, 20%, 7%)",
        gray: "hsl(120, 20%, 40%)"
      },
      pink: {
        text: "hsl(350, 80%, 10%)",
        background: "hsl(350, 100%, 90%)",
        primary: "hsl(350, 100%, 50%)",
        secondary: "hsl(327, 100%, 30%)",
        accent: "hsl(280, 100%, 20%)",
        muted: "hsl(350, 100%, 88%)",
        gray: "hsl(350, 40%, 50%)"
      }
    },
    "dark-red": "#e7040f",
    red: "#ff4136",
    "light-red": "#ff725c",
    "washed-red": "#ffdfdf",
    orange: "#ff6300",
    gold: "#ffb700",
    yellow: "#ffd700",
    "light-yellow": "#fbf1a9",
    "washed-yellow": "#fffceb",
    purple: "#5e2ca5",
    "light-purple": "#a463f2",
    "dark-pink": "#d5008f",
    "hot-pink": "#ff41b4",
    pink: "#ff80cc",
    "light-pink": "#ffa3d7",
    "dark-green": "#137752",
    green: "#19a974",
    "light-green": "#9eebcf",
    "washed-green": "#e8fdf5",
    navy: "#001b44",
    "dark-blue": "#00449e",
    blue: "#357edd",
    "light-blue": "#96ccff",
    "lightest-blue": "#cdecff",
    "washed-blue": "#f6fffe",
    black: "#000",
    "near-black": "#111",
    "dark-gray": "#333",
    "mid-gray": "#555",
    gray: "#777",
    silver: "#999",
    "light-silver": "#aaa",
    "moon-gray": "#ccc",
    "light-gray": "#eee",
    "near-white": "#f4f4f4",
    white: "#fff",
    "black-90": "rgba(0,0,0,.9)",
    "black-80": "rgba(0,0,0,.8)",
    "black-70": "rgba(0,0,0,.7)",
    "black-60": "rgba(0,0,0,.6)",
    "black-50": "rgba(0,0,0,.5)",
    "black-40": "rgba(0,0,0,.4)",
    "black-30": "rgba(0,0,0,.3)",
    "black-20": "rgba(0,0,0,.2)",
    "black-10": "rgba(0,0,0,.1)",
    "black-05": "rgba(0,0,0,.05)",
    "black-025": "rgba(0,0,0,.025)",
    "black-0125": "rgba(0,0,0,.0125)",
    "white-90": "rgba(255,255,255,.9)",
    "white-80": "rgba(255,255,255,.8)",
    "white-70": "rgba(255,255,255,.7)",
    "white-60": "rgba(255,255,255,.6)",
    "white-50": "rgba(255,255,255,.5)",
    "white-40": "rgba(255,255,255,.4)",
    "white-30": "rgba(255,255,255,.3)",
    "white-20": "rgba(255,255,255,.2)",
    "white-10": "rgba(255,255,255,.1)",
    "white-05": "rgba(255,255,255,.05)",
    "white-025": "rgba(255,255,255,.025)",
    "white-0125": "rgba(255,255,255,.0125)"
  },
  shadows: {
    card: "0 0 4px rgba(0, 0, 0, .125)"
  },
  variants: {
    card: {
      p: 3,
      borderRadius: "default",
      bg: "white",
      boxShadow: "card"
    },
    badge: {
      color: "white",
      bg: "primary",
      p: 1,
      borderRadius: "default"
    }
  }
};

export default theme;
