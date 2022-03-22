const schedules =require("../models/schedule");

const getAllSchedules = async (req, res) => {
  await schedules.find()
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(404).json({ massage: err }));
};

const getScheduleById = async (req, res) => {
  await schedules.findById(req.params.id)
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(404).json({ massage: err }));
};

const postSchedules = async (req, res) => {
  await schedules.create(req.body)
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(404).json({ massage: err }));
};

const putSchedules = async (req, res) => {
    schedules.findByIdAndUpdate(req.params.id, req.body,{new:true}) 
.then(result=>{
res.status(200).json(result)
})
.catch(err=>{
  res.status(500).json({massage:"update is failed"})
})
};

const deleteSchedules = async (req, res) => {
    schedules.findByIdAndDelete(req.params.id, (err, result) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        };
        res.status(201).json({ success: true, data: result, message: "the News delete" })
    })
};

module.exports = {
  getAllSchedules,
  getScheduleById,
  postSchedules,
  putSchedules,
  deleteSchedules,
};