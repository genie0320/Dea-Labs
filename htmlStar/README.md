# Why HTML is important?

-   html은 마크업언어이다.
-   html만 가지고는 인간의 시각에 매력적으로 보여지기 힘들지만, 시맨틱하게 잘 구성된 html웹 크롤러에게 사랑받을 수 있어 검색엔진에 잘 노출된다거나,
-   코드로 말하는 우리 개발자들이 공통으로 인식해야 하는 일종의 '약속'이다.
-   시맨틱하게 구성된 웹문서는 웹을 시각적으로 받아들이기 힘든 이들을 위한 웹접근성 등의 다양한 부가기능이 자동으로 도입하는 셈이다.

# The basics
html 문서는 기본적으로 3개의 파트로 나뉜다.
- Doctype : html 문서의 버전을 나타낸다. ```<!DOCTYPE html>``` 
---
##### 1993년부터 사용되었던 html 1 버전부터 2014년부터 사용되는 html 5 버전까지, 간단한 논문자료 검색, 송수신 시스템에서 꽁으로 실시간 동영상을 주고 받을 수 있게 되기까지 html문서는 큰 변화를 거쳐왔다. 브라우저는 각 버전에 맞게 아래 ```<html></html>``` 안의 컨텐츠를 해석한다.
---
- Page Metadata : 크롤러와 브라우저에게 꼭 필요한 문서의 기본정보를 전달한다. 브라우저상에 렌더링되는 정보는 아니지만 다방면으로 매우 중요하므로, 꼼꼼히 설정하고 넘어가는 습관이 필요하다.
```<head></head>```
---
##### 주요거주민은 다음과 같다. ```<title>, <style>, <meta>``` 
---
- Page content : html 문서의 내용. ```<body></body>```

# External
### Fonts

- [google fonts](https://fonts.google.com/)
<!-- todo // font conbination basis. -->
# Misc.

### Ports
- Alternatively, since ```127.0.0.1``` is aliased with 'localhost', you could also enter ```localhost:5500```.
- Websites are typically served on ports 80 (HTTP) or 443 (HTTPS)
- You can use ANY ports that are typically not used by any other processes - 5500, 3000 or 8080 are common choices because they aren't typically used by other processes.
### Unit
- px : 디바이스에 상관없이 항상 고정된 크기.
- rem
- em
- %

### Naming convention.
- id & class : 개발할 때는 보통 캐멀케이스를 쓰는데, 퍼블쪽에서 사용하는 건 name-name 이런 식으로 중간바를 쓰는거 같다. 이유가 뭔지 알고 싶긴 하지만...여튼 그렇다.
- file name : There's one important characteristic which you maybe noticed about all these filenames: **They are all lowercase with no special characters except for dashes**
### Color
<!-- todo // color conbination basis. -->
-   Color name : red
-   Hex : #ff0000
-   HSL : hsl(15, 100%, 50%)
-   RGB : rgb(255, 0, 0)
-   RGBA : rgba(255, 0, 0, .1) // 10% opaque green

*   [W3schools Color Picker](https://www.w3schools.com/colors/colors_picker.asp)
*   [MSN : Name of colors](https://developer.mozilla.org/ko/docs/Web/CSS/color_value) - 생각보다 name으로 사용할 수 있는 컬러가 많다.

### Characters

```html
&nbsp; – space (non-breaking) 
&quot; - add quotation mark (“) 
&lt; - less than
symbol (<) 
&gt; - greater than symbol (>) 
&amp; - the ‘&’ or ampersand symbol
&copy; - copyright symbol 
&trade; - trademark symbol
```

# References

-   [100 Days Of Code - 2023 Web Development Bootcamp
    HTML Source](https://github.com/academind/100-days-of-web-development)

# Advance
- 외부 css, js 등 파일이 커질 수록 여러개의 파일을 불러와야 하나의 문서가 완성될 수 있는데, 이렇게 불러온 복수의 파일은, 브라우저에서 처리하기 위해서 시간이 걸리거나 일부파일에 문제가 생기는 경우 문서가 깨져보이는 등 불안정한 요소가 된다. 그래서... 애초에 웹에 올릴때부터 하나의 파일로 합쳐서 올릴 수 있도록 사전저리를 해주는 것이 gulp, webpack 등이다.(파일요청순서 : html > css > js > else)

