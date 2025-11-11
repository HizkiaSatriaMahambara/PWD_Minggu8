function validation(email){
    var regex = /^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]\.[a-z0-9]{2,4}$/;
    return regex.test(email);
}

function fn_ValForm() {
    var sMsg = "";
    var email = document.getElementById("email").value;

    if (document.getElementById("name").value == "") {
        sMsg += "\n* Anda belum mengisikan nama";
    }

    if (email == "") {
        sMsg += "\n* Anda belum mengisikan email";
    } 
    else if (!validation(email)) {
        sMsg += "\n* Format email tidak valid (harus ada @ dan domain)";
    }

    if (document.getElementById("message").value == "") {
        sMsg += "\n* Anda belum mengisikan pesan";
    }

    if (sMsg != "") {
        alert("Peringatan:\n" + sMsg);
        return false;
    } else {
        return true;
    }
}
