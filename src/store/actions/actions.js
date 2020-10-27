import { insertBudget, fetchBudget } from '../../helpers/db';

export const ADD_BUDGET = 'ADD_BUDGET';
export const GET_BUDGET = 'GET_BUDGET';
export const GET_BUDGETS_SECTION = 'GET_BUDGETS_SECTION';
export const GET_BALANCE = 'GET_BALANCE';

export const getBalance = () => {
  return async (dispatch) => {
    try {
      const dbResult = await fetchBudget();
      dispatch({ type: GET_BALANCE, budgets: dbResult.rows._array });
    } catch (err) {
      throw err;
    }
  };
};

export const addBudget = (description, value, date, category, type) => {
  return async (dispatch) => {
    try {
      const dbResult = await insertBudget(
        description,
        value,
        date,
        category,
        type,
      );

      dispatch({
        type: ADD_BUDGET,
        budgetData: {
          id: dbResult.insertId,
          description: description,
          value: value,
          date: date,
          category: category,
          type: type,
        },
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};

export const updateBudget = (description, value, date, category, type) => {};

export const loadBudgets = () => {
  return async (dispatch) => {
    try {
      const dbResult = await fetchBudget();
      dispatch({ type: GET_BUDGET, budgets: dbResult.rows._array });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};

export const loadBudgetsSection = () => {
  return async (dispatch) => {
    try {
      const dbResult = await fetchBudget();
      dispatch({ type: GET_BUDGETS_SECTION, budgets: dbResult.rows._array });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};
