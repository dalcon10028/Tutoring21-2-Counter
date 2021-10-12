export default class CounterView{

    constructor($app, initialState){
        this.state = {
            count: initialState,
        };

        this.$target = document.createElement("input");
        this.$target.type = "number";
        this.$target.className = "count";
        this.$target.name = "qty";

        $app.appendChild(this.$target);
        this.render();
    }

    setState(nextState){
        this.state = {... this.state, ...nextState};
        this.render();
    }

    render(){
        this.$target.value = this.state.count;
    }
}