import { proxy } from "valtio"

export const appState = proxy({
    isCarving: false,
    carvingIndex: 0,
    carvingDone: [false, false, false]
})