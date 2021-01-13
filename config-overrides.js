// 配置具体的修改规则
/* 
module.exports = function override(config, env) {
    // config 原来的配置
    return config;
  };
*/
const { override, fixBabelImports } = require('customize-cra');

module.exports = override(
  fixBabelImports('import',
    { libraryName: 'antd', libraryDirectory: 'es', style: 'css', }
  ),

);