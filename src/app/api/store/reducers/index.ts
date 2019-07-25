import * as employee from './employees';
import { createSelector } from '@ngrx/store';

export interface AppState {
  employeePage: employee.State
}

export const reducers = {
  employeePage: employee.employeesReducer
};

export const getEmployeesPage = (state: AppState) => state.employeePage;
export const getEmployees = createSelector(getEmployeesPage, employee.getEmployees);
