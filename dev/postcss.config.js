module.exports = {
  plugins: [
    require('postcss-import')(),
    require('tailwindcss')('./src/css/tailwind.config.js'), //I'm not sure if this is the best way to do this considering I have a theme.  Sure;y that should be doing this??
    require('autoprefixer'),

    require('postcss-reporter'),
  ],
};