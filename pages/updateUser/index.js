import React from 'react';

const UpdateUser = ({userdata}) => {
    const handleUpdate = (e) => {
        e.preventDefault()
        const myname = e.target.myname.value;
        const designation = e.target.designation.value;
        const salary = e.target.salary.value;

       const userData = {
         myname : myname,
         designation : designation,
         salary : salary,
       }

       fetch(`https://exp-server-three.vercel.app/crudapp/${userdata._id}`,{
        method : "PATCH",
        headers : {
            'content-type' : 'application/json'
        },
        body : JSON.stringify(userData)
       })
       .then(res => res.json())
       .then(data => {
        if (data.modifiedCount) {
            alert("Update Success");
            window.location.reload()
        }
       })
    }
    return (
        <div>
            <input type="checkbox" id="myModal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box ex">
                    <div class="modal-action mt-0">
                        <label htmlFor="myModal" class="btn h-5 min-h-fit bg-black text-cyan-50">X</label>
                    </div>
                    <div className="hero bg-base-200">
                        <div className="hero-content gap-0 p-0 w-[100%] flex-col lg:flex-row-reverse">
                            <div className="card p-0 w-full max-w-[700px] shadow-2xl bg-base-100">
                                <form onSubmit={handleUpdate} className="card-body p-0">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" name="myname" defaultValue={userdata.myname} placeholder="Name" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Designation</span>
                                        </label>
                                        <input type="text" name="designation" defaultValue={userdata.designation} placeholder="Designation" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Salary</span>
                                        </label>
                                        <input type="text" name="salary" defaultValue={userdata.salary} placeholder="Salary" className="input input-bordered" />
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Update User</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateUser;