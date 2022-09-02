import React, { useState } from "react";

// export default class ProductItem extends React.Component {
// 	state = {
// 		activeHover: false,
// 	};
// 	handleMouseover = () => {
// 		this.setState({
// 			activeHover: true,
// 		});
// 	};
// 	handelMoiuseLeave = () => {
// 		this.setState({
// 			activeHover: false,
// 		});
// 	};

// 	render() {
// 		const { product } = this.props;
// 		return (
// 			<div
// 				className="product"
// 				onMouseOver={this.handleMouseover}
// 				onMouseLeave={this.handelMoiuseLeave}
// 			>
// 				<img src={product.image} alt={product.title} />
// 				<h6>{product.title}</h6>
// 				<p>{product.description}</p>
// 				{this.state.activeHover && <button>Add Item</button>}
// 			</div>
// 		);
// 	}
// }
export default function ProductItem({ product }) {
	const [activeHover, setActivHover] = useState(false);

	const onMouseover = () => {
		setActivHover(true);
	};
	const onMoiuseLeave = () => {
		setActivHover(false);
	};
	return (
		// <div
		// 	className="product"
		// 	onMouseOver={onMouseover}
		// 	onMouseLeave={onMoiuseLeave}
		// >
		// 	{/* <img src={product.image} alt={product.title} />
		// 	<h6>{product.title}</h6>
		// 	<p>c</p>
		// 	{activeHover && <button>Add Item</button>} */}

		// </div>
		//<div className="row">
		<div
			className="col-md-3 mb-3"
			onMouseOver={onMouseover}
			onMouseLeave={onMoiuseLeave}
		>
			<div className="card mb-6 text-white bg-dark">
				<img className="card-img-top" src={product.image} alt={product.title} />
				<div className="card-body">
					<h5 className="card-title">{product.title}</h5>
					<p className="card-text">{product.title}</p>
					{activeHover && <button className="btn btn-primary">Add Item</button>}
				</div>
			</div>
		</div>
		//</div>
	);
}
