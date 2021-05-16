import {v1} from "uuid";

export type notationType = {
    notationsTitle: string
    description: string
    notationId: string
}


const initialState: Array<notationType>= [
    {notationsTitle:'Помыть посуду', notationId: v1() ,description: 'Сегодня было много гостей, пришел брат, сестра со своим парнем, а также бабушка и дедушка, и как всегда я мою посуду.'},
    {notationsTitle:'Рыбалка с дедушкой',notationId: v1() , description: 'Завтра мы с дедушкой договорились пойти на рыбалку.'},
    {notationsTitle:'Тестовое', notationId: v1() ,description: 'Мне пришло тестовое задание, у меня есть шанс попасть в команду, было бы здорово ) .'},
    {notationsTitle:'Покупки', notationId: v1() ,description: 'Купить два шампуня и двесте грамм сыра.'}
]

export const notationsReducer = (state:Array<notationType> = initialState, action: ActionsType):Array<notationType> => {
    switch (action.type) {

        default:
            return state
    }
}

// actions

// thunks




// types


type ActionsType = any
