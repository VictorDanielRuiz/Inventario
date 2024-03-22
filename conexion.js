let mysql = require("mysql");


let conexion = mysql.createConnection({
    host: "localhost",
    database: "u600466123_pAvanzada",
    user: "u600466123_Admin",
    password: "Schneider1822$"
});

conexion.connect(function(err){
    if(err){
        throw err;
    } else{
        console.log("conexion exitosa");
    }
});

conexion.end();