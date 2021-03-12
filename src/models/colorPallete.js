export const ColorPallete = {
    state:{
        isOpen: false,
        selectedColor: ""
    },
    reducers:{
        update: (state,payload)=>({...state, ...payload})
    }
}