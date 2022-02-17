### PRIMA SOLUZIONE:

- [ ] Inserire questo codice come **ultimo elemento** prima della **chiusura** del tag **_head_**

``` 
<link rel="stylesheet" type="text/css" href="skin.css"> 
```
   


- [ ] Inserire il seguente tag come primo elemento del body
(È l'elemento che permetterà il **click di reindirizzamento in uscita**)

```
<a id="skin-link" href="" target="_blank">
    <span>Skin ADV</span>
</a>
```


- [ ] Caricare immagine sfondo dove si vuole.
- [ ] Copiare il percorso web dell'immagine e 
- [ ] incollarlo nella prima regola `background-image` del foglio di stile **skin.css** come raffigurato qui sotto. 
```
/*** skin.css ***/
body{
    background-image: url("percorso/verso/immagine/bgskin.jpg");
    background-size:cover;
    background-repeat: no-repeat;
...ecc...

```

- Solo in questo caso d'esempio specifico di un lavoro preso in carico, veniva richiesto il valore esadecimale del colore usato come sfumatura (dal basso verso l'alto) nella grafica su photoshop. Quindi, qualora il cliente richiedesse informazioni di questo genere, è bene riportarle nel file **_istruzioni.txt_** compreso nella cartella progetto.
