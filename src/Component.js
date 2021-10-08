export default class Component {
  constructor($app, props) {
    this.$app = $app;
    this.props = props;
    this.setup();
    this.template();
    this.setEvent();
    this.render();
  }
  setup() {}
  template() {}
  setEvent() {}
  render() {}
  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }
}
