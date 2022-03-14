const userGrades = require("../models/userGrades");
const UsersGrades =require("../models/userGrades");

const getAllGrades = async (req, res) => {
  await UsersGrades.find()
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(404).json({ massage: err }));
};

const getUserGradeById = async (req, res) => {
  await UsersGrades.findById(req.params.id)
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(404).json({ massage: err }));
};

const AddUserGrades = async (req, res) => {
     await UsersGrades.create(req.body)
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(404).json({ massage: err }));
};

const updateUserGrade = async (req, res) => {
      // await UsersGrades.findByIdAndUpdate(req.params.id, req.body,{new:true}) 
       await userGrades.updateOne({userName : req.body.userName} , req.body)
       await UsersGrades.find()
      .then(result=>{res.status(200).json(result)})
      .catch(err=>{res.status(500).json({massage:"update is failed"})})
};

const deleteUserGrade = async (req, res) => {
  UsersGrades.findByIdAndRemove(req.params.id, (err, result) => {
        if (err) { return res.status(400).json({ success: false, error: err })};
        res.status(201).json({ success: true, data: result, message: "the grade delete" })
    })
};

module.exports = {
    getAllGrades,
    getUserGradeById,
    AddUserGrades,
    updateUserGrade,
    deleteUserGrade,
};