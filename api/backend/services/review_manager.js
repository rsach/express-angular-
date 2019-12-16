
import app_helper from '../utils/app_helper';






import review_model from "../models/review";




class ReviewManager {



    async get_reviews(search = {}) {

        let query = {...search};
        if (!query.review_from) {
            query = {};
        }

        let reviews = await review_model.find_by_criteria_include_all(query);
        return reviews;
    }

    async get_review(empId) {

        let review = await review_model.find_by_id(empId);
        if(! review) {
            const err = app_helper.get_app_error_object('INVALID_ID');
            throw err;
        }


        return review;
    }

    async update_review(empId, body) {

        let review = await review_model.find_by_id(empId);
        if(! review) {
            const err = app_helper.get_app_error_object('INVALID_ID');
            throw err;
        }

        let updated_review = await review_model.update(review, body);
        return updated_review;
    }

    async add_review(data) {



        let review_data = {
          ...data,
            role: 'review',
            is_enabled: true
        };

        let review = await review_model.save_or_update(review_data);
        return review;
    }

    async delete_review(empId) {

        let review = await review_model.find_by_id(empId);
        if(! review) {
            const err = app_helper.get_app_error_object('INVALID_ID');
            throw err;
        }


        await review_model.delete_instance(review);
        return;
    }

}

var review_manager = new ReviewManager();
export default review_manager;
