//
// module.exports = {
//   presets: [require.resolve('@docusaurus/core/lib/babel/preset')]
// };
// module.exports = function (api) {
//   return {
//     plugins: ['macros'],
//     api: api.cache(true),
//   }
// }


module.exports = function (api) {
  api.cache(true);

  const presets = [require.resolve('@docusaurus/core/lib/babel/preset')];
  const plugins = [ 'macros' ];

  return {
    presets,
    plugins
  };
}
