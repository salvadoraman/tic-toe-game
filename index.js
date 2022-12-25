let sgn="x";
let print=(number)=>{
  let val=document.getElementById("r"+number);
  //console.log(val);
  if(val.innerHTML=="")
  {
  val.innerHTML=sgn;
  winner();
  //console.log(val.innerHTML);
  toggleSign();
  }
}
let toggleSign=()=>{
    if(sgn=="x")
    {
        sgn="o";
    }
    else{
        sgn="x";
    }
}
let getbox=(no)=>{
    return document.getElementById("r"+no).innerHTML;
}
let movecheck=(a,b,c,m)=>{
    if(getbox(a)==m && getbox(b)==m && getbox(c)==m)
    {
        return true;
    }
    else
    {
        return false;
    }
}
let winner=()=>{
    if(movecheck(1,2,3,sgn) ||movecheck(4,5,6,sgn) || movecheck(7,8,9,sgn) ||
    movecheck(1,4,7,sgn) ||movecheck(2,5,8,sgn) ||movecheck(3,6,9,sgn) ||
    movecheck(1,5,9,sgn) ||movecheck(3,5,7,sgn)){
     alert(".....Congrats You won the game....");
     for(let i=1;i<=9;i++){
        document.getElementById("r"+i).innerHTML="";
    }
}
 else{
        if(getbox(1)!="" && getbox(2)!="" && getbox(3)!="" && getbox(4)!="" &&
        getbox(5)!="" && getbox(6)!="" && getbox(7)!="" && getbox(8)!="" &&
        getbox(9)!="")
        {
            alert("Oops.....Its A Tie");
        }
    }
}

    

