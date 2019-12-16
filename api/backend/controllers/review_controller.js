import review_manager from "../services/review_manager";


import response_manager from '../services/response_manager';



class ReviewController {



    async get_reviews(req, res) {
        let user = req.user;

        try {
            const reviews = await review_manager.get_reviews(req.query);
            return response_manager.send_success_response(res, reviews, "reviews fetch success");

        } catch(err) {
            return response_manager.send_error_response(res, err);

        }


    }




    async get_review(req, res) {
        let review_id = req.params.id;

        try {
            const reviews = await review_manager.get_review(review_id);
            return response_manager.send_success_response(res, reviews, "reviews fetch success");

        } catch(err) {
            return response_manager.send_error_response(res, err);

        }


    }



    async add_review(req, res) {


        try {
            const review = await review_manager.add_review(req.body);
            return response_manager.send_success_response(res, review, "review creation success");

        } catch(err) {
            return response_manager.send_error_response(res, err);

        }


    }

    async update_review(req, res) {
        let empId = req.params.id;

        try {
            const review = await review_manager.update_review(empId, req.body);
            return response_manager.send_success_response(res, review, "review edit success");

        } catch(err) {
            return response_manager.send_error_response(res, err);

        }


    }


    async delete_review(req, res) {
        let empId = req.params.id;

        try {
            const review = await review_manager.delete_review(empId);
            return response_manager.send_success_response(res, review, "review delete success");

        } catch(err) {
            return response_manager.send_error_response(res, err);

        }


    }


}

var review_controller = new ReviewController();
export default review_controller;
