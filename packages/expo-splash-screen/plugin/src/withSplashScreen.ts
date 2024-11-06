import { AndroidSplashConfig } from '@expo/prebuild-config/build/plugins/unversioned/expo-splash-screen/getAndroidSplashConfig';
import { IOSSplashConfig } from '@expo/prebuild-config/build/plugins/unversioned/expo-splash-screen/getIosSplashConfig';
import { withAndroidSplashScreen } from '@expo/prebuild-config/build/plugins/unversioned/expo-splash-screen/withAndroidSplashScreen';
import { withIosSplashScreen } from '@expo/prebuild-config/build/plugins/unversioned/expo-splash-screen/withIosSplashScreen';
import { ConfigPlugin, createRunOncePlugin } from 'expo/config-plugins';

const pkg = require('expo-splash-screen/package.json');

type PluginConfig = {
  backgroundColor: string;
  imageWidth?: number;
  image?: string | null;
  android: AndroidSplashConfig;
  ios: IOSSplashConfig;
};

const withSplashScreen: ConfigPlugin<PluginConfig> = (config, props) => {
  const imageWidth = props ? props.imageWidth : 200;
  const android: AndroidSplashConfig = {
    ...config.splash,
    ...config.android?.splash,
    ...props,
    ...props?.android,
    imageWidth,
  };
  const ios = {
    ...config.splash,
    ...config.ios?.splash,
    ...props,
    ...props?.ios,
    imageWidth,
  };

  config = withAndroidSplashScreen(config, android);
  config = withIosSplashScreen(config, ios);
  return config;
};

export default createRunOncePlugin(withSplashScreen, pkg.name, pkg.version);
