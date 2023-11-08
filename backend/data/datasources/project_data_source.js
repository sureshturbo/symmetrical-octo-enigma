const pool = require('../../config/database')

class ProjectDataSource{

    async excuteSelectQuery(query, params){

        return await pool.query(query, params);
    }
    async excuteModificationQuery(query, params){

        return await pool.excute(query, params);
    }
}

module.exports = new ProjectDataSource(); //this is the syntax u just pass refernce not the actual method once u used () this it's mean u actually caaling method.
