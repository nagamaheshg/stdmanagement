// let count = 1; 

// function sayHelloWorld(){

//     console.log(count);
//     if(count == 10){
//         clearInterval(timer);
//     }
//     count++;
// }

// let timer = setInterval(function(){

//     console.log(count);
//     if(count == 10){
//         clearInterval(timer);
//     }
//     count++;

// }, 2000);

 let t =  setTimeout(function(){
    console.log("Hello World!....");
 }, 5000)

 clearTimeout(t);