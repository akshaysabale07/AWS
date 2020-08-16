function submitt()
{
    var a=document.querySelector("#id1").value;

    var b=document.querySelector("#id2").value;
    var c=document.querySelector("#id3").value;
    var d=document.querySelector("#idd");

    var v=document.createElement("div");

   // v.textContent=a
 v.innerHTML="ID And Passord "+ a + b+ c;

//clearing the Text field

   a=document.querySelector("#id1").value= " ";
   b=document.querySelector("#id2").value =" ";
   c=document.querySelector("#id3").value=" ";
   
console.log(a);
console.log(b);
console.log(c);
//if validation whether textfield are  empty

if(a=" ")
{
console.log("enter id");}

if(b=" "){
    console.log("enter password");

}
if(c=" "){
console.log("enter email-id");}
}