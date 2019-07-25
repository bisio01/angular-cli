import { Component } from '@angular/core';
import { EmployeeService } from './api/employee/employee.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AddEmployee, LoadEmployees, RemoveEmployee } from './api/store/actions/employees';
import { AppState, getEmployees } from './api/store/reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public employees;
  public employees$;
  public formGroup: FormGroup;
  public formControl;

  constructor(public employeeService: EmployeeService,
              public store: Store<AppState>,
              public fb: FormBuilder) {
    this.get();
    this.create();
  }

  get() {
    this.store.dispatch(new LoadEmployees());
    this.employees$ = this.store.select(getEmployees);
    this.employees$.subscribe((res) => {
      this.employees = res;
    });
  }

  create() {
    this.formControl = {
      name: [''],
      salary: ['123'],
      age: ['23']
    };
    this.formGroup = this.fb.group(this.formControl);
  }

  send() {
    this.store.dispatch(new AddEmployee(this.formGroup.getRawValue()));
  }

  delete(id) {
    this.store.dispatch(new RemoveEmployee(id));
    /*this.employeeService.deleteEmployee(id).subscribe((res) => {
      this.get();
    });*/
  }
}
