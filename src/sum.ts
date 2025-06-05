var unused = "this will cause a lint error";

function sum(A:number ,b:number): number {
    let x = 10;
    let y = 10;
    return  A + b;
}

console.log('Sum of 3 and 5 is:', sum(3, 5));
