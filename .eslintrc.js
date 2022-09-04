module.exports = {
  root: true,
  extends: ['@conditioner/eslint-config/library'],
  settings: {
    next: {
      rootDir: ['apps/*/']
    }
  }
}
