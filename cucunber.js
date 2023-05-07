const common = [
    'features/**/*.feature',
    '--require src/steps/**/*.ts',
    '--require hooks/**/*.ts',
    '--require-module',
    'ts-node/register/transpile-only',
    '--format-options \'{ "snippetInterface" :"async-await"}\'',
    '--format summary',
    '--format @cucumber/pretty-formatter',
    '--format cucumber-console-formatter',
    '--publish-quiet'        // Load custom formatter
].join(' ');

module.exports = {
  default: common
};