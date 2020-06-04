import foo from './foo.js';
console.log(5)
let invoked = false;

function bar(invoker) {
    if (!invoked) {
        invoked = true;
        console.log(invoker + ' invokes bar. js');
        foo(' bar.js');
        console.log(111)
    }
    console.log(6)
}
export default bar;