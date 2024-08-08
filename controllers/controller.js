const service = require('../services/index')

const controller = async () => {
  try {
    const result = await service();

    return result
  } catch (err) {
    return err
  }
}

module.exports = controller