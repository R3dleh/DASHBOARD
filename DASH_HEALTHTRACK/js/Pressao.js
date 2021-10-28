$(() => {
    $('#date').mask('00/00/0000')
    $('#time').mask('00:00')

    $('#pressao-form').submit((e) => {
        e.preventDefault()
    }).validate({
        rules: {
            pressao: {
                required: true
            },
            data: {
                required: true
            },
            tempo: {
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
                $('#pressure').val('')
                $('#date').val('')
                $('#time').val('')
            })
        }
    })
})