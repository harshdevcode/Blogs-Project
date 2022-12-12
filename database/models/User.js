const { DataTypes } = require("sequelize");
const sequelize = require("../index");

const User = sequelize.define(
    "User",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_type: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "guest",
        },
        created_at: {
            field: "created_at",
            type: DataTypes.DATE,
        },
        updated_at: {
            field: "updated_at",
            type: DataTypes.DATE,
        },
    },
    {
        timestamps: true,
        underscored: true,
    }
);

module.exports = User;
