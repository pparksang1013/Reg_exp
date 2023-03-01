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
regexp = /C+|F+/g
console.log(text.match(regexp));






