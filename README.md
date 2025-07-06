# Custom-Sweet-Alert
Este componente resuelve la necesidad de mostrar alertas personalizadas y visualmente atractivas en una página web, permitiendo informar al usuario sobre el resultado de acciones (éxito, error, advertencia o información) de forma clara, rápida y fácil de cerrar.

### _INSTALACIÓN_
Tenemos que crear un archivo html, crear una carpeta para el archivo javaScrip descargar lelos archivo y }
guardalo en su respectiva carpeta, dentro del archivo html tendremos que colocar la siguiente 
línea: "<script src="js/sweetcustom.js"></script>" y <link rel="stylesheet" href="css/sweetcustom.css">
para los estilos, esto puede ser dentro de las etiquetas "head" o "body"

### _USO_
### En html
Es la página principal de ejemplo. Muestra un título y varios botones. Cada botón llama a la función `mostrarAlerta` con diferentes mensajes y tipos de alerta (success, error, warning, info). Al hacer clic en un botón, se muestra una alerta personalizada en pantalla.
```
<h1>Ejemplo de Alerta</h1>
    <button onclick="mostrarAlerta({mensaje: 'Operación exitosa', tipo: 'success'})">Success</button>
    <button onclick="mostrarAlerta({mensaje: 'Hubo un error', tipo: 'error'})">Error</button>
    <button onclick="mostrarAlerta({mensaje: 'Advertencia al usuario', tipo: 'warning'})">Warning</button>
    <button onclick="mostrarAlerta({mensaje: 'Solo un mensaje informativo'})">Info</button>
```

### En javaScrip
Contiene la lógica para mostrar alertas personalizadas.  
- La función `mostrarAlerta` crea una alerta visual con un mensaje, un icono y un botón para cerrar.  
- El tipo de alerta (success, error, warning, info) cambia el icono y el estilo.  
- La alerta se puede cerrar manualmente o desaparece automáticamente después de unos segundos.
```
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
        default: return "ℹ";
    }
}
```
### En CSS
Define los estilos visuales de las alertas (colores, animaciones, posición, etc.) para que se vean atractivas y diferenciadas según el tipo.
```
.mi-alerta {
    position: fixed;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.8);
    min-width: 300px;
    padding: 20px 30px;
    border-radius: 15px;
    font-family: sans-serif;
    font-size: 1rem;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    opacity: 0;
    transition: all 0.4s ease;
    z-index: 9999;
    display: flex;
    gap: 10px;
    align-items: center;
}

.mi-alerta.visible {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
}

.mi-alerta .icon {
    font-size: 1.5rem;
}

.mi-alerta .mensaje {
    flex-grow: 1;
}

.mi-alerta .cerrar {
    background: none;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
}

.mi-alerta.success {
    background: #d4edda;
    color: #155724;
    border-left: 6px solid #28a745;
}

.mi-alerta.error {
    background: #f8d7da;
    color: #721c24;
    border-left: 6px solid #dc3545;
}

.mi-alerta.warning {
    background: #fff3cd;
    color: #856404;
    border-left: 6px solid #ffc107;
}

.mi-alerta.info {
    background: #d1ecf1;
    color: #0c5460;
    border-left: 6px solid #17a2b8;
}
```
 ### Librería en acción: 
 Uso de las diferentes alertas en distinos escenario
 
 1. Campo Vacio
 ![image](https://github.com/user-attachments/assets/96739e5b-bf84-433e-9a95-915ab76d3765)

3. Eliminar tarea
 ![Captura de pantalla 2025-07-05 214717](https://github.com/user-attachments/assets/21883c8f-d690-4ab5-8e37-62228090125c)

5. Agregar tarea
 ![Captura de pantalla 2025-07-05 214730](https://github.com/user-attachments/assets/610e0479-4356-4281-b077-010faa097bfd)



