import { Provider } from 'react-redux'
import { ToastContainer, Zoom } from 'react-toastify'

import { Router } from '@/router'
import { store } from '@/services/store'

import 'react-toastify/dist/ReactToastify.css'

export default function App() {
  return (
    <Provider store={store}>
      <Router />
      <ToastContainer
        autoClose={5000}
        closeOnClick
        draggable
        hideProgressBar={false}
        newestOnTop
        pauseOnFocusLoss
        pauseOnHover
        position={'bottom-center'}
        rtl={false}
        theme={'dark'}
        transition={Zoom}
      />
    </Provider>
  )
}
