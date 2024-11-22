var clockConstant ;
function showClock(){
    let currDate=new Date();
    document.getElementById("clock").innerHTML=currDate.toLocaleTimeString().bold() ;
}