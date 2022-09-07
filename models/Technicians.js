module.exports = (sequelize, DataTypes) => {
    const Technicians = sequelize.define("Technicians", {
        code: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        phoneNo: {
            field: "phone_no",
            type: DataTypes.STRING(255),
            allowNull: true
        },
        avatar: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        permission: {
            type: DataTypes.BOOLEAN,
            default: false
        }
    }, {
        tableName: 'technicians',
        timestamps: true,
        underscored: true
    });

    Technicians.associate = (models) => {
        Technicians.belongsTo(models.Users, { foreignKey: 'user_id', onDelete: 'CASCADE', as: 'technicians'});
        Technicians.hasMany(models.TechnicianHasSkills)
    }

    return Technicians
}
