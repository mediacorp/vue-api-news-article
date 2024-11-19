# Important Note
Transferred this repository from my account to Mediacorp Git account to test on transferring for Wondershop related task

### News Article Page: Using Vue.js to work with API
This is the repository created by Jas Sta. Ana for a single page application created using Vue.js that reads the API and displays it in a news article format. This is built with libraries such as Bootstrap and Font Awesome. To display the API, local data was used (to approach the CORS issue encounted) with Axios.

### Steps to build and execute
- Installed with Vue CLI
- Adding additional modules 
  - Boostrap - used for the responsive layout of the page
  - FontAwesome - used for the icon fonts used across the page (Buttons, Utility Panels and Buttons)
  - Moment.js - used to convert the datestamp to the given date format
  - Axios - used instead of Fetch because it is more compatible with older browsers
  - Vuex - added to allow better overall organisation of the structure and will be useful if there will be different more components to be added in the future
- Separated components into five:
  - Menu Header
  - Main Article
  - Read Next
  - Footer
  - Utility Panel (Added a simple execution for the following features: Back to Top, Share button will copy the current article URL to the clipboard and Zoom (text) button will zoom the entire page once)
- Separated the style files into two folders to help better organise for future changes
  - base (fonts, reset and variables)
  - components (menu header, main article, read next, footer and utility panel)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
