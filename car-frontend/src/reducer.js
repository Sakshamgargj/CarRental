let obj = {bgColorMode:'white',colorMode:'black',isLogin:'N', profile:{}}
export function appReducer(state=obj,action){
    if(action.type=="setLogin")
    {
        return {...state,isLogin:action.value};
    }
    else if(action.type=="setProfile")
    {
        return {...state,profile:action.value};
    }
    else if(action.type=="setColor")
        {
            return {...state,colorMode:action.value};
        }
    else if(action.type=="setBgColor")
        {
            return {...state,bgColorMode:action.value};
        }
    else{
        return state;
    }
}