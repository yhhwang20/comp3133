import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minLength: 4,
    }, 
    email: {
        type: String,
        required: true,
        validate(val) {
            var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
            return emailRegex.test(val);
        }
    },

    city: {
        type: String,
        required: true,
        validate(val) {
            var regex = /^[a-zA-Z\s]*$/;  
            return regex.test(val)
        }
    },
    zipcode: {
        type: String,
        required: true,
        validate(val) {
            var regex = /^[0-9]{5}(-[0-9]{4})$/gi;
            return regex.test(val)
        }
    },
 
    website: {
        type: String,
        required: true,
        validate(val) {
            var regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
            return regex.test(val)
        }
    },

    phone: {
        type: String,
        required: true,
        validate(val) {
            var regex = /^\d{1}-\d{3}-\d{3}-\d{4}$/gm;
            return regex.test(val) 
        }
    } 
})

const Users = mongoose.model('Users', UserSchema);

export default Users;