import {Sequelize, where}  from 'sequelize';
const {DataTypes} = Sequelize;

const sequelize = new Sequelize({
    dialect : "sqlite",
    storage : "./database.sqlite",
    define : {
        timestamps : false,
    }

})

const Worker = sequelize.define(
    "worker",{
        worker_id:{
            type: DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement: true

        },
        surName:{
            type : DataTypes.STRING,
        
        },
        lastName:{
            type : DataTypes.STRING
        },
        position: {
            type : DataTypes.STRING

        },
        salary:{
            type: DataTypes.INTEGER
        }
       


    }
)



console.log(sequelize.models.worker)

Worker.sync()   
        .then((data) =>{
            console.log("TAble and model synced successful")
        })
        .catch((err)=>{
            console.log("Error sycing the table and model")
        })



Worker.sync({alter : true})
        .then(()=>{
            return Worker.bulkCreate([
                {surName: "Marie" , lastName: "Sue", position : "SuperHero", salary : 900000},
                {surName: "Jackie" , lastName: "Chan", position : "KarateMaster", salary : 1000000},
                {surName: "Loco" , lastName: "Mono", position : "Dummy", salary : 500},
                {surName: "JOe" , lastName: "Hue", position : "Dumster", salary : 700000},
                {surName: "Donald" , lastName: "MCdonald", position : "Singer", salary : 500000},

            ])
        })





        

Worker.sync({alter :true})
        .then(() =>{
            return Worker.findAll();
        })
        .then((data)=>{
            data.forEach((element)=>{
                console.log(element.toJSON())
            })
        })
        .catch((err)=>{
            console.log(`Error: ${err.message}`)
        })





        Worker.sync({alter :true})
        .then(() =>{
            return Worker.findAll({limit: 1} );
        })
        .then((data)=>{
            data.forEach((element)=>{
                console.log(element.toJSON())
            })
        })
        .catch((err)=>{
            console.log(`Error: ${err.message}`)
        })


Worker.sync({alter :true})  
        .then(()=>{
            return Worker.create({surName: "Galagony" , lastName: "Mc", position : "Wizard", salary : 6000000})
        })
        .then((data)=>{
            console.log("User added")
            console.log(data.toJSON())
        })
        .catch((err)=>{
            console.log(`Error: ${err.message}`)
        })




Worker.sync({alter :true})  
        .then(()=>{
            return Worker.create({ surName: "Sheldon", lastName: "abc",position:"big brain" , salary: -1 });
        })
        .then((data)=>{
            console.log("user destroyed!!!")
            return data.destroy()
            
        })
        .then((data)=>{
            console.log("User destroyed")
            console.log(data.toJSON())
        })




        Worker.sync({ alter: true })
	.then(() => {
		return Worker.destroy({	where: { surName: "JOe" } });
		
	})
	.then((data) => {
		console.log(data);
	})
	.catch((err) => {
		console.log(`Error: ${err.message}`);
	});


    
    Worker.sync({alter :true})  
        .then(()=>{
            return Worker.update({surName : "Moloko"},{
                where : {surName : "Loco"}
            })
        })
        .then((data)=>{
            console.log(data)
        })
        .catch((err)=>{
            console.log(`Error: ${err.message}`)
        })

