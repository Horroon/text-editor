export const SelectedText = {
    state:{
        startIndex: 0,
        endIndex:0,
        selectedText: "",
        unselectedText:""
    },
    reducers:{
        update: (state,payload)=>({...state, ...payload}),
        remove: ()=>(
            {
                startIndex: 0,
                endIndex:0,
                selectedText: "",
                unselectedText:""
            }
        )
    }
}