import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout/Layout';
import Home from './layout/Home/Home';
import { Counter } from './features/counter/Counter';
import ProductsList from './features/products/ProductsList';
import ProductCreate from './features/products/ProductCreate';

function App(): JSX.Element {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="counter" element={<Counter />} />
				<Route
					path="products"
					element={
						<>
							<ProductCreate />
							<ProductsList />
						</>
					}
				/>
			</Route>
		</Routes>
	);
}

export default App;
