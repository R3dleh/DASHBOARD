$(() => {
    $('#date').mask('00/00/0000')

    $('#alimentos-form').submit((e) => {
        e.preventDefault()
    }).validate({
        rules: {
            nome: {
                required: true
            },
            data: {
                required: true
            }
        },
        submitHandler: function(form) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Registro realizado com sucesso',
                showConfirmButton: false,
                timer: 1500
            }).then(() => {
                $('#food').val('')
                $('#date').val('')
            })
        }
    })
})