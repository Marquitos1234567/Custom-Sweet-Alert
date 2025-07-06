function mostrarAlerta({ mensaje = "", tipo = "info", duracion = 3000 }) {
    // Eliminar alerta previa si existe
    const existente = document.querySelector(".mi-alerta");
    if (existente) existente.remove();

    // Crear contenedor
    const alerta = document.createElement("div");
    alerta.className = `mi-alerta ${tipo}`;
    alerta.innerHTML = `
        <span class="icon">${obtenerIcono(tipo)}</span>
        <span class="mensaje">${mensaje}</span>
        <button class="cerrar">&times;</button>
    `;

    // Cerrar manualmente
    alerta.querySelector(".cerrar").onclick = () => alerta.remove();

    // Insertar en el body
    document.body.appendChild(alerta);

    // Animación de entrada
    setTimeout(() => {
        alerta.classList.add("visible");
    }, 50);

    // Cierre automático
    if (duracion > 0) {
        setTimeout(() => alerta.remove(), duracion);
    }
}

function obtenerIcono(tipo) {
    switch (tipo) {
        case "success": return "✔️";
        case "error": return "❌";
        case "warning": return "⚠️";
        case "info": return "ℹ️";
        default: return "";
    }
}
