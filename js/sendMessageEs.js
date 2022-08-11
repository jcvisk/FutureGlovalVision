function submitToAPI(e) {
    e.preventDefault();

    var Namere = /[A-Za-z]{1}[A-Za-z]/;
    if (!Namere.test($("#name").val())) {
        alert("Name cannot be blank");
        return;
    }

    if ($("#email").val() === "") {
        alert("Please enter your email");
        return;
    }

    var reeamil = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
    if (!reeamil.test($("#email").val())) {
        alert("Please enter a valid email address");
        return;
    }

    if ($("#phone").val() === "") {
        alert("Please enter your phone");
        return;
    }

    var Descriptione = /[A-Za-z]{1}[A-Za-z]/;
    if (!Descriptione.test($("#message").val())) {
        alert("Description cannot be blank");
        return;
    }

    var name = $("#name").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    var message = $("#message").val();
    var data = {
        name: name,
        email: email,
        phone: phone,
        message: message
    };



    $.ajax({
        type: "POST",
        url: "https://ead0zxa97e.execute-api.us-east-1.amazonaws.com/production/contact-us",
        dataType: "json",
        crossDomain: "true",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(data),


        success: function () {
            alert("Enviado exitosamente");
            // clear form and show a success message
            document.getElementById("contact-form").reset();
            location.reload();
        },
        error: function () {
            // show an error message
            alert("Error al enviar el correo");
        }
    });
}