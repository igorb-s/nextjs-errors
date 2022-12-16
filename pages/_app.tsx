import {AppContext, AppProps} from 'next/app'

const App = ({Component, pageProps}: AppProps ) => {
  return <Component {...pageProps} />
}

App.getInitialProps = async ({ctx, Component}: AppContext) => {
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}

  return {pageProps}
}

export default App
