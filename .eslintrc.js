// http://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
    },
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    extends: 'standard',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // add your custom rules here
    'rules': {
        // allow paren-less arrow functions
        'arrow-parens': 0,
        // allow async-await
        'generator-star-spacing': 0,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        /**
         * "off" 或 0 - 关闭规则
         * "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出),
         * "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
         */

        // 强制在 function的左括号之前使用一致的空格 
        // 把 always 改成 never
        "space-before-function-paren": [2, "never"],

        //缩进风格 
        //其中 2 对应 error 即开启规则，被触发时报错并退出程序
        // 4 是设置缩进为 4 个空格
        "indent": [2, 4],

        // 文件末尾强制换行
        "eol-last": 2
    }
}
