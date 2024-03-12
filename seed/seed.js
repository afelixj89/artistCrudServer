import mongoose from 'mongoose';
import data from './houses.json' assert { type: 'json' };
import connection from './connection.js';
import House from '../models/House.js';

let housesData = data.map(item => {
    const temp = {};
	temp._id = item._id;
    temp.name = item.name;

    temp.mascot = item.mascot;
    temp.headOfHouse = item.headOfHouse;
    temp.houseGhost = item.houseGhost;
    temp.founder = item.founder;
    temp.__v = item.__v;
    temp.school = item.school;
    temp.members = item.members;
    temp.values = item.values;
    temp.colors = item.colors;
      
     
    return temp
});

House
	.deleteMany({})
	.then(() => House.create( housesData ))
	.then(() => {
		console.log('done');
		process.exit();
	});

