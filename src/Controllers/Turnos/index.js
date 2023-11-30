import PeluTurno from '../../Models/PeluTurno/index.js'

export const postPeluTurno = async (req, res) => {
    try {
        const peluTurno = await PeluTurno.create(req.body);
        res.status(201).json(peluTurno)
    }
    catch (error) {
        res.status(400).json({ mes:"1", message: error.message })
    }
}

export const getPeluTurno = async (req, res) => {
    try {
        const peluTurno = await PeluTurno.find();
        res.status(200).json(peluTurno);
    } catch (error) {
        res.status(400).json({  mes:"2",message: error.message });
    }
};

export const patchPeluTurno = async (req, res) => {
    try {
        const peluTurno = await PeluTurno.findByIdAndUpdate(req.params.id, { $set: req.body}, {
        // const peluTurno = await PeluTurno.findByIdAndUpdate(req.body._id, { $set: req.body}, {
            new: true,
        });
        res.status(200).json(peluTurno);
    } catch (error) {
        res.status(400).json({ mes:"3",message: error.message });
    }
};


export const deletePeluTurno = async (req, res) => {
    try {
        const peluTurno = await PeluTurno.findByIdAndDelete(req.params.id);
        res.status(200).json(peluTurno);
    } catch (error) {
        res.status(400).json({ mes:"4", message: error.message });
    }
};
