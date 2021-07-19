import { createStore, combineReducers} from "redux";
import uuid from 'uuid';

// ADD Expense

// Expenses reducer




// GET VISIBLE EXPENSES




store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 300, createdAt: -21000}));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 200, createdAt: -1000 }));
//
// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 400 }));
//
// store.dispatch(setTextFilter('ffe'));
// store.dispatch(setTextFilter(''));
//
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(100));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(2000));
// store.dispatch(setEndDate());

// const demoState = {
//     expenses: [{
//         id: 'idhere',
//         description: 'Jan Rent',
//         note: 'This was the final payment',
//         createdAt: 0
//     }],
//     filters: {
//         text: 'rent',
//         sortBy: 'amount', // date or amount
//         startDate: undefined,
//         endDate: undefined
//     }
// };

