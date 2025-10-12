
function UserList(){
    const users = ["Hinda", "Spongbob", "Huda", "Khadra"];


    return(
<ul>
   {users.map((user, index) => (
<li key={index}>{user}</li>
   ))}
</ul>
    );
}
export default UserList;