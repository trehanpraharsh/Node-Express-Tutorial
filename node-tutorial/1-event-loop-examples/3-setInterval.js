setInterval(() => {
  console.log("hello world");
}, 2000);
console.log("I will run first");
//process stays alive unless we:-
//kill the process - CTRL+C
//or unexpected error
