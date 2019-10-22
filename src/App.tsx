import React, {useEffect, useState} from 'react'
import logo from './logo.svg'
import './App.css'
import ApolloClient from 'apollo-boost'
import {gql} from 'apollo-boost'
import {useTestQueryQuery} from './generated/graphql'
import {ApolloProvider} from '@apollo/react-hooks'

const client = new ApolloClient({
  uri: 'http://localhost:8888/graphql',
  request: async operation => {
    operation.setContext({
      headers: {
        authorization: 'Basic dXNlcjp2YWxoYWxsYQ==',
        'access-token': '3333',
      },
    })
  },
})

const App: React.FC = () => {
  const [result, setResult] = useState('')
  const {data, loading, error} = useTestQueryQuery()
  if (loading) {
    return <p>Loading</p>
  }
  if (error) {
    return <p>{error.message}</p>
  }
  if (!data) {
    return <p>Ooops...</p>
  }
  return <code>{JSON.stringify(data, undefined, 2)}</code>
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
