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
    if (req.body.image) {
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

export const patchDog = async (req, res) => {
    try {
        const dog = await Dog.findByIdAndUpdate(
            req.body._id,
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

export const deleteDog = async (req, res) => {
    try {
        const dog = await Dog.findByIdAndDelete(req.params.id);
        res.status(200).json(dog);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
