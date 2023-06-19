import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

    i18n
    .use(initReactI18next)
    .init({
        lng: 'zh-HK',
        fallbackLng: 'zh-HK',
        resources: {
        en: {
            translation: {
            'Welcome to React': 'Welcome to React and react-i18next',
            },
        },
        },
    });

export default i18n;
