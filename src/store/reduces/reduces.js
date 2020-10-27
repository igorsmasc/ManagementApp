import {
    GET_BUDGET,
    ADD_BUDGET,
    GET_BUDGETS_SECTION,
    GET_BALANCE,
  } from '../actions/budget';
  import Budget from '../../models/Budget';
  
  const initialState = {
    budgets: [],
    budgetsSection: [],
    incomes: 0.0,
    balance: {
      income: 0,
      expense: 0,
    },
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case GET_BUDGET:
        return {
          ...state,
          budgets: action.budgets.map((budget) => {
            return new Budget(
              budget.id.toString(),
              budget.description,
              budget.value,
              budget.date,
              budget.category,
              budget.type,
            );
          }),
        };
      case GET_BALANCE:
        let balance = {
          income: 0,
          expense: 0,
        };
  
        action.budgets.forEach((item) => {
          if (item.type === 'income') {
            balance.income += item.value;
          } else {
            balance.expense += item.value;
          }
        });
  
        return {
          ...state,
          balance: balance,
        };
      case GET_BUDGETS_SECTION:
        let section = [];
  
        action.budgets.forEach((budget) => {
          let finded = false;
  
          let newBudget = {
            id: budget.id.toString(),
            description: budget.description,
            value: budget.value,
            date: budget.date,
            category: budget.category,
            type: budget.type,
          };
  
          section.forEach((item) => {
            if (item.date === newBudget.date) {
              item.data.push(newBudget);
              finded = true;
            }
          });
  
          if (!finded) {
            section.push({
              date: newBudget.date,
              data: [newBudget],
            });
          }
        });
  
        return {
          ...state,
          budgetsSection: section,
        };
      case ADD_BUDGET:
        const newBudget = new Budget(
          action.budgetData.id.toString(),
          action.budgetData.description,
          action.budgetData.value,
          action.budgetData.date,
          action.budgetData.category,
          action.budgetData.type,
        );
  
        let newBalance;
  
        if (newBudget.type === 'income') {
          newBalance = {
            income: action.budgetData.value + state.income,
            expense: state.expense,
          };
        } else {
          newBalance = {
            income: state.expense,
            expense: action.budgetData.value + state.expense,
          };
        }
  
        return {
          ...state,
          budgets: state.budgets.concat(newBudget),
          balance: newBalance,
        };
      default:
        return state;
    }
  };
  