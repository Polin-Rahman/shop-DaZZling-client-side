import React, { useState } from 'react';

const MakeAdmin = () => {

    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {

        const user = { email };

        fetch('https://agile-escarpment-19572.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);
                }
            })

        e.preventDefault()
    }

    return (
        <div className="container">
            <h3 className="text-center my-5 fst-italic">Make an Admin</h3>
            <form onSubmit={handleAdminSubmit}>
                <div className="w-75 mx-auto">
                    <label htmlFor="email">Email: </label>
                    <input
                        onBlur={handleOnBlur}
                        type="email" name="email" className="form-control" />
                    <br />
                    <button
                        type="submit" className="btn btn-success">Make Admin</button>

                    {
                        success && <div className="alert alert-success mt-5 w-50" role="alert">
                            Made Admin successfully!
                        </div>
                    }
                </div>
            </form>
        </div>
    );
};

export default MakeAdmin;