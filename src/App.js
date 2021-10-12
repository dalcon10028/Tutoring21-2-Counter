import CounterMinus from "./components/CounterMinus.js";
import CounterPlus from "./components/CounterPlus.js";
import CounterView from "./components/CounterView.js";

export default class App {
    constructor($app) {
        new CounterMinus($app);
        new CounterView($app);
        new CounterPlus($app);
    }

    setState(nextState) {
        this.state = { ...this.state, nextState };
        this.render();
    }

    render() {}
}