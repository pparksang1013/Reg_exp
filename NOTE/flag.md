# 플래그
자바스크립트 정규표현식 옵션.
Regular expressions have optional flags that allow for functionality like global searching and <mark class="hltr-orange">case-insensitive</mark> searching.
</br>
###### case-insensitive
파일명이나 명령 등에서 대문자와 소문자를 구별하지 않고 알파벳을 입력하는 것.
대문자와 소문자를 별개의 문자로 취급하는 것은 케이스 센서티브라고 한다.

## g flag
<mark class="hltr-red">모든 문자</mark>와 여러 줄 (global)을 확인할 수 있다. 
g 플래그는 단어 하나하나 조회하는 거 같다.

<span style="color:#BFBFBF; font-size:14px;
	  font-family: LINESeedSansKR-Bold">
	  **EXAMPLE**
</span>
```js
text = `Just a simple touch and it can set you free
We don't have to rush when you're alone with me
I feel it coming, I feel it coming, babe`;
regexp = /i/;
console.log(text.match(regexp));
// output: Array ['i', index: 8]

regexp = /i/g;
console.log(text.match(regexp));
// output: Array ['i','i','i','i','i','i','i']
```
</br>

## i flag
영어 대소문자를 구분하지 않는다. 

<span style="color:#BFBFBF; font-size:14px;
	  font-family: LINESeedSansKR-Bold">
	  **EXAMPLE**
</span>
```js
text = `Just a simple touch and it can set you free
We don't have to rush when you're alone with me
I feel it coming, I feel it coming, babe`;
regexp = /I/;
console.log(text.match(regexp));
// output: Array ['I', index: 92]

regexp = /I/gi;
console.log(text.match(regexp));
// output: [
	// 'i', 'i', 'i',
	// 'I', 'i', 'i',
	// 'I', 'i', 'i'
// ]
```
</br>

## m flag
`^` and `$` match start/end of line
문장에 처음과 끝을 조회한다. 가장 적은 인덱스를 반환한다.
만약에 여러줄이라면 g flag를 추가한다.

<span style="color:#BFBFBF; font-size:14px;
	  font-family: LINESeedSansKR-Bold">
	  **EXAMPLE**
</span>
```js
text = `Just a simple touch and it can set you free
We don't have to rush when you're alone with me
I feel it coming, I feel it coming, babe`;
regexp = /e$/;
console.log(text.match(regexp));
// output: Array ['e', index: 131]

regexp = /e$/m;
console.log(text.match(regexp));
// output : Array ['e', index: 42']

regexp = /e$/gm;
console.log(text.match(regexp));
// output : ['e','e','e']
```
