import { createContext,useState } from "react"
import Login from "../components/login/Login";


export const LoginContext = createContext(null);

const ContextProvider =({children})=>{

    const [account,setAccount] = useState('');

    return (<LoginContext.Provider
           value = {{account,setAccount}}
        >
            {children}
        </LoginContext.Provider>
    )
}

export default ContextProvider;