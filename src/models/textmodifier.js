export const TextModifier = {
    state:{
        text: "",
    },
    reducers:{
        update: (state,payload)=>({...state, ...payload}),
        removeText: (state,payload)=>({...state, ...payload})
    }
}