import { setCookie } from 'cookies-next'
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

export default function Home() {

  const { t  } = useTranslation();
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
