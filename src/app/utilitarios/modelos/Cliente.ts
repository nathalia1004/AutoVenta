export interface Cliente{
    id: number;
    nombre: string;
    apellido: string;
    password: string;
    telefono?: string|null;
    email?:string|null;
}