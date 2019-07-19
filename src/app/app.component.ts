import { Component } from '@angular/core';
import { EmployeeService } from './api/employee/employee.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public employees;
  public formGroup: FormGroup;
  public formControl;
  constructor(public employeeService: EmployeeService,
              public fb: FormBuilder) {
    this.employeeService.getEmployee().subscribe((res) => {
      this.employees = res;
      console.log(res, 'res');
    });
    this.create();
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
    this.employeeService.createEmployee(this.formGroup.getRawValue()).subscribe((res) => {
      console.log(res, 'resqweqwe');
    });
  }
}
