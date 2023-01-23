<!-- @format -->

#todo
More about the position property => https://academind.com/tutorials/the-position-property/

Flexbox - Flex Container => https://academind.com/tutorials/flexbox-basics-container/

Flexbox - Flex Items => https://academind.com/tutorials/flexbox-flex-items/

Comparing Flexbox and the Grid => https://academind.com/tutorials/css-grid-vs-flexbox/

# [Designing in the Browser](https://pineco.de/designing-in-the-browser/)

# Front-end

html, css, js를 분리하는 쪽으로 웹표준화가 진행되어 왔음.(inline style, inline js를 사용하지 않음)
html은 구조와 내용을, css는 표현을, js는 동작을 담고 있다.

# Misc.

### Naming convention.

-   id & class : 개발할 때는 보통 캐멀케이스를 쓰는데, 퍼블쪽에서 사용하는 건 name-name 이런 식으로 중간바를 쓰는거 같다. 이유가 뭔지 알고 싶긴 하지만...여튼 그렇다.
-   file name : There's one important characteristic which you maybe noticed about all these filenames: **They are all lowercase with no special characters except for dashes**

### 라이브서버로 돌리는 나의 작업물을 폰으로도 보는 방법

> 전제 : 두개의 기기가 동일 망안에 있어야 볼 수 있다.
> 컴퓨터의 네트워크 설정에 가서 현재 내 컴이 접속된 ip를 알아낸다.
> 폰의 '모바일연결'을 끄고, wifi로 (컴퓨터와 동일망에) 접속된 상태에서 ip:port/page.html 로 접속하면 된다.
> [...](https://jae04099.tistory.com/entry/VSCode-Live-Server-%EB%82%B4-%EB%AA%A8%EB%B0%94%EC%9D%BC-%EA%B8%B0%EA%B8%B0%EC%97%90%EC%84%9C-%ED%99%95%EC%9D%B8%ED%95%98%EA%B8%B0)

-   [유니코드 심볼](<https://en.wikipedia.org/wiki/Arrows_(Unicode_block)>)
    ![](./img/2023-01-23%2003%2026%2028.png)

# TODO

-   [웹팩이용방법 숙지](https://www.hanl.tech/blog/webpack-%ec%82%ac%ec%9a%a9%eb%b0%a9%eb%b2%95%ea%b3%bc-%ea%b8%b0%eb%8a%a5-%ec%9a%94%ec%a0%90-%ec%a0%95%eb%a6%ac/)

# SASS, SCSS configure

-   정말 너무 미친듯이 css의 nesting이 짜증나서 scss를 설치해버렸다.
    -   [가이드영상](https://youtu.be/gx3l-7SsZ0A)
    -   [scss 튜토리얼](https://youtu.be/BEdCOvJ5RY4)
-   궁금한건... 난 scss를 쓰겠다고 했는데... 왜 sass를 설치한건지 모르겠다.

```json
// 우선 node-sass 를 설치.
npm i node-sass

// package.json의 script 안에 추가.
"watch:scss": "node-sass -w src/test.scss src/test.css"

// 실행할 때는 다음을 입력하여 감시진행.
npm run watch:scss
```

# Coding Game

-   [coding fantasy](https://codingfantasy.com/) : CSS의 flex, grid 연습게임. 나름 재미있음.

# Error

### Prettier

-   Make `.prettierignore` file in project root folder.
-   Add `*.md` to ignore markdown file.

*   [Velog](https://velog.io/@devyang97/VSCode-Extension-Prettier)
*   [Prettier ignore](https://prettier.io/docs/en/ignore.html#range-ignore)

# References

-   [100 Days Of Code - 2023 Web Development Bootcamp
    HTML Source](https://github.com/academind/100-days-of-web-development)
-   [Freebies](https://freebies.bypeople.com/)
-   [placeholder img](https://placeholder.com/)

### 괜찮은 기술블로그, 사이트

-   [하늘네트](https://www.hanl.tech/)
-   [velog.io](https://velog.io/)
