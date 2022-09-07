module.exports = (sequelize, DataTypes) => {
    const Customers = sequelize.define("Customers", {
        phoneNo: {
            field: "phone_no",
            type: DataTypes.STRING(255),
        },
        avatar: {
            type: DataTypes.STRING(255),
        },
        permission: {
            type: DataTypes.BOOLEAN,
            default: false
        }
    }, {
        tableName: 'customers',
        timestamps: true,
        underscored: true
    });

    Customers.associate = models => {
        Customers.belongsTo(models.Users, { foreignKey: 'user_id', onDelete: 'CASCADE', as: 'customers'})
    }

    return Customers
}