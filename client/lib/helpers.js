Template.registerHelper('extendContext', function(data) {
  var result = _.clone(this);
  if (data) {
    _.each(data.hash, function(value, key) {
      result[key] = value;
    });
  }
  return result;
});

Helpers.addScope('navigator', navigator);
