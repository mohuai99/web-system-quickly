const DB = require('../handerdb/db'),
    SQL = require('../handlerSql')


module.exports = {
    list(req, res) {
        let { currpage = 1, pagesize = 10 } = req.query
        currpage = parseInt(currpage, 10);
        pagesize = parseInt(pagesize, 10);
        DB.execSql(DB.getPool, SQL.news.getListsSql(), [(currpage - 1) * pagesize, pagesize], res)
    },
    add(req, res) {
        const body = req.body
        let args = []
        Object.keys(body).forEach((item) => {
            args.push(body[item])
        })
        DB.execSql(DB.getPool, SQL.news.getAddSql(), args, res)
    },
    update(req, res) {
        const body = req.body
        let args = []
        Object.keys(body).forEach((item) => {
            args.push(body[item])
        })
        DB.execSql(DB.getPool, SQL.news.getAddSql(), args, res)
    },
    hide(req, res) {
        const body = req.body
        let args = []
        Object.keys(body).forEach((item) => {
            args.push(body[item])
        })
        DB.execSql(DB.getPool, SQL.news.getHideSql(), args, res)
    },
    total(req, res) {
        DB.execSql(DB.getPool, SQL.news.getTotalSql(), [], res)
    }
}
