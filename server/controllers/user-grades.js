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
     await UsersGrades.find()
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(404).json({ massage: err }));
};

const updateUserGrade = async (req, res) => {
      const {requestedGrade , newGrade} = req.body ;
      await UsersGrades.updateOne(requestedGrade , newGrade)
      await UsersGrades.find()
      .then(result=>{res.status(200).json(result)})
      .catch(err=>{res.status(500).json({massage:"update is failed"})})
};

const deleteUserGrade = async (req, res) => {
    await UsersGrades.remove(req.body);
    await UsersGrades.find()
   .then(result=>{res.status(200).json(result)})
   .catch(err=>{res.status(500).json({massage:"delete is failed"})})
};

module.exports = {
    getAllGrades,
    getUserGradeById,
    AddUserGrades,
    updateUserGrade,
    deleteUserGrade,
};