"use strict"

let szinek=["aqua","green","yellow","blue","red","pink","red","orange","purple",]
let segedindex=0;
document.querySelectorAll("li").forEach(x=>{
    x.style.backgroundColor = szinek[segedindex];
    segedindex++

    x.addEventListener("click",event=>{
        Szinvalasztas(event)


        
    })
})


let korok=document.querySelectorAll(".dot");
let kiskorok=document.querySelectorAll(".kisdot");
console.log(korok)



let lepes=0;
let megoldas=["red","green","yellow","blue"];
function Szinvalasztas(e){
    
     let szin=e.target.style.backgroundColor
     let lepesek= lepes+1;
     if (lepesek%4==0) {
         console.log("4jolvan");

         korok[lepes].style.backgroundColor=szin;
         lepes++;


        let elso= korok[lepesek-4].style.backgroundColor
        let masodik= korok[lepesek-3].style.backgroundColor
        let harmadik= korok[lepesek-2].style.backgroundColor
        let negyedik= korok[lepesek-1].style.backgroundColor
        if (megoldas[0]==elso) {
            kiskorok[lepesek-4].style.backgroundColor="black";
        }
        if (megoldas[1]==masodik) {
            kiskorok[lepesek-3].style.backgroundColor="black";
        }
        if (megoldas[2]==harmadik) {
            kiskorok[lepesek-2].style.backgroundColor="black";
        }
        if (megoldas[3]==negyedik) {
            kiskorok[lepesek-1].style.backgroundColor="black";
        }
        if (megoldas.includes(elso)) {
            if (kiskorok[lepesek-4].style.backgroundColor!="transparent") {
                kiskorok[lepesek-4].style.backgroundColor=="white"
            }
            else if (kiskorok[lepesek-3].style.backgroundColor!="transparent") {
                kiskorok[lepesek-3].style.backgroundColor=="white"
            }
            else if (kiskorok[lepesek-2].style.backgroundColor!="transparent") {
                kiskorok[lepesek-2].style.backgroundColor=="white"
            }
            else if (kiskorok[lepesek-1].style.backgroundColor!="transparent") {
                kiskorok[lepesek-4].style.backgroundColor=="white"
            }
       
        }
        else if (megoldas.includes(masodik)) {
            if (kiskorok[lepesek-4].style.backgroundColor!="transparent") {
                kiskorok[lepesek-4].style.backgroundColor="white"
            }
            else if (kiskorok[lepesek-3].style.backgroundColor!="transparent") {
                kiskorok[lepesek-3].style.backgroundColor="white"
            }
            else if (kiskorok[lepesek-2].style.backgroundColor!="transparent") {
                kiskorok[lepesek-2].style.backgroundColor="white"
            }
            else if (kiskorok[lepesek-1].style.backgroundColor!="transparent") {
                kiskorok[lepesek-4].style.backgroundColor="white"
            }
       
        }
        else if (megoldas.includes(harmadik)) {
            if (kiskorok[lepesek-4].style.backgroundColor!="transparent") {
                kiskorok[lepesek-4].style.backgroundColor="white"
            }
            else if (kiskorok[lepesek-3].style.backgroundColor!="transparent") {
                kiskorok[lepesek-3].style.backgroundColor="white"
            }
            else if (kiskorok[lepesek-2].style.backgroundColor!="transparent") {
                kiskorok[lepesek-2].style.backgroundColor="white"
            }
            else if (kiskorok[lepesek-1].style.backgroundColor!="transparent") {
                kiskorok[lepesek-4].style.backgroundColor="white"
            }
       
        }
        else if (megoldas.includes(negyedik)) {
            if (kiskorok[lepesek-4].style.backgroundColor!="transparent") {
                kiskorok[lepesek-4].style.backgroundColor="white"
            }
            else if (kiskorok[lepesek-3].style.backgroundColor!="transparent") {
                kiskorok[lepesek-3].style.backgroundColor="white"
            }
            else if (kiskorok[lepesek-2].style.backgroundColor!="transparent") {
                kiskorok[lepesek-2].style.backgroundColor="white"
            }
            else if (kiskorok[lepesek-1].style.backgroundColor!="transparent") {
                kiskorok[lepesek-4].style.backgroundColor="white"
            }
       
        }

        
    }
    else{
        console.log(szin);
        korok[lepes].style.backgroundColor=szin;
        lepes++
    }


   
 
}