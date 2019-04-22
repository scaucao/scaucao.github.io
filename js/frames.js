   
function frames(variable){
    document.getElementById("enframe").src="pages/home";
    if (variable==1){
        document.getElementById("enframe").src="pages/home";
    }
    else if (variable==2){
        document.getElementById("enframe").src="pages/about_me";
    }
    else if (variable==3){
        document.getElementById("enframe").src="pages/published.html";
    }
    else if (variable==4){
        document.getElementById("enframe").src="pages/submitted.html";
    }
    else if (variable==5){
        document.getElementById("enframe").src="pages/talks.html";
    }
    else if (variable==6){
        document.getElementById("enframe").src="pages/students.html";  
    }
    else if (variable==7){
        document.getElementById("enframe").src="pages/teaching.html";
    }  
    else if (variable==8){
        document.getElementById("enframe").src="pages/gnu-linux-software.html";
    }  
    else if (variable==9){
        document.getElementById("enframe").src="pages/links.html";
    }  
} 
