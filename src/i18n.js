import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      greeting: 'Hello!',
      title: "Welcome to react using react-i18next",
      description: {
        part1: "To get started, edit <1>src/App.js</1> and save to reload.",
        part2: "Switch language between english and german using buttons above."
      }
      // ...other translations
    },
  },
  ja: {
    translation: {
      title: "react-i18nextを使用したReactへようこそ",
  description: {
    part1: "始めるには、<1>src/App.js</1>を編集して保存してリロードしてください。",
    part2: "上のボタンを使って英語とドイツ語の間で言語を切り替えます。"
  }
    }
  },
  th:{
    translation:{
      title: "ยินดีต้อนรับสู่ React ด้วย react-i18next",
      description: {
        part1: "เพื่อเริ่มต้น แก้ไข <1>src/App.js</1> และบันทึกเพื่อรีโหลด",
        part2: "สลับภาษาระหว่างอังกฤษและเยอรมันโดยใช้ปุ่มด้านบน"
      }
    }
  }

  // ...other languages
};

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
