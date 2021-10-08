import Component from "./Component.js";

export default class CounterView extends Component {
  setup() {
    const { count } = this.props;
    this.state = { count };
  }

  template() {
    const { count } = this.state;
    this.$target = document.createElement("span");
    this.$target.innerText = count;
    this.$target.className = "count";
    this.$app.appendChild(this.$target);
  }

  render() {
    if (!this.$target) return;
    const { count } = this.state;
    this.$target.innerText = count + "";
  }

  setState(nextState) {
    this.state = { ...this.state, ...nextState };
    this.render();
  }
}
