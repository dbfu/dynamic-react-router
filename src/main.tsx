import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import './index.css'
import NProgress from 'nprogress';

import 'nprogress/nprogress.css';

NProgress.configure({
  showSpinner: false
})




ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App />
)
