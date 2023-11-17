import React from 'react'
import Sidebar from '../component/Sidebar'
import { BsList, BsFilter, BsSearch, BsPlus } from 'react-icons/bs';
import { FaAngleDown,FaFilter } from "react-icons/fa";

const PlantedInterview = () => {
    return (
        <div>
            <Sidebar />
            <main id="main" className="main" >
                <div className="row">
                    <div className="col-lg-12 d-flex ">
                    <div className="search-bar">
                            <form className="search-form d-flex align-items-center" method="POST" action="#">
                                <div style={{ position: 'relative', width: '100%' }}>
                                    <input
                                        type="text"
                                        name="query"
                                        placeholder="Search"
                                        style={{ width: '100%', height: '100%', padding: '10px' }}
                                        title="Enter search keyword"
                                    />
                                    <BsSearch
                                        style={{
                                            position: 'absolute',
                                            right: '10px',
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                        }}
                                    />
                                </div>
                            </form>
                        </div>



                        <div className="filter-button mx-4">
                            <button className="btn btn-filter" style={{padding: "10px"}}>
                            <FaFilter /> Filter Button <FaAngleDown />
                            </button>
                        </div>
                        <div className="filter-button ">
                            <button className="btn btn-success" style={{padding: "9px"}}>
                                <BsPlus /> Plan Miad Interview
                            </button>
                        </div>
                    </div>
                </div><br />
                <div className="row">
                    <div className="col-md-12 d-flex w-100">
                        <div className="search-bar">
                            <form className="search-form d-flex align-items-center" method="POST" action="#">
                                <div style={{ position: 'relative', width: '100%' }}>
                                    <input
                                        type="text"
                                        name="query"
                                        placeholder="Done"
                                        style={{ width: '100%', height: '100%', padding: '10px' }}
                                        title="Enter search keyword"
                                    />
                                    <BsSearch
                                        style={{
                                            position: 'absolute',
                                            right: '10px',
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                        }}
                                    />
                                </div>
                            </form>
                        </div>

                        <div className="search-bar">
                            <form className="search-form d-flex align-items-center" method="POST" action="#">
                                <div style={{ position: 'relative', width: '100%' }}>
                                    <input
                                        type="text"
                                        name="query"
                                        placeholder="Pending"
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            padding: '10px',
                                            backgroundColor: 'rgba(195, 208, 212, 1)',
                                        }}
                                        title="Enter search keyword"
                                    />
                                    <BsSearch
                                        style={{
                                            position: 'absolute',
                                            right: '10px',
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                        }}
                                    />
                                </div>
                            </form>
                        </div>

                        <div className="search-bar">
                            <form className="search-form d-flex align-items-center" method="POST" action="#">
                                <div style={{ position: 'relative', width: '100%' }}>
                                    <BsSearch
                                        style={{
                                            position: 'absolute',
                                            right: '10px',
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                        }}
                                    />
                                    <input
                                        type="text"
                                        name="query"
                                        placeholder="Late"
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            padding: '10px',
                                            backgroundColor: 'rgba(195, 208, 212, 1)',
                                        }}
                                        title="Enter search keyword"
                                    />
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
                <br />
                <table className='table-users '  style={{ borderCollapse: "collapse" }}cellspacing="0">
                    <tbody style={{ fontSize: "10px" }}>
                        <tr>
                            <td><img className='img' src="/girl.png" alt="" /></td>
                            <td className=''>Maid Name <br /><p>Saleena Gomezz</p> </td>
                            <td className=''>Client Ph# <br /><p>Saleena Gomezz</p> </td>
                            <td className=''>Maid Tracking Code<br /><p>Saleena Gomezz</p> </td>
                            <td className=''>Client Email <br /><p>Saleena Gomezz</p> </td>
                            <td className=''>Interview Date <br /><p>Saleena Gomezz</p> </td>
                            <td className=''>Interview Time <br /><p>Saleena Gomezz</p> </td>
                            <td className=''>Days Left <br /><p>Saleena Gomezz</p> </td>

                        </tr>

                        <tr>
                            <td><img className='img' src="/girl.png" alt="" /></td>
                            <td className=''>Maid Name <br /><p>Saleena Gomezz</p> </td>
                            <td className=''>Client Ph# <br /><p>Saleena Gomezz</p> </td>
                            <td className=''>Maid Tracking Code<br /><p>Saleena Gomezz</p> </td>
                            <td className=''>Client Email <br /><p>Saleena Gomezz</p> </td>
                            <td className=''>Interview Date <br /><p>Saleena Gomezz</p> </td>
                            <td className=''>Interview Time <br /><p>Saleena Gomezz</p> </td>
                            <td className=''>Days Left <br /><p>Saleena Gomezz</p> </td>
                        </tr>

                        <tr>
                            <td><img className='img' src="/girl.png" alt="" /></td>
                            <td className=''>Maid Name <br /><p>Saleena Gomezz</p> </td>
                            <td className=''>Client Ph# <br /><p>Saleena Gomezz</p> </td>
                            <td className=''>Maid Tracking Code<br /><p>Saleena Gomezz</p> </td>
                            <td className=''>Client Email <br /><p>Saleena Gomezz</p> </td>
                            <td className=''>Interview Date <br /><p>Saleena Gomezz</p> </td>
                            <td className=''>Interview Time <br /><p>Saleena Gomezz</p> </td>
                            <td className=''>Days Left <br /><p>Saleena Gomezz</p> </td>
                        </tr>

                        <tr>
                            <td><img className='img' src="/girl.png" alt="" /></td>
                            <td className=''>Maid Name <br /><p>Saleena Gomezz</p> </td>
                            <td className=''>Client Ph# <br /><p>Saleena Gomezz</p> </td>
                            <td className=''>Maid Tracking Code<br /><p>Saleena Gomezz</p> </td>
                            <td className=''>Client Email <br /><p>Saleena Gomezz</p> </td>
                            <td className=''>Interview Date <br /><p>Saleena Gomezz</p> </td>
                            <td className=''>Interview Time <br /><p>Saleena Gomezz</p> </td>
                            <td className=''>Days Left <br /><p>Saleena Gomezz</p> </td>
                        </tr>
                    </tbody>
                </table>

            </main>
        </div>
    )
}

export default PlantedInterview