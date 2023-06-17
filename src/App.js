import React, {useEffect, useState} from 'react';
import axios from "axios";
import Modal from "./components/Modal";

const App = () => {
    const [userList, setUserList] = useState([])
    const [editUser, setEditUser] = useState({})
    const [isShowModal, setIsShowModal] = useState(false)
    useEffect(() => {
        axios.get('https://645b4e5e99b618d5f317a452.mockapi.io/users')
            .then(res => setUserList(res.data))
    }, [])

    const handleAddUser = (user) => {
        // console.log(user)
        axios.post('https://645b4e5e99b618d5f317a452.mockapi.io/users', user)
            .then(res => setUserList([...userList, res.data]))
    }

    const handleEditUser = (id) => {
        setIsShowModal(true)
        setEditUser(userList.find(user => user.id === id))
    }

    const handleCloseModal = () => {
        setIsShowModal(false)
        setEditUser({})
    }
    return (
        <div className={'container'}>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Username</th>
                    <th scope="col">Job</th>
                    <th scope="col">Hired</th>
                    <th scope="col">Email</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    userList.map((user, index) =>{
                        return (
                            <tr key={user.id}>
                                <th scope='row'>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.job}</td>
                                <td>{user.hired ? 'yes' : 'no'}</td>
                                <td>{user.email}</td>
                                <td><button onClick={() => handleEditUser(user.id)}>edit</button></td>
                            </tr>
                        )
                        })
                }
                </tbody>
            </table>
            <button
                className={'btn btn-primary mt-2'}
                onClick={() => setIsShowModal(!isShowModal)}
            >
                Add user
            </button>

            {
                isShowModal &&
                <Modal
                    handleAddUser={handleAddUser}
                    onClose={handleCloseModal}
                    setIsShowModal={setIsShowModal}
                    editUser={editUser}
                />
            }
        </div>
    );
};

export default App;