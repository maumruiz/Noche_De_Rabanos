import { proxy } from "valtio"

export const appState = proxy({
    isCarving: false,
    carvingIndex: 0,
    carvingDone: [false, false, false],
    instructionsClosed: false
})

export const dialogos = [
    "La noche de rábanos en Oaxaca acontece gracias a miles de personas, cuyas manos  siembran, cosechan y transforman en festejo los frutos de esta hermosa tierra.",
    "Durante varios meses cada rábano ha convertido en colores la luz solar, y es esta luz acumulada la que destella cada 23 de diciembre.",
    "Las manos de los artistas  expanden su belleza oculta hacia el resto del mundo.",
    "Estas raíces crecieron durante meses apuntando hacia el centro de la Tierra.",
    "Como rayos de Luna fueron penetrando el suelo hasta que una noche, la creatividad humana las hace girar hacia el centro de la galaxia.",
    "Las manos de los artesanos del rábano sienten el frío del agua en su blancura, la fuerza de la Tierra en su piel enrojecida y la ternura del mundo en el verdor en sus hojas.",
    "Las manos son el enlace perfecto entre huesos, ligamentos, músculos y nervios, forma y función, movimiento y sensación.",
    "Cada obra que se muestra esta noche surge de la danza dactilar del Artesano que abre su corazón como un homenaje a la Vida-Muerte-Vida.",
    "Son incontables las manos de quienes durante más de 125 años han enaltecido las enigmáticas formas de esta raíz.",
    "Hoy reaparecen como símbolo viviente de las raíces que nutren a un pueblo en esplendor permanente.",
]