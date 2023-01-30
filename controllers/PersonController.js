const PersonSchema = require('../models/Person')
const catchAsyncErrors = require('../middlewares/catchAsyncError');

exports.getAllPersons = catchAsyncErrors(async (req, res, next) => {
    const allPersons = await PersonSchema.find();
    if (allPersons.length == 0) {
        res.status(200).json(
            {
                success: false,
                message: "No Persons"
            }
        )
    }
    else
        res.status(200).json(
            {
                success: true,
                persons: allPersons
            }
        )
})

exports.deletePerson = catchAsyncErrors(async (req, res, next) => {
    const {  name } = req.params;
    const Persons = await PersonSchema.find();

    personByName = Persons.filter(person=>  person.name.toLocaleLowerCase() == name.toLocaleLowerCase());
    if(personByName.length==0)
    {
        res.status(200).json(
            {
                success: false,
                message: "No Persons"
            }
        )
    }
    else
    {
        const update = await PersonSchema.deleteOne({_id:personByName[0]._id })
        res.status(200).json(
            {
                success : true
            }
        )
    }
}
)
exports.updatePerson = catchAsyncErrors(async (req, res, next) => {
    const {name2,  name, email, number, city } = req.body;
    const Persons = await PersonSchema.find();

    personByName = Persons.filter(person=>  person.name.toLocaleLowerCase() == name.toLocaleLowerCase());
    if(personByName.length==0)
    {
        res.status(200).json(
            {
                success: false,
                message: "No Persons"
            }
        )
    }
    else
    {
        const update = await PersonSchema.updateOne({_id:personByName[0]._id }, {
            name : name2,
            email : email,
            number: number,
            city : city 
        })
        res.status(200).json(
            {
                success : true
            }
        )
    }
   
})
exports.addPerson = catchAsyncErrors(async (req, res, next) => {
    const { name, email, number, city } = req.body;
    try {

        const personCreated = await PersonSchema.create({
            name, email, number, city
        });

        res.status(200).json({
            success: true,
            personCreated
        })

    }
    catch (exp) 
    {
        res.status(200).json({
            success: false,
            message : "Entered Existing Name"
        })
    }
})
exports.findPersonById = catchAsyncErrors(async (req, res, next) => {
    const { id } = req.params;
    try {
        const foundPerson = await PersonSchema.findById({ _id: id })

        if (foundPerson)
            res.status(200).json({
                success: true,
                person: foundPerson
            })
        else {
            res.status(200).json({
                success: false,
                message: "not found "
            })

        }
    }
    catch (exp) {
        res.status(200).json({
            success: false,
            message: "not found wrong Id "
        })
    }
})
exports.findPersonByName = catchAsyncErrors(async (req,res,next)=>
{
    const {name} = req.params; 
    const Persons = await PersonSchema.find();
    personByName = Persons.filter(person=>  person.name.toLocaleLowerCase() == name.toLocaleLowerCase());
   
    if(personByName.length==0)
    {
        res.status(200).json({
            success: false,
            message: "not found by name "
        })
    } 
    else
    {
        
        res.status(200).json({
            success: true,
            person : personByName[0]
        })
    }

})
exports.findPersonByCity = catchAsyncErrors(async (req,res,next)=>
{
    const {city} = req.params; 
    const Persons = await PersonSchema.find();
    personByName = Persons.filter(person=>  person.city.toLocaleLowerCase() == city.toLocaleLowerCase());
    if(personByName.length==0)
    {
        res.status(200).json({
            success: false,
            message: "not found by city "
        })
    } 
    else
    {
        
        res.status(200).json({
            success: true,
            persons : personByName
        })


    }

})