/* eslint-disable @typescript-eslint/no-var-requires */
const { ModuleFederationPlugin } = require("webpack").container;
const { moduleFederationConfig } = require("./modulefederation.config");
const { configPaths } = require("react-app-rewire-alias");

module.exports = {
  /**
   *
   * @param {import('webpack').webpack.Configuration} config
   * @param env
   * @returns {*}
   */
  webpack: function (config) {
    /* ======= Не переопределять ======= */
    /* ============ START ============== */

    config.plugins.push(new ModuleFederationPlugin(moduleFederationConfig));

    /* Используется для включения typescript alias */
    const aliasMap = configPaths();
    config.resolve.alias = Object.assign(config.resolve.alias, aliasMap);

    config.experiments = {
      topLevelAwait: true,
    };

    config.output.publicPath = "auto";

    /* ============== END ============== */

    /* ============= OPTIONAL START ============= */
    /* Используется для включения именного импорта ES6 в CSS и SASS модулях */
    config.module.rules
      .find(({ oneOf }) => !!oneOf)
      .oneOf.filter(({ use }) => JSON.stringify(use)?.includes("css-loader"))
      .reduce((acc, { use }) => acc.concat(use), [])
      .forEach(({ options }) => {
        if (options && options.modules) {
          options.modules.auto = true;
          options.modules.namedExport = true;
        }
      });

    /* =============== OPTIONAL END ================= */

    return config;
  },
  devServer: function (configFunction) {
    return function (proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);
      // Хак для Module Federation
      config.liveReload = true;
      config.hot = false;
      return config;
    };
  },
};
