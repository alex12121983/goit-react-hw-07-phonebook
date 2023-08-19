//-------------- Код примера ----------------------------------
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { ToastContainer } from 'react-toastify';
// import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';

// import { App } from 'components/App';

// import { persistor, store } from 'redux/store';

// import 'react-toastify/dist/ReactToastify.css';
// import './index.css';
// import { PersistGate } from 'redux-persist/integration/react';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <Provider store={store}>
//     <PersistGate loading={<p>loading...</p>} persistor={persistor}>
//       <BrowserRouter
//       // basename='/goit-react-hw-05'
//       >
//         <App />
//         <ToastContainer
//           position="top-center"
//           autoClose={5000}
//           hideProgressBar={false}
//           newestOnTop={false}
//           closeOnClick
//           rtl={false}
//           pauseOnFocusLoss
//           draggable
//           pauseOnHover
//           theme="dark"
//         />
//       </BrowserRouter>{' '}
//     </PersistGate>
//   </Provider>
// );
// ---------------------------------------------------------------------
// ----------------------- Код ДЗ --------------------------------------
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.css';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
