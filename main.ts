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


export class Docente {
    private nombre: string;
    private apellido: string;
    private correo: string;
    private profecion: string;
    private direcion: Drieccion;
    
    constructor(nom: string, ap: string, prof: string, corre: string,direc:Drieccion) {
        this.nombre = nom;
        this.apellido = ap;
        this.profecion = prof;
        this.correo = corre;
        this.direcion=direc;
       
    }

}

export class Estudiante {

    private nombre: string;
    private apellido: string;
    private correo: string;
    private direccion:Drieccion;

    constructor(nom: string, ap: string, corre: string,dir:Drieccion) {
        this.nombre = nom;
        this.apellido = ap;
        this.correo = corre;
        this.direccion=dir;

    }

}

export class Drieccion {

    ciudad: string;
    barrio: string;
    calle: string;
    constructor(ciud: string, ba: string, calle: string) {
        this.ciudad = ciud;
        this.barrio = ba;
        this.calle = calle;
    }
}
export class Curso {
    nombre: string;
    direccion: string;
    precio: number;
    docente:Docente;
    constructor(nom: string, dir: string, precio: number,doc:Docente) {
        this.nombre = nom;
        this.direccion = dir;
        this.precio = precio;
        this.docente=doc;
    }

}

export class CompraCurso {

    fecha: string;
    curso:Curso;
    estuante:Estudiante;
    constructor(fecha: string,curso:Curso,estud:Estudiante) {
        this.fecha = fecha;
        this.curso=curso;
        this.estuante=estud;
    }

}
