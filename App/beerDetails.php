<?php
$beerId = urlencode($_GET['beerId']);
$JSONobj = file_get_contents('http://api.brewerydb.com/v2/beer/'.$beerId.'/?key=d84b101bc1d6ea0321fad15755c9be9c');
echo $JSONobj;
// d84b101bc1d6ea0321fad15755c9be9c
// ab1a9413137431c3a1d41aa27b214b34

