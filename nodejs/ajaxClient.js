var xmlhttp;

function SendHttpObj(p1, p2) {
    if (window.XMLHttpRequest) { // code for all new browsers 
        xmlhttp = new XMLHttpRequest();
    } else if (window.ActiveXObject) { // code for IE5 and IE6 
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    if (xmlhttp != null) {
        //xmlhttp.onreadystatechange = state_Change;
        var url = "http://127.0.0.1:3000";
        xmlhttp.open("POST", url, true);
        xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;"); //
        var data = "p1=" + p1.x + "," + p1.y + "," + p1.z + "&p2=" + p2.x + "," + p2.y + "," + p2.z;
        var dzb = {x:p1.x,y:p1.y,z:p1.z};
        xmlhttp.send(dzb);
    } else {
        alert("Your browser does not support XMLHTTP.");
    }
}

SendHttpObj({x:12.5,y:12.5,z:12.5}, {x:6.18, y:6.18, z:6.18});