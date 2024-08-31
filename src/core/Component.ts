export type ComponentClass = Component[] | null; 

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
        this.setEvent();
        this.mounted();
      }

      setup(): void {}

      template(): string {
        return ``;
      }

      createComponent(): void {

      }

      render(): void {
        if (!this.$target) {
          this.$target = document.createElement('template');
        }

        this.$target.innerHTML = this.template();
        this.createComponent();
      }

      mounted(): void {

      }

      setState(newState: any): void {
        const nextState = { ...this.$state, ...newState };
        
        if (JSON.stringify(this.$state) !== JSON.stringify(newState)) {
          this.$state = nextState;
          this.render();
          this.updated();
        }
      }

      updated(): void {

      }

      setEvent(): void {}
}

//type ComponentClass = ClassType <Component, [Element | null, any | undefined]> ;

export default Component;