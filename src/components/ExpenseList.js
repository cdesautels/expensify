import React from "react";
import { connect } from 'react-redux';
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from '../selectors/expenses';

// The display component
export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p>No Expenses</p>
            ) : (
                props.expenses.map((expense) => {
                    return <ExpenseListItem key={expense.id} {...expense} />
                })
            )
        }
    </div>
);

// Define what you want to retrieve from the store
const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

// The HOC component pushed through react-redux connect()
// connect(The store props being passed)(then the component you want to connect)
export default connect(mapStateToProps)(ExpenseList);

