const formidable = require("formidable");
const validator = require("validator");
const registerModel = require("../model/authModel");
const fs = require("fs");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


module.exports.userRegister = (req, res) => {
  const form = formidable();
  
  form.parse(req, async (err, fields, files) => {
    const { userName, email, password, confirmPassword } = fields;

    const { image } = files;

    const error = [];

    if (!userName) {
      error.push("Please provide your user name");
    }
    if (!email) {
      error.push("Please provide your email");
    }
    if (email && !validator.isEmail(email)) {
      error.push("Please provide your valid Email");
    }
    if (!password) {
      error.push("Please provide your password");
    }
    if (!confirmPassword) {
      error.push("Please enter confirm password field");
    }
    if (password && confirmPassword && password !== confirmPassword) {
      error.push("Your password and confirm password not same");
    }
    if (password && password.length < 3) {
      error.push("Please provide password must be 6 character");
    }
    if (Object.keys(files).length === 0) {
      error.push("Please provide user image");
    }
    if (error.length > 0) {
      res.status(400).json({
        error: {
          errorMessage: error,
        },
      });
    } else {
      const getImageName = files.image.originalFilename;

      const randomNumber = Math.floor(Math.random() * 9999);
      const newImageName = randomNumber + getImageName;
      files.image.originalFilename = newImageName;
      const newPath =
        __dirname +
        `../../../frontend/public/image/${files.image.originalFilename}`;

      try {
        const checkUser = await registerModel.findOne({
          email,
        });
        if (checkUser) {
          res.status(404).json({
            error: {
              errorMessage: ["Your email already exist"],
            },
          });
        } else {
          fs.copyFile(files.image.filepath, newPath, async (error) => {
            
            if (!error) {
              const userCreate = await registerModel.create({
                userName,
                email,
                password: await bcrypt.hash(password, 10),
                image: files.image.originalFilename,
              });

              const token = jwt.sign(
                {
                  id: userCreate._id,
                  email: userCreate.email,
                  userName: userCreate.userName,
                  image: userCreate.image,
                  registerTime: userCreate.createdAt,
                },
                process.env.SECRET,
                {
                  expiresIn: process.env.TOKEN_EXP,
                }
              );

              const options = { expires : new Date(Date.now() + process.env.COOKIE_EXP * 24 * 60 * 60 * 1000 )}
              res.status(201).cookie("authToken", token, options).json({
                successMessage: "Your Register Succesful",
                token,
              });
            } else {
              res.status(500).json({
                error: {
                  errorMessage: ["Internal server error"],
                },
              });
            }
          });
        }
      } catch (error) {
        res.status(500).json({
          error: {
            errorMessage: ["Internal server error"],
          },
        });
      }
    }
  }); //end Formidable
};



module.exports.userLogin=async(req,res)=>{
  const error=[]
  const {email,password}=req.body
  if (!email) {
    error.push("Please provide your email");
  }
  if (!password) {
    error.push("Please provide your password");
  }
  if (email && !validator.isEmail(email)) {
    error.push("Please provide your valid Email");
  }

  if (error.length > 0) {
    res.status(400).json({
      error: {
        errorMessage: error,
      },
    });
  }else{
    try{
      const checkUser = await registerModel.findOne({
        email,
      }).select('+password');

      if(checkUser){
        const matchPassword=await bcrypt.compare(password,checkUser.password)
        if(matchPassword){

          const token = jwt.sign(
                {
                  id: checkUser._id,
                  email: checkUser.email,
                  userName: checkUser.userName,
                  image: checkUser.image,
                  registerTime: checkUser.createdAt,
                },
                process.env.SECRET,
                {
                  expiresIn: process.env.TOKEN_EXP,
                }
              );

              const options = { expires : new Date(Date.now() + process.env.COOKIE_EXP * 24 * 60 * 60 * 1000 ),httpOnly:true}
              res.status(201).cookie("authToken", token, options).json({
                successMessage: "Your Login Successful",
                token,
              });

        }else{
          res.status(400).json({
            error: {
              errorMessage: ["Your Password not Valid"],
            },
          })

        }
      }else{
        res.status(400).json({
          error: {
            errorMessage: ["Your email not found"],
          },
        })
        
      }


    }catch(error){

      res.status(500).json({
        error: {
          errorMessage: ["Internal server error"],
        },
      });
    }

    }

  


}