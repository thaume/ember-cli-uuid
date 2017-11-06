module.exports = {
  normalizeEntityName: function() {
  },

  afterInstall: function() {
    return this.addPackageToProject('uuid', '^3.1.0');
  }
};
