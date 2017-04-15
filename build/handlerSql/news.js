module.exports = {
    getListsSql() {
        const _sql = `select id, class_id, title, summary, author, source, content, click_num, isnew, istop, ishot, islock, lang_type, date_format(create_on,'%Y-%m-%d') as time from tbl_news where lang_type = 1 and ishide = 0 order by id desc limit ?, ?`
        return _sql
    },
    getAddSql() {
        const _sql = `insert into tbl_news (title, author, source, class_id, istop, isnew, islock, ishot, lang_type, summary, content) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
        return _sql
    },
    getUpdateSql() {
        const _sql = `update tbl_news set title=?, author=?, source=?, class_id=?, istop=?, isnew=?, islock=?, ishot=?, lang_type=?, summary=?, content=? where id=?`
        return _sql
    },
    getDeleteSql() {
        const _sql = `delete from tbl_news where id=?`
        return _sql
    },
    getHideSql() {
        const _sql = `update tbl_news set ishide = 1 where id = ?`
        return _sql
    },
    getTotalSql() {
        const _sql = `select count(*) as total from tbl_news where 1=1 and lang_type = 1 and ishide = 0`
        return _sql
    }
}
