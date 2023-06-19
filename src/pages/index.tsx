import { setCookie } from 'cookies-next'
import i18n from '../i18n';
import { useEffect } from 'react';

export default function Home() {

  // get locale from path
  useEffect(() => {
    const locale = window.location.pathname.split('/')[1];
    if (locale && locale !== i18n.language) {
      i18n.changeLanguage(locale);
      setCookie('NEXT_LOCALE', locale)
    }
  }, []);

  const setLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'zh-HK' : 'en');
    setCookie('NEXT_LOCALE', i18n.language)
  }
  return (
    <main className="" >
        <button onClick={setLanguage}>{i18n.language === 'zh-HK' ? '中文' : 'English'}</button>
    </main>
  )
}
