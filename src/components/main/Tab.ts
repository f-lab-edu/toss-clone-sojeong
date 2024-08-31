import { Component } from "@/core";

class Tab extends Component {
    setup(): void {

    }

    setEvent(): void {
      this.$target?.addEventListener('click', this.handleClickTab.bind(this));
    }

    updated() {

    }

    handleClickTab(e: Event): void {
      const {onSetTabIdx} = this.$props;
      const target = e?.target as HTMLDivElement;
      const key = target?.getAttribute('key');

      if (key && onSetTabIdx) {
        onSetTabIdx (Number(key));
      }
    }

    template(): string {
      const {tabIdx} = this.$props;

        return `
          <div class="tab_bar">
          ${['전체', '개발', '디자인'].map((tab, idx) => (
            `
              <div 
                class="tab_line ${tabIdx === idx ? '--indicated' : ''}" 
                key=${idx}
                style="transform: translateX(${69*idx}px) translateZ(0px);"
              >
              </div> 
              <div class="tab_item" key=${idx}>
                <div key=${idx}>
                  ${tab}
                </div>
              </div>
            `)).join('')}
          </div>
        `;
    };
}

export default Tab;