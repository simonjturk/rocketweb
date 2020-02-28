module.exports = {
  plugins: [
    require('postcss-import')(),
    require('tailwindcss')('./src/css/tailwind.config.js'),
    require('autoprefixer'),
    require('@fullhuman/postcss-purgecss')({

      // Specify the paths to all of the template files in your project 
      content: [
        './site/**/*.html'
        // etc.
      ],

      // Include any special characters you're using in this regular expression
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    }),
    require('postcss-reporter'),
  ],
};