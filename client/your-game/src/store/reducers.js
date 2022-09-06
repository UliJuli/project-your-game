const initState = {
    questionsList: [],
}

export const reducers = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_LIST':
            const newState = action.payload.data
            return { ...state, questionsList: newState };
            case 'BOOL_ANSWER':
                const categories = state.questionsList.map(el => ({...el}));
                categories.forEach((e) => e.Questions = e.Questions.reduce((acc, quest) => {
                    if(Number(quest.id) === Number(action.payload.id)) {
                        acc.push({...quest, hidden: true})
                    } else {
                    acc.push(quest)
                    }
                    return acc;
                    },[])); 
                return { ...state, questionsList: categories };
                default:
                    return state;
                }
}