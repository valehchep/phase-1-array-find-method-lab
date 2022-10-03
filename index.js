// code your solution here
let x;
function superbowlWin(record){
    x = record.find(({result}) => result ==='W' );
if(x === undefined){
    return;      
}else if(x.year === '2015'){
     return x.year;
}
}