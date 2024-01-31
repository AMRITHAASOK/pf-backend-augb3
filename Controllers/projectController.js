const projects = require('../Models/projectSchema')


exports.addUserProject = async (req,res)=>{
    console.log("Inside addUserProject");

    //get userId
    const userId = req.payload
    //get projectImage
    const projectImage = req.file.filename
    //get project details
    const {title,language,github,link,overview}=req.body

    console.log(userId,title,language,github,link,overview,projectImage);

    //logic for adding project details

    // res.status(200).json("Add user project request received")

    try{
        //if github is present in mongodb 
        const existingProject = await projects.findOne({github})
        if(existingProject){
            res.status(402).json("Project already exists")
        }
        else{
            //if github is not present in mongodb then create new project details and save them in mongodb
            const newProject = new projects({
                title,language,github,link,overview,projectImage,userId
            })
            await newProject.save()//save new project in mongodb
            res.status(200).json(newProject)//response send to client
        }
    }
    catch(err){
        console.error("Error in addUserProject:", +err);
    res.status(500).json("Internal Server Error");

    }

}