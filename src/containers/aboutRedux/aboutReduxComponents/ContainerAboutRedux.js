import { connect } from "react-redux";
import AboutReduxComponent from "./AboutRedux";
import { increment, incrementAsync, decrement, decrementAsync } from "../ActionsAboutRedux";

const mapStateProps = state => ({
    aboutRedux: Object.assign({}, state.aboutRedux),
});

const mapDispatchToProps = dispatch => ({
    onIncrement: () => {
        dispatch(increment());
    },
    onIncrementAsync: () => {
        dispatch(incrementAsync());
    },
    onDecrement: () => {
        dispatch(decrement());
    },
    onDecrementAsync: () => {
        dispatch(decrementAsync());
    },
});

const AboutRedux = connect(
    mapStateProps,
    mapDispatchToProps,
)(AboutReduxComponent);

export default AboutRedux;
