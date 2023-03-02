# 정규 표현식 패턴
패턴에는 검색하고 싶은 문자열을 지정한다. 이 때 문자열의 따옴표는 생략한다. 따옴표를 포함하면 따옴표까지 검색한다. 패턴은 특별한 의미를 가지는 메타문자 또는 기호로 표현한다. 
</br>

## Character classes
문자 클래스.

<span style="color:#BFBFBF; font-size:14px;
	  font-family: LINESeedSansKR-Bold">
	  **EXAMPLE**
</span>
```js
let text = "사과,배,복숭아,춘식이,고구마";
let regexp;

regexp = /사과/;
console.log(text.match(regexp));
// output: Array ['사과']

regexp = /춘식이/;
console.log(text.match(regexp));
// output: Array ['춘식이']
```
</br>

### dot .
문자열 앞에서부터 차례대로 dot의 개수만큼 문자열을 가져온다.

<span style="color:#BFBFBF; font-size:14px;
	  font-family: LINESeedSansKR-Bold">
	  **EXAMPLE**
</span>
```js
const text = "사과,배,복숭아,춘식이,고구마";

let regexp;

regexp = /./;
console.log(text.match(regexp))
// output: Array ['사']

regexp = /../;
console.log(text.match(regexp))
// output: Array ['사과']

regexp = /.../;
console.log(text.match(regexp))
// output: Array ['사과,']
```
</br>



### plus +
완전한 단어로 추출하고 싶을 때 사용한다. 

<span style="color:#BFBFBF; font-size:14px;
	  font-family: LINESeedSansKR-Bold">
	  **EXAMPLE**
</span>
```js
text = "AAA B CC D E FFFF G F WWW G Q X HH I";

regexp = /C+|F+/

console.log(text.match(regexp));
// output: Array ['CC', 'FFFF', 'F']
```
</br>

### \\d
\\d = [0-9]

<span style="color:#BFBFBF; font-size:14px;
	  font-family: LINESeedSansKR-Bold">
	  **EXAMPLE**
</span>
```js
text = "year 2002";
regexp = /\d/;
console.log(text.match(regexp));
// output: Array ["2"]
```
</br>

### \\D
\\D = \[^0-9]

<span style="color:#BFBFBF; font-size:14px;
	  font-family: LINESeedSansKR-Bold">
	  **EXAMPLE**
</span>
```js
text = "year 2002";
regexp = /\D/;
console.log(text.match(regexp));
// output: Array ["y"]
```
</br>

### \\w
알파벳 + 숫자 + _ 중의 한 문자임을 의미한다.
한글은 미포함.

<span style="color:#BFBFBF; font-size:14px;
	  font-family: LINESeedSansKR-Bold">
	  **EXAMPLE**
</span>
```js
text = "춘식이 X 라이언";
regexp = /\w/;
console.log(text.match(regexp));
// output: Array ["X"]
```
</br>

### \\W

<span style="color:#BFBFBF; font-size:14px;
	  font-family: LINESeedSansKR-Bold">
	  **EXAMPLE**
</span>
```js
text = "춘식이 X 라이언";
regexp = /\W/;
console.log(text.match(regexp));
// output: Array ["춘"]
```
</br>

### \\s
공백

<span style="color:#BFBFBF; font-size:14px;
	  font-family: LINESeedSansKR-Bold">
	  **EXAMPLE**
</span>
```js
text = "춘식이 X 라이언";
regexp = /\s/;
console.log(text.match(regexp));
// output: Array [' ', index: 3]
```
</br>

### \\S
<span style="color:#BFBFBF; font-size:14px;
	  font-family: LINESeedSansKR-Bold">
	  **EXAMPLE**
</span>
```js
text = "춘식이 X 라이언";
regexp = /\S/;
console.log(text.match(regexp));
// output: Array ['춘']
```
</br>




## Group
</br>

### [ ]
대괄호사이의 문자들과 매치되는 하나의 문자를 가져온다. 
예를 들어, [ab] 정규 표현식이 있으면, 문자열에서 a 혹은 b를 하나를 찾는다.
ab를 찾는게 아니다.
</br>

#### hyphen -
하이픈을 사용하면 두 문자 사이의 범위를 의미한다. 
글자 순서나 숫자의 크기를 순서대로 넣으면 된다. 
- [a-zA-Z] : 알파벳 모두
- [0-9] : 숫자

<span style="color:#BFBFBF; font-size:14px;
	  font-family: LINESeedSansKR-Bold">
	  **EXAMPLE**
</span>
```js
text = "after before non-profit";
regexp = /[abcde]/; // [abcde] = [a-e]
console.log(text.match(regexp));
//output: Array ['a'];

regexp = /[abc-]/g;
console.log(text.match(regexp));
// output: Array ['a', 'b', '-'];
```
</br>

#### ^ 
대괄호 사이에서 사용되면 부정의 의미를 지닌다.

<span style="color:#BFBFBF; font-size:14px;
	  font-family: LINESeedSansKR-Bold">
	  **EXAMPLE**
</span>
```js
text = "after before non-profit";
regexp = /[^af]/;
console.log(text.match(regexp));
// output: Array ['t'];

regexp = /[^a-z]/;
console.log(text.match(regexp));
// output: Array [' '];
```
</br>

### Vertical Bar x|y
x 또는 y 값을 찾을 수 있다.

<span style="color:#BFBFBF; font-size:14px;
	  font-family: LINESeedSansKR-Bold">
	  **EXAMPLE**
</span>
```js
text = "A B C D E F G F W G Q X H I";
regexp = /B|D|F/g;

console.log(text.match(regexp));
//output: Array ['B', 'D', 'F', 'F']

regexp = /A|X/g;
console.log(text.match(regexp));
//output: Array ['A', 'X']
```
</br>

## Assertions
행이나 단어의 시작 · 끝을 나타내는 경계와 어떤 식으로든 매치가 가능한 것을 나타내는 다른 패턴이 포함됩니다. 

### \^x 
문자열 처음에 x값을 찾을 수 있다.
오직 문자열 처음 값만  

<span style="color:#BFBFBF; font-size:14px;
	  font-family: LINESeedSansKR-Bold">
	  **EXAMPLE**
</span>
```js
text = "hype boy";
regexp = /^h/;
console.log(text.match(regexp));
// output: Array ['h']

regexp = /^boy/;
console.log(text.match(regexp));
// output: null
```
</br>

### \x$
문자열 마지막 x 값을 찾을 수 있다. 

<span style="color:#BFBFBF; font-size:14px;
	  font-family: LINESeedSansKR-Bold">
	  **EXAMPLE**
</span>
```js
text = "hype boy";
regexp = /boy$/;
console.log(text.match(regexp));
//output: Array ['boy']

text = "hype boy";
regexp = /hype$/;
console.log(text.match(regexp));
//output: null
```
</br>

