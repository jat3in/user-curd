import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addUser,deleteUser ,updateUsername} from "./Features/Users";
import { useState } from "react";

function App() {
  const userList = useSelector((state) => state.users.value);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPhone, setNewPhone] = useState("");


  const dispatch = useDispatch();

  return (
    <div className="App">
      <div className="addUser">
      
        <input
          type="text"
          placeholder="Name..."
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
        />
        <input
          type="text"
          placeholder="Username.."
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          required
        />
        <input
          type="email"
          placeholder="Email.."
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
        <input
          type="number"
          placeholder="Phone No...."
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          required
        />
        <button
          onClick={() => {
           
            dispatch(
              addUser({
                id: userList[userList.length - 1].id + 1,
                name: name,
                username: username,
                email: email,
                phone: phone,
              })
            )
          }}
        >
          Add User
        </button>
       
      </div>
      <div className="displayUsers">
        {userList.map((user) => {
          return (
            <div key={user.id}>
              <h5> {user.name}</h5>
              <h5> {user.username}</h5>
              <h5> {user.email}</h5>
              <h5> {user.phone}</h5>
              <input
                type="text"
                placeholder="New Name..."
                onChange={(event) => {
                  setNewName(event.target.value);
                }}
                required
              />
              <input
                type="text"
                placeholder="New Username..."
                onChange={(event) => {
                  setNewUsername(event.target.value);
                }}
                required
              />
              <input
                type="email"
                placeholder="New Email..."
                onChange={(event) => {
                  setNewEmail(event.target.value);
                }}
                required
              />
              <input
                type="text"
                placeholder="New Phone..."
                onChange={(event) => {
                  setNewPhone(event.target.value);
                }}
                required
              />
              <button
                onClick={() => {
                  dispatch(
                    updateUsername({ id: user.id,name: newName, username: newUsername, email: newEmail, phone: newPhone })
                  );
                }}
              >
                {" "}
                Update Username
              </button>
              <button
                onClick={() => {
                  dispatch(deleteUser({ id: user.id }));
                }}
              >

                Delete User
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
