import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<HashRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</HashRouter>
);
