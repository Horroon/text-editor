export const List = {
    state:{
        isAble: false,
    },
    reducers:{
        update: (state,payload)=>({...state, ...payload})
    }
}