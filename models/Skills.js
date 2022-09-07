module.exports = (sequelize, DataTypes) => {
    const Skills = sequelize.define("Skills", {
        name: {
            type: DataTypes.STRING(255),
            allowNull: false
        }
    }, {
        tableName: "skills",
        timestamps: true,
        underscored: true
    })

    Skills.associate = models => {
        Skills.hasMany(models.TechnicianHasSkills)
    }

    return Skills
}