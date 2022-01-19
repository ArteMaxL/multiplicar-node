## Multiplicar Consola APP

Esta es una aplicación para generar archivos de tablas de multiplicar, en formato txt.
La misma se genera desde comandos de consola.

Uso:

node app 
crear      Crea la tabla de multiplicar y la guarda en un archivo de texto.
listar     Visuliza una la tabla de multiplicar pero no genera un archivo de texto.
--base     Establece la base. Solo acepta un número entero.
--limite   Establece el límite de la tabla. Solo acepta un número entero.

Ejemplo:

node app listar --base 2 --limite 4

Salida:
=====================
  ===TABLA DEL 2===
=====================
2 * 1 = 2
2 * 2 = 4
2 * 3 = 6
2 * 4 = 8

Ejemplo:

node app crear --base 5 --limite 10

Salida:

Archivo creado: tabla-5-al-10.txt

Ejecutar el comando

```
npm install
```
