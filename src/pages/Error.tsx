import React from 'react';
import { useRouteError } from 'react-router-dom';

export interface Root {
  status: number;
  statusText: string;
  message: string;
  internal: boolean;
  data: string;
  error: Error;
}

export default function Error() {
  // return default unknown to error types
  const error = useRouteError() as Root;
  console.warn(error as Root);

  return (
    <div id='error-page'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
