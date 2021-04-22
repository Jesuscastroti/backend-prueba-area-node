import { BadRequestError } from '../../helpers/api.response'

export default () => async (req, res, next) => {
    const { id } = req.params
    const re = /\w/
    const result = re.test(id)
    if (!result) return BadRequestError(res, 'No se admiten caracteres especiales.')
    next()
}