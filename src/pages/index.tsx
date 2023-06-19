import { setCookie } from 'cookies-next'
import i18n from '../i18n';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  // get locale from path
  useEffect(() => {

    if (router.locale !== i18n.language) {
      i18n.changeLanguage(router.locale);
      setCookie('NEXT_LOCALE', router.locale)
    }
  }, [router.locale]);

  const setLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'zh-HK' : 'en');
    setCookie('NEXT_LOCALE', i18n.language)
    router.replace(router.pathname, router.asPath, { locale: i18n.language })
  }

  return (
    <main className="" >
        <button onClick={setLanguage}>{i18n.language === 'zh-HK' ? '中文' : 'English'}</button>
    </main>
  )
}
