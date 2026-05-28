/* 
  Rutas de Eventos / events
  host + /api/events
*/

const Router = require('express');
const { check } = require('express-validator');

const { isDate } = require('../helpers/isDate')
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');

const router = Router();

// pasar por validacion de JWT
// de esta forma => todas las peticiones pasan por el validarJWT
// y no hay que ir colocandolo uno por uno
router.use(validarJWT);


// Obtener eventos
router.get('/', getEventos);


// crear un nuevo eventos
router.post(
  '/',
  [
    check('title', 'Titulo es obligatorio').not().isEmpty(),
    check('start', 'Fecha inicial es obligatorio').custom(isDate),
    check('end', 'Fecha final es obligatorio').custom(isDate),
    validarCampos
  ],
  crearEvento);

// Actualizar evento
router.put('/:id', actualizarEvento);

// borrar evento
router.delete('/:id', eliminarEvento);

module.exports = router;