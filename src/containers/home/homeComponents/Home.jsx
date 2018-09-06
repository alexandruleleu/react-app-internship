import React from "react";
import { Button, Icon } from "semantic-ui-react";

class HomeComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            toggleAnimation: false,
        };

        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleButtonClick() {
        this.setState(prevState => {
            return { toggleAnimation: !prevState.toggleAnimation };
        });
    }

    render() {
        return (
            <div className="home__container">
                <div className="home__container_ball-area">
                    <div className={this.state.toggleAnimation ? "ball--container" : ""}>
                        <div className={this.state.toggleAnimation ? "ball--sub-container" : ""}>
                            <div className={this.state.toggleAnimation ? "ball-bounce" : ""} />
                        </div>
                    </div>
                </div>
                <div className="home__container_controls">
                    <Button className="big" color="blue" onClick={this.handleButtonClick}>
                        <Icon name={this.state.toggleAnimation ? "stop" : "play"} />
                        {this.state.toggleAnimation ? "Stop" : "Play"}
                    </Button>
                </div>
            </div>
        );
    }
}

export default HomeComponent;
