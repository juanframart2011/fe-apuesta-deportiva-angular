export interface Game {
    id: number;
    fechaNumero: number;
    fechaNumeroTexto: string;
    idLocal: number;
    nombreLocal: string;
    resultadoLocal: number;
    rutaLogoLocal: string;
    idVisita: number;
    nombreVisita: string;
    resultadoVisita: number;
    rutaLogoVisita: string;
    fecha: string;
    fechaTexto: string;
    hora: string;
    horaTexto: string;
    idVocalia: number;
    nombreVocalia: string;
    idEstadio: number;
    nombreEstadio: string;
    ordenEstadio: number;
    colorEstadio: string;
    idEstado: number;
    descripcionEstado: string;
    colorEstado: string;
    select: boolean;
  }