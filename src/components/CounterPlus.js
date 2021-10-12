export default class CounterPlus {
    constructor($app, plus) {
        this.$target = document.createElement("span");
        this.$target.className = "minus bg-dark";
        this.$target.innerHTML = "+";
        this.$target.addEventListener("click", () => {
            plus();
        })

        $app.appendChild(this.$target);
    }

    setState(nextState) {
        this.state = { ...this.state, ...nextState};
        this.render();
    }

    render() {}
}