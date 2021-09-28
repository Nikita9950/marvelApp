import React from 'react';
import Header from '../Header/Header';
import './ErrorPage.css';

function ErrorPage(): JSX.Element {
  return (
    <>
      <Header />
      <div className="error">
        <p className="error__number">404</p>
        <h1 className="error__description">Page not found</h1>
      </div>
    </>
  );
}

export default ErrorPage;
