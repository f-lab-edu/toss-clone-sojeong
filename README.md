# vanilla js 로 typescript 이용해서 SPA 구현하기


### 기술 스택
- typescript
- npm
- webpack
- mws(mock data 라이브러리)
  

### 프로젝트 구성
- class형 컴포넌트 구성
- 라이프사이클 관리를 위한 core Component class를 상속해서 구조화
  ```
  [src > core > Component.ts]
  
  class Component {
    $target: Element | null; // 상위 요소 target
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
        this.setEvent(); // 컴포넌트 객체 생성시 최초 한 번 실행
        this.mounted(); // 컴포넌트 객체 생성시 mounted 최초 한 번만 실행
      }

      // 초기 setup 함수
      setup(): void {
        //this.$state 등 컴포넌드 최초 랜더시 초기 값 셋팅
      } 

      // html 태그 template 작성 함수
      template(): string {
        return ``;
      }

      // render시 하위 컴포넌트 생성 함수
      createComponent(): void {

      }

      render(): void {
        if (!this.$target) {
          this.$target = document.createElement('template');
        }

        this.$target.innerHTML = this.template(); // render시 html 템플릿 작성
        this.createComponent(); // render시 하위 컴포넌트 생성
      }

      // mount 후 호출 함수 (= React.componentDidMount)
      mounted(): void {

      }

      // 컴포넌트 전역 상태값 관리
      setState(newState: any): void {
        const nextState = { ...this.$state, ...newState };
        
        if (JSON.stringify(this.$state) !== JSON.stringify(newState)) { // state 값 변경시에만 rerender
          this.$state = nextState;
          this.render();
          this.updated();
        }
      }

      // 컴포넌트 업데이트 후 호출 함수 (= React.componentDidUpdate)
      updated(): void {

      }

      // 컴포넌트 생성시 이벤트 등록 함수
      setEvent(): void {}
  }

  export default Component;
  ```
- history API와 CustomEvent를 이용한 라우팅 처리
  ```
  [src > core > router.ts]

  // 라우팅 변경 함수 (CustomEvent)
  // history.pushState() 의 경우 rerender 없이 라우팅 할 수 있다는 이점이 있지만,
  // windeow.eventListener의 'popstate' 가 감지 할 수 없어 CustomEvent 생성.
  export const changeRoute = (data: Object | null, url: String) => {
    window.dispatchEvent(new CustomEvent('changeroute', {
        detail: {data, url}
    }))
  };

  // url 따른 View 선택 함수
  // 라우팅 url에 정확히 일치하는 경우만 찾도록 new RegExp().exec() 사용.
  export const getRouteView = (route: string): String | null => {
    let view = null;

    const routes = [
        {path: /^\/$/, view: 'Main'},
        {path: /^\/[tech|design]/, view: 'Main'},
        {path: /^\/article\/[\w]+$/, view: 'Detail'},
    ];

    const matched = routes.find((_route: any) => new RegExp(_route.path).exec(route));
    if (matched) {
        view = matched.view;
    }

    return view;
  }

  
  [src > Router.ts]
  
  // Router 컴포넌트 생성시 라우터 변경 감지 이벤트 등록
  setEvent(): void {
    window.addEventListener('changeroute', this.handleChangeRoute.bind(this)); // history.pushState() 등 popstate 가 감지 하지 못하는 라우팅 변경 감지 위한 CustoEventListener
    window.addEventListener('popstate', (e) => { // history.go() / back() 등 popstate 감지가능한 라우팅 변경 감지 EventListener
        this.render();
    });
  }
  ```


### 결과물
![결과물보기](https://github.com/user-attachments/assets/4ebee62e-c322-41ae-ba1f-3efdfa3b51e2)


### eslint.config.mjs
```
  // nvm init 으로 기본 eslint 구성 설정

  import globals from "globals";
  import pluginJs from "@eslint/js";
  import tseslint from "typescript-eslint";
  
  
  export default [
    {files: ["**/*.{js,mjs,cjs,ts}"]},
    {languageOptions: { globals: globals.browser }},
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
  ];
```


### .prettierrc.json
```
  {
    "semi": true,
    "trailingComma": "all",
    "singleQuote": true,
    "printWidth": 80,
    "tabWidth": 2,
    "arrowParens": "always",
    "endOfLine": "lf"
  }
```


### 프로젝트 실행
```
  노드 버전: v20.14.0 (.nvmrc 참조)

  설치: $ npm install
  실행: $ npm run start (port: 3000 - local)
```
