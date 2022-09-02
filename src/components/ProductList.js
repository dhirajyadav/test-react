import React, { useEffect, useState } from "react";
import { getProducts, getCategories } from "../services/product";
import ProductItem from "./ProductItem";
import "./productList.css";
import Pagination from "./Pagination";
// import { Pagination } from "./Pagination";
// import "./Pagination";

export default function ProductList() {
	const [products, setProducts] = useState([]);
	const [currentCat, setCurrentCat] = useState(null);
	const [allCategories, setAllCategories] = useState([]);
	const [loading, setLoading] = useState(false);

	// const filterItem = (cateItem) => {
	// 	const updatedItems = products.filter((curElem) => {
	// 		return curElem.category === cateItem;
	// 	});
	// 	setProducts(updatedItems);
	// 	console.log("products", updatedItems);
	// };

	useEffect(() => {
		(async () => {
			try {
				setLoading(true);
				const products = await getProducts(currentCat);
				setProducts(products);

				console.log("products", products);
			} catch (err) {
				console.log(err);
			} finally {
				//console.log("setLoading.....", loading);
				setLoading(false);
			}
		})();
	}, [currentCat]);

	useEffect(() => {
		(async () => {
			const categories = await getCategories();
			setAllCategories(categories);
		})();
	}, []);

	return (
		<div>
			<div className="menu-tabs container">
				<div className="menu-tab d-flex justify-content-around">
					{allCategories &&
						allCategories.map((cate) => {
							return (
								<button
									key={cate}
									className="btn btn-warning"
									onClick={() => setCurrentCat(cate)}
								>
									{cate}
								</button>
							);
						})}
					<button
						className="btn btn-warning"
						onClick={() => setCurrentCat(null)}
					>
						All
					</button>
				</div>
			</div>
			<div className="menu-items container-fluid mt-5">
				<div className="row">
					<div className="col-8 mx-auto">
						<div className="row my-5">
							<h1>ProductList Page</h1>
							{loading ? <p>Lodaing....</p> : null}
							<Pagination data={products} />
							{/* <div className="contaner">
								<div className="row">
									{products &&
										products.map((product) => {
											return <ProductItem key={product.id} product={product} />;
										})}
								</div>
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
