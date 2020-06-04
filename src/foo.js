import bar from './bar.js';
console.log(3)

function foo(invoker) {
    console.log(invoker + ' invokes foo. js');
    console.log(4)
    //1
    bar('foo. js');
    console.log(11)
}
export default foo;