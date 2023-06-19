import Image from 'next/image'
import { Inter } from 'next/font/google'
import i18n from '../i18n'
import { setCookie } from 'cookies-next'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const setLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'zh-HK' : 'en');
    setCookie('NEXT_LOCALE', i18n.language, { path: '/' })
  }
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
        <button onClick={setLanguage}>{i18n.language === 'zh-HK' ? '中文' : 'English'}</button>
    </main>
  )
}
