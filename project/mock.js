const Mock = require('mockjs');
const { Random } = Mock;

const data = Mock.mock({
    'list|1-10':[{
        'id|+1':1,
        'age|1-30':1,
        'price|1-30.2-3':1,
        'fruit|1':['apple','banana'],
        'list|1-2':['a'],
        'age1':()=>1,
        'age2':/1[0-9]/
    },
   ]
})

// console.log(JSON.stringify(data,null,4))
const email = Random.email();
const image = Random.image();
console.log(email)//k.fkx@eoyseid.zr
console.log(image)//https://dummyimage.com/728x90

//模拟10个用户的数据
const users = Mock.mock({
    code:200,
    'list|10':[
        {
            name:'@first @last',
            avatar:'@image'
        }
    ]
})
console.log(users)