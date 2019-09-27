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
var Drieccion = /** @class */ (function () {
    function Drieccion(ciud, ba, calle) {
        this.ciudad = ciud;
        this.barrio = ba;
        this.calle = calle;
    }
    return Drieccion;
}());
exports.Drieccion = Drieccion;
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
        this.estuante = estud;
    }
    return CompraCurso;
}());
exports.CompraCurso = CompraCurso;
