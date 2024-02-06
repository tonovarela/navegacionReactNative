import React, { createContext, useReducer } from "react";

import { AuthAction, authReducer } from "./authReducer";

export interface AuthContextProps {
    authState: AuthState,
    signIn: () => void,
    logOut: () => void,
    changeUsername: (username: string) => void,
    setFavoriteIcon: (iconName: string) => void
}

export const AuthContext = createContext({} as AuthContextProps);


export interface AuthState {
    isLogged: boolean;
    username?: string;
    favoriteIcon?: string;
}

export const AuthInitialState: AuthState = {
    isLogged: false
}



const functionsAuthReducer = (dispatch: React.Dispatch<AuthAction>) => {
    const changeUsername = (username: string) => {
        dispatch({
            type: 'changeUserName',
            payload: username
        })
    }
    const signIn = () => {
        dispatch({ type: 'signIn', payload: 'Tonovarela' })
    }

    const logOut = () => {
        dispatch({ type: 'logOut' })
    }
    const setFavoriteIcon = (iconName: string) => {
        dispatch({ type: 'setFavoriteIcon', payload: iconName })
    }

    return {
        changeUsername,
        signIn,
        logOut,
        setFavoriteIcon

    }
}

export const AuthProvider = ({ children }: { children: JSX.Element }) => {

    const [authState, dispatch] = useReducer(authReducer, AuthInitialState);
    const functions = functionsAuthReducer(dispatch);

    return (
        <AuthContext.Provider value={{ authState, ...functions }}>
            {children}
        </AuthContext.Provider>

    )
}