import UserModel from "../../models/User.js";

export default function login( req, res ) {
    const { userID, password } = req.body;
    console.log(userID, password);
    res.status(200).json({msg:"Credentials received"});
}