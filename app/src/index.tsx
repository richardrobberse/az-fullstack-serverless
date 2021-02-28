import React, { ErrorInfo } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { store } from 'store'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
import { ApolloProvider } from '@apollo/client'
import apolloClient from 'lib/apolloClient'

class ErrorBoundary extends React.Component {
  state = { error: null as Error | null, info: null as ErrorInfo | null }

  componentDidCatch(error: Error, info: ErrorInfo) {
    this.setState({ error, info })
  }

  render() {
    if (this.state.error) {
      // Render fallback UI
      return <h1>Oops! Something went wrong.</h1>
    }
    return this.props.children
  }
}

const render = Component => {
  ReactDOM.render(
    <ErrorBoundary>
      <Provider store={store}>
        <ApolloProvider client={apolloClient}>
          <Component />
        </ApolloProvider>
      </Provider>
    </ErrorBoundary>,
    document.getElementById('root')
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    render(NextApp)
  })
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
