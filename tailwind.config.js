module.exports = {
    content: [
      "./app/**/*.html.erb",
      "./app/helpers/**/*.rb",
      "./app/javascript/**/*.js"
    ],
    theme: {
      extend: {
        screens: {
          // This creates a custom variant called "short" that applies when height is 829px or less
          'short': {'raw': '(max-height: 829px)'},
        },
      },
    },
    plugins: [],
  }
  