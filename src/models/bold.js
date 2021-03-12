export const BoldText = {
    state:{
        isBold: false,
    },
    reducers:{
        update: (state,payload)=>({...state, ...payload})
    }
}