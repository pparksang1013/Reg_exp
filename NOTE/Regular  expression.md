# 문자열에서 특정 문자 조합

~~자바스크립트 기반~~

## 정규표현식 만들기

### 리터럴방식

/ 슬래시로 패턴을 감싸서 작성합니다.

<span style="color:#BFBFBF; font-size:14px;
	  font-family: LINESeedSansKR-Bold ">
**SYNTAX**
</span>

```js
const re = /ab+c/;
```

</br>

### RegExp

RegExp 객체의 생성자 함수를 통해 정규 표현식이 런타임에 컴파일된다.

<span style="color:#BFBFBF; font-size:14px;
	  font-family: LINESeedSansKR-Bold ">
**SYNTAX**
</span>

```js
const re = new RegExp("ab+c");
```

</br>
