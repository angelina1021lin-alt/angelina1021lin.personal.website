/* Shared design tokens. Edit colors, fonts and spacing here and every page updates. */
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-background": "#1a1c1a",
        "tertiary-fixed-dim": "#e8bf91",
        "on-surface": "#1a1c1a",
        "on-tertiary-fixed-variant": "#5d411d",
        "on-primary-fixed": "#1c1b1b",
        "primary": "#000000",
        "tertiary-fixed": "#ffddb7",
        "on-secondary": "#ffffff",
        "secondary-fixed-dim": "#b3cdb2",
        "error-container": "#ffdad6",
        "on-secondary-fixed": "#0a200e",
        "on-surface-variant": "#444748",
        "outline": "#747878",
        "on-primary-fixed-variant": "#484646",
        "inverse-on-surface": "#f2f1ee",
        "inverse-primary": "#c9c6c5",
        "surface-container-high": "#e9e8e5",
        "error": "#ba1a1a",
        "surface-variant": "#e3e2e0",
        "secondary-fixed": "#cfeacd",
        "on-tertiary": "#ffffff",
        "on-error": "#ffffff",
        "on-tertiary-fixed": "#2a1700",
        "background": "#faf9f6",
        "surface-dim": "#dbdad7",
        "tertiary-container": "#2a1700",
        "outline-variant": "#c4c7c7",
        "on-primary-container": "#858383",
        "surface-container": "#efeeeb",
        "inverse-surface": "#2f312f",
        "on-tertiary-container": "#a07e54",
        "tertiary": "#000000",
        "on-secondary-fixed-variant": "#354c37",
        "surface": "#faf9f6",
        "surface-container-lowest": "#ffffff",
        "primary-container": "#1c1b1b",
        "surface-container-low": "#f4f3f0",
        "secondary-container": "#cfeacd",
        "surface-container-highest": "#e3e2e0",
        "on-secondary-container": "#526a53",
        "surface-tint": "#5f5e5e",
        "primary-fixed": "#e5e2e1",
        "secondary": "#4d644e",
        "primary-fixed-dim": "#c9c6c5",
        "on-primary": "#ffffff",
        "on-error-container": "#93000a",
        "surface-bright": "#faf9f6"
      },
      borderRadius: { DEFAULT: "0.25rem", lg: "0.5rem", xl: "0.75rem", full: "9999px" },
      spacing: {
        "space-xs": "0.375rem", "space-md": "1.5rem", "gutter-sm": "1rem",
        "space-sm": "0.75rem", "gutter": "2rem", "margin-desktop": "5rem",
        "space-xl": "4rem", "gutter-lg": "3rem", "margin-mobile": "1.5rem",
        "space-lg": "2.5rem", "margin": "3rem"
      },
      fontFamily: {
        "display-lg": ["Newsreader", "Georgia", "serif"],
        "body-md": ["Manrope", "system-ui", "sans-serif"]
      },
      fontSize: {
        /* Fluid: 2.5rem on phones, up to the original 4.5rem on wide screens */
        "display-lg": ["clamp(2.5rem, 1.6rem + 3.6vw, 4.5rem)", { lineHeight: "1.1", letterSpacing: "-0.025em", fontWeight: "400" }],
        "body-md": ["1rem", { lineHeight: "1.65rem", letterSpacing: "0", fontWeight: "400" }]
      }
    }
  }
};
