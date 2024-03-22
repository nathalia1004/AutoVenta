export interface Vehiculo{
    id: string;
    imagenUrl?: string |null;
    marca: string;
    modelo: string;
    anio?: number;
    color?: string;
    kilometros?:string;
    precio?:number;
    calificacion?: number|undefined


}