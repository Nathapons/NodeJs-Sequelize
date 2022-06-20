module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
        username: DataTypes.STRING(255),
        password: DataTypes.STRING(255),
        firstname: DataTypes.STRING(255),
        lastname: DataTypes.STRING(255),
        email: DataTypes.STRING(255),
    }, {
        tableName: 'users',
        timestamps: false
    });

    Users.associate = models => {
        Users.hasOne(models.Customers, {foreignKey: 'user_id', as: 'customers', onDelete: 'CASCADE'});
    }
    return Users
}