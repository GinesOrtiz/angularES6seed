const TranslateService = () => {
    'use strict';
    let navigatorLang = navigator.language || navigator.userLanguage;
    let config = {
        available: ['en'],
        standard: 'en',
        translations: {},
        lang:  navigatorLang ? navigatorLang.split('-')[0].toLowerCase() : config.standard
    };

    const getAllLangs = () => {
        return config.available;
    };

    const setLang = (lang) => {
        config.lang = lang;
    };

    const addLang = (moduleKey, translations) => {
        Object.keys(translations).forEach((langKey) => {
            if (!config.translations[langKey]) {
                config.translations[langKey] = {};
            }
            config.translations[langKey][moduleKey] = JSON.parse(translations[langKey]);
        });
    };

    const getTranslation = (translationKey, options = []) => {
        let convertedKey = translationKey.split('.');
        let translation = config.translations[config.lang] || config.translations[config.standard];

        convertedKey.forEach((key) => {
            translation = !translation[key] ? null : translation[key];
        });

        if (!translation) {
            return translationKey + ' (translation not found)';
        }

        options.forEach((key)=> {
            translation = translation.replace('%s', key);
        });

        return translation;
    };

    return {
        getAllLangs,
        setLang,
        addLang,
        getTranslation
    };
};
TranslateService.$inject = [];

const TranslateFilter = (TranslationService) => {
    'use strict';
    return (input, options) => {
        return TranslationService.getTranslation(input, options);
    };
};
TranslateFilter.$inject = ['TranslationService'];

export {TranslateService, TranslateFilter};