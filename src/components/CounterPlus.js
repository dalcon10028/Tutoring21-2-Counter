export default class CounterPlus{

    constructor($app,plus){
        this.$target = document.createElement("span");
        this.$target.className = "plus bg-dark"
        this.$target.innerText = "+";
        this.$target.addEventListener("click", () => {
            plus(); 
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