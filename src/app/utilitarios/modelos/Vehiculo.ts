export interface Vehiculo{
    codigo: string;
    foto?: string |null;
    marca: string;
    modelo: string;
    anio?: number;
    color?: string;
    kilometraje?:string;
    precio?:number;
    calificacion?: number|undefined


}