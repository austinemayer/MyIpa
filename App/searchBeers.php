<?php
$beer = urlencode($_GET['beer']);
$JSONstr = file_get_contents('http://api.brewerydb.com/v2/search?key=d84b101bc1d6ea0321fad15755c9be9c&type=beer&q='.$beer);
echo $JSONstr;
// d84b101bc1d6ea0321fad15755c9be9c
// ab1a9413137431c3a1d41aa27b214b34
// http://api.brewerydb.com/v2/search?key=d84b101bc1d6ea0321fad15755c9be9c&type=beer&q='.$beer