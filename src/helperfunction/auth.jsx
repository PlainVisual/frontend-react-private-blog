import users from "../data/users.json"

function userAuth() {

  return users.map((user) => {

    return {
      username: user.username,
      password: user.password,
    }
    
  });

}

console.log(userAuth());
export default userAuth;