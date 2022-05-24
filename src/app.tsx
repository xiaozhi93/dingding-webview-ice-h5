import { runApp, IAppConfig } from 'ice';

const appConfig: IAppConfig = {
  app: {
    rootId: 'ice-container',
    onLaunch() {
      if (window.dd) {
        window.dd.enableUrlChangeDetect = true;
      }
    },
  },
};

runApp(appConfig);
