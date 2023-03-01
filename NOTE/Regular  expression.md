# 문자열에서 특정 문자 조합
자바스크립트 기반

## 정규표현식 만들기
### 리터럴방식
/ 슬래시로 패턴을 감싸서 작성합니다.

<span style="color:#BFBFBF; font-size:14px;
	  font-family: LINESeedSansKR-Bold ">
**SYNTAX**
</span>
```js
const re = /ab+c/
```
</br>

### RegExp
RegExp  객체의 생성자 함수를 통해 정규 표현식이 런타임에 컴파일된다.

<span style="color:#BFBFBF; font-size:14px;
	  font-family: LINESeedSansKR-Bold ">
**SYNTAX**
</span>
```js
const re = new RegExp('ab+c')
```
</br>

## 정규 표현식 패턴
패턴에는 검색하고 싶은 문자열을 지정한다. 이 때 문자열의 따옴표는 생략한다. 따옴표를 포함하면 따옴표까지 검색한다. 패턴은 특별한 의미를 가지는 메타문자 또는 기호로 표현한다. 
</br>

### Character classes
문자 클래스.
슬래쉬에 내가 찾고싶은 문자열을 넣어서 조회할 수 있다.

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

#### dot .
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

#### Vertical Bar |
or 의미를 가지게 된다.

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

#### Plus +
완전한 단어로 추출하고 싶을 때 사용한다. 

<span style="color:#BFBFBF; font-size:14px;
	  font-family: LINESeedSansKR-Bold">
	  **EXAMPLE**
</span>
```js
text = "AAA B CC D E FFFF G F WWW G Q X HH I";

regexp = /C+|F+/

console.log(text.match(regexp));
//output: Array ['CC', 'FFFF', 'F']
```
</br>


### Assertions
행이나 단어의 시작 · 끝을 나타내는 경계와 어떤 식으로든 매치가 가능한 것을 나타내는 다른 패턴이 포함됩니다. 

