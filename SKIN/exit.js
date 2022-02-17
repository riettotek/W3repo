//variabili
var exitUrl = "https://www.google.com";

//carico il DOM
window.addEventListener('load', function(){
    console.warn('inizializzo la skin');
    var body = document.getElementsByTagName('body')[0];

    let a = document.createElement("a");
    console.warn(a);
    var t = this.document.createTextNode("ClickTag Skin");
    a.appendChild(t);
    document.body.appendChild(a);
    
    //console.info('aggiungo il link al body');
    //body.addEventListener('click', function(){

        // console.warn(window.location.href);
        // window.location.href = exitUrl;
    //});

});

   
