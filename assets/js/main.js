const getUsers= async()=>{
    const response =await axios.get(`http://ums12.runasp.net/api/users`);
    return response.data;
}


const displayUsers =async()=>{
    const result =await getUsers();
    const users=result.users.map((user)=>{
        return  `
        <tr>
        <td>${user.name}</td>
        <td><img src="${user.imageUrl}"/></td>
        </tr> 
        `

    }
).join('');
document.querySelector(".users .users_data").innerHTML=users;
}
displayUsers();
