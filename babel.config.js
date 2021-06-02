module.exports = {
    presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
    env: {
        test: {},
        prod: {},
        dev: {
            plugins: ['react-refresh/babel'],
        },
    },
};
