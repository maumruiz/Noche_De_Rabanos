import { proxy } from "valtio"

export const appState = proxy({
    isCarving: false,
    carvingIndex: 0
})