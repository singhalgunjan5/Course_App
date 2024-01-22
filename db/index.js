const mongoose = require('mongoose');

mongoose.connect('your-mongodb-url');

const AdminSchema = new mongoose.Schema({

});

const UserSchema = new mongoose.Schema({

});

const CourseSchema = new mongoose.Schema({

});

const Admin = mongoose.model('Admin',AdminSchema);
const User = mongoose.model('Admin',UserSchema);
const Course = mongoose.model('Course',CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}