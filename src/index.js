import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './themes.css';
import App from './App';
import Album, {loader as albumLoader} from './Album';
import Error from './Error';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
	document.getElementById('root').classList.add('dark')
} else {
	document.getElementById('root').classList.add('light')
}

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <Error />,
		children: [
		],
	},
	{
		path: 'album/:albumId',
		element: <Album />,
		loader: albumLoader,
	},
])

root.render(
  <React.StrictMode>
	<RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
