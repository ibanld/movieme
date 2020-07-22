export function eng() {
    return {
        type: "SET_ENG",
    }
}
export function esp() {
    return {
        type: "SET_ESP",
    }
}
export function port() {
    return {
        type: "SET_PT",
    }
}

export default function reducer(lang = 'en-US', action) {
    switch (action.type) {
        case 'SET_ENG':
            return 'en-US'
        case 'SET_ESP':
            return 'es-ES'
        case 'SET_PT':
            return 'pt-BR'
        default: 
            return lang
    }
    
}