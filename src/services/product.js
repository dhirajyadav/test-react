import axios from "axios";
import { useEffect, useState } from "react";

const api = axios.create({
	baseURL: "https://fakestoreapi.com",
});

export async function getProducts(cat = null) {
	try {
		const apiURL = cat ? "/products/category/" + cat : "/products";
		const { data } = await api.get(apiURL);
		return data;
	} catch (err) {
		console.log("product err", err);
		throw err.message;
	}
}
export async function getCategories() {
	try {
		const { data } = await api.get("/products/categories");
		return data;
	} catch (err) {
		console.log("product err", err);
		throw err.message;
	}
}

// export default function getProducts() {
// 	const [api, setApi] = useState;

// 	const loadDataAPI = async () => {
// 		await fetch("https://fakestoreapi.com/products")
// 			.then((response) => response.json())
// 			.then((receivedData) => setApi(receivedData));

// 		//	setApi(response.data)
// 	};
// 	console.log("...response", api);
// }
// export default getProducts;
