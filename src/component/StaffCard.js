import React from 'react';
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const StaffCard = ({ name, dashboardId, email, imageSrc }) => {
    return (
        <div className="staff-card d-flex mx-1 my-3" style={{ border: '1px solid #ccc', padding: '15px', marginBottom: '20px', background: "#fdfdfd", width: "100%" }}>
            <img src={imageSrc} alt={name} style={{ width: '120px', height: '110px', }} />
            <div style={{ marginTop: '0px' }}>
                <h3 className='mx-5'>{name}</h3>
                <p className='mx-5'>Dashboard ID: {dashboardId}</p>
                <p className='mx-5'>{email}</p>
                <hr style={{ width: "260%" }} />
            </div>
            <div style={{ marginTop: '38px' }}>
                <p className='mx-3'>Dashboard Password</p>
                <p className='mx-3'>{email}</p>

            </div>
            <div style={{ marginTop: '40px', marginLeft: "130px" }}>
                <FaRegEdit className='mx-2' style={{ fontSize: "30px" }} />
                <MdDelete className='mx-2' style={{ fontSize: "30px" }} />
            </div>
        </div>
    );
};

export default StaffCard;
