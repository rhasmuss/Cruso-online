"use strict";
/**
 * se nesecita resolver el siguiente problrma unsando oop.
 * se desea realizar un sistema de venta de cursos online
 * como ejem platzi,etc.
 * para ello se nesecita interactuar con  estudiantes profesores de los mismos se nesecita registrar informacion
 * basica  como nombre , apellido, correo,
 * por otra parte se nesecita interactuar con los cursos que se impartan de los mismos se nesecita
 * registrar  su precio nombre ,descrpcion finalmente se desea guardar el registro de los estudiantes
 * que compraron algun cuso .
 * un estudiante o profesor puede tener una o mas direcciones al mismo timepo una direccion esta compuesta
 * por la siguiente infiormacion :ciudad ,barrio,calle,
 */
exports.__esModule = true;
var Docente = /** @class */ (function () {
    function Docente(nom, ap, prof, corre, direc) {
        this.nombre = nom;
        this.apellido = ap;
        this.profecion = prof;
        this.correo = corre;
        this.direcion = direc;
    }
    return Docente;
}());
exports.Docente = Docente;
var Estudiante = /** @class */ (function () {
    function Estudiante(nom, ap, corre, dir) {
        this.nombre = nom;
        this.apellido = ap;
        this.correo = corre;
        this.direccion = dir;
    }
    return Estudiante;
}());
exports.Estudiante = Estudiante;
var Direccion = /** @class */ (function () {
    function Direccion(ciud, ba, calle) {
        this.ciudad = ciud;
        this.barrio = ba;
        this.calle = calle;
    }
    return Direccion;
}());
exports.Direccion = Direccion;
var Curso = /** @class */ (function () {
    function Curso(nom, dir, precio, doc) {
        this.nombre = nom;
        this.direccion = dir;
        this.precio = precio;
        this.docente = doc;
    }
    return Curso;
}());
exports.Curso = Curso;
var CompraCurso = /** @class */ (function () {
    function CompraCurso(fecha, curso, estud) {
        this.fecha = fecha;
        this.curso = curso;
        this.estudiante = estud;
    }
    return CompraCurso;
}());
exports.CompraCurso = CompraCurso;
var direcionn1 = new Direccion("cbba", 'carinito', 'el apsaje del diablo');
var direcionn2 = new Direccion("la paz", 'caca de lugar', 'sin calle');
var direcionn3 = new Direccion("santa cruj", 'plan30000', 'elay ps');
var estudiante1 = new Estudiante('pedro', 'mamani', 'pedro@gmail.com', [direcionn1, direcionn2, direcionn3]);
var estudiante2 = new Estudiante('juan', 'quispe', 'juan@gmail.com', [direcionn1, direcionn2, direcionn3]);
var estudiante3 = new Estudiante('jose', 'claros', 'jose@gmail.com', [direcionn1, direcionn2, direcionn3]);
var estudiante4 = new Estudiante('luis', 'herbas', 'luis@gmail.com', [direcionn1, direcionn2, direcionn3]);
var estudiante5 = new Estudiante('carlos', 'chambi', 'carlos@gmail.com', [direcionn1, direcionn2, direcionn3]);
var estudiante6 = new Estudiante('miguel', 'guzman', 'miguel@gmail.com', [direcionn1, direcionn2, direcionn3]);
var estudiante7 = new Estudiante('daniel', 'flores', 'daniel@gmail.com', [direcionn1, direcionn2, direcionn3]);
var estudiante8 = new Estudiante('maria', 'rodriguez', 'maria@gmail.com', [direcionn1, direcionn2, direcionn3]);
var estudiante9 = new Estudiante('mariel', 'cepedez', 'mariel@gmail.com', [direcionn1, direcionn2, direcionn3]);
var estudiante10 = new Estudiante('ariel', 'claros', 'ariel@gmail.com', [direcionn1, direcionn2, direcionn3]);
var docente1 = new Docente('angel', 'antezana', 'ing', 'angel@gmail.com', [direcionn1, direcionn2, direcionn3]);
var docente2 = new Docente('pepito', 'el cacha viejas', 'ing', 'pepito@gmail.com', [direcionn1, direcionn2, direcionn3]);
var curso1 = new Curso('java', 'prado', 100, [docente1, docente2]);
var curso2 = new Curso('angular', 'quillacollo', 670, [docente1, docente2]);
var curso3 = new Curso('python', 'san martin', 450, [docente1, docente2]);
var curso4 = new Curso('larabel', 'torre42', 800, [docente1, docente2]);
var curso5 = new Curso('java script', 'thecnne', 500, [docente1, docente2]);
var compra1 = new CompraCurso('12-3-19', curso1, estudiante1);
var compra2 = new CompraCurso('1-7-2019', curso2, estudiante2);
var compra3 = new CompraCurso('6-7-2018', curso3, estudiante3);
var compra4 = new CompraCurso('25-8-2019', curso4, estudiante4);
var compra5 = new CompraCurso('15-4-19', curso5, estudiante5);
var compra6 = new CompraCurso('16-7-19', curso1, estudiante6);
var compra7 = new CompraCurso('16-11-19', curso2, estudiante7);
var compra8 = new CompraCurso('3-3-19', curso1, estudiante8);
var compra9 = new CompraCurso('9-6-19', curso5, estudiante9);
var compra10 = new CompraCurso('4-4-19', curso1, estudiante10);
var compra11 = new CompraCurso('12-2-19', curso4, estudiante1);
var compra12 = new CompraCurso('9-6-19', curso5, estudiante7);
console.log(direcionn1);
console.log(direcionn2);
console.log(direcionn3);
console.log(estudiante1, estudiante2, estudiante3, estudiante4, estudiante5, estudiante6, estudiante7, estudiante8, estudiante9, estudiante10);
console.log(docente1, docente2);
console.log(curso1, curso2, curso3, curso4, curso5);
console.log(compra1, compra2, compra3, compra4, compra5, compra6, compra7, compra8, compra9, compra10, compra11, compra12);
