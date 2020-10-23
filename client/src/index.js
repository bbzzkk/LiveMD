/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ApolloProvider } from 'react-apollo';
// import { Rehydrated } from 'aws-appsync-react';
import { ApolloClient, Rehydrated } from '@/aws/index';

ReactDOM.render(
  <ApolloProvider client={ApolloClient}>
    <Rehydrated>
      <App />
    </Rehydrated>
  </ApolloProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
