import { Scholar } from "../Interfaces/scholar.interface";


export class ScholarserVice{
    susi:Scholar[]=[]
 scholar:Scholar[]=[{
    name :'Jonathan',
    email:'joendambuki16@gmail.com',
    year:'3',
    role:'scholar',
    suspended:'no',
    displinary:'no',
    image:'https://www.honorsociety.org/sites/default/files/styles/large/public/Graduation-Cheerful-Graduate-w.jpg?itok=IFCQl9gP'
},
{
    name :'Jonathan',
    email:'joendambuki16@gmail.com',
    year:'3',
    role:'scholar',
    suspended:'no',
    displinary:'no',
    image:'https://www.honorsociety.org/sites/default/files/styles/large/public/Graduation-Cheerful-Graduate-w.jpg?itok=IFCQl9gP'
},
{
    name :'Jonathan',
    email:'joendambuki16@gmail.com',
    year:'3',
    role:'scholar',
    suspended:'no',
    displinary:'no',
    image:'https://www.honorsociety.org/sites/default/files/styles/large/public/Graduation-Cheerful-Graduate-w.jpg?itok=IFCQl9gP'
},
{
    name :'Jonathan',
    email:'joendambuki16@gmail.com',
    year:'3',
    role:'scholar',
    suspended:'no',
    displinary:'no',
    image:'https://www.honorsociety.org/sites/default/files/styles/large/public/Graduation-Cheerful-Graduate-w.jpg?itok=IFCQl9gP'
},
{
    name :'Jonathan',
    email:'joendambuki16@gmail.com',
    year:'3',
    role:'scholar',
    suspended:'no',
    displinary:'no',
    image:'https://www.honorsociety.org/sites/default/files/styles/large/public/Graduation-Cheerful-Graduate-w.jpg?itok=IFCQl9gP'
},
{
    name :'Jonathan',
    email:'joendambuki16@gmail.com',
    year:'3',
    role:'scholar',
    suspended:'no',
    displinary:'no',
    image:'https://www.honorsociety.org/sites/default/files/styles/large/public/Graduation-Cheerful-Graduate-w.jpg?itok=IFCQl9gP'
}
,
{
    name :'Ndambuki',
    email:'joendambuki16@gmail.com',
    year:'3',
    role:'scholar',
    suspended:'no',
    displinary:'no',
    image:'https://media.istockphoto.com/photos/facing-my-future-with-confidence-picture-id1139495117?k=20&m=1139495117&s=612x612&w=0&h=6P1Q43Oi_yERh9pMLki5LrkF3jaG82puPMeQdCoUNx8='
}
,{
    name :'Ndambuki',
    email:'joendambuki16@gmail.com',
    year:'3',
    role:'teacher',
    suspended:'no',
    displinary:'no',
    image:'https://media.istockphoto.com/photos/facing-my-future-with-confidence-picture-id1139495117?k=20&m=1139495117&s=612x612&w=0&h=6P1Q43Oi_yERh9pMLki5LrkF3jaG82puPMeQdCoUNx8='
}
]

getScholar(){
    return this.scholar
}

addScholar(name:string,email:string,year:string,role:string, image:string){
    this.scholar.push(
        {
            name:name,
            email:email,
            year:year,
            role:role,
            suspended:"no",
            displinary:"no",
            image:image
        }
    )
}

suspendScholar(id:number, res:string){
    this.scholar[id].suspended=res
   const sus= this.scholar.slice(id,1)
  
   
    sus.forEach((item)=>{
        this.susi.push(item)
    })
     
    this.scholar.splice(id,1)
  
}


}