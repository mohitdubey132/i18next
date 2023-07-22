import React, { Component, Suspense } from 'react';
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import {I18nextProvider} from 'react-i18next';
import i18n from './i18n.js'
import './App.css';
function App (){
 const {t,i18n} =useTranslation( );
 const changeLanguage3 = (lng) => {
  // i18n.changeLanguage(lng);
  i18n.changeLanguage(lng)
};

return (
<>
<I18nextProvider i18n={i18n}>
<Suspense fallback="dddddddddd">
    <div className="App">
      <div className="App-header" style={{display:"flex" ,alignItems:"center",justifyContent:"center"}}>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </div>
      <div className="app">
      {/* Header */}
      <header className="header">
        <nav>
          <h1>Your Logo</h1>
          <ul>
            <li>{t('nav.home')}</li>
            <li>{t('nav.about')}</li>
            <li>{t('nav.connect')}</li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2>{t('hero.headline')}</h2>
          <p>
          {t('hero.details')}
          </p>
          <button>{t('hero.callOfaction')}</button>
        </div>
      </section>
      <button type="button" onClick={() => changeLanguage3('ja')}>
          ja
        </button>
        <button type="button" onClick={() => changeLanguage3('en')}>
          en
        </button>
        <button type="button" onClick={() => changeLanguage3('th')}>
          thai
        </button>
    
      {/* Footer */}
      <footer className="footer">
        <p>{t('footer')} </p>
      </footer>
    </div>

     
      {/* <div>{t('description.part2')}</div> */}
    </div>
  
</Suspense>
</I18nextProvider>

</>
  )
}
 export default App;