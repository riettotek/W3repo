//variabili
var exitUrl = "https://www.google.com";


//carico il DOM
window.addEventListener('load', function(){
    
    console.log("inizializzo la skin");
    var body = document.getElementsByTagName('body')[0];

    //creo il tag <a>
    let ancora = document.createElement("a");
    console.log(ancora);


    let span = document.createElement("span");
    
     var t = this.document.createTextNode("ClickTag Skin");
     span.appendChild(t);
     ancora.appendChild(span);
   
     ancora.setAttribute("id", "skin-link");
   
   
   
   
   
     // document.body.appendChild(a);
    
    //console.info('aggiungo il link al body');
    //body.addEventListener('click', function(){

        // console.warn(window.location.href);
        // window.location.href = exitUrl;
    //});

});

   
/*  
    <a id="skin-link" href="https://www.google.com" target="_blank">
        <span>ClickTag Skin</span>
    </a>
*/
