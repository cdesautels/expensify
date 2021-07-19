import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test('Should set up removeExpense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('Should set up editExpense action object', () => {
    const action = editExpense('123abc',  {note: 'note123'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'note123'
        }
    });
});

test('Should set up addExpense action object with provided values', () => {
    const expenseData = {
        description: 'Test',
        note:  'Test note',
        amount: 10,
        createdAt: 1000
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('Should set up addExpense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    });
});