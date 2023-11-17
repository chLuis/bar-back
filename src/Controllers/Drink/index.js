import Drink from "../../Models/Drink/drink.js";

export const postDrink = async (req, res) => {
    try {
        const drinkExist = await Drink?.find();
        const drinkNew = req.body;
        //console.log(drinkExist[1].name);
        for (let i = 0; i < drinkExist.length; i++) {
            if (drinkExist[i].name === drinkNew.name) {
                return res.status(400).json({ message: "Drink already exist, change name" });
            }
        }
        const drink = await Drink.create(req.body);
        res.status(201).json(drink);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


export const getDrink = async (req, res) => {
    try {
        const drink = await Drink.find();
        res.status(200).json(drink);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const patchDrink = async (req, res) => {
    try {
        const drink = await Drink.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.status(200).json(drink);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteDrink = async (req, res) => {
    try {
        const drink = await Drink.findByIdAndDelete(req.params.id);
        res.status(200).json(drink);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
