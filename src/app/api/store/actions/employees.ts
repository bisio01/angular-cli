import { Action } from '@ngrx/store';

export namespace EMPLOYEE_ACTION {
  export const LOAD_EMPLOYEE = 'LOAD_EMPLOYEE';
  export const LOAD_EMPLOYEE_SUCCESS = 'LOAD_EMPLOYEE_SUCCESS';
  export const LOAD_EMPLOYEE_FAILED = 'LOAD_EMPLOYEE_FAILED';

  export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
  export const ADD_EMPLOYEE_SUCCESS = 'ADD_EMPLOYEE_SUCCESS';
  export const ADD_EMPLOYEE_FAILED = 'ADD_EMPLOYEE_FAILED';

  export const REMOVE_EMPLOYEE = 'REMOVE_EMPLOYEE';
  export const REMOVE_EMPLOYEE_SUCCESS = 'REMOVE_EMPLOYEE_SUCCESS';
  export const REMOVE_EMPLOYEE_FAILED = 'REMOVE_EMPLOYEE_FAILED';
}

export class LoadEmployees implements Action {
  readonly type = EMPLOYEE_ACTION.LOAD_EMPLOYEE;

  constructor() {
  }
}

export class LoadEmployeesSuccess implements Action {
  readonly type = EMPLOYEE_ACTION.LOAD_EMPLOYEE_SUCCESS;

  constructor(public employees) {
  }
}

export class LoadEmployeesFailed implements Action {
  readonly type = EMPLOYEE_ACTION.LOAD_EMPLOYEE_FAILED;

  constructor() {
  }
}

export class AddEmployee implements Action {
  readonly type = EMPLOYEE_ACTION.ADD_EMPLOYEE;

  constructor(public employee) {
  }
}

export class AddEmployeeSuccess implements Action {
  readonly type = EMPLOYEE_ACTION.ADD_EMPLOYEE_SUCCESS;

  constructor() {
  }
}

export class RemoveEmployee implements Action {
  readonly type = EMPLOYEE_ACTION.REMOVE_EMPLOYEE;
  constructor(public employee) {
  }
}

export type EmployeesAction =
  LoadEmployees
  | LoadEmployeesSuccess
  | LoadEmployeesFailed
  | AddEmployee
  | AddEmployeeSuccess
  | RemoveEmployee;


