//variabili
let exitUrl = "https://www.google.com";


//carico il DOM
window.addEventListener('load', function(){
    
    console.log("inizializzo l'area cliccabile");
    var body = document.getElementsByTagName('body')[0];

    //creo il tag <a>
    let ancora = document.createElement("a");
    console.log(ancora);


    let span = document.createElement("span");
    
     var t = this.document.createTextNode("ClickTag Skin");
     span.appendChild(t);
     ancora.appendChild(span);
   
     ancora.setAttribute("id", "skin-link");// attributo id
     console.log('setto attributo id per il CSS');
     ancora.setAttribute("href", exitUrl); // attributo exit
     console.log("setto exit Url");
     ancora.setAttribute("target", "_blank"); // attributo nuova scheda browser
     console.log("setto modo di exit scheda a parte");
   
    
     body.appendChild(ancora); // inserisco nel DOM il clickTag
    

});

