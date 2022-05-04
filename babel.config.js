module.exports = {
    presets: [[
        "@babel/preset-env",
    ]],
    plugins: [
        // 双问号
        '@babel/plugin-proposal-nullish-coalescing-operator',
        // 可选链
        '@babel/plugin-proposal-optional-chaining'
    ]
}