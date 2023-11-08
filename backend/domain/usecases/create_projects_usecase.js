const project = require('../entities/project');

class CreateProjectUsecase{

    constructor(projectRepository){
            this.projectRepository = projectRepository;
    }

    async excute(
        id, title,description, imageUrl, projectUrl, projectCategory
    ){
        
    }
}

module.exports = CreateProjectUsecase;