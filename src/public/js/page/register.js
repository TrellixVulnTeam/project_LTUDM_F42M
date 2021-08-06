console.log('register')

$('#form-register').submit(function (e) {
    e.preventDefault()
    const formData = {
        email: $('#form-register input[name=email]').val(),
        password: $('#form-register input[name=password]').val()
    }

    $.ajax({
        type: "POST",
        url: `https://ngotanan-projectweb-uit.herokuapp.com/register`,
        contentType: 'application/json',
        data: JSON.stringify(formData),
        encode: true,
    }).done(function (res) {
        if (res.status == true) {
            swal("Register successfully :)", "", "success")
            setTimeout(function () {
                window.location.href = 'https://ngotanan-projectweb-uit.herokuapp.com/login'
            }, 1500)
        } else {
            $('#register-error').html(res.msg)
            swal("Login failed :(", "", "error")
        }
    })
})