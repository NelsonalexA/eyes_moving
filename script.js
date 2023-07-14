// // graph= x axis(left side) and y axis(top)
// // declare a variable
// const balls=document.getElementsByClassName("ball");
// // arrow function
// document.onmousemove=(a)=>{
// // 2 variable x axis and y axis
// // client means edge
// const x=(a.clientX*100)/window.innerWidth+'%';
// const y=(a.clientY*100)/window.innerHeight+'%';

// // loop - for loop for 100
// for (i=0;i>100;i++){
//     balls[i].style.left=x;
//     balls[i].style.top=y;
//     balls[i].transform='translate(-'+ x + ',- ' + y + ')';
//     // translate(-0,-0)

    

// }
// }

const balls=document.getElementsByClassName('ball');
document.onmousemove=(a)=>{
const x=(a.clientX*70)/window.innerWidth+'%';
const y=(a.clientY*50)/window.innerHeight+'%';
for(i=0;i<100;i++){
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].transform ='translate(-' + x +',-' + y + ')';
}
};