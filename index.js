const path = require("path");

module.exports = {
  "root": path.join(__dirname, "fonts"),

  // where to find a locale's fonts in the fonts directory
  "locale-to-subdirs": { 
  },

  // what font types are enabled and what are the extensions of
  // the font files.
  //
  // valid types are embedded-opentype, woff, truetype, svg
  "enabled-types": [ "eot", "woff", "ttf", "svg" ],

  // The fonts. The name of the font must be the same as the font
  // in the fonts directory.
  "fonts": {
      "lora-bold": {
        "fontFamily": "Lora",
        "fontStyle": "normal",
        "fontWeight": "700",
        "local": [ "Lora Bold", "Lora-Bold" ]
      },
      "lora-bolditalic": {
        "fontFamily": "Lora",
        "fontStyle": "normal",
        "fontWeight": "700",
        "local": [ "Lora Bold Italic", "Lora-BoldItalic" ]
      },
      "lora-italic": {
        "fontFamily": "Lora",
        "fontStyle": "italic",
        "fontWeight": "400",
        "local": [ "Lora Italic", "Lora-Italic" ]
      },
      "lora-regular": {
        "fontFamily": "Lora",
        "fontStyle": "normal",
        "fontWeight": "400",
        "local": [ "Lora", "Lora" ]
      }
  }
};
