"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getIosSplashConfig = getIosSplashConfig;
const defaultResizeMode = 'contain';
const defaultBackgroundColor = '#ffffff';
// TODO: Maybe use an array on splash with theme value. Then remove the array in serialization for legacy and manifest.
function getIosSplashConfig(config, props) {
  // Respect the splash screen object, don't mix and match across different splash screen objects
  // in case the user wants the top level splash to apply to every platform except iOS.

  // We are using the config plugin
  if (props) {
    const splash = props;
    return {
      image: splash.image ?? null,
      resizeMode: splash.resizeMode ?? defaultResizeMode,
      backgroundColor: splash.backgroundColor ?? defaultBackgroundColor,
      tabletImage: splash.tabletImage ?? null,
      tabletBackgroundColor: splash.tabletBackgroundColor,
      dark: {
        image: splash.dark?.image ?? null,
        backgroundColor: splash.dark?.backgroundColor,
        tabletImage: splash.dark?.tabletImage ?? null,
        tabletBackgroundColor: splash.dark?.tabletBackgroundColor
      },
      imageWidth: splash.imageWidth
    };
  }
  if (config.ios?.splash) {
    const splash = config.ios?.splash;
    const image = splash.image ?? null;
    return {
      image,
      resizeMode: splash.resizeMode ?? defaultResizeMode,
      backgroundColor: splash.backgroundColor ?? defaultBackgroundColor,
      tabletImage: splash.tabletImage ?? null,
      tabletBackgroundColor: splash.tabletBackgroundColor,
      dark: {
        image: splash.dark?.image ?? null,
        backgroundColor: splash.dark?.backgroundColor,
        tabletImage: splash.dark?.tabletImage ?? null,
        tabletBackgroundColor: splash.dark?.tabletBackgroundColor
      },
      imageWidth: 200
    };
  }
  if (config.splash) {
    const splash = config.splash;
    const image = splash.image ?? null;
    return {
      image,
      resizeMode: splash.resizeMode ?? defaultResizeMode,
      backgroundColor: splash.backgroundColor ?? defaultBackgroundColor,
      tabletImage: null,
      tabletBackgroundColor: null,
      dark: {
        image: null,
        backgroundColor: null,
        tabletImage: null,
        tabletBackgroundColor: null
      },
      imageWidth: 200
    };
  }
  return {
    backgroundColor: '#ffffff',
    resizeMode: 'contain',
    tabletImage: null,
    tabletBackgroundColor: null,
    imageWidth: 200
  };
}
//# sourceMappingURL=getIosSplashConfig.js.map