const {check, validationResult, param} = require('express-validator');
const validateResult = require('../utils/validate');

const createUserValidator = [
    check("username", "Error en el campo username")
        .exists().withMessage("El campo username es obligatorio")
        .notEmpty().withMessage("El campo username no puede estar vacio")
        .isString().withMessage("El campo username es una cadena de texto")
        .isLength({min: 6, max: 30}).withMessage("El campo username tiene que tener una longitud de entre 6 y 30 caracteres"),
    check("email", "Error en el campo email")
        .exists().withMessage("EL campo email es obligatorio")
        .notEmpty().withMessage("El campo email no puede estar vacio")
        .isString().withMessage("El campo email tiene que contener cadena de texto")
        .isLength({min: 7, max: 50}).withMessage("El campo email tiene que tener una longitud de entre 7 y 50 caracteres")
        .isEmail().withMessage("El campo email no tiene el formato correcto ejemplo: 'user@email.com'"),
    check("password","Error en el campo password")
        .exists().withMessage("El campo password es obligatorio")
        .notEmpty().withMessage("El campo password no puede estar vacio")
        .isString().withMessage("El campo password es una cadena de texto")
        .isLength({min: 8}).withMessage("El campo password tiene que tener una longitud de minima de 8 caracteres"),
    (req, res, next) => {
        validateResult(req, res, next);
    }
]

const updateUserValidator = [
    param("id").isInt().withMessage("El id debe ser un número entero"),
    check("firstName")
        .isString()
        .exists()
        .withMessage("No se encuentra el nombre para el usuario")
        .notEmpty()
        .withMessage("El nombre no debe ser un string vacio"),
    check("lastName")
        .isString()
        .exists()
        .withMessage("No se encuentra el nombre para el usuario")
        .notEmpty()
        .withMessage("El nombre no debe ser un string vacio"),
    check("email", "El correo no se puede cambiar").not().exists(),
    (req, res, next) => {
        validateResult(req, res, next);
    }
]

module.exports = {
    createUserValidator,
    updateUserValidator,
}