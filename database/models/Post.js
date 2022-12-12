const { DataTypes } = require("sequelize");
const sequelize = require("../index");

const Post = sequelize.define(
    "Post",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        author_name: DataTypes.STRING,
        slug: {
            type: DataTypes.STRING,
            allowNull: false,
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

module.exports = Post;
