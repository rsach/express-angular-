var db = require('./../schemas');
import MasterModel from './master_model';

class EmployeeModel extends MasterModel{
  constructor() {
    super('Employee');
  }





}

var employee_model = new EmployeeModel();
export default employee_model;