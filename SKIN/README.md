PRIMA SOLUZIONE:

colore di sfumatura #1abc9c


Inserire questo codice come ULTIMO elemento prima della chiusura del tag </head>

    <link rel="stylesheet" type="text/css" href="skin.css">
   


Inserire il seguente tag come primo elemento  del body
(È l'elemento che permetterà il click di reindirizzamento in uscita)

    <a id="skin-link" href="" target="_blank">
        <span>Skin ADV</span>
    </a>


Caricare immagine sfondo dove si vuole.
Copiare il percorso dell'immagine e incollarlo nella prima riga del foglio css (prima regola per il body). 

esempio 

    // file skin.css


body{
    background-image: url("percorso/verso/immagine/bgskin.jpg");
    background-size:cover;
    background-repeat: no-repeat;
    ......

