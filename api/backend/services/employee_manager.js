
import app_helper from '../utils/app_helper';





import employee_model from "../models/employee";




class EmployeeManager {



    async get_employees(search = null) {


        let employees = await employee_model.find_by_criteria({});
        return employees;
    }

    async get_employee(empId) {

        let employee = await employee_model.find_by_id(empId);
        if(! employee) {
            const err = app_helper.get_app_error_object('INVALID_ID');
            throw err;
        }


        return employee;
    }

    async update_employee(empId, body) {

        let employee = await employee_model.find_by_id(empId);
        if(! employee) {
            const err = app_helper.get_app_error_object('INVALID_ID');
            throw err;
        }

        let updated_employee = await employee_model.update(employee, body);
        return updated_employee;
    }

    async add_employee(data) {



        let employee_data = {
          ...data,
            role: 'employee',
            is_enabled: true
        };

        let employee = await employee_model.save(employee_data);
        return employee;
    }

    async delete_employee(empId) {

        let employee = await employee_model.find_by_id(empId);
        if(! employee) {
            const err = app_helper.get_app_error_object('INVALID_ID');
            throw err;
        }


        await employee_model.delete_instance(employee);
        return;
    }

}

var employee_manager = new EmployeeManager();
export default employee_manager;
