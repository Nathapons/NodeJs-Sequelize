module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
        username: DataTypes.STRING(255),
        password: DataTypes.STRING(255),
        firstname: DataTypes.STRING(255),
        lastname: DataTypes.STRING(255),
        email: DataTypes.STRING(255)
    }, {
        tableName: 'users'
    });

    let foreignKey = 'user_id'
    Users.associate = models => {
        Users.hasOne(models.Customers, {foreignKey, as: 'customers', onDelete: 'CASCADE'});
        Users.hasOne(models.Technicians, {foreignKey, as: 'technicians', onDelete: 'CASCADE'});
    }
    return Users
}