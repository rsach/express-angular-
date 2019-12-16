var db = require('./../schemas');

class MasterModel {
  constructor(entity) {
    this.entity = entity;
  }

  find_by_id(id) {
    return db[this.entity].findOne({
      where: {
        id: id
      }
    });
  }

  find_by_id_with_assocs(id) {
    return db[this.entity].findOne({
      where: {
        id: id
      },
      include: [ {all: true} ]
    });
  }

  find_with_assocs(query) {
    return db[this.entity].findAll({
      where: query,
      include: [ {all: true} ]
    });
  }

  find_by_id_with_specified_assocs(id, assocs = []) {
    let includes = [];
    for(var i = 0; i < assocs.length; i++) {
      let assoc = assocs[i];
      if(assoc.model) {
        var include = {
          model: db[assoc.model]
        };
        if(assoc.alias) {
          include.as = assoc.alias;
        }
        includes.push(include);
      }
    }

    return db[this.entity].findOne({
      where: {
        id: id
      },
      include: includes
    });
  }

  save(data) {
    var entity = db[this.entity].build(data);
    return entity.save();
  }

  update(entity, data) {
    return entity.update(data);
  }

  delete_instance(instance) {
    return instance.destroy();
  }
  
  delete_by_id(id) {
    return db[this.entity].destroy({where: { id: id}});
  }

  update_by_id(id, data) {
    return db[this.entity].update(data, {where: { id: id }});
  }

  find_by_criteria(criteria = {}) {
    return db[this.entity].findAll({
      where: criteria
    });
  }

  find_one_by_criteria(criteria = {}) {
    return db[this.entity].findOne({
      where: criteria
    });
  }

  find_by_criteria_include_all(criteria = {}) {
    return db[this.entity].findAll({
      where: criteria,
      include: [ {all: true} ]
    });
  }
}

export default MasterModel;
