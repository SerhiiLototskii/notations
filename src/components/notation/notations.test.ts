import {
    addNotationAC, changeNotationDescriptionAC,
    changeNotationTitleAC,
    notationsReducer,
    notationType,
    removeNotationAC
} from "./notations-reducer";
import {v1} from "uuid";


let notationId1 = v1()
let notationId2 = v1()

let startState: Array<notationType> = [{
    notationTitle: 'Помыть посуду',
    notationId: notationId1,
    description: 'Сегодня было много гостей, пришел брат, сестра со своим парнем, а также бабушка и дедушка, и как всегда я мою посуду.'
},
    {
        notationTitle: 'Рыбалка с дедушкой',
        notationId: notationId2,
        description: 'Завтра мы с дедушкой договорились пойти на рыбалку.'
    },]


test('correct notations should be removed', () => {
    const endState = notationsReducer(startState, removeNotationAC(notationId1))

    expect(endState.length).toBe(1)
    expect(endState[0].notationId).toBe(notationId2)
})

test('correct notations should be added', () => {
    let newNotation: notationType = {
        notationTitle: 'Заголоаок',
        notationId: 'any id',
        description: 'any description '
    }


    const endState = notationsReducer(startState, addNotationAC(newNotation.notationTitle))

    expect(endState.length).toBe(3)
    expect(endState[0].notationTitle).toBe(newNotation.notationTitle)

})

test('correct notation should change its name', () => {
    let newNotationTitle = 'New notationN'

    const action = changeNotationTitleAC(notationId1, newNotationTitle)

    const endState = notationsReducer(startState, action)

    expect(endState[0].notationTitle).toBe(newNotationTitle)
    expect(endState[1].notationTitle).toBe('Рыбалка с дедушкой')
})
test('correct notation should change its description', () => {
    let newNotationDescription = 'New description'

    const action = changeNotationDescriptionAC(notationId1, newNotationDescription)

    const endState = notationsReducer(startState, action)

    expect(endState[0].description).toBe(newNotationDescription)
    expect(endState[1].description).toBe('Завтра мы с дедушкой договорились пойти на рыбалку.')
})