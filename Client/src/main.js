/**
 * New node file
 */
 if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  

  xmlhttp.open("GET","http://127.0.0.1:1337/",true);
xmlhttp.send();
document.getElementById("text").innerHTML=xmlhttp.responseText;
document.getElementById("state").innerHTML=xmlhttp.statusText;