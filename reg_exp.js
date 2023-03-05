let text = "사과,배,복숭아,춘식이,고구마";
let regexp;
// Chareter classes
regexp = /사과/;
console.log(text.match(regexp));

// dot
regexp = /.../;
console.log(text.match(regexp));

// Vertical bar
text = "A B C D E F G F W G Q X H I";
regexp = /A|X/g;
console.log(text.match(regexp));

// Plus
text = "AAA B CC D E FFFF G F WWW G Q X HH I";
regexp = /C+|F+/g;
console.log(text.match(regexp));

// [ ], -
text = "after before non-profit";
regexp = /[abcde]/; // [abcde] = [a-e]
console.log(text.match(regexp));
//output: Array ['a'];

regexp = /[abc-]/g;
console.log(text.match(regexp));
// output: Array ['a', 'b', '-'];

regexp = /[^a-t\s]/;
console.log(text.match(regexp));
// output: Array [' '];

// ( ) ?? 뭔지 정확히 모르겠담
text = "foo bar";
regexp = /(ba)/;
console.log(text.match(regexp));

// \d
text = "year 2002";
regexp = /\d/;
console.log(text.match(regexp));

// \D
text = "year 2002";
regexp = /\D/;
console.log(text.match(regexp));

// \w
text = "춘식이 X 라이언";
regexp = /\w/;
console.log(text.match(regexp));

// \W
regexp = /\W/;
console.log(text.match(regexp));

// \s
text = "춘식이 X 라이언";
regexp = /\s/;
console.log(text.match(regexp));

// \S
text = "춘식이 X 라이언";
regexp = /\S/;
console.log(text.match(regexp));

// ^
text = "hype boy";
regexp = /^boy/;
console.log(text.match(regexp));

// $
regexp = /boy$/;
console.log(text.match(regexp));

// *
text = "boooo";
regexp = /o*/;
console.log(text.match(regexp));

regexp = /bo*/;
console.log(text.match(regexp));

// +
regexp = /o+/;
console.log(text.match(regexp));

// {n}
text = "snoopy";
regexp = /o{1,}/;
console.log(text.match(regexp));

// {n,}
regexp = /o{1}/;
console.log(text.match(regexp));

// {n, m}
text = "spotify";
regexp = /o{1,3}/;
console.log(text.match(regexp));

text = "spooootify";
console.log(text.match(regexp));

// g flag
text = `Just a simple touch and it can set you free
We don't have to rush when you're alone with me
I feel it coming, I feel it coming, babe`;
regexp = /i/g;
console.log(text.match(regexp));

// i flag
text = `Just a simple touch and it can set you free
We don't have to rush when you're alone with me
I feel it coming, I feel it coming, babe`;
regexp = /I/;
console.log(text.match(regexp));

regexp = /I/gi;
console.log(text.match(regexp));

// m flag
text = `Just a simple touch and it can set you free
We don't have to rush when you're alone with me
I feel it coming, I feel it coming, babe`;
regexp = /e$/gm;
console.log(text.match(regexp));
