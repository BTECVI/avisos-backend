import { Router } from 'express';
import crearSesion from './crearSesion';
import { body, validationResult } from 'express-validator';

const router = Router();

router.post(
  '/login',
  body('user')
    .trim()
    .isLength({ min: 5, max: 36 })
    .toLowerCase()
    .withMessage('Falta colocar el nombre'),
  body('pass')
    .trim()
    .isLength({ min: 5, max: 16 })
    .toLowerCase()
    .withMessage('Falta colocar la contraseña'),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errores: any = [];
      errors.array().forEach((e) => {
        errores.push(e.msg);
      }
      );
      res.status(402).json({ error: errores });
    } else {
      try {
        const { user, pass } = req.body;
        const funct = await crearSesion({ user, pass });
        const response = funct.data
        res.status(funct.status).json(response);
      } catch (error) {
        console.log(error);
        res.status(403).json({ error: `${error}` });
      }
    }
  }
);

export default router;
