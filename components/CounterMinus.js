export default class CounterMinus{

    constructor($app,minus){
        this.$target = document.createElement("span");
        this.$target.className = "minus bg-dark"
        this.$target.innerText = "-";
        this.$target.addEventListener("click", () => {
            minus();
        })

        $app.appendChild(this.$target);
    }

    setState(nextState){
        this.state = {... this.state, nextState};
        this.render();
    }

    render(){

    }
}