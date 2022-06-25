import {body} from 'express-validator'

export const loginValidation = [
  body('email','Неверный формат почты').isEmail(),
  body('password','Пароль должен быть минимум 5 символов').isLength({min: 5}),
]
export const registerValidation = [
  body('email','Неверный формат почты').isEmail(),
  body('password','Пароль должен быть минимум 5 символов').isLength({min: 5}),
  body('fullName','Укажите имя').isLength({min: 3}),
  body('avatarUrl','Некорректная ссылка').optional().isURL(),
]
export const postCreateValidation = [
  body('title','Введите заголовок статьи').isLength({min: 3}).isString(),
  body('test','Ввведите текст статьи').isLength({min: 10}).isString(),
  body('tags','Неверный формат тэгов(укажите массив)').optional().isString(),
  body('imageUrl','Неверная ссыкла на изображение').optional().isString(),
]