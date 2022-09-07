module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
        username: {
            field: "username",
            type: DataTypes.STRING(255),
            allowNull: false
        },
        password: {
            field: "password",
            type: DataTypes.STRING(255),
            allowNull: false
        },
        firstName: {
            field: "first_name",
            type: DataTypes.STRING(255),
            allowNull: true
        },
        lastName: {
            field: "last_name",
            type: DataTypes.STRING(255),
            allowNull: true
        },
        email: {
            field: "last_name",
            type: DataTypes.STRING(255),
            allowNull: true
        },
        address: {
            field: "address",
            type: DataTypes.TEXT,
            allowNull: true
        }
    }, {
        tableName: 'users',
        timestamp: true
    });

    Users.associate = models => {
        Users.hasOne(models.Customers);
        Users.hasOne(models.Technicians);
    }
    return Users
}