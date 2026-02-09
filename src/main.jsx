import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store.js'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient

createRoot(document.getElementById('root')).render(
  // <BrowserRouter>
  //   <App />
  // </BrowserRouter> 
  // <Provider store={store}>
  //   <App/>
  // </Provider>

  <QueryClientProvider client={queryClient}>
    <App/>
  </QueryClientProvider>
)
