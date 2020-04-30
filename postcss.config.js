module.exports = {
  plugins: [
    require('postcss-import')(),
    require('tailwindcss')('./src/css/tailwind.config.js'), //I'm not sure if this is the best way to do this considering I have a theme.  Sure;y that should be doing this??
    require('autoprefixer'),
    require('@fullhuman/postcss-purgecss')({

      // Specify the paths to all of the template files in your project 
      content: [
        './site/**/*.html'
        // etc.
      ],
      whitelistPatterns: [/data-aos/],
      whitelistPatternsChildren: [/data-aos/],
      // Include any special characters you're using in this regular expression
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    }),
    require('postcss-reporter'),
  ],
};