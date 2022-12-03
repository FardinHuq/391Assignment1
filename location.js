function location(){
    document.getElementById('location').innerHTML = Location(location.origin);
}
window.onload=location