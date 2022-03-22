const ScheduleRouter = require('express').Router();
const scheduleActions = require('../controllers/schedule-controller');

ScheduleRouter.get('/',scheduleActions.getAllSchedules)
ScheduleRouter.get('/:id',scheduleActions.getScheduleById)
ScheduleRouter.post('/',scheduleActions.postSchedules );
ScheduleRouter.put('/:id',scheduleActions.putSchedules );
ScheduleRouter.delete('/:id',scheduleActions.deleteSchedules );

module.exports = ScheduleRouter;