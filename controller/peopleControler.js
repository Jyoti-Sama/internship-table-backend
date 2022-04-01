import  PeopleModel  from "../models/peopleModel.js"



export const getAllPeople = async (req,res) => {
    try {
        const Allpeople = await PeopleModel.find();
        res.status(200).json({Allpeople,show:"successfully to loaded"})
    }
    catch (error) {
        res.status(404).json({ message: error.message, show:"failed to loaded" })
        console.log(error)
    }
}

export const addPeople = async (req,res) => {

    try {
        const people = req.body;
        console.log(people)
        const newPeople = new PeopleModel(people)
        console.log(newPeople)
        await newPeople.save();
        res.status(201).json({newPeople, show:"successfully to added"})

    } catch (error) {
        console.log(error.message);
        res.status(409).json({ message: error.message, show:"faild to add" })
    }
}

export const deletePeople = async (req,res) => {
    const {_id} = req.body;    
    console.log(_id);
    
    try {
        await PeopleModel.findByIdAndDelete(_id)
        res.status(201).json({ show:"successfully to deleted" })
    } 
    catch (err) {
        console.log(err)
        res.status(401).json({ message: err.message, show:"faild to delete" })
    }
    
}

export const editPeople = async (req,res) => {
    const data = req.body;
    const id = data._id;
    console.log(data)
    
    try {        
        await PeopleModel.findByIdAndUpdate(id, data);
        res.status(201).json({ show:"successfully edited" })
    } catch (err) {        
        res.status(401).json({ message: err.message, show:"faild to edit" })
    }    
}