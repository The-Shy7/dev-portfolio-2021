import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Raj Talukder Developer Portfolio'}</title>
        <html lang={lang || 'en'} />
        <meta
          name="Raj Talukder Developer Portfolio"
          content={description || 'Raj Talukder Developer Portfolio'}
        />
      </Helmet>
      <App />
    </>
  );
};
