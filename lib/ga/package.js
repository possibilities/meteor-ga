Package.describe({
  summary: "A smart package for adding Google Analytics"
});

Package.on_use(function (api) {
  api.add_files('client.js', 'client');
});
