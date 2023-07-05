("use strict");
module.exports = {
    up: async (queryInterface, Sequelize) => {
        // Create users table to database
        await queryInterface.createTable(
            "users",
            {
                id: {
                    type: Sequelize.DataTypes.UUID,
                    defaultValue: Sequelize.DataTypes.UUIDV4,
                    allowNull: false,
                    primaryKey: true,
                },
                name: {
                    type: Sequelize.DataTypes.STRING,
                    allowNull: false,
                },
                email: {
                    type: Sequelize.DataTypes.STRING,
                    allowNull: false,
                },
                user_type: {
                    type: Sequelize.DataTypes.STRING,
                    allowNull: false,
                    defaultValue: "guest",
                },
                created_at: {
                    field: "created_at",
                    type: Sequelize.DataTypes.DATE,
                },
                updated_at: {
                    field: "updated_at",
                    type: Sequelize.DataTypes.DATE,
                },
            },
            {
                timestamps: true,
                underscored: true,
            }
        );

        // create blogs metadata table in database
        await queryInterface.createTable(
            "posts",
            {
                id: {
                    type: Sequelize.DataTypes.UUID,
                    defaultValue: Sequelize.DataTypes.UUIDV4,
                    allowNull: false,
                    primaryKey: true,
                },
                author_name: Sequelize.DataTypes.STRING,
                slug: {
                    type: Sequelize.DataTypes.STRING,
                    allowNull: false,
                },
                created_at: {
                    field: "created_at",
                    type: Sequelize.DataTypes.DATE,
                },
                updated_at: {
                    field: "updated_at",
                    type: Sequelize.DataTypes.DATE,
                },
            },
            {
                timestamps: true,
                underscored: true,
            }
        );

        // create comments table in database
        await queryInterface.createTable(
            "comments",
            {
                id: {
                    type: Sequelize.DataTypes.UUID,
                    defaultValue: Sequelize.DataTypes.UUIDV4,
                    allowNull: false,
                    primaryKey: true,
                },
                user_id: {
                    type: Sequelize.DataTypes.UUID,
                    references: {
                        model: "users",
                        key: "id",
                    },
                },
                post_id: {
                    type: Sequelize.DataTypes.UUID,
                    references: {
                        model: "posts",
                        key: "id",
                    },
                },
                content: {
                    type: Sequelize.DataTypes.STRING,
                    allowNull: false,
                },
                post_slug: {
                    type: Sequelize.DataTypes.STRING,
                    allowNull: false,
                },
                is_approved: {
                    type: Sequelize.DataTypes.BOOLEAN,
                    allowNull: false,
                    defaultValue: false,
                },
                created_at: {
                    field: "created_at",
                    type: Sequelize.DataTypes.DATE,
                },
                updated_at: {
                    field: "updated_at",
                    type: Sequelize.DataTypes.DATE,
                },
            },
            {
                timestamps: true,
                underscored: true,
            }
        );
    },
    down: async (queryInterface) => {
        await queryInterface.dropTable("users");
        await queryInterface.dropTable("comments");
        await queryInterface.dropTable("posts");
    },
};
