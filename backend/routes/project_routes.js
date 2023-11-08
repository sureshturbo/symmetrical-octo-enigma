const express =require('express');

const router = express.Router();

module.exports = (dependencies) =>{

    const projectController = dependencies.projectController;

    router.get('/get', projectController.getAllProjects.bind(projectController));

    return router;
}