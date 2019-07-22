import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EmployeeService {
  constructor(private http: HttpClient) {

  }

  getEmployee() {
    return this.http.get('http://dummy.restapiexample.com/api/v1/employees');
  }

  createEmployee(employee) {
    console.log(employee, 'employee');
    return this.http.post('http://dummy.restapiexample.com/api/v1/create', employee);
  }
  deleteEmployee(targetId) {
    console.log(targetId, 'targetId');
    return this.http.delete<void>(`http://dummy.restapiexample.com/api/v1/delete/${targetId}`);
  }
}
