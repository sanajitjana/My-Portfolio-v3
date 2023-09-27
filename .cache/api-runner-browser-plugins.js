module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-styled-components/gatsby-browser.js'),
      options: {"plugins":[],"displayName":true,"fileName":true,"minify":true,"namespace":"","transpileTemplateLiterals":true,"topLevelImportPaths":[],"pure":false,"disableVendorPrefixes":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-image/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"sanajitjana","short_name":"sanajitjana","start_url":"/","background_color":"#020c1b","theme_color":"#0a192f","display":"minimal-ui","icon":"src/images/logo.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"dedd91ab2778735e31d0a7ccbb422fb7"},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":700,"linkImagesToOriginal":true,"quality":90,"showCaptions":false,"markdownCaptions":false,"sizeByPixelDensity":false,"backgroundColor":"white","withWebp":false,"loading":"lazy","decoding":"async","disableBgImageOnAlpha":false,"disableBgImage":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"UA-200608746-1","head":false,"anonymize":false,"respectDNT":false,"exclude":[],"pageTransitionDelay":0,"enableWebVitalsTracking":false},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
