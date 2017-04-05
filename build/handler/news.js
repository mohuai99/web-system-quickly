const DB = require('../handerdb/db'),
    SQL = require('../handlerSql')


module.exports = {
    list: function(req, res) {
        DB.execSql(DB.getPool, SQL.news.getListsSql(), [], res)
    },
    add: function(req, res) {
        const body = req.body
        let args = []
        Object.keys(body).forEach((item) => {
            args.push(body[item])
        })
        DB.execSql(DB.getPool, SQL.news.getAddSql(), args, res)
    },
    update: function(req, res) {
        const body = req.body
        let args = []
        Object.keys(body).forEach((item) => {
            args.push(body[item])
        })
        DB.execSql(DB.getPool, SQL.news.getAddSql(), args, res)
    },
    hide: function(req, res) {
        const body = req.body
        let args = []
        Object.keys(body).forEach((item) => {
            args.push(body[item])
        })
        DB.execSql(DB.getPool, SQL.news.getHideSql(), args, res)
    }
}
