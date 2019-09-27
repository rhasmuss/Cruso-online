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
    private direcion: Direccion[];
    constructor(nom: string, ap: string, prof: string, corre: string, direc: Direccion[]) {
        this.nombre = nom;
        this.apellido = ap;
        this.profecion = prof;
        this.correo = corre;
        this.direcion = direc;
    }
}

export class Estudiante {
    private nombre: string;
    private apellido: string;
    private correo: string;
    private direccion: Direccion[];
    constructor(nom: string, ap: string, corre: string, dir: Direccion[]) {
        this.nombre = nom;
        this.apellido = ap;
        this.correo = corre;
        this.direccion = dir;
    }
}

export class Direccion {
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
    docente: Docente[];
    constructor(nom: string, dir: string, precio: number, doc: Docente[]) {
        this.nombre = nom;
        this.direccion = dir;
        this.precio = precio;
        this.docente = doc;
    }
}

export class CompraCurso {
    fecha: string;
    curso: Curso;
    estudiante: Estudiante;
    constructor(fecha: string, curso: Curso, estud: Estudiante) {
        this.fecha = fecha;
        this.curso = curso;
        this.estudiante = estud;
    }
}
let direcionn1: Direccion = new Direccion("cbba", 'carinito', 'el apsaje del diablo');
let direcionn2: Direccion = new Direccion("la paz", 'caca de lugar', 'sin calle');
let direcionn3: Direccion = new Direccion("santa cruj", 'plan30000', 'elay ps');
let estudiante1: Estudiante = new Estudiante('pedro', 'mamani', 'pedro@gmail.com', [direcionn1, direcionn2, direcionn3]);
let estudiante2: Estudiante = new Estudiante('juan', 'quispe', 'juan@gmail.com', [direcionn1, direcionn2, direcionn3]);
let estudiante3: Estudiante = new Estudiante('jose', 'claros', 'jose@gmail.com', [direcionn1, direcionn2, direcionn3]);
let estudiante4: Estudiante = new Estudiante('luis', 'herbas', 'luis@gmail.com', [direcionn1, direcionn2, direcionn3]);
let estudiante5: Estudiante = new Estudiante('carlos', 'chambi', 'carlos@gmail.com', [direcionn1, direcionn2, direcionn3]);
let estudiante6: Estudiante = new Estudiante('miguel', 'guzman', 'miguel@gmail.com', [direcionn1, direcionn2, direcionn3]);
let estudiante7: Estudiante = new Estudiante('daniel', 'flores', 'daniel@gmail.com', [direcionn1, direcionn2, direcionn3]);
let estudiante8: Estudiante = new Estudiante('maria', 'rodriguez', 'maria@gmail.com', [direcionn1, direcionn2, direcionn3]);
let estudiante9: Estudiante = new Estudiante('mariel', 'cepedez', 'mariel@gmail.com', [direcionn1, direcionn2, direcionn3]);
let estudiante10: Estudiante = new Estudiante('ariel', 'claros', 'ariel@gmail.com', [direcionn1, direcionn2, direcionn3]);
let docente1: Docente = new Docente('angel', 'antezana', 'ing', 'angel@gmail.com', [direcionn1, direcionn2, direcionn3]);
let docente2: Docente = new Docente('pepito', 'el cacha viejas', 'ing', 'pepito@gmail.com', [direcionn1, direcionn2, direcionn3]);
let curso1: Curso = new Curso('java', 'prado', 100, [docente1, docente2]);
let curso2: Curso = new Curso('angular', 'quillacollo', 670, [docente1, docente2]);
let curso3: Curso = new Curso('python', 'san martin', 450, [docente1, docente2]);
let curso4: Curso = new Curso('larabel', 'torre42', 800, [docente1, docente2]);
let curso5: Curso = new Curso('java script', 'thecnne', 500, [docente1, docente2]);

let compra1: CompraCurso = new CompraCurso('12-3-19', curso1, estudiante1);
let compra2: CompraCurso = new CompraCurso('1-7-2019', curso2, estudiante2);
let compra3: CompraCurso = new CompraCurso('6-7-2018', curso3, estudiante3);
let compra4: CompraCurso = new CompraCurso('25-8-2019', curso4, estudiante4);
let compra5: CompraCurso = new CompraCurso('15-4-19', curso5, estudiante5);
let compra6: CompraCurso = new CompraCurso('16-7-19', curso1, estudiante6);
let compra7: CompraCurso = new CompraCurso('16-11-19', curso2, estudiante7);
let compra8: CompraCurso = new CompraCurso('3-3-19', curso1, estudiante8);
let compra9: CompraCurso = new CompraCurso('9-6-19', curso5, estudiante9);
let compra10: CompraCurso = new CompraCurso('4-4-19', curso1, estudiante10);
let compra11: CompraCurso = new CompraCurso('12-2-19', curso4, estudiante1);
let compra12: CompraCurso = new CompraCurso('9-6-19', curso5, estudiante7);
console.log(direcionn1);
console.log(direcionn2);
console.log(direcionn3);
console.log(estudiante1, estudiante2, estudiante3, estudiante4, estudiante5, estudiante6, estudiante7, estudiante8, estudiante9, estudiante10);
console.log(docente1, docente2);
console.log(curso1, curso2, curso3, curso4, curso5);
console.log(compra1, compra2, compra3, compra4, compra5, compra6, compra7, compra8, compra9, compra10, compra11, compra12);
