import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import './Spinner.css';

export function Spinner(): JSX.Element {
  return (
    <div className="spinner">
      <CircularProgress className="spinner__inner" />
    </div>
  );
}
