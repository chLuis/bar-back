import Dog from "../../Models/Dog/dog.js";
import { S3 } from "@aws-sdk/client-s3";
import dotenv from "dotenv";

dotenv.config();

const AccessKeyId = process.env.AWS_ACCESS_KEY_ID, // reemplaza 'xxxxx' con tu AccessKeyId
    SecretKey = process.env.AWS_SECRET_ACCESS_KEY;

const creds = {
    accessKeyId: AccessKeyId,
    secretAccessKey: SecretKey,
};
const s3 = new S3({
    region: "sa-east-1",
    credentials: creds,
});

export const postDog = async (req, res) => {
    //console.log(req.body.image.imageFile.ContentType)
    let dog = req.body;
    //console.log(req.body)
    if (req.body.image !== "") {
        s3.putObject({
            Bucket: "awsfoodnext",
            Key: req.body.image.imageFile.Key,
            Body: Buffer.from(req.body.image.imageFile.Body),
            ContentType: req.body.image.imageFile.ContentType,
        });
        dog.image = req.body.image.imageFile.Key;
    }
    try {
        const newDog = await Dog.create(dog);
        res.status(201).json(newDog);
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
export const getOneDog = async (req, res) => {
    console.log("ENTRANDO?")
    //console.log(req.params.id)
    try {
        const dog = await Dog.findById(req.params.id);
        //console.log(dog)
        res.status(200).json(dog);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const patchDog = async (req, res) => {
    //console.log(req.body)
    let newDog = req.body;
    if (req.body.image) {
        s3.putObject({
            Bucket: "awsfoodnext",
            Key: req.body.image.imageFile.Key,
            Body: Buffer.from(req.body.image.imageFile.Body),
            ContentType: req.body.image.imageFile.ContentType,
        });
        req.body.image = req.body.image.imageFile.Key;
    }

    try {
        if(req.body.lastVisit){ //Verifica si hay pedido de LastVisit
            //console.log("hay nueva fecha")
            const { lastVisit } = await Dog.findById(req.body._id); //Busca la anterior
            const dogOldVisit = lastVisit ? lastVisit : []; //Verifica el valor
            dogOldVisit[0] = req.body.lastVisit[0]; //Remplaza el primer elemento del array por la nueva fecha
            newDog.lastVisit = [...dogOldVisit]; //Modifica todo el req.body.lastVisit para que conserve viejas fechas menos la ultima porque se la esta modificando
        }
        const dog = await Dog.findByIdAndUpdate(
            newDog,
            { $set: req.body },
            {
                new: true,
            }
        );
        res.status(200).json(dog);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const patchDogOnlyLastVisit = async (req, res) => { // Agrega una nueva visita
    const newDog = req.body;
    //newDog.lastVisit = [newDog.lastVisit]; //convierte en array al req.body.lastVisit
    try {
        if(req.body.lastVisit){
            const { lastVisit } = await Dog.findById(req.body._id); // trae los valores de lastVisit antiguos
            const dogOldVisit = lastVisit ? lastVisit : []; // verifica si hay valores antiguos o crea un array vacio en su lugar
            newDog.lastVisit.push(...dogOldVisit); // agrega los valores antiguos al array nuevo
            const dog = await Dog.findByIdAndUpdate(
                newDog,
                { $set: req.body },
                {
                    new: true,
                }
            );
            return res.status(200).json(dog);
        }
        return
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteDog = async (req, res) => {
    try {
        const dog = await Dog.findByIdAndDelete(req.params.id);
        if (dog.image) {
            s3.deleteObject({
                Bucket: "awsfoodnext",
                Key: dog.image,
            });
        }
        res.status(200).json(dog);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
