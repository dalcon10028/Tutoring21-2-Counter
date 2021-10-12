import Component from "./Component.js";

export default class CounterMinus extends Component {
  template() {
    this.$target = document.createElement("span");
    this.$target.className = "plus bg-dark";
    this.$target.innerHTML = "-";
    this.$app.appendChild(this.$target);
  }

  setEvent() {
    const { onMinus } = this.props;
    this.$target.addEventListener("click", () => onMinus());
  }
}
