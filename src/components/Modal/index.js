import React, {useState} from 'react';
import CustomInput from "../CustomInput";

const Modal = ({setIsShowModal, handleAddUser, editUser, onClose}) => {
    const [user, setUser] = useState(editUser || {})
    const handleSubmit = (e) => {
        e.preventDefault()
        handleAddUser(user)
        setIsShowModal(false)
        // console.log(user)
    }

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 1000

        }}>
            <div style={{
                position: 'absolute',
                top: '30%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: '#fff',
                width: '500px',
                height: '500px',
                zIndex: 1000,
                padding: '30px 20px',
                borderRadius: '10px'
            }}>
                <form action="" onSubmit={handleSubmit}>
                    <div className={'form-group'}>
                        <button
                            style={{
                                position: 'absolute',
                                top: '10px',
                                right: '10px',
                                fontSize: '15px'
                            }}
                            className={"btn btn-light"}
                            onClick={onClose}
                        >
                            X
                        </button>
                        <div className={'mt-3'}>
                            <CustomInput
                                label={'Name'}
                                id={'name'}
                                value={user.name}
                                placeholder={'Enter name'}
                                onchange={(e) => setUser({...user, name: e.target.value})}
                            />
                        </div>
                        <div className={'mt-3'}>
                            <CustomInput
                                label={'Username'}
                                id={'username'}
                                value={user.username}
                                placeholder={'Enter username'}
                                onchange={(e) => setUser({...user, username: e.target.value})}
                            />
                        </div>
                        <div className={'mt-3'}>
                            <CustomInput
                                label={'Email'}
                                id={'email'}
                                value={user.email}
                                placeholder={'Enter email'}
                                onchange={(e) => setUser({...user, email: e.target.value})}
                            />
                        </div>
                        <div className={'mt-3'}>
                            <CustomInput
                                label={'Job'}
                                id={'job'}
                                value={user.job}
                                placeholder={'Enter job'}
                                onchange={(e) => setUser({...user, job: e.target.value})}
                            />
                        </div>

                        <div className={'mt-3'}>
                            <label htmlFor="btncheck1" className="btn btn-outline-primary">Hired</label>
                            <input
                                checked={user.hired}
                                type="checkbox"
                                className="btn-check"
                                id='btncheck1'
                                autoComplete="off"
                                onChange={(e) => setUser({...user, hired: e.target.checked})}
                            />
                        </div>

                    </div>
                    <button className={"btn btn-primary mt-3"} style={{
                        display: 'block',
                        margin: '0 auto',
                    }}
                            type={'submit'}
                    >
                        Save
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Modal;