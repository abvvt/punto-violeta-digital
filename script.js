function enviarMensaje() {
    const mensaje = document.getElementById("mensaje").value;

    if (mensaje.trim() === "") {
        document.getElementById("respuesta").innerText = "Por favor escribe un mensaje.";
        return;
    }

    // Simulación de respuesta automática
    document.getElementById("respuesta").innerText = 
        "Tu mensaje fue enviado de manera anónima. Gracias por confiar en este espacio 💜";
    
    document.getElementById("mensaje").value = "";
}
