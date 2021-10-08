import Component from "./Component.js";

export default class CounterPlus extends Component {
  template() {
    this.$target = document.createElement("span");
    this.$target.className = "plus bg-dark";
    this.$target.innerHTML = "+";
    this.$app.appendChild(this.$target);
  }

  setEvent() {
    const { onPlus } = this.props;
    this.$target.addEventListener("click", () => onPlus());
  }
}
