window.setCookie = (cname, cvalue) => {
    console.log(window.config.appDomain())
    document.cookie = cname + "=" + cvalue + ";domain="+window.config.appDomain()+";";
}

window.getCookie = (cname) => {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

window.deleteCookie = name => {
    document.cookie = name + "=;domain="+window.config.appDomain()+";";
}