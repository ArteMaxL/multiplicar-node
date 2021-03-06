const fs = require('fs');
const colors = require("colors");

let listarTabla = (base, limite = 10) => {

    console.log("=====================".green);
    console.log(`  ===TABLA DEL ${base}===`.green);
    console.log("=====================".green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    };
};

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor ingresado: ${base}, no es número válido.`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor ingresado: ${limite}, no es número válido.`);
            return;
        }

        let data = "";

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        };

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err)
            else resolve(colors.green(`tabla-${base}-al-${limite}.txt`));
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}