import { EMPLOYEE_ACTION, EmployeesAction } from '../actions/employees';

export interface State {
  employees: [];
  isEmployeesLoading: boolean;
  employeesLoadingSuccess: boolean;
  employeesLoadingFailed: boolean;
}

export const initialState = {
  employees: [],
  isEmployeesLoading: false,
  employeesLoadingSuccess: false,
  employeesLoadingFailed: false
};

export function employeesReducer(state = initialState, action: EmployeesAction) {
  switch (action.type) {
    case EMPLOYEE_ACTION.LOAD_EMPLOYEE: {
      return {
        ...state,
        ...{
          isEmployeesLoading: true,
          employeesLoadingSuccess: false,
          employeesLoadingFailed: false
        }
      };
    }
    case EMPLOYEE_ACTION.LOAD_EMPLOYEE_SUCCESS: {
      return {
        ...state,
        employees: [...action.employees]
      };
    }
    case EMPLOYEE_ACTION.ADD_EMPLOYEE: {
      return {
        ...state,
        employees: [action.employee, ...state.employees]
      };
    }
    case EMPLOYEE_ACTION.REMOVE_EMPLOYEE: {

      const employeeIndex = state.employees.findIndex(link => link.id === action.employee);
       const employees = state.employees.splice(employeeIndex, 1);
      return {
        ...state,
        employees: [...state.employees, employees]
      };
    }

  }
}

export const getEmployees = (state: State) => {
  return state.employees;
};

