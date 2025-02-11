   
function frames(variable){
        document.getElementById("enframe").src="pages/home.html";
        document.getElementById("enframe").height="600";
    if (variable==1){
        document.getElementById("enframe").src="pages/home.html";
        document.getElementById("enframe").height="600";
    }
    else if (variable==2){
        document.getElementById("enframe").src="pages/about_me.html";
        document.getElementById("enframe").height="650";
    }
    else if (variable==3){
        document.getElementById("enframe").src="pages/projects.html";
        document.getElementById("enframe").height="600";
    }
    else if (variable==4){
        document.getElementById("enframe").src="pages/publications.html";
        document.getElementById("enframe").height="2300";
    }
    else if (variable==5){
        document.getElementById("enframe").src="pages/students.html";  
        document.getElementById("enframe").height="810";
    }
    else if (variable==6){
        document.getElementById("enframe").src="pages/postdocs-RAs.html";  
        document.getElementById("enframe").height="600";
    }       
    else if (variable==7){
        document.getElementById("enframe").src="pages/worth-noting.html";
        document.getElementById("enframe").height="680";
    }  
    else if (variable==8){
        document.getElementById("enframe").src="pages/talks.html";
        document.getElementById("enframe").height="1770";
    }       
    else if (variable==9){
        document.getElementById("enframe").src="pages/teaching.html";
        document.getElementById("enframe").height="640";
    } 
} 
