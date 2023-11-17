import React from 'react'
import Sidebar from '../component/Sidebar'
import { BsList, BsFilter, BsSearch, BsArrowDown, BsPlus } from 'react-icons/bs';
import Card from '../component/Card';
import { FaFilter, FaAngleDown } from 'react-icons/fa';
import { useMediaQuery } from "react-responsive";
import { Button } from "react-bootstrap";

const SelfApplied = () => {
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
  }

  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
  }
  return (
    <div>
      <Desktop>
      <Sidebar />
      <main id="main" className={`main `}>
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
            <div className="filter-button ">
              <button className="btn btn-success" style={{ padding: "9px" }}>
                <BsPlus /> Add Maid
              </button>
            </div>
          </div>
        </div><br />
        <div className="row">
          <div className="col-md-4">
            <div className="search-bar" >
              <form className="search-form d-flex align-items-center" method="POST" action="#">
                <input type="text" name="query" placeholder="Search" style={{ width: '100%', height: '100%', padding: '10px' }} title="Enter search keyword" />
                {/* <button type="submit" title="Search">
                                    <BsSearch />
                                </button> */}
              </form>
            </div>
          </div>

          <div className="col-md-4">
            <div className="search-bar" >
              <form className="search-form d-flex align-items-center" method="POST" action="#">
                <input type="text" name="query" placeholder="Search" style={{ width: '100%', height: '100%', padding: '10px', backgroundColor: 'rgba(195, 208, 212, 1)' }} title="Enter search keyword" />
                {/* <button type="submit" title="Search">
                                    <BsSearch  style={{ width: '100%', height: '100%', padding: '10px'}} />
                                </button> */}
              </form>
            </div>
          </div>

          <div className="col-md-4">
            <div className="search-bar" >
              <form className="search-form d-flex align-items-center" method="POST" action="#">
                <input type="text" name="query" placeholder="Search" style={{ width: '100%', height: '100%', padding: '10px', backgroundColor: 'rgba(195, 208, 212, 1)' }} title="Enter search keyword" />
                {/* <button type="submit" title="Search">
                                    <BsSearch />
                                </button> */}
              </form>
            </div>
          </div>
        </div>
        <br />
        <div className='row'><br />
          <div className='col-lg-8 '>

            <h4 className=' '>All Self Applied Maids Requests</h4>
          </div>
          <div className='col-lg-1'>
            <p>1400</p>
          </div>
        </div>
        <Card />
      </main>
      </Desktop>
      <Mobile>
        
      </Mobile>
    </div>
  )
}

export default SelfApplied