import logo from "./logo.svg";
import "./App.css";
import ProductList from "./components/ProductList";
// import Pagination from "./components/Pagination";
// import PageApp from "./components/PageApp";

function App() {
	return (
		<div className="App">
			<header className="App-headers">
				<ProductList />
				{/* <Pagination /> */}
				{/* <PageApp /> */}
			</header>
		</div>
	);
}

export default App;
