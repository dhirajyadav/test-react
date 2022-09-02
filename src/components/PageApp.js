import { useEffect, useState } from "react";
import Pagination from "./Pagination";

export default function PageApp() {
	const [images, setImage] = useState([]);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/albums/1/photos").then(
			(response) => response.json().then((data) => setImage(data))
		);
	}, []);
	return (
		<>
			<div>
				<Pagination data={images} />
			</div>
		</>
	);
}
