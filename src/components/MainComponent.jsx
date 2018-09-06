import React, { Component } from "react";
import { Menu, Icon } from "semantic-ui-react";

export default class MainComponent extends Component {
    state = { activeItem: "home" };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        return (
            <div>
                <Menu secondary className="header__component">
                    <Menu.Item className="header__component-icon">
                        <Icon name="react" size="large" /> React-redux
                    </Menu.Item>
                    <Menu.Menu position="right">
                        <Menu.Item className="header__component-icon">
                            Leleu Alexandru
                            <Icon name="user" className="circular profile-icon" size="small" />
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </div>
        );
    }
}
