export default class CounterMinus {
    constructor($app) {
        this.$target = document.createElement("span");
        this.$target.className = "minus bg-dark";
        this.$target.innerText = "-";

        $app.appendChild(this.$target);
    }
        
    setState(nextState) {
        this.state = { ...this.state, nextState };
        this.render();
    }

    render() {}
}