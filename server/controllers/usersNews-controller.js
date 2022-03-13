const UsersNews =require("../models/userNews");

const getAllNews = async (req, res) => {
  await UsersNews.find()
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(404).json({ massage: err }));
};

const getNewsById = async (req, res) => {
  await UsersNews.findById(req.params.id)
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(404).json({ massage: err }));
};

const postNews = async (req, res) => {
  await UsersNews.create(req.body)
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(404).json({ massage: err }));
};

const putNews = async (req, res) => {
    UsersNews.findByIdAndUpdate(req.params.id, req.body,{new:true}) 
.then(result=>{
res.status(200).json(result)
})
.catch(err=>{
  res.status(500).json({massage:"update is failed"})
})
};

const deleteNews = async (req, res) => {
    UsersNews.findByIdAndRemove(req.params.id, (err, result) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        };
        res.status(201).json({ success: true, data: result, message: "the News delete" })
    })
};

module.exports = {
  getAllNews,
  getNewsById,
  postNews,
  putNews,
  deleteNews,
};