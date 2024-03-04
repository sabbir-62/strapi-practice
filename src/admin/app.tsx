export default {
  config: {
    locales: [
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],

    // auth: {
    //   hillside,
    // },
    // head: {
    //   favicon: hillside,
    // }, 
    // menu: {
    //   hillside,
    // },

    translations: {
      en: {
        "app.components.LeftMenu.navbrand.title": "HIC Admin Dashboard",
        "Auth.form.welcome.title": "Welcome to Hillside",
        "Auth.form.welcome.subtitle": "Login to your account",
      },
    },
  },
  bootstrap(app : any) {
    console.log(app);
  },
};
