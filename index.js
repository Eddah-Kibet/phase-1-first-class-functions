//function that has a call back
function receivesAFunction(callback){
    callback();
}
//takes no argument
function returnsANamedFunction (){
    return function beforeAll(){
        return "This is a named function";
    }
    
}
//returns anonymous function - a function without a name
//takes no argument
function returnsAnAnonymousFunction(){
    return function(){
        return "this is an anonymous function";
}}
