export const Italic = {
    state:{
        isItalic: false,
    },
    reducers:{
        update: (state,payload)=>({...state, ...payload})
    }
}