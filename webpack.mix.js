const mix = require("laravel-mix");

require("laravel-mix-tailwind");


mix
  .js("src/assets/js/app.js", "dist/js")
  .postCss("src/assets/css/app.css", "dist/css", [
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
    ])
  .tailwind("./tailwind.config.js");



