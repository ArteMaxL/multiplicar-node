## Multiplicar Consola APP

Esta es una aplicación para generar archivos de tablas de multiplicar, en formato txt.
La misma se genera desde comandos de consola.
<br>

Uso:

<b>node app </b>
<li>
<b>crear</b>      Crea la tabla de multiplicar y la guarda en un archivo de texto.
<li>
<b>listar</b>    Visualiza una la tabla de multiplicar pero no genera un archivo de texto.
<li>
<b>--base</b>     Establece la base. Solo acepta un número entero.
<li>
<b>--limite</b>   Establece el límite de la tabla. Solo acepta un número entero.

<br>
Ejemplo:

<b>node app listar --base 2 --limite 4</b>


Salida:
=====================
  ===TABLA DEL 2===
=====================
2 * 1 = 2

2 * 2 = 4

2 * 3 = 6

2 * 4 = 8


Ejemplo:

<b>node app crear --base 5 --limite 10</b>

Salida:

<b>Archivo creado: tabla-5-al-10.txt</b>
<br>

Ejecutar el comando para instalar

```
npm install
```
