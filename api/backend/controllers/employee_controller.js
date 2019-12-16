import employee_manager from "../services/employee_manager";


import response_manager from '../services/response_manager';



class EmployeeController {



    async get_employees(req, res) {
        // let user = req.user;

        try {
            const employees = await employee_manager.get_employees(req.query);
            console.log(employees)
            return response_manager.send_success_response(res, employees, "employees fetch success");

        } catch(err) {
            return response_manager.send_error_response(res, err);

        }


    }

    async get_employee(req, res) {
        let empId = req.params.id;

        try {
            const employees = await employee_manager.get_employee(empId);
            return response_manager.send_success_response(res, employees, "employees fetch success");

        } catch(err) {
            return response_manager.send_error_response(res, err);

        }


    }



    async add_employee(req, res) {


        try {
            const employee = await employee_manager.add_employee(req.body);
            return response_manager.send_success_response(res, employee, "employee creation success");

        } catch(err) {
            return response_manager.send_error_response(res, err);

        }


    }

    async update_employee(req, res) {
        let empId = req.params.id;

        try {
            const employee = await employee_manager.update_employee(empId, req.body);
            return response_manager.send_success_response(res, employee, "employee edit success");

        } catch(err) {
            return response_manager.send_error_response(res, err);

        }


    }


    async delete_employee(req, res) {
        let empId = req.params.id;

        try {
            const employee = await employee_manager.delete_employee(empId);
            return response_manager.send_success_response(res, employee, "employee delete success");

        } catch(err) {
            return response_manager.send_error_response(res, err);

        }


    }
}

var employee_controller = new EmployeeController();
export default employee_controller;
