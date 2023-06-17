import React from 'react';

const CustomInput = ({label, id, placeholder, onchange, value}) => {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input type="text"
                   className='form-control'
                   id={id}
                   value={value}
                   placeholder={placeholder}
                   onChange={onchange}
            />
        </div>
    );
};

export default CustomInput;