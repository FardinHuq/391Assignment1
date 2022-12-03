function date(){
    document.getElementById('date').innerHTML = Date(document.lastModified);
}
window.onload=date;
