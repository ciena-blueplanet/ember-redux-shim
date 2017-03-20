module.exports = {
  afterInstall: function() {
    return this.addAddonsToProject({
      packages: [
        { name: 'ember-lodash-shim', target: '^2.0.0' },
        { name: 'ember-symbol-observable', target: '0.1.2' }
      ]
    })
  },

  normalizeEntityName: function() {
    // this prevents an error when the entityName is not specified
  }
}
