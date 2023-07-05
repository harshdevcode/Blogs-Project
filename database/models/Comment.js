const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../index");
const Post = require("./Post");
const User = require("./User");

const Comment = sequelize.define(
    "Comment",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        user_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        post_id: {
            type: Sequelize.UUID,
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        post_slug: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        is_approved: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
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

Comment.belongsTo(User, { foreignKey: "user_id", as: "user" });
Comment.belongsTo(Post);

module.exports = Comment;
