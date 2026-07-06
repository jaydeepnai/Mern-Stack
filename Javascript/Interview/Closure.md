# Closures
### The Concept: Closures are the secret engine behind almost everything in modern JavaScript, especially React hooks and event listeners.

- The Task: 
Explain in plain English what a "closure" is. Imagine you are trying to write a simple function called createTaskCounter. Every time you call this counter, it should remember the previous count and add one to it, without using any global variables outside of that function. How does JavaScript "remember" that value?


closure is a standard of writing functions such that they persist the data from its parent functions which are executed earlier. Closures allow the functions to persist the state between excutions.



For the createTaskCounter, I will create a function liek this


```
function createTaskCounter(){
    var c=0;
    return ()=>{
     c+=1;
    return c;
    }
}
const ct = createTaskCounter();
ct();   //1
ct();   //2
ct();   //3
```



here I have created a closure funciton named ct, and it ill be executed with the state value saved in the parent funciton cesteTaskCOunter() funciton which was executed in the initial, but ts child fuction still rmemembers and updats its context state