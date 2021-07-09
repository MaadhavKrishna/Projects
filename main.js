var guest_names=[];
var guest_list=[];
var len;
var search_result=0;

function search_guest(){
len=guest_names.length;
search=document.getElementById("search_bar").value;
for(j=0;j<len;j++){
if(search==guest_names[j]){
search_result=search_result+1;
}
}
document.getElementById("result").innerHTML="Name found "+search_result+" times";
search_result=0;
}

function submit(){
guest_names.push(document.getElementById("guest_name").value);
document.getElementById("guest_names").innerHTML=guest_names;
len=guest_names.length;
}

function show(){
for(j=0;j<len;j++){
guest_list.push("<h4>"+guest_names[j]+"</h4>");
}
document.getElementById("guest_list").innerHTML=guest_list.join(" ");;
}

function sort(){
sorted_list=guest_list.sort();
document.getElementById("sorted_guest_list").innerHTML=sorted_list.join(" ");
}