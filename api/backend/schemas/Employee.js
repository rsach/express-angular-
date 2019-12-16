'use strict';
module.exports = (sequelize, DataTypes) => {
    const Employee = sequelize.define('Employee', {
        name: DataTypes.STRING,
        role: DataTypes.STRING,
        is_enabled: DataTypes.BOOLEAN
    }, {});
    Employee.associate = function(models) {
        // associations can be defined here
    };
    Employee.prototype.toJSON = function () {
        return {
            id: this.id,
            name: this.name,
            role: this.role
        };
    };
    return Employee;
};
