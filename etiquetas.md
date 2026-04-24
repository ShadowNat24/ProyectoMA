# Etiquetas de HTML

- `<!DOCTYPE html>`: Indica que el documento es tipo HTML.
- `<html>...</html>`: Espacio donde se alojan las etiquetas para la pagina.

- `<head>...</head>`: Contiene los metadatos de la pagina. Es decir, configuraciones o informacion relevante para el navegador e indexadores de motores de busqueda.

- `<body>...</body>`: Espacio donde se alojan las etiquetas correspondientes a lo visual de la pagina.

- `<meta>`: Datos y configuraciones relevantes para el navegador y los motores de busqueda.

- `<title>...</title>`: Titulo que aparece en la pestaña del navegador.

- `<h1>...</h1>`: Primer titulo, se puede llegar hasta el titulo nivel 6.

- `<img>`: Inserta una imagen. Se necesita el atributo `src` para agregar la ruta de la imagen. `alt` en caso de que la etiqueta no cargue. `title` para que aparezca el titulo de la imagen al poner el cursor encima.

- `<figure>...</figure>`: Envuelve la imagen, se usa cuando se tiene una coleccion de imagenes y fragmentos de codigo.

- `<code>...</code>`: Muestra un fragmento de codigo.

- `<figcaption>...</figcaption>`: Pasaje descriptivo de la imagen dentro de figure.

- `<blockquote>...</blockquote>`: Cita que se utiliza cuando se referencia o parafraseo largo de un autor o pagina. Envuelve todo el contenido citado.

- `<cite>...</cite>`: Se utiliza cuando se hace referencia a un autor.

- `<q>...</q>`: Parafraseo o citado corto.

- `<i>...</i>`: Cursiva.

- `<em>...</em>`: Cursiva pero con violencia (haciendo enfasis).

- `<b>...</b>`: Negrita.

- `<strong>...</strong>`: Negrita pero con violencia (con enfasis).

- `<u>...</u>`: Subrayado. (El canal no...)

- `<button>...</button>`: Boton generico. `disabled` Para inhabilitarlo.

- `<p>...</p>`: Parrafo.

- `<span>...</span>`: Texto breve. %&^!X3$#$%$ #@$#$$@#$$#$#@ $%$#$#$%&#$&$#%%#

- `<a>...</a>`: Hipervinculo. `href` para ingresar la ruta/url a la cual redirigirse. `target` indica si abrirlo en la misma pestania o en otra, para abrirlo en otra se usa `target="_blank`. Se usa `mailto` en el atributo `href` para redirigir al usuario a enviar un correo, ejemplo: `href="mailto:correo@aol.com"`. Lo mismo de mailto ocurre con `tel`.

- `<ul>...</ul>`: Seccion de lista desordenada.

- `<ol>...</ol>`: Seccion de lista ordenada. Por defecto son numeros, pero con el atributo `type` se puede ordenar por letras u otros estilos. Con `start` se puede indicar desde que numero o letra empieza.

## Selectores CSS Usados

- `:root`: Selector para definir variables CSS globales (custom properties).

- `body`: Selector para el elemento body, aplica estilos al cuerpo de la página.

- `nav`: Selector para el elemento nav, estilos para la navegación.

- `nav a`: Selector descendente para enlaces dentro de nav.

- `nav a:hover`: Pseudo-clase para enlaces en nav al pasar el mouse.

- `section`: Selector para elementos section, estilos para secciones de contenido.

## Propiedades CSS Usadas

- `--gris-plata: #c0c0c0;`: Variable para color gris plata.
- `--gris-claro: #e0e0e0;`: Variable para gris claro.
- `--gris-medio: #a0a0a0;`: Variable para gris medio.
- `--gris-oscuro: #808080;`: Variable para gris oscuro.
- `--amarillo-vial: #eeb906;`: Variable para color amarillo.
- `--amarillo-claro: #f4e87c;`: Variable para amarillo claro.
- `--amarillo-oscuro: #d4a306;`: Variable para amarillo oscuro.
- `--azul-oscuro: #4e5b64;`: Variable para azul oscuro.
- `--azul-profundo: #47606f;`: Variable para azul profundo.
- `--azul-medio: #6b7b8c;`: Variable para azul medio.
- `--azul-claro: #8fa1b3;`: Variable para azul claro.
- `--blanco-sucio: #f4f4f4;`: Variable para blanco sucio.
- `--blanco-puro: #ffffff;`: Variable para blanco puro.
- `--negro: #000000;`: Variable para negro.
- `--rojo: #ff0000;`: Variable para rojo.
- `--rojo-claro: #ff6666;`: Variable para rojo claro.
- `--verde: #00ff00;`: Variable para verde.
- `--verde-claro: #66ff66;`: Variable para verde claro.
- `--naranja: #ff8000;`: Variable para naranja.
- `--naranja-claro: #ffb366;`: Variable para naranja claro.
- `--morado: #8000ff;`: Variable para morado.
- `--morado-claro: #b366ff;`: Variable para morado claro.
- `--fuente-principal: 'Montserrat', sans-serif;`: Variable para fuente principal.
- `--fuente-secundaria: 'Arial', sans-serif;`: Variable para fuente secundaria.

- `font-family`: Propiedad para definir la fuente.
- `line-height`: Altura de línea del texto.
- `color`: Color del texto.
- `background-color`: Color de fondo.
- `margin`: Márgenes.
- `padding`: Relleno interno.
- `display`: Tipo de display (flex, etc.).
- `justify-content`: Alineación en flexbox.
- `gap`: Espacio entre elementos en flexbox.
- `position`: Posicionamiento (sticky, etc.).
- `top`: Posición desde arriba.
- `z-index`: Índice Z para capas.
- `box-shadow`: Sombra de caja.
- `text-decoration`: Decoración de texto.
- `font-weight`: Peso de la fuente.
- `border-radius`: Radio de borde.
- `transition`: Transición de animaciones.
- `max-width`: Ancho máximo.
- `border-bottom`: Borde inferior.

- `<li>...</li>`: Elemento de la lista.

- `<table>...</table>`: Seccion correspondiente a una tabla.

- `<thead>...</thead>`: Cabecera de la tabla, tiene las categorias.

- `<th>...</th>`: Nombre de la columna si esta en `thead`, sino, nombre de la fila cuando esta en `tbody`.

- `<tbody>...</tbody>`: Seccion donde se ubican las celdas con valores de la tabla.

- `<tr>...</tr>`: Filas donde se colocan las columnas.

- `<td>...</td>`: Dato que se coloca en cada columna.
