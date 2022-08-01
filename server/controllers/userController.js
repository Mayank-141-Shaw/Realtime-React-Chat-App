
// controllers for user endpoints, just like java spring RestController


const User = require("../model/userModel");
const bcrypt = require("bcrypt");


// handles the post request for register
// whenever user submits register button it is rerouted to this controller
// this will then get the request and do required tasks
module.exports.register = ( req, res, next ) => {
    
    try{
        const { username, email, password } = req.body;

        // check if user is present inn database
        const userNameCheck = await User.findOne({ username });
        if(userNameCheck) 
            return res.json({ msg:"Username already used", status: false });

        // checck if email is present
        const emailCheck = await User.findOne({ email });
        if(emailCheck) 
            return res.json({ msg:"User email already used", status: false });


        // if everything is good
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            email,
            username,
            password: hashedPassword,
        });

        // delete original password after saving to db
        delete user.password;

        // return the response
        return res.json({ status: true, user });
        
    } catch( err ){
        next(err)
    }

};



// handles the post request for loin
// whenever user submits login button it is rerouted to this controller
// this will then get the request and do required tasks
module.exports.login = ( req, res, next ) => {
    
    try{
        const { username, password } = req.body;

        // check if user is present inn database
        const user = await User.findOne({ username });
        if(!user) 
            return res.json({ msg:"Incorrect username or password", status: false });

        // checking if password matches among given password an pwd from db
        const isPasswordalid = await bcrypt.compare(password, user.password)
        if(!isPasswordalid) 
            return res.json({ msg:"Incorrect username or password", status: false })

        // delete the password returned after check is done
        delete user.password;
        
        // return the response
        return res.json({ status: true, user });
        
    } catch( err ){
        next(err)
    }

};