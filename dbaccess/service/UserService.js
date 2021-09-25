const User = require("./../model/users.model");

exports.UserService = {
    getAll: function () {
        return new Promise(async (resolve, reject) => {
            try {
                User.find({}, function (err, users) {
                    resolve(users);
                });
            } catch (error) { reject(error) }
        });
    },
    create: function (reqUserObj) {
        return new Promise(async (resolve, reject) => {
            try {
                let user = new User(reqUserObj);
                user.save().then((savedUser) => {
                    resolve(savedUser);
                }).catch((err) => {
                    reject(err);
                });
            } catch (error) { reject(error) }
        });
    },
    loginValidate: function (reqBody) {
        return new Promise(async (resolve, reject) => {
            try {
                User.findOne({ email: reqBody.email }, function (err, userDetails) {
                    if (err) {
                        reject(err);
                    } else if (!userDetails) {
                        reject({ status: 'FAILED', message: "Invalid email id" });
                    } else {
                        if (userDetails.password === reqBody.password) resolve({ status: 'SUCCESS', userDetails });
                        else reject({ status: 'FAILED', message: "Incorrect password" });
                    }
                });
            } catch (error) { reject(error) }
        });
    }
}