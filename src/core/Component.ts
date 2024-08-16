class Component {
  $target: HTMLElement;
  $props? : any;
  $state: any;

    constructor(
      $target: HTMLElement,
      $props: any | undefined = {}
      ) {
        this.$target = $target;
        this.$props = $props;
        this.setup();
        this.render();
        this.mounted();
      }
      setup() {}
      template() {
        return ``;
      }
      render() {
        if (!this.$target) {
          this.$target = document.createElement('template');
        }

        this.$target.innerHTML = this.template();
      }
      mounted() {
        this.render();
      }
      setState(newState: any) {
        if (JSON.stringify(this.$state) !== JSON.stringify(newState)) {
          this.$state = { ...this.$state, ...newState };
          this.updated();
        }
      }
      updated() {
        this.render();
      }
}

export default Component;