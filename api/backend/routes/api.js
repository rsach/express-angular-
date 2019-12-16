import express from 'express';
const router = express.Router();



import employee_controller from "../controllers/employee_controller";
import review_controller from "../controllers/review_controller";





// Employee
router.get('/employees', employee_controller.get_employees);
router.post('/employees', employee_controller.add_employee);
router.put('/employee/:id',  employee_controller.update_employee);
router.get('/employee/:id',  employee_controller.get_employee);
router.delete('/employee/:id',  employee_controller.delete_employee);

// Reviews
router.get('/reviews', review_controller.get_reviews);
router.post('/reviews', review_controller.add_review);
router.put('/review/:id',  review_controller.update_review);
router.get('/review/:id',  review_controller.get_review);















export default router;
