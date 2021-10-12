import Component from "./Component.js";
import CounterMinus from "./CounterMinus.js";
import CounterPlus from "./CounterPlus.js";
import CounterView from "./CounterView.js";

export default class App extends Component {
  setup() {
    this.state = {
      count: 0,
    };
  }

  template() {
    this.$app.className = "qty mt-5";
    this.$app.innerHTML = null;
    new CounterMinus(this.$app, {
      onMinus: this.onMinus.bind(this),
    });

    this.counterView = new CounterView(this.$app, this.state);

    new CounterPlus(this.$app, {
      onPlus: this.onPlus.bind(this),
    });
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.counterView.setState(this.state);
  }

  onPlus() {
    this.setState({ count: this.state.count + 1 });
  }

  onMinus() {
    this.setState({ count: this.state.count - 1 });
  }
}
