const router = require("express").Router();
let Note = require("../models/note");

router.route("/").get((req,res)=>{
    Note.find()
    .then((notes)=>res.json(notes))
    .catch((err)=>res.status(400).json("error"+err));
    
});

router.route("/add").post((req,res)=>{
    const title=req.body.title;
    const body=req.body.body;
    const newNote= new Note({
        title:title,
        body:body
    });
    console.log(newNote);
    newNote.save()
    .then(()=>res.json("note added"))
    .catch((err)=>res.status(400).json("error"+err));

});

router.route("/:id").delete((req,res)=>{
    Note.findByIdAndDelete(req.params.id)
    .then(()=>res.json("sucessfully deleted"))
    .catch((err)=>res.json("error"+err))
}
);

router.route("/update/:id").put((req,res)=>{
    const noteId=req.params.id;
  Note.findByIdAndUpdate(noteId,{title:req.body.title,body:req.body.body},
    function (err, docs) {
        if (err){
            console.log(err)
        }
        else{
            console.log("Updated User");
            res.json("updated working")
        }
    })
})
module.exports=router;


