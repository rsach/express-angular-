

var db = require('./../schemas');
import MasterModel from './master_model';

class Review extends MasterModel {
  constructor() {
    super('Review');
  }

  async save_or_update(review) {
    const a = await this.find_one_by_criteria({review_of: review.review_of});
    console.log(a);
    if (!a) {
      return this.save(review);
    }

    return this.update(a, review);
  }

}

var review_model = new Review();
export default review_model;
