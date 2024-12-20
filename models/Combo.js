import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";


export const Combo = sequelize.define(
    "Combo",{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        nombre:DataTypes.STRING,
        masvendidos: DataTypes.BOOLEAN,

        estado:{
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    }, {
        freezeTableName: true //Para que se mantenga el nombre de la tabla
    }
);