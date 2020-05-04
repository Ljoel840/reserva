/*
    Configuraciones de ambientes
*/

// des test back prod

/*
    🔨 Desarrollo
*/ 

const des = {
    apiUrl: 'https://testapps.desarrollodesoftwareamedida.com/testdelfawebs/rest/',
    apiContactUrl: 'https://testapps.desarrollodesoftwareamedida.com/testdelfawebs/rest/',
    routerMode: false,
    publicPath: "/",
    backend: false
};

/*
    🔬 Test
*/
const test = {
    apiUrl: "https://testapps.desarrollodesoftwareamedida.com/testdelfawebs/rest/",
    apiContactUrl: "https://testapps.desarrollodesoftwareamedida.com/testdelfawebs/rest/",
    routerMode: false,
    publicPath: "/",
    backend: false
};

/*
    🥕 Backend
*/
const back = {
    apiUrl: "../rest/",
    routerMode: true,
    publicPath: "../static/front/",
    backend: true
};

/*
    🎬 Producción
*/
const prod = {
    apiUrl: "https://apps.delfasoft.com/delfasport/rest/",
    apiContactUrl: "https://apps.delfasoft.com/delfawebs/rest/",
    routerMode: false,
    publicPath: "/",
    backend: false
}

/*
    Versión
*/
process.env.VUE_APP_VERSION = require("./package.json").version;
const webpack = require("webpack")

/*
    Declaración de ambiente
*/
const env = require("./package.json").env
const amb = env === "des"
        ? des
        : env === "test"
        ? test
        : env === "back"
        ? back
        : prod;


module.exports = {
	publicPath: amb.publicPath,
	productionSourceMap: false,
	configureWebpack: {
        plugins: [
            new webpack.DefinePlugin({
                "process.env": {
                    API_URL: JSON.stringify(amb.apiUrl),
                    API_CONTACT_URL: JSON.stringify(amb.apiContactUrl),
                    ROUTER_MODE: amb.routerMode,
                    BACKEND: amb.backend
                }
            })
        ],
    },
    chainWebpack: config => {
      config.module
        .rule('vue')
        .use('vue-loader')
        .loader('vue-loader')
        .tap(options => {
          options.transformAssetUrls = {
            img: 'src',
            image: 'xlink:href',
            'b-img': 'src',
            'b-img-lazy': ['src', 'blank-src'],
            'b-card': 'img-src',
            'b-card-img': 'src',
            'b-card-img-lazy': ['src', 'blank-src'],
            'b-carousel-slide': 'img-src',
            'b-embed': 'src'
          }
  
          return options
        })
    }
  }