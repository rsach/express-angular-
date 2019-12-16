'use strict';
module.exports = (sequelize, DataTypes) => {
    const Review = sequelize.define('Review', {
        review: DataTypes.STRING,
        review_of: DataTypes.INTEGER,
        review_from: DataTypes.INTEGER,
        is_submitted: DataTypes.BOOLEAN,
        is_enabled: DataTypes.BOOLEAN
    }, {});
    Review.associate = function(models) {
        // associations can be defined here
        Review.belongsTo(models.Employee, {
            onDelete: "CASCADE",
            foreignKey: 'review_of',
            as: 'reviewOf',



        });

        Review.belongsTo(models.Employee, {
            onDelete: "CASCADE",
            foreignKey: 'review_from',
            as: 'reviewFrom',



        });
    };
    return Review;
};
