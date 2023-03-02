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
ㄴ;
