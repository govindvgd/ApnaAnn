import UserModel from "../../models/User.js";

export default function addUser( req, res ) {
    const { userID, password } = req.body;
    console.log(userID, password);
    res.send("Credentials received");

    
}