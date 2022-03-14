const userGradesRouter = require('express').Router();
const userGradesActions = require('../controllers/user-grades');

userGradesRouter.get('/',userGradesActions.getAllGrades)
userGradesRouter.get('/:id',userGradesActions.getUserGradeById)
userGradesRouter.post('/',userGradesActions.AddUserGrades );
userGradesRouter.put('/',userGradesActions.updateUserGrade );
userGradesRouter.delete('/:id',userGradesActions.deleteUserGrade );

module.exports = userGradesRouter;

