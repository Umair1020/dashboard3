import React, { useState } from 'react'
import Card from '../component/Card';
import "../assets/css/style.css"
import { BsList, BsFilter, BsSearch, BsArrowDown } from 'react-icons/bs';
import { FaFilter, FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Sidebar from '../component/Sidebar';

const Demo = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };
    
    return (
        <div>
          <Sidebar />
          <main id='main' className={`main ${isSidebarOpen ? 'main-with-sidebar' : ''}`}>
            <br />
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
              <button className="btn btn-filter" style={{ padding: "10px" }}>
                <FaFilter /> Filter Button <FaAngleDown />
              </button>
            </div>
           
          </div>
        </div><br />
                {/* <div className="row">
                    <div className="col-md-12 d-flex w-100">
                        <div className="search-bar" >
                            <form className="search-form d-flex align-items-center" method="POST" action="#">
                                <input type="text" name="query" placeholder="Search" style={{ width: '100%', height: '100%', padding: '10px' }} title="Enter search keyword" />
                                <button type="submit" title="Search">
                                    <BsSearch />
                                </button>
                            </form>
                        </div>
                   

                        <div className="search-bar" >
                            <form className="search-form d-flex align-items-center" method="POST" action="#">
                                <input type="text" name="query" placeholder="Search" style={{ width: '100%', height: '100%', padding: '10px', backgroundColor: 'rgba(195, 208, 212, 1)' }} title="Enter search keyword" />
                                <button type="submit" title="Search">
                                    <BsSearch  style={{ width: '100%', height: '100%', padding: '10px'}} />
                                </button>
                            </form>
                        </div>
                    
                        <div className="search-bar" >
                            <form className="search-form d-flex align-items-center" method="POST" action="#">
                                <input type="text" name="query" placeholder="Search" style={{ width: '100%', height: '100%', padding: '10px', backgroundColor: 'rgba(195, 208, 212, 1)' }} title="Enter search keyword" />
                                <button type="submit" title="Search">
                                    <BsSearch />
                                </button>
                            </form>
                        </div>
                    </div>
                </div> */}
                <div className="row">
                    <div className="col-md-12">
                        <Card />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Demo