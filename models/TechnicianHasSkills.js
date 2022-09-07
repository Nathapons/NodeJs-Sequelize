module.exports = (sequelize, Datatypes) => {
    const TechnicianHasSkills = sequelize.define("TechnicianHasSkills", {},
    {
        tableName: "technician_has_skills",
        timestamps: true,
        underscored: true
    })

    TechnicianHasSkills.associate = models => {
        TechnicianHasSkills.belongsTo(models.Technicians, {foreignKey: 'technician_id', onDelete: 'CASCADE'})
        TechnicianHasSkills.belongsTo(models.Skills, {foreignKey: 'skill_id', onDelete: 'CASCADE'})
    }

    return TechnicianHasSkills
}