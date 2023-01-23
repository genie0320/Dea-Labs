# Why HTML is important?

* html은 마크업 언어이다.
  - html만 가지고는 인간의 시각에 매력적으로 보여지기 힘들지만, 시맨틱하게 잘 구성된 html웹 크롤러에게 사랑받을 수 있어 검색엔진에 잘 노출된다거나,
  - 코드로 말하는 우리 개발자들이 공통으로 인식해야 하는 일종의 '약속'이다.
* 잘 사용하면 꿀떨어진다.
그래서 블록에는 width를 설정할 수 없지만, 인라인요소에는 width를 줄 수 있다.
  - 시맨틱하게 구성된 웹문서는 웹을 시각적으로 받아들이기 힘든 이들을 위한 웹접근성 등의 다양한 부가기능이 자동으로 도입하는 셈이다.

# The basics
html 문서는 기본적으로 3개의 파트로 나뉜다.
- Doctype : html 문서의 버전을 나타낸다. ```<!DOCTYPE html>``` 

> 1993년부터 사용되었던 html 1 버전부터 2014년부터 사용되는 html 5 버전까지, 간단한 논문자료 검색, 송수신 시스템에서 꽁으로 실시간 동영상을 주고 받을 수 있게 되기까지 html문서는 큰 변화를 거쳐왔다. 브라우저는 각 버전에 맞게 아래 ```<html></html>``` 안의 컨텐츠를 해석한다.

- Page Metadata : 크롤러와 브라우저에게 꼭 필요한 문서의 기본정보를 전달한다. 브라우저상에 렌더링되는 정보는 아니지만 다방면으로 매우 중요하므로, 꼼꼼히 설정하고 넘어가는 습관이 필요하다.
```<head></head>```
> 주요거주민은 다음과 같다. ```<title>, <style>, <meta>``` 

- Page content : html 문서의 내용. ```<body></body>```

# Misc.
### UTF-8?
말하기로는... 존재하는 거의 모든 문자를 나타낼 수 있다고 하니 건드리지 말자.

### Color
<!-- todo // color conbination basis. -->
- Color name : red
- Hex : #ff0000
- HSL : hsl(15, 100%, 50%)
- RGB : rgb(255, 0, 0)
- RGBA : rgba(255, 0, 0, .1) // 10% opaque green

> *   [W3schools Color Picker](https://www.w3schools.com/colors/colors_picker.asp)
> *   [MSN : Name of colors](https://developer.mozilla.org/ko/docs/Web/CSS/color_value) - 생각보다 name으로 사용할 수 있는 컬러가 많다.
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
### Fonts

- [google fonts](https://fonts.google.com/)
<!-- todo // font conbination basis. -->
# External
