import CounterMinus from "./components/CounterMinus.js";
import CounterPlus from "./components/CounterPlus.js";
import CounterView from "./components/CounterView.js";

export default class App{

    constructor($app){
        this.state = {
            count: 0,
        };

        new CounterMinus($app, () => {
            this.setState({ count: this.state.count - 1 });
        });
        this.counterView = new CounterView($app, this.state.count);
        new CounterPlus($app, () => {
            this.setState({ count: this.state.count + 1 });
        });
    }

    setState(nextState){
        this.state = {...this.state, ...nextState};
        this.counterView.setState(this.state);
    }
}
