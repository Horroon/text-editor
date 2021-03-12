export const LinkTag = {
    state:{
        link: "",
    },
    reducers:{
        update: (state,payload)=>({...state, ...payload}),
        remove:()=>({link: ""})
    }
}