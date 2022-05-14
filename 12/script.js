let users = [
    {
        id: 1,
        name: 'Arif',
        role: "Admin"
    },

    {
      
        id: 2,
        name: 'Asif',
        role: "SuperAdmin"
    },


    {
       
        id: 3,
        name: 'Akif',
        role: "Moderator"
    }
];

function Head() {
    
let head ='';
head+= `     
<tr>
  <th scope="col">#</th>
  <th scope="col">Name</th>
  <th scope="col">Id</th>
  <th scope="col">Role</th>
</tr>
`
document.querySelector('.table').innerHTML = head;
}


Head();


let tbl = '';
users.forEach((item) => {
    tbl += ` 
    <tr>
      <th scope="row">1</th>
      <td>${item.name}</td>
      <td>${item.id}</td>
      <td>${item.role}</td>
    </tr>
  `
});

document.getElementById('cedvel').innerHTML = tbl;


