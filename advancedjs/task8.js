var obj={
    num:5,
    
};

var mulToThis=function(a,b){
    return this.num * a * b;
};

console.log(mulToThis.call(obj,1,2));   //CALL Task 1
var arr=[1,2];

console.log(mulToThis.apply(obj,arr));  //APPLY Task 2

var bound=mulToThis.bind(obj);   //BIND Task 3

console.log(bound(1,2)); 

var student={   //Task 4
    age:20,
};

var printAge=function(){
    return this.age;
}

var bound=printAge.bind(student);
bound();

//Curring using bind

let multiply =function(a,b){
    console.log(a*b);
}

let mutiplyByTwo =multiply.bind(this,2); //Assign 2 to a
mutiplyByTwo(5); //Passing argument for b

////Curring Using Closures

let mutiplyClo=function(x){
    return function(y){
        console.log(x*y);
    }
}
let mutiplyByTwoClo=mutiplyClo(2);
mutiplyByTwoClo(3);

