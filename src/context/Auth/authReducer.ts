import { AuthState } from "./AuthContext";


export type AuthAction = { type: 'logOut' }
    | { type: 'changeUserName', payload: string }
    | { type: 'setFavoriteIcon' | 'signIn', payload: string }



export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'signIn':
            return {
                ...state,
                isLogged: true,
                username: action.payload,
            };
        case 'logOut':
            return {
                ...state,
                isLogged: false,
                favoriteIcon: undefined,
                username: undefined,
            };
        case 'changeUserName':
            return {
                ...state,
                username: action.payload,
            }
        case 'setFavoriteIcon':
            return {
                ...state,
                favoriteIcon: action.payload,
            };
        default:
            return state;
    }

}