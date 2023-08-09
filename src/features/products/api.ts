import Product from './types/Product';
import ProductDto from './types/ProductDto';

export async function getAll(): Promise<Product[]> {
	const res = await fetch('https://fakestoreapi.com/products');
	return res.json();
}

export async function deleteProduct(id: number): Promise<Product> {
	const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
		method: 'DELETE',
	});
	return res.json();
}

export async function createProduct(product: ProductDto): Promise<Product> {
	const res = await fetch('https://fakestoreapi.com/products', {
		method: 'POST',
		// body: JSON.stringify(product) // сокращенная запись при условии совпадения ключей
		body: JSON.stringify({
			title: product.title,
			price: product.price,
			description: product.description,
			image: product.image,
			category: product.category,
		}),
	});
	// вариант когда сервер присылает назад объект целиком
	// return res.json();
	// вариант когда сервер присылает только id назад
	const { id } = await res.json();
	return { ...product, id };
}
