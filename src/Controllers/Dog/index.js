import Dog from "../../Models/Dog/dog.js";

export const postDog = async (req, res) => {
    console.log(req.body)
    try {
        const dogNew = req.body;
        const dog = await Dog.create(req.body);
        res.status(201).json(dog);
        
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


export const getDog = async (req, res) => {
    try {
        const dog = await Dog.find();
        res.status(200).json(dog);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const patchDog = async (req, res) => {
    try {
        const dog = await Dog.findByIdAndUpdate(req.body._id, { $set: req.body}, {
            new: true,
        });
        res.status(200).json(dog);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteDog = async (req, res) => {
    try {
        const dog = await Dog.findByIdAndDelete(req.params.id);
        res.status(200).json(dog);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
