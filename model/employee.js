const mongooes = require('mongoose');
const Schema = mongooes.Schema;

const EmployeeSchema = new Schema({
    firstname: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    lastname: {
        type: String,
        required: true,
        trim: true
    },
    kodmli: {
        type: Number,
        required: true,
        unique: true,
        trim: true
    },
    isMale: {
        type: Boolean,
        required: true

        //chose//
        //type:String
        // enum: ["ture", "female"]
    },

    companyId: {
        type: Schema.Types.ObjectId,
        //Company is module.exports = Company = mongoose.model('Company', CompanySchema) in company js
        ref: 'Company'
    },
    boss: {
        type: Boolean,
        required: true

    }
})




module.exports = Employee = mongooes.model('Employee', EmployeeSchema)