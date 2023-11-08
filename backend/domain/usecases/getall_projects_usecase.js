class GetAllProjectUseCase{

    constructor(projectRepository){
            this.projectRepository = projectRepository;
    }

    excute(){
       return this.projectRepository.getAllProjects();
    }

}

module.exports = GetAllProjectUseCase;