import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'


{/*conecting graphql with react*/}
const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
)
