# Comandos Git

## Comandos Básicos

- `git init`: Crea un repositorio Git en un directorio local. Solo se usa una vez al inicio del proyecto.

- `git add <ARCHIVO>...`: Agrega archivos específicos al área de staging (preparación para commit). Usa `git add .` para agregar todos los archivos modificados.

- `git status`: Muestra el estado actual del repositorio, incluyendo archivos modificados, en staging o sin seguimiento.

- `git commit -m "MENSAJE"`: Crea un commit con los archivos en staging, incluyendo un mensaje descriptivo. Ejemplo: `git commit -m "Agrega estilos CSS"`.

- `git push`: Sube los commits locales al repositorio remoto. Para ramas específicas, ver sección de ramas.

- `git pull`: Descarga y fusiona los últimos cambios del repositorio remoto a tu rama local.

## Trabajo con Ramas

- `git branch`: Lista todas las ramas locales. La rama actual tiene un asterisco (*).

- `git branch <nombre-rama>`: Crea una nueva rama local.

- `git checkout <nombre-rama>`: Cambia a la rama especificada. Usa `git checkout -b <nombre-rama>` para crear y cambiar a una nueva rama.

- `git merge <nombre-rama>`: Fusiona la rama especificada en la rama actual.

- `git push origin <nombre-rama>`: Sube la rama local al repositorio remoto.

## Flujo de Trabajo Típico

1. Crea o cambia a tu rama personal: `git checkout -b mi-rama-personal`
2. Haz cambios en los archivos.
3. Agrega cambios: `git add .`
4. Confirma cambios: `git commit -m "Descripción de cambios"`
5. Sube a tu rama: `git push origin mi-rama-personal`

.
