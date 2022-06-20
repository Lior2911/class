// class Student {
//   constructor(firstName,grade,Id){
//     this.firstName = firstName;
//     this.grade = grade;
//     this.Id = Id;
//   }

// }
// const newStudent = new Student("lior",12,"305207573");
// const oldStudent = new Student("daniel",12,"123456789");
// console.log(newStudent);
// console.log(oldStudent);

// class UserDetails{
//   constructor(firstName,lastName,age,mail){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.mail = mail;
//   }
// }
// const firstUser = new UserDetails("lior","aytegev",31,"aytegev1@gmail.com");
// const secUser = new UserDetails("daniel","malada",24,"malada1@gmail.com");
// const thirdUser = new UserDetails("naruto",19,"hokage@gmail.com");
// const detailsLine = document.createElement("h3");
// document.body.append(detailsLine)
// const usersArray = [];
// for ( const key in firstUser){
//  detailsLine.innerText += `${key}:${firstUser[key]}\n`
// }
// for ( const key in secUser){
//   detailsLine.innerText += `${key}:${secUser[key]}\n`
//  }
//  for ( const key in thirdUser){
  // detailsLine.innerText += `${key}:${thirdUser[key]}\n`
//  }

// קלטו נתונים מהמשתמש וצרו מופע. 5


// class DetailsFromUser{
//   constructor(firstName,lastName,mail){ 
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.mail =mail;
//   }
// }

// function someFunc(){
//   const UserDetails = new DetailsFromUser(fNameInput.value,lNameInput.value,mailInput.value); 
//   const myTable = document.createElement("table");
//   document.body.appendChild(myTable);
//   const tHead = document.createElement("thead");
//   document.body.appendChild(tHead);
//   const tBody = document.createElement("tbody");
//   document.body.appendChild(tBody);
//   const trTable = document.createElement("tr");
//   document.body.appendChild(trTable);

  
//   for (myKey in UserDetails){
//     let thTable = document.createElement("th");
//     tHead.appendChild(thTable);
//     // trTable.style.border = "solid;2px";
//     thTable.innerText += myKey + " "
//     trTable.innerHTML += `<td>${UserDetails[myKey]}</td>`+ " "
//   }
// }

// class dogType{
//   constructor(dogsName,tYpe,birth){
//     this.dogsName = dogsName;
//     this.tYpe = tYpe;
//     this.birth=birth;
//   }
// }
// const firstDog = new dogType("skar","bull","1/1/00")
// const secDog = new dogType("simba","dogg","2/2/00")
// const thirDog = new dogType("mufasa","pitbull","3/3/00")
// const fourthDog = new dogType("zazu","amstaf","4/4/00")
// const fifthDog = new dogType("pumba","pincher","5/5/00")

// const dogsArray = [firstDog,secDog,thirDog,fourthDog,fifthDog]
// console.log(dogsArray)

class TeacherClass {
  constructor(fName,lName,grade,eMail){
    this.fName = fName;
    this.lName = lName;
    this.grade = grade;
    this.eMail = eMail;
  }
}

 const teachersArray = [];
function createTeacherUser(){
   const TeacherDetails =
  new TeacherClass(
    fNameInput.value,
    lNameInput.value,
    mailInput.value,
    gradeInput.value,
  )
  if(teachersArray.length<4){
    teachersArray.push(TeacherDetails)

   fNameInput.value = " "
   lNameInput.value = " "
   mailInput.value = " "
   gradeInput.value = " "
   }
  
}


 