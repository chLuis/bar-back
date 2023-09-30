import Food from "../../Models/Food/food.js";

export const postFood = async (req, res) => {
    try {
        const foodExist = await Food.find();
        const foodNew = req.body;
        console.log(foodExist[1].name);
        for (let i = 0; i < foodExist.length; i++) {
            if (foodExist[i].name === foodNew.name) {
                return res.status(400).json({ message: "Food already exist, change name" });
            }
        }
        const food = await Food.create(req.body);
        res.status(201).json(food);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


export const getFood = async (req, res) => {
    try {
        const food = await Food.find();
        res.status(200).json(food);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const patchFood = async (req, res) => {
    try {
        const food = await Food.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.status(200).json(food);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteFood = async (req, res) => {
    try {
        const food = await Food.findByIdAndDelete(req.params.id);
        res.status(200).json(food);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
