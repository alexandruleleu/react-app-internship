import React from "react";
import { Button, Icon } from "semantic-ui-react";

class AboutReduxComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleButtonClick(target) {
        console.log(target);
        if (target === "increment") {
            this.props.onIncrement();
        }
        if (target === "incrementAsync") {
            this.props.onIncrementAsync();
        }
        if (target === "decrement") {
            this.props.onDecrement();
        }
        if (target === "decrementAsync") {
            this.props.onDecrementAsync();
        }
    }

    render() {
        return (
            <div className="about-redux__container">
                <section className="about-redux__container--header">
                    <h1>Asynchronous Redux Actions Using Redux Thunk</h1>
                    <h3>Count: {this.props.aboutRedux.count}</h3>
                </section>

                <section className="about-redux__container--buttons">
                    <div className="first-row">
                        <Button
                            className={`big ${
                                this.props.aboutRedux.isIncrementing ? "disabled" : ""
                            }`}
                            color="blue"
                            onClick={() => {
                                this.handleButtonClick("increment");
                            }}
                        >
                            <Icon name="plus" /> Increment
                        </Button>
                        <Button
                            className={`big ${
                                this.props.aboutRedux.isIncrementing ? "disabled" : ""
                            }`}
                            color="blue"
                            onClick={() => {
                                this.handleButtonClick("incrementAsync");
                            }}
                        >
                            <Icon name="plus" /> Increment Async
                        </Button>
                    </div>
                    <div className="second-row">
                        <Button
                            className={`big ${
                                this.props.aboutRedux.isDecrementing ? "disabled" : ""
                            }`}
                            color="blue"
                            onClick={() => {
                                this.handleButtonClick("decrement");
                            }}
                        >
                            <Icon name="minus" /> Decrement
                        </Button>
                        <Button
                            className={`big ${
                                this.props.aboutRedux.isDecrementing ? "disabled" : ""
                            }`}
                            color="blue"
                            onClick={() => {
                                this.handleButtonClick("decrementAsync");
                            }}
                        >
                            <Icon name="minus" /> Decrement Async
                        </Button>
                    </div>
                </section>
            </div>
        );
    }
}

export default AboutReduxComponent;
