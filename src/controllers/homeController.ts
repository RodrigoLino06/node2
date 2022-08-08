import { Request, Response } from 'express';

import { Product } from '../models/Product';

//importando o arquivo mysql.ts
import { sequelize } from '../instances/mysql'
import { User } from '../models/User';

import { Op } from 'sequelize';

export const home = async (req: Request, res: Response)=>{

    //adicionando usuarios no banco

    const user = User.build({
        name:'Yaros-Chatoba',
        age:10
    })

    await user.save()
    //puxar os usuarios que estão no meu BD

    //let user = await User.findAll({//
       // where: {name: 'JooJ'}
       /*where: {
        [Op.or]:[
            {age: 21},
            {age: 65}
        ]
       }*/
       /*where:{
        name:{
       [Op.gt]:15,
       [Op.gte]:20,
       [Op.lt]:50,
       [Op.lte]:80,
       [Op.like]: '%o',
        }
       }*/
    //})


    res.render('pages/home', {
        user
    });
};