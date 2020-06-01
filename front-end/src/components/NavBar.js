import { Input, Menu, Header, Image } from "semantic-ui-react";
import React from "react";

export default class NavBar extends React.Component {
	state = { activeItem: "home" };

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

	render() {
		const { activeItem } = this.state;

		return (
			<Menu secondary>
				<Menu.Item
					name="Home"
					active={activeItem === "home"}
					onClick={this.handleItemClick}
				/>
				<Menu.Item
					name="Categories"
					active={activeItem === "messages"}
					onClick={this.handleItemClick}
				/>
				<Menu.Menu position="right">
					<Menu.Item
						name="Home"
						active={activeItem === "home"}
						onClick={this.handleItemClick}
					/>
					<Menu.Item
						name="Log Out"
						active={activeItem === "logout"}
						onClick={this.handleItemClick}
					/>
				</Menu.Menu>
			</Menu>
		);
	}
}
