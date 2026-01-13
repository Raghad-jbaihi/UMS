const createUserForm = document.forms['AddUserForm'];

createUserForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(createUserForm);

    try {
      
      const response = await axios.post(`https://ums12.runasp.net/api/users`, formData);

         console.log(response);
        alert("User created successfully!");
       
    } catch (error) {
        console.error(error);
        alert("Failed to create user.");
    }
});
