const mysqlDataSource = require('../datasources/project_data_source');

class ProjectRespository{

    async getAllProjects(){

        console.log('im in repo :......')

        const query = 'SELECT * FROM projects'

        const [rows] = await mysqlDataSource.excuteSelectQuery(query);

        return rows;
    }
}

module.exports = ProjectRespository;