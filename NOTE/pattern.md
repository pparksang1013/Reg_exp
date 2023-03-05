# 정규 표현식 패턴
검색하고 싶은 문자열을 세세하게 지정해서 조회 할 수 있다. 
이 때 문자열의 따옴표는 생략한다. 따옴표를 포함하면 따옴표까지 검색한다. 패턴은 특별한 의미를 가지는 메타문자 또는 기호로 표현한다. 
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
'_'  포함한 영숫자을 의미한다.
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

### vertical bar x|y
x 또는 y 값을 찾을 수 있다. 
가장 먼저 찾는 것을 반환한다.

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
</br>

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

### x$
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

## Quantifiers
반복패턴 
</br>
### x* 
x문자가 패턴이 일치하지 않거나 0번 이상 반복할 때 일치한다. 
예를 들어, f를 조회했는데, f가 하나도 없으면 공백이 출력된다. 
<mark class="hltr-neon">왜 0번 이상일까??
</mark>

<span style="color:#BFBFBF; font-size:14px;
	  font-family: LINESeedSansKR-Bold">
	  **EXAMPLE**
</span>
```js
text = "aaa bb c ddd e";
regexp = /a*/;
console.log(text.match(regexp));
// output: Array ['aaa']
```
</br>

### plus x+
한 번 이상 반복되는 문자를 찾는다. 

<span style="color:#BFBFBF; font-size:14px;
	  font-family: LINESeedSansKR-Bold">
	  **EXAMPLE**
</span>
```js
text = "boooo";
regexp = /o*/;
console.log(text.match(regexp));
// output: Array ['']

regexp = /bo*/;
console.log(text.match(regexp));
// output: Array ['boooo']

regexp = /o+/;
console.log(text.match(regexp));
// output: Array ['oooo']
```
</br>

##### 왜 0번 이상일까? 
x+ 는 문자열에 'o'를 조회하면 'oooo'가 조회된다.

x\* 는 문자열에 'o' 가 있어도  'b'로 시작하는 문자열이라서 그런가 ' ' 이 조회된다.
x* 는 시작하는 문자열과 반복되는 문자가 일치해야 조회가 되는거 같다. 
</br>

### x{ n }
n개 연속 일치.

<span style="color:#BFBFBF; font-size:14px;
	  font-family: LINESeedSansKR-Bold">
	  **EXAMPLE**
</span>
```js
text = "snoopy";
regexp = /o{2}/;
console.log(text.match(regexp));
// output: Array ['oo']

regexp = /o{3}/;
console.log(text.match(regexp));
// output: null
```
</br>

### x{ n, }
n개 <mark class="hltr-red">이상</mark> 연속 일치.

<span style="color:#BFBFBF; font-size:14px;
	  font-family: LINESeedSansKR-Bold">
	  **EXAMPLE**
</span>
```js
text = "snoopy";
regexp = /o{1,}/;
console.log(text.match(regexp));
// output: Array ['oo']

regexp = /o{1}/;
console.log(text.match(regexp));
// output: Array ['o']
```
</br>

### x{ n,m }
n개 이상 m개 이하 연속 일치.

<span style="color:#BFBFBF; font-size:14px;
	  font-family: LINESeedSansKR-Bold">
	  **EXAMPLE**
</span>
```js
text = "spotify";
regexp = /o{1,3}/;
console.log(text.match(regexp));
// output: Array ['o']

text = "spootify";
console.log(text.match(regexp));
// output: Array ['oo']

text = "spoootify";
console.log(text.match(regexp));
// output: Array ['ooo']

text = "spooootify";
console.log(text.match(regexp));
// output: Array ['ooo']
```
문자열 중에 m개보다 많이 반복되는 문자가 있어도, 정규표현식은 m개 이하만 조회한다. 
에러는 발생하지 않는다.  