

function guardar() {

    db.collection("usuarios").add({
        email: document.getElementById('user_email').value,
        comentario: document.getElementById('user_comment').value,

    })
        .then((docRef) => {
            alert('Comentario registrado');
        })
        .catch((error) => {
            alert('Error al enviar comentario')
        });
}