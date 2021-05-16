import {v1} from "uuid";
import {Dispatch} from "react";


export type notationType = {
    notationTitle: string
    description: string
    notationId: string
}


const initialState: Array<notationType> = [
    {
        notationTitle: 'Помыть посуду',
        notationId: v1(),
        description: 'Сегодня было много гостей, пришел брат, сестра со своим парнем, а также бабушка и дедушка, и как всегда я мою посуду.'
    },
    {
        notationTitle: 'Рыбалка с дедушкой',
        notationId: v1(),
        description: 'Завтра мы с дедушкой договорились пойти на рыбалку.'
    },
    {
        notationTitle: 'Тестовое',
        notationId: v1(),
        description: 'Мне пришло тестовое задание, у меня есть шанс попасть в команду, было бы здорово ) .'
    },
    {notationTitle: 'Покупки', notationId: v1(), description: 'Купить два шампуня и двесте грамм сыра.'}
]


export const notationsReducer = (state: Array<notationType> = initialState, action: ActionsType): Array<notationType> => {
    switch (action.type) {
        case 'REMOVE-NOTATION':
            return state.filter(nt => nt.notationId != action.notationId)
        case 'ADD-NOTATION':
            let newNotation = {notationTitle: action.notationTitle, notationId: v1(), description: 'Описание нотации'}
            return [newNotation, ...state]
        case 'CHANGE-NOTATION-TITLE':
            return state.map(nt => nt.notationId === action.notationId ? {
                ...nt,
                notationTitle: action.notationTitle
            } : nt)
        case 'CHANGE-NOTATION-DESCRIPTION':
            return state.map(nt => nt.notationId === action.notationId ? {
                ...nt,
                description: action.description
            } : nt)
        default:
            return state
    }
}

// actions
export const removeNotationAC = (notationId: string) => ({type: 'REMOVE-NOTATION', notationId} as const)
export const addNotationAC = (notationTitle: string) => ({type: 'ADD-NOTATION', notationTitle} as const)
export const changeNotationTitleAC = (notationId: string, notationTitle: string) => (
    {type: 'CHANGE-NOTATION-TITLE', notationId, notationTitle} as const)
export const changeNotationDescriptionAC = (notationId: string, description: string) => (
    {type: 'CHANGE-NOTATION-DESCRIPTION', notationId, description} as const)
// thunks
export const removeNotationTC = (notationId: string) => {
    return (dispatch: Dispatch<ActionsType>) => {
        dispatch(removeNotationAC(notationId))
    }
}
export const addNotationTC = (notationTitle: string) => {
    return (dispatch: Dispatch<ActionsType>) => {
        dispatch(addNotationAC(notationTitle))
    }
}
export const changeNotationTitleTC = (notationId: string, notationTitle: string) => {
    return (dispatch: Dispatch<ActionsType>) => {
        dispatch(changeNotationTitleAC(notationId, notationTitle))
    }
}
export const changeNotationDescriptionTC = (notationId: string, description: string) => {
    return (dispatch: Dispatch<ActionsType>) => {
        dispatch(changeNotationDescriptionAC(notationId, description))
    }
}


// types
export type RemoveNotationActionType = ReturnType<typeof removeNotationAC>;
export type AddNotationActionType = ReturnType<typeof addNotationAC>;
export type changeNotationTitleActionType = ReturnType<typeof changeNotationTitleAC>;
export type changeNotationDescriptionActionType = ReturnType<typeof changeNotationDescriptionAC>;

type ActionsType = RemoveNotationActionType
    | AddNotationActionType
    | changeNotationTitleActionType
    | changeNotationDescriptionActionType
