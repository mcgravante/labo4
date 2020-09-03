export class Usuario {

    private nombre:string;
    private clave:string;

    constructor(nombre : string, clave:string)
    {
        this.nombre=nombre;//inicializo atributos propios
        this.clave=clave;//inicializo atributos propios

    }

    public getNombre():string
    {
        return this.nombre;
    }

    public setNombre(nombre:string):void
    {
        this.nombre=nombre;
    }

    public getClave():string
    {
        return this.clave;
    }

    public setClave(clave:string):void
    {
        this.clave=clave;
    }

 }