class Component {
  $target: Element | null;
  $props? : any;
  $state: any;

    constructor(
      $target: Element | null,
      $props: any | undefined = {}
      ) {
        this.$target = $target;
        this.$props = $props;
        this.setup();
        this.render();
        this.mounted();
      }

      setup(): void {}

      template(): string {
        return ``;
      }

      render(): void {
        if (!this.$target) {
          this.$target = document.createElement('template');
        }

        this.$target.innerHTML = this.template();
      }

      mounted(): void {}

      setState(newState: any): void {
        this.$state = { ...this.$state, ...newState };
        this.updated();
      }

      updated(): void {
        this.render();
      }

      setEvent(): void {}
}

export default Component;