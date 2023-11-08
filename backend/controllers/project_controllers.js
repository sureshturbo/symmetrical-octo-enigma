class ProjectController{

    constructor(getAllProjectUseCase){
            this.getAllProjectUseCase = getAllProjectUseCase;
    };

    async getAllProjects(req, res){

        try {
            console.log(`im here .....`);
        const Projects = await this.getAllProjectUseCase.excute();
        console.log(`im project : ${Projects} .....`);
           res.json(Projects);
        } catch (error) {

            console.log(`im error  here ..... and error : ${error}`);
            res.status(500).json({
                        error
                    //error : error
                    //'Internal server error : ${error}'
                   // error: error
            });
        }
    }
}

module.exports =ProjectController;