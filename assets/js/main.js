const getUsers= async()=>{
    const response =await axios.get(`https://ums12.runasp.net/api/users`);
    
    return response.data;
}


const displayUsers =async()=>{
    const result =await getUsers();
    const users=result.users.map((user)=>{
        return  `
        <tr>
        <td>${user.name}</td>
        <td><img src="${user.imageUrl}"/></td>
        <td>
        <button class="btn btn-outline-danger" onclick=deleteUser(${user.id})>Delete </button>
         </td>
        </tr> 
        `

    }
).join('');
document.querySelector(".users .users_data").innerHTML=users;
}
displayUsers();


const deleteUser = async (id) => {
    const response = await axios.delete(`https://ums12.runasp.net/api/users/${id}`);
    console.log(response);
    displayUsers();
}
