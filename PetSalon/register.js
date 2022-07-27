let petSalon ={
    name:"The nice pets",
    address:"514 lib ave",
    pets:[
        {
            petName:"bobby",
            age:2,
            breed: "love",
            gender: "male",
            service:"Grooming",
            ownerName:"momo",
            contactPhone:"77777887",
        },
        {
            petName:"job",
            age:3,
            breed:"shiwawa",
            gender:"female",
            service:"vaccination",
            ownerName:"jaques",
            contactPhone:"666778856",
        },
        {
            petName:"vandamme",
            age:4,
            breed:"german",
            gender:"male",
            service:"shot",
            ownerName:"Bret",
            contactPhone:"667778854",

        },
    ]

}
function Pets(petName,age,breed,gender,service,ownerName,contactPhone){
    this.name=petName;
    this.age=age;
    this.breed=breed;
    this.gender=gender;
    this.service=service;
    this.owner=ownerName;
    this.contact=contactPhone;
}
let baabi = new Pets("baabi",10,"french","male","grooming","charles",776655777);
for(let i=0;i<petSalon.pets.length;i++){
    console.log(petSalon.pets[i].name)
}
function register(){
   let petName=document.getElementById("txtpetName").value;
   let age=document.getElementById("numAge").value;
   let breed=document.getElementById("txtBreed").value;
   let gender=document.getElementById("txtGender").value;
   let service=document.getElementById("txtService").value;
   let ownerName=document.getElementById("txtOwner").value;
   let contactPhone=document.getElementById("numPhone").value;

   let newpet = new Pets(petName,age,breed,gender,service,ownerName,contactPhone);
   console.log(newPet);
   petSalon.pets.push(newPet);
   clearInputs();
}

function clearInputs(){
    document.getElementById("txtpetName").value="";
    document.getElementById("numAge").value="";
    document.getElementById("txtBreed").value="";
    document.getElementById("txtGender").value="";
    document.getElementById("txtService").value="";
    document.getElementById("txtOwner").value="";
    document.getElementById("numPhone").value="";
}

function displayInfo(){
    document.getElementById("info").innerHTML=`Welcome to the ${petSalon.name}family.`;
}
     
function displayNumberOfPets(){
    document.getElementById("number").innerHTML=`There are ${petSalon.pets.length} pets`;
}
displayInfo();
displayNumberOfPets();