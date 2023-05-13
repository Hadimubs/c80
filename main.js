a=[];
function submit(){
var x=[];
for (let i = 1; i <=4; i++) {
 y=document.getElementById("name_of_the_student_"+i).value;
  console.log(y);
  a.push(y);
}
console.log(a);

var l=a.length;
console.log(l);

for (let j = 0; j < l; j++) {
 x.push("<h4>name - "+a[j]+"</h4>");  
 console.log(x);

}
console.log(x);
document.getElementById("display_name_with_commas").innerHTML=x;

var r=x.join(" ");
console.log(r);
document.getElementById("display_name_without_commas").innerHTML=r;

document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
a.sort();
console.log(a);

var x1=[];
var l=a.length;
console.log(l);

for (let j = 0; j < l; j++) {
 x1.push("<h4>name - "+a[j]+"</h4>");  
 console.log(x1);

}
console.log(x1);
document.getElementById("display_name_with_commas").innerHTML=x1;

var r=x1.join(" ");
console.log(r);
document.getElementById("display_name_without_commas").innerHTML=r;
}