module.exports = {
    getListsSql() {
        const _sql = `select id, title, author, click_num, date_format(create_on,'%Y-%m-%d') as time from tbl_news where lang_type = 1 and ishide = 0 order by id desc`
        return _sql
    },
    getAddSql() {
        const _sql = `insert into tbl_news (title, author, source, class_id, istop, isnew, islock, ishot, lang_type, summary, content) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
        return _sql
    },
    getUpdateSql() {
        const _sql = `123`
        return _sql
    },
    getDeleteSql() {
        const _sql = `123`
        return _sql
    },
    getHideSql() {
        const _sql = `update tbl_news set ishide = 1 where id = ?`
        return _sql
    }
}
