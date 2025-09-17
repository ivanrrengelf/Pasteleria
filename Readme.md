Pastelería Romero

Sitio web estático y responsive para una pastelería. Incluye diseño moderno, componentes accesibles y JS ligero para navegación móvil, notificaciones (toasts) y validación mínima del formulario de contacto.

Contenido del repositorio
- index.html: landing con secciones de Inicio, Productos, Sobre nosotros y Contacto.
- styles.css: tipografías, variables de color, layout responsive y componentes.
- script.js: interacciones (toggle del menú móvil, toasts y validación de formulario).
- assets/: imágenes SVG optimizadas para hero, productos y sección "Sobre".

Requisitos
- Navegador moderno (Chrome/Edge/Firefox/Safari). No requiere backend.

Uso local
1) Abrí index.html con doble clic.
   - Alternativa con servidor local (recomendado para probar rutas relativas):
     - Windows PowerShell: python -m http.server 8000
     - Navegá a http://localhost:8000

Estructura
├─ index.html
├─ styles.css
├─ script.js
└─ assets/
   ├─ hero-cake.svg
   ├─ product-chocolate-cake.svg
   ├─ product-cheesecake.svg
   ├─ product-cupcakes.svg
   ├─ product-alfajores.svg
   └─ about-kitchen.svg

Despliegue en la nube (opciones rápidas)
- GitHub Pages: subí el repo y habilitá Pages (branch main, root).
- Netlify: arrastrá la carpeta o conectá el repo (build: vacío, publish: root).
- Vercel: importar el repo como static (sin build).
- AWS S3 + Static Website Hosting: subir archivos y habilitar hosting estático (opcionalmente CloudFront).
- Azure Static Web Apps: crear recurso y apuntar al repo.
- Google Cloud Storage: bucket público con Static Website.

Personalización
- Marca: cambiá logo y <title> en index.html.
- Datos de contacto: editá WhatsApp, email y dirección en la sección Contacto.
- Productos: edita las tarjetas de la sección "Nuestros productos".
- Colores/estilo: ajustá variables CSS en :root en styles.css.

Accesibilidad y SEO
- HTML semántico con headings y landmarks (header, main, footer, nav).
- Texto alternativo en imágenes y atributos aria para menú móvil.
- Meta viewport, meta description y tipografías web cargadas con preconnect.

Limitaciones
- No hay backend ni envío real de formularios. El mensaje de contacto es demostrativo.
- Los precios y datos son de ejemplo.

Licencia
Uso libre para fines personales o comerciales.

Autoría y propósito
Este sitio fue creado por el asistente a pedido del usuario. Se realizó únicamente con fines de práctica para lanzar una instancia en la nube (cloud) y no representa un negocio en producción.
