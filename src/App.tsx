import React, {useState} from 'react'
import logo from './logo.svg'
import './App.css'
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from '@apollo/react-hooks'

const client = new ApolloClient({
  uri: 'http://localhost:8888/graphql',
  request: operation => {
    operation.setContext({
      headers: {
        'access-token': '3333',
      },
    })
  },
})

const App: React.FC = () => {
  return <code>Hello world!</code>
}

export default () => (
  <ApolloProvider client={client}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <App />
      </header>
    </div>
  </ApolloProvider>
)
