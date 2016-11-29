import langES from './lang/es.json';
import langEN from './lang/en.json';

const TranslateFactory = ($localStorage) => {
  'use strict';
  let config = {
    standard: 'EN',
    translations: {
      'ES': JSON.parse(langES),
      'EN': JSON.parse(langEN)
    }
  };
  let navigatorLang = navigator.language || navigator.userLanguage;
  config.lang = $localStorage.lang || navigatorLang.split('-')[0].toUpperCase() || config.standard;

  const setLang = (lang = config.standard) => {
    config.lang = lang;
    $localStorage.lang = lang;
  };

  const getTranslation = (translationKey) => {
    let convertedKey = translationKey.split('.');
    let translation = config.translations[config.lang];

    convertedKey.forEach((key) => {
      translation = translation[key];
    });

    return translation;
  };

  return {
    setLang,
    getTranslation
  };
};
TranslateFactory.$inject = ['$localStorage'];

const TranslateFilter = (TranslateFactory) => {
  'use strict';
  return (input) => {
    return TranslateFactory.getTranslation(input);
  };
};

TranslateFilter.$inject = ['TranslateFactory'];

export {TranslateFactory, TranslateFilter};