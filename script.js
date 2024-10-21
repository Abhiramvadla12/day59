let newWindow;
function message(data){
    let message = document.getElementById('result');
    message.innerHTML=`<h1 style="color:white">${data}</h1>`;
    
}
function openWindow(){
     newWindow = window.open("./new.html","name","width=400px,height=200px");
    message('new window is created');
}
function closeWindow(){
    if(newWindow != undefined){
        newWindow.close();
        message("window has been closed");
    }
    else{
        message("first open window to close");
    }
}
function printWindow(){
    window.print();
}
function resizeWindow(){
    if(newWindow !== undefined){
        newWindow.resizeTo(200,300);
        message("window has been resized")
    }
    else{
        message("first open window to resize")
    }
   
}
function scrollWindow(){
    window.scrollTo(0,1000)
    message("window has been scrolled")
    setTimeout(()=> window.scrollTo(0,0),2000);
}
function confirmWindow(){
    let flag = window.confirm("Do you want to close this window");
    message(`Result: ${flag}`);
}
function promptWindow(){
    let result = window.prompt("enter your name","abhiram");
    message(`he is  Mr.${result}, he is topper of the college, topper of the university , kani anger management lo zero`)
}
function alertWindow(){
    window.alert("hello Mr. heart miss ayye")
}