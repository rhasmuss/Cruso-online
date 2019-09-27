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


export class Docentes {
    private nombre: string;
    private apellido: string;
    private correo: string;
    private profecion: string;
    private direciion: string;
    constructor(nom: string, ap: string, prof: string, corre: string) {
        this.nombre = nom;
        this.apellido = ap;
        this.profecion = prof;
        this.correo = corre;
    }

}

export class Estudiante {

    private nombre: string;
    private apellido: string;
    private correo: string;

    constructor(nom: string, ap: string, corre: string) {
        this.nombre = nom;
        this.apellido = ap;
        this.correo = corre;

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
    constructor(nom: string, dir: string, precio: number) {
        this.nombre = nom;
        this.direccion = dir;
        this.precio = precio;
    }

}

export class CompraCurso {

    fecha: string;
    constructor(fecha: string) {
        this.fecha = fecha;
    }

}
