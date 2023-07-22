import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
     nav:{
      home:"Home",
      about:"About",
      connect:"Connect"
     },
     hero:{
      headline:"Welcome to our Amazing Product!",
      details:" Are you tired of searching for the perfect solution to your everyday problems? Look no further! Our Amazing Product is here to save the day!",
      callOfaction:"Get Started Now"
     },
     footer:"&copy;12 march 2024 Your Company. All rights reserved."
      }
      // ...other translations
    },
  ja: {
    translation: {
     nav:{
    home: "ホーム",
    about: "について",
    connect: "お問い合わせ"
  },
  hero:{
    headline: "素晴らしい製品へようこそ！",
    details: "日々の問題の完璧な解決策を探すのに疲れましたか？心配しないで！私たちの素晴らしい製品がお手伝いします！",
    callOfaction: "今すぐ始めましょう"
  },
  footer:"&copy; 2024年3月12日 あなたの会社。全著作権所有。"
    },
  },

  th:{
    translation:{
    
  nav: {
    home: "หน้าหลัก",
    about: "เกี่ยวกับ",
    connect: "ติดต่อ"
  },
  hero: {
    headline: "ยินดีต้อนรับสู่ผลิตภัณฑ์ที่น่าทึ่งของเรา!",
    details: "คุณเบื่อหน่ายหาทางแก้ไขปัญหาที่สวยงามให้กับปัจจุบันหรือยัง? ไม่ต้องห่วง! ผลิตภัณฑ์ที่น่าทึ่งของเรามาเพื่อช่วยคุณ!",
    callOfaction: "เริ่มต้นใช้งานเดี๋ยวนี้"
  },
  footer: "&copy; 12 มีนาคม 2024 บริษัทคุณ สงวนลิขสิทธิ์ทั้งหมด"  }
    }
  };

  // ...other languages


// Initialize i18next
i18n.use(initReactI18next).init({
  resources,
  lng: 'ja', // default language
  fallbackLng: 'en', // fallback language in case the selected language is not available
  interpolation: {
    escapeValue: false, // React already escapes variables
  },
});

export default i18n;
