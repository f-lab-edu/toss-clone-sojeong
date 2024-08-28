import { Component } from "@/core";

class Tab extends Component {
    setup(): void {
        this.$state = {
          tabIdx: 0
        };
    }

    template(): string {
      const {tabIdx} = this.$state;
        return `
          <div class="tab_bar">
          ${['전체', '개발', '디자인'].map((tab, idx) => (
            `
              <div class="tab_line ${tabIdx === idx ? 'select' : ''}"></div> 
              <div class="tab_item"">
                <div>
                  ${tab}
                </div>
              </div>
            `)).join('')}
          </div>
        `;
    };
}

export default Tab;