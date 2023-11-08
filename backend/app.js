const express = require('express');
/// npm install cors
const cors = require('cors');

const app = express();

const projectRoutes = require('./routes/project_routes');
const ProjectController = require('./controllers/project_controllers');
const GetAllProjectUseCase = require('./domain/usecases/getall_projects_usecase');
const ProjectRespository = require('./data/repositories/project_repositories');

const projectRespository = new ProjectRespository();
const getAllProjectUseCase = new GetAllProjectUseCase(projectRespository);
const projectController = new ProjectController(getAllProjectUseCase);

app.use(cors());
app.use(express.json());
app.use('/projects',projectRoutes({
    projectController
}));

///first time checking
// app.get('/',(req,res) => res.send('Hello world'));
///console.log('hello world');

const PORT = process.env.PORT || 4000 ;

app.listen(PORT, () =>{
    console.log(
        //'Server is running on this port: ${PORT}'
        PORT
        )
});

