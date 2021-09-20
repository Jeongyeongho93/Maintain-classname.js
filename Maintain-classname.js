//The function of classlist literally allow to do work with classes lists
//The ClassName replaces everything without any class conditions
//The reason why using a classList is that it is to use another element of HTML element, in other words, allows manipulation for the class container of the element.
//Contain means that we sepicifed the class whether contain the class of HTML element
//Whether the toggle exsist and remove it
//Whether the toggle not exsist and add it
----------------------------------------------------------------

const h1 = document.querySelector("div.hello:first-child h1")

function handleTitleClick(){
    const clickedClass = "clicked";
    if (h1.classList.contains(clickedClass)) {
        h1.classList.remove(clickedClass);
    } else {
        h1.classList.add = (clickedClass);
    }
}

h1.addEventListener("click", handleTitleClick);
----------------------------------------------------------------

//The toggle function has the ability to check whether the class name exists or not and if the force is not given, "toggle" token, removing it if it's present and adding it if's not present. 
//If force is true, adds token. if force is false, removes token in other word if the class name does not exist then would add the class name and sams as otherwise.

const h1 = document.querySelector("div.hello:first-child h1")

function handleTitleClick(){
    h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);



