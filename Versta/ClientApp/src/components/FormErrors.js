import React from 'react';

export const FormErrors = ({ formError }) =>
    <div className='formError'>
        {Object.keys(formError).map((fieldName, i) => {
            if (formError[fieldName].length > 0) {
                return (
                    <p key={i}>{formError[fieldName]}</p>
                )
            } else {
                return '';
            }
        })}
    </div>