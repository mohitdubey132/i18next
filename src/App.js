import React, { Component, Suspense } from 'react';
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import {I18nextProvider} from 'react-i18next';
import i18n from './i18n.js'
// import logo from './logo.svg';
// import './App.css';

// use hoc for class based components
// class LegacyWelcomeClass extends Component {
//   render() {
//     const { t } = this.props;
//     return <h2>{t('title')}</h2>;
//   }
// }
// const Welcome = withTranslation()(LegacyWelcomeClass);

// // Component using the Trans component
// function MyComponent() {
//   return (
//     <Trans i18nKey="description.part1">
//       To get started, edit <code>src/App.js</code> and save to reload.
//     </Trans>
//   );
// }

// // page uses the hook
// function Page() {
//   const { t, i18n } = useTranslation();

  // const changeLanguage3 = (lng) => {
  //   // i18n.changeLanguage(lng);
  //   i18n.changeLanguage(lng)
  // };

  // return (
  //   <div className="App">
  //     <div className="App-header">
  //       {/* <img src={logo} className="App-logo" alt="logo" /> */}
  //       <Welcome />
  //       <button type="button" onClick={() => changeLanguage3('ja')}>
  //         ja
  //       </button>
  //       <button type="button" onClick={() => changeLanguage3('en')}>
  //         en
  //       </button>
  //       <button type="button" onClick={() => changeLanguage3('th')}>
  //         thai
  //       </button>
  //     </div>
  //     <div className="App-intro">
  //       <MyComponent />
  //     </div>
  //     <div>{t('description.part2')}</div>
  //   </div>
  // );
// }

// // loading component for suspense fallback
// const Loader = () => (
//   <div className="App">
//     {/* <img src={logo} className="App-logo" alt="logo" /> */}
//     <div>loading...</div>
//   </div>
// );

// // here app catches the suspense from page in case translations are not yet loaded
// export default function App() {
//   return (
//     <Suspense fallback={<Loader />}>
//       <Page />
//     </Suspense>
//   );
// } 
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
      <div className="App-header" style={{display:"flex" ,margin:"5rem",alignItems:"center",justifyContent:"center"}}>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <button type="button" onClick={() => changeLanguage3('ja')}>
          ja
        </button>
        <button type="button" onClick={() => changeLanguage3('en')}>
          en
        </button>
        <button type="button" onClick={() => changeLanguage3('th')}>
          thai
        </button>
      </div>
      <div className="App-intro">
        {/* <MyComponent /> */}
      </div>
      <div style={{alignItems:"center",display:"flex",flexDirection:"column",padding:"auto",margin:"auto"}}>
      <div>{t('description.part2')}</div>
      <div>{t('title')}</div>
      <div>{t('description.part1')}</div>
      </div>
      {/* <div>{t('description.part2')}</div> */}
    </div>
  
</Suspense>
</I18nextProvider>

</>
  )
}
 export default App;