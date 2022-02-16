var body = document.getElementsByTagName('body')[0];
let exitUrl = "https://www.google.com";
console.log(body);

body.addEventListener('click', function(){
    console.log(window.location.href);
    //window.location.href = exitUrl;
})