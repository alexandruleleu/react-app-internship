import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

//core componets
import Header from "../components/Header";

//page components
import Home from "../containers/home/homeComponents/ContainerHome";
import AboutRedux from "../containers/aboutRedux/aboutReduxComponents/ContainerAboutRedux";

class App extends React.Component {
    render() {
        return (
            <div>
                <Header page={this.props.app.router.location.pathname} />
                <main>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about-redux" component={AboutRedux} />
                </main>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        app: state,
    };
};

export default connect(mapStateToProps)(App);
