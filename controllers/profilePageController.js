const { Users } = require("../models/users");

// exports.addUserInfo = async function (req, res) {
//   try {
//     const newInfo = req.body;

//     // Retrieve the user's token from the authorization header
//     const authHeader = req.headers["authorization"];

//     // Find the user based on the token
//     const user = await Users.findOne({ token: authHeader });

//     // Check if the user exists
//     if (!user) {
//       return res.sendStatus(403); // Forbidden if user not found
//     }

//     const userNew = new Users({
//       ...newInfo,
//     });

//     // Save the event
//     await userNew.save();

//     res.send({ message: "New user info inserted." });
//   } catch (error) {
//     console.error("Error adding user info:", error);
//     res.status(500).send({ message: "Error adding user info.", error });
//   }
// };



exports.addUserInfo = async function (req, res) {
    try {
      const newInfo = req.body;
  
      // Retrieve the user's token from the authorization header
      const authHeader = req.headers["authorization"];
  
      // Find the user based on the token
      const user = await Users.findOne({ token: authHeader });
  
      // Check if the user exists
      if (!user) {
        return res.sendStatus(403); // Forbidden if user not found
      }
  
      // Update user information
      user.bio = newInfo.bio || user.bio;
      user.profilePic = newInfo.profilePic || user.profilePic;
      // Update other fields similarly
  
      // Save the updated user information
      await user.save();
  
      res.send({ message: "User info updated successfully." });
    } catch (error) {
      console.error("Error updating user info:", error);
      res.status(500).send({ message: "Error updating user info.", error });
    }
  };