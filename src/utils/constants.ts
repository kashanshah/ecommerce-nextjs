import { ConstantsType } from './types';

export const constants: ConstantsType = {
  title: { en: 'HURF', ur: 'حرف' },
  email: 'hurfclothing@gmail.com',
  address: 'Office # 320, Malak Jaafar Abdullah Jaffar Al Zarouni Building, Deira, UAE',
  phone: '+92 344 8227963',
  seo: {
    title: {
      en: 'HURF.PK',
      ur: 'حرف',
    },
    description: {
      en: 'A brand for women who love to express their individuality through the clothes they wear ♥️ Delivery all over Pakistan 🇵🇰',
    },
    keywords: {
      en: 'Fashion, Clothing, Pakistan',
    },
    robots: 'index, nofollow',
    author: 'Kashan Shah',
  },
  languages: {
    en: { en: 'English', ur: 'انگریزی' },
    ur: { en: 'Urdu', ur: 'اردو' },
  },
  isReduxPersistEnabled: false,
  socialLinks: {
    facebook: {
      link: 'https://www.facebook.com/hurfclothing',
      colorScheme: 'facebook',
      icon: 'facebook',
    },
    instagram: {
      link: 'https://www.instagram.com/hurf.pk',
      colorScheme: 'orange',
      icon: 'instagram',
    },
    whatsapp: {
      link: 'https://wa.me/923448227963',
      colorScheme: 'whatsapp',
      icon: 'whatsapp',
    },
  },
  copyright: { en: `© ${new Date().getFullYear()} All Rights Reserved` },
  recaptcha: {
    siteKey: '6Lc5y6UUAAAAACUR5d2VH1AmN-hSXKxcO7Iemq9h',
  },
  languageSwitcher: {
    title: {
      en: 'Change language',
      ur: 'زبان تبدیل کریں',
    },
  },
  stringTranslations: {
    txt_your_name: {
      en: 'Your name',
      ur: 'آپ کا نام',
    },
    txt_your_email: {
      en: 'Your email',
      ur: 'آپ کا ای میل',
    },
    txt_your_message: {
      en: 'Your message',
      ur: 'آپ کا پیغام',
    },
    txt_or: {
      en: 'Or',
      ur: 'یا',
    },
    txt_loading: {
      en: 'Loading',
      ur: 'لوڈ ہو رہا ہے',
    },
  },
};
