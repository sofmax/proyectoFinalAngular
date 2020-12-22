import { TipoIndicador } from "./tipoIndicador";

export interface Indicador {
    version: string;
    autor: string;
    fecha: string;
    uf: TipoIndicador;
    ivp: TipoIndicador;
    dolar: TipoIndicador;
    dolar_intercambio: TipoIndicador;
    euro: TipoIndicador;
    ipc: TipoIndicador;
    utm: TipoIndicador;
    imacec: TipoIndicador;
    tpm: TipoIndicador;
    libra_cobre: TipoIndicador;
    tasa_desempleo: TipoIndicador;
    bitcoin: TipoIndicador;
}