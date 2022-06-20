module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define("Customers", {
        username: {
            type: DataTypes.STRING(255),
        },
        phone_no: {
            type: DataTypes.STRING(255),
        },
        avatar: {
            type: DataTypes.STRING(255),
        },
        permission: {
            type: DataTypes.STRING(255),
        },
    }, {
        tableName: 'customers'
    });

    model.associate = models => {
        model.belongsTo(models.Users, { foreignKey: 'user_id', onDelete: 'CASCADE', as: 'customers'})
    }

    return model
}