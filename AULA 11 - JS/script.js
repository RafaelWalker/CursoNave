const user = {
    nome: 'Usuário',
    idade: 25,
    endereco: {
      rua: 'Rua central',
      numero: 1
    },
    projetos: ['Projeto 1', 'Projeto 2']
  }
  
  
  const students = [
    {id: 1, name: 'John Doe', age: 23, scholarship: false},
    {id: 2, name: 'Margoe Rose', age: 19, scholarship: true},
    {id: 3, name: 'Kayle', age: 22, scholarship: true}
]

//Exe1 A
console.log(user.nome);

//Exe1 B
console.log(user.endereco.rua);

//Exe1 C
console.log(user.projetos[1]);

//Exe2 A
console.log(user[0]);

//Exe2.1
students.forEach(elem => {
    console.log(elem.name);
});

//Exe2.2
students.forEach(elem => {
  if(elem.age >= 20){
    console.log(elem);
  }
});

//Exe2.3
const newArray = [];

students.forEach(elem => {
    if(elem.scholarship){
      newArray.push(elem);
    }
});

console.log(newArray);