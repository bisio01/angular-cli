import { EmployeeService } from '../../employee/employee.service';
import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import {
  AddEmployee,
  AddEmployeeSuccess,
  EMPLOYEE_ACTION,
  RemoveEmployee
} from '../actions/employees';
import { mergeMap, switchMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

@Injectable()
export class EmployeesEffect {

  constructor(private action$: Actions,
              private service: EmployeeService) {
  }

  @Effect() loadEmployee = this.action$.pipe(
    ofType(EMPLOYEE_ACTION.LOAD_EMPLOYEE),
    switchMap(() => this.service.getEmployee()),
    mergeMap((employees) => {
      return of({
        type: EMPLOYEE_ACTION.LOAD_EMPLOYEE_SUCCESS,
        employees
      });
    })
  );
  @Effect() addEmployee = this.action$.pipe(
    ofType(EMPLOYEE_ACTION.ADD_EMPLOYEE),
    switchMap((action: AddEmployee) => this.service.createEmployee(action.employee)),
    mergeMap(() => {
      return of(new AddEmployeeSuccess());
    })
  );
  @Effect() removeEmployee = this.action$.pipe(
    ofType(EMPLOYEE_ACTION.REMOVE_EMPLOYEE),
    switchMap((action: RemoveEmployee) => this.service.deleteEmployee(action.employee)),
    mergeMap(() => EMPTY)
  );
}
