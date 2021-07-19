const expenseReducerDefaultState = [];
export default (state = expenseReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            // Using the array "spread" operator '...state'
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        // Using Object spread operator. Provided by babel plugin
                        ...expense,
                        ...action.updates
                    }
                }
                else {
                    return expense;
                }
            });
        default:
            return state;
    }
};