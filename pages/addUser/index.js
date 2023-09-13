import React from 'react';

const index = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
       
        const myname = e.target.myname.value;
        const designation = e.target.designation.value;
        const salary = e.target.salary.value;

         // Perform validation
        if (!myname || !designation || !salary) {
            alert("Please fill in all fields.");
            return;
        }

       const userData = {
         myname : myname,
         designation : designation,
         salary : salary,
       }

       fetch("https://exp-server-three.vercel.app/crudapp",{
        method : "POST",
        headers : {
            'content-type' : 'application/json'
        },
        body : JSON.stringify(userData)
       })
       .then(res => res.json())
       .then(data => {
        if (data.acknowledged) {
            e.target.reset();
            alert("Data Insert SuccessFully");
        }
       })
    }
    return (
        <div>
           <div className="hero min-h-screen bg-base-200">
                <div className="hero-content w-[50%] flex-col lg:flex-row-reverse">
                    <div className="card  w-full max-w-[700px] shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='myname' placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Designation</span>
                                </label>
                                <input type="text" name='designation' placeholder="Designation" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Salary</span>
                                </label>
                                <input type="text" name='salary' placeholder="Salary" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                               <button className="btn btn-primary">Add User</button>
                            </div>
                        </form>
                    </div>
                  </div>
                </div>
        </div>
    );
};

export default index;