//// [mappedTypeRecursiveInference.ts]
// interface A { a: A }
// declare let a: A;
type Deep<T> = { [K in keyof T]: Deep<T[K]> }
declare function foo<T>(deep: Deep<T>): T;
// const out = foo(a);

let xhr: XMLHttpRequest;
const out2 = foo(xhr);


//// [mappedTypeRecursiveInference.js]
// const out = foo(a);
var xhr;
var out2 = foo(xhr);
