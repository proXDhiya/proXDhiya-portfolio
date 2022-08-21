let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let res = JSON.parse(xhttp.responseText);
        console.log(res.services[1].name);
    }
};
xhttp.open("GET", "../data.json", true);
xhttp.send();
