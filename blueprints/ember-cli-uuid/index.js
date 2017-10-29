module.exports = {
  normalizeEntityName: function() {
  },

  afterInstall: function() {
    return this.addPackageToProject('uuid');
  }
};
