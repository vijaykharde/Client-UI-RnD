module.exports = function (api) {
    const presets = ['react-app'];
    const plugins = ["@babel/plugin-transform-react-jsx"];
    if (api.env('development')) {
        plugins.push('react-hot-loader/babel');
    }
    return { presets, plugins };
};