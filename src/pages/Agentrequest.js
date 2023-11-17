import React from 'react'
import Sidebar from '../component/Sidebar'
import { BsList, BsFilter, BsSearch, BsArrowDown, BsPlus } from 'react-icons/bs';
import { FaAngleDown, FaFilter } from 'react-icons/fa';
import { useMediaQuery } from "react-responsive";
import { Button } from "react-bootstrap";

const Agentrequest = () => {
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
                  <BsPlus /> New Staff Member
                </button>
              </div>
            </div>
          </div><br />
          <div className="row">
            <div className="col-md-12 d-flex w-100">
              <div className="search-bar" >
                <form className="search-form d-flex align-items-center" method="POST" action="#">
                  <input type="text" name="query" placeholder="Search" style={{ width: '100%', height: '100%', padding: '10px' }} title="Enter search keyword" />
                  {/* <button type="submit" title="Search">
                                    <BsSearch />
                                </button> */}
                </form>
              </div>


              <div className="search-bar" >
                <form className="search-form d-flex align-items-center" method="POST" action="#">
                  <input type="text" name="query" placeholder="Search" style={{ width: '100%', height: '100%', padding: '10px', backgroundColor: 'rgba(195, 208, 212, 1)' }} title="Enter search keyword" />
                  {/* <button type="submit" title="Search">
                                    <BsSearch  style={{ width: '100%', height: '100%', padding: '10px'}} />
                                </button> */}
                </form>
              </div>

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
            <div className='col-lg-12 d-flex'>

              <h4 className=' '>All Agents Requests</h4>

              <p className='mx-3 align-items-center'>1600</p>
            </div>

          </div>
          <div class="" style={{ border: "2px solid #fff", width: "100%" }} >
            <form method="post">
              <div className="row">
                <div className="col-md-2">
                  <div className="profile-img h-75">
                    <img src="/girl.png" alt="" />
                  </div>
                  <div className="col-md-5">
                    <div className="profile-work my-2">
                      <button style={{ padding: "4px", width: "100px", background: "transparent", borderRadius: "10px" }}>See Details</button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="profile-head text-center">
                    <h5>Kshiti Ghelani</h5>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-11" style={{
                  marginTop: "-130px",
                  marginLeft: "160px",
                  background: "transparent",
                  display: "flex",
                }}>

                  <table className="table" >
                    <p>Nationality</p>
                    <p>India</p>
                  </table>
                  <table className="table" >
                    <p>Nationality</p>
                    <p>India</p>
                  </table>
                  <table className="table" >
                    <p>Nationality</p>
                    <p>India</p>
                  </table>
                  <table className="table" >
                    <p>Nationality</p>
                    <p>India</p>
                  </table>
                </div>
                <hr style={{ width: "60%", margin: "-60px auto" }} />
                <br />
                <div className="col-md-11" style={{
                  marginTop: "-60px",  // Adjust the margin-top value as needed
                  marginLeft: "160px",
                  background: "transparent",
                  display: "flex"
                }}>

                  <table className="table" >
                    <p>Nationality</p>
                    <p>India</p>
                  </table>
                  <table className="table" >
                    <p>Nationality</p>
                    <p>India</p>
                  </table>
                  <table className="table" >
                    <p>Nationality</p>
                    <p>India</p>
                  </table>
                  <table className="table" >
                    <p>Nationality</p>
                    <p>India</p>
                  </table>
                </div>
              </div>
            </form>

            <div className='row'>
              <div className='col-lg-12'>
                <h2>Write Your Response </h2>

              </div>

              <div class="col-4 col-md-4" style={{ backgroundColor: "rgba(227, 227, 227, 1)", padding: "15px" }}>
                <div>
                  <h4>Admin Remarks</h4>
                  <p>Remark by</p>
                  <p>Zeshan Khan Buniry Saib</p>

                </div>

              </div>
              <div class="col-8 col-md-8" style={{ backgroundColor: "rgba(227, 227, 227, 1)", padding: "15px" }}>
                <h4>She's good in clean, washing, ironing and baby care. She's welling to learning cook. She's good in clean, washing, ironing and baby care. She's welling to learning cook. </h4>
              </div>
            </div>
            <br />
            <div className='row'>
              <div className='col-lg-4'>
                <button className='btn btn-secondary'>Reject Request</button>
              </div>
              <div className='col-lg-4 offset-lg-4 d-flex justify-content-end'>
                <button className='btn btn-light mx-2 ' style={{ border: "2px solid rgba(78, 90, 94, 1)" }}>Accept Request</button>
                <button className='btn btn-success'>Send</button>
              </div>
            </div>
          </div>
          <br />  <br />
          <div class="" style={{ border: "2px solid #fff", width: "100%" }} >
            <form method="post">
              <div className="row">
                <div className="col-md-2">
                  <div className="profile-img h-75">
                    <img src="/girl.png" alt="" />
                  </div>
                  <div className="col-md-5">
                    <div className="profile-work my-2">
                      <button style={{ padding: "4px", width: "100px", background: "transparent", borderRadius: "10px" }}>See Details</button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="profile-head text-center">
                    <h5>Kshiti Ghelani</h5>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12" style={{
                  marginTop: "-130px",
                  marginLeft: "150px",
                  background: "transparent",
                  display: "flex",
                }}>

                  <table className="table" >
                    <p>Nationality</p>
                    <p>India</p>
                  </table>
                  <table className="table" >
                    <p>Nationality</p>
                    <p>India</p>
                  </table>
                  <table className="table" >
                    <p>Nationality</p>
                    <p>India</p>
                  </table>
                  <table className="table" >
                    <p>Nationality</p>
                    <p>India</p>
                  </table>
                </div>
                <hr style={{ width: "60%", margin: "-60px auto" }} />
                <br />
                <div className="col-md-12" style={{
                  marginTop: "-60px",  // Adjust the margin-top value as needed
                  marginLeft: "150px",
                  background: "transparent",
                  display: "flex"
                }}>

                  <table className="table" >
                    <p>Nationality</p>
                    <p>India</p>
                  </table>
                  <table className="table" >
                    <p>Nationality</p>
                    <p>India</p>
                  </table>
                  <table className="table" >
                    <p>Nationality</p>
                    <p>India</p>
                  </table>
                  <table className="table" >
                    <p>Nationality</p>
                    <p>India</p>
                  </table>
                </div>
              </div>
            </form>

            <div className='row'>
              <div className='col-lg-12'>
                <h2>Write Your Response </h2>

              </div>

              <div class="col-12 col-md-12" style={{ backgroundColor: "rgba(227, 227, 227, 1)", padding: "15px" }}>
                Thank You
              </div>
            </div>
            <br />
            <div className='row'>
              <div className='col-lg-4'>
                <button className='btn btn-secondary'>Reject Request</button>
              </div>
              <div className='col-lg-4 offset-lg-4 d-flex justify-content-end'>
                <button className='btn btn-light mx-2 ' style={{ border: "2px solid rgba(78, 90, 94, 1)" }}>Accept Request</button>
                <button className='btn btn-success'>Send</button>
              </div>
            </div>
          </div>
          <br />  <br />
          <div class="" style={{ border: "2px solid #fff", width: "100%" }} >
            <form method="post">
              <div className="row">
                <div className="col-md-2">
                  <div className="profile-img h-75">
                    <img src="/girl.png" alt="" />
                  </div>
                  <div className="col-md-5">
                    <div className="profile-work my-2">
                      <button style={{ padding: "4px", width: "100px", background: "transparent", borderRadius: "10px" }}>See Details</button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="profile-head text-center">
                    <h5>Kshiti Ghelani</h5>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12" style={{
                  marginTop: "-130px",
                  marginLeft: "150px",
                  background: "transparent",
                  display: "flex",
                }}>

                  <table className="table" >
                    <p>Nationality</p>
                    <p>India</p>
                  </table>
                  <table className="table" >
                    <p>Nationality</p>
                    <p>India</p>
                  </table>
                  <table className="table" >
                    <p>Nationality</p>
                    <p>India</p>
                  </table>
                  <table className="table" >
                    <p>Nationality</p>
                    <p>India</p>
                  </table>
                </div>
                <hr style={{ width: "60%", margin: "-60px auto" }} />
                <br />
                <div className="col-md-12" style={{
                  marginTop: "-60px",  // Adjust the margin-top value as needed
                  marginLeft: "150px",
                  background: "transparent",
                  display: "flex"
                }}>

                  <table className="table" >
                    <p>Nationality</p>
                    <p>India</p>
                  </table>
                  <table className="table" >
                    <p>Nationality</p>
                    <p>India</p>
                  </table>
                  <table className="table" >
                    <p>Nationality</p>
                    <p>India</p>
                  </table>
                  <table className="table" >
                    <p>Nationality</p>
                    <p>India</p>
                  </table>
                </div>
              </div>
            </form>

            <div className='row'>
              <div className='col-lg-12'>
                <h2>Write Your Response </h2>

              </div>

              <div class="col-12 col-md-12" style={{ backgroundColor: "rgba(227, 227, 227, 1)", padding: "15px" }}>
                Thank You
              </div>
            </div>
            <br />
            <div className='row'>
              <div className='col-lg-4'>
                <button className='btn btn-secondary'>Reject Request</button>
              </div>
              <div className='col-lg-4 offset-lg-4 d-flex justify-content-end'>
                <button className='btn btn-light mx-2 ' style={{ border: "2px solid rgba(78, 90, 94, 1)" }}>Accept Request</button>
                <button className='btn btn-success'>Send</button>
              </div>
            </div>
          </div>
          {/* </div> */}
          {/* </div> */}
        </main>
      </Desktop>
      <Mobile>
      <main id="main" className={`main `}>
      <div className="relative bg-neutral-200 w-full overflow-hidden flex flex-col items-start justify-start pt-[116px] px-0 pb-14 box-border text-left text-lg text-neutral-800 font-medium">
      <div className="self-stretch flex flex-col items-start justify-start p-4 gap-[16px] z-[0]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-xs text-neutral-600">
          <div className="self-stretch  flex flex-row items-start justify-start gap-[4px]">
            <div className="flex-1 my-4 rounded-corner-radius-8-round bg-neutral-300 flex flex-row items-center justify-start py-4 px-2 gap-[4px] border-[1px] border-solid border-neutral-500">
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src="/icons.svg"
              />
              <div className="flex-1 my-4 gap-[4px]rounded flex flex-row items-center justify-start">
                <div className="flex-1 relative tracking-[0.02em] leading-[136%]">
                  Search
                </div>
              </div>
            </div>
     
            <div className="flex flex-row items-start justify-start gap-[34px] text-center text-neutral-whitepure">
              <div className="rounded-corner-radius-8-round bg-maincolors-algawali-primary-2 overflow-hidden flex flex-col items-center justify-center">
                <div className="self-stretch rounded overflow-hidden flex flex-row items-center justify-center p-3">      
                  <img
                    className="relative w-6 h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/filter.svg"
                  />
                </div>
              </div>
              <div className="hidden flex-row items-start justify-start">
                <div className="self-stretch rounded-corner-radius-8-round bg-maincolors-algawali-secondry-color-dark flex flex-row items-center justify-center p-3 gap-[4px]">
                  <img
                    className="relative w-6 h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/icons1.svg"
                  />
                  <b className="relative tracking-[0.02em] leading-[136%] hidden">
                    Button CTA
                  </b>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch hidden flex-row flex-wrap items-center justify-start gap-[4px] min-w-[256px] text-neutral-700">
            <div className="rounded-corner-radius-8-round bg-neutral-300 overflow-hidden flex flex-row items-center justify-center p-3 gap-[2px] border-[1px] border-solid border-neutral-700">
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src="/frame.svg"
              />
              <div className="relative tracking-[0.02em] leading-[136%] font-medium">
                Reject Request
              </div>
            </div>
            <div className="rounded-corner-radius-8-round bg-neutral-300 overflow-hidden flex flex-row items-center justify-center p-3 gap-[2px] border-[1px] border-solid border-neutral-700">
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src="/frame1.svg"
              />
              <div className="relative tracking-[0.02em] leading-[136%] font-medium">
                Reject Request
              </div>
            </div>
            <div className="rounded-corner-radius-8-round bg-neutral-300 overflow-hidden flex flex-row items-center justify-center p-3 gap-[2px] border-[1px] border-solid border-neutral-700">
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src="/frame2.svg"
              />
              <div className="relative tracking-[0.02em] leading-[136%] font-medium">
                Reject Request
              </div>
            </div>
            <div className="rounded-corner-radius-8-round bg-neutral-300 overflow-hidden hidden flex-row items-center justify-center p-3 gap-[2px] border-[1px] border-solid border-neutral-700">
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src="/frame3.svg"
              />
              <div className="relative tracking-[0.02em] leading-[136%] font-medium">
                Reject Request
              </div>
            </div>
            <div className="flex flex-row items-center justify-start p-3 text-statuscolor-red">
              <div className="relative tracking-[0.02em] leading-[136%] font-medium">
                Clear All Filters
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch rounded-corner-radius-12-round bg-neutral-400 overflow-hidden flex flex-row items-start justify-center p-1 gap-[4px] border-[1px] border-solid border-neutral-500">
            <Button className="flex-1" variant="outline-primary">
              Pending
            </Button>
            <Button className="flex-1" color="primary" variant="contained">
              Accepted
            </Button>
            <Button className="flex-1" color="primary" variant="contained">
              Rejected
            </Button>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-sm">
          <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
            <b className="relative tracking-[0.02em] leading-[140%]">
              All Pending Requests
            </b>
            <div className="flex-1 flex flex-row items-center justify-start text-base text-neutral-700">
              <div className="relative tracking-[0.02em]">12000</div>
            </div>
          </div>
          <div className="rounded-corner-radius-12-round bg-neutral-whitepure shadow-[0px_4px_12px_rgba(3,_12,_50,_0.16)] flex flex-col items-start justify-center p-4 box-border gap-[8px] min-w-[256px] text-center text-lg">
            <div className="overflow-hidden flex flex-col justify-start">
              <div className="flex flex-col items-start justify-center gap-[16px]">
                <div className="self-stretch flex flex-col items-start justify-center gap-[8px]">
                  <div className="flex flex-col items-start justify-center gap-[8px]">
                    <img
                      className="rounded-corner-radius-8-round w-[295px] h-[295px] object-cover"
                      alt=""
                      src="/frame-267@2x.png"
                    />
                    <b className="self-stretch relative tracking-[0.02em] leading-[140%]">
                      Roma Magar
                    </b>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-center gap-[8px] text-left text-xs text-neutral-700">
                    <div className="w-[295px] overflow-x-auto flex flex-col items-start justify-start min-w-[295px]">
                      <div className="w-[847px] flex flex-col items-start justify-start">
                        <div className="self-stretch flex flex-row items-start justify-start py-3 px-0 gap-[24px] border-b-[1px] border-solid border-neutral-500">
                          <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
                            <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                              Nationality
                            </div>
                            <div className="self-stretch relative text-sm tracking-[0.02em] leading-[140%] font-medium">
                              India
                            </div>
                          </div>
                          <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
                            <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                              Religion
                            </div>
                            <div className="self-stretch relative text-sm tracking-[0.02em] leading-[140%] font-medium">
                              Muslim
                            </div>
                          </div>
                          <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
                            <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                              Martial Status
                            </div>
                            <div className="self-stretch relative text-sm tracking-[0.02em] leading-[140%] font-medium">
                              Single
                            </div>
                          </div>
                          <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
                            <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                              Children
                            </div>
                            <div className="self-stretch relative text-sm tracking-[0.02em] leading-[140%] font-medium">
                              4
                            </div>
                          </div>
                          <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
                            <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                              Age
                            </div>
                            <div className="self-stretch relative text-sm tracking-[0.02em] leading-[140%] font-medium">
                              23Years Old
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start py-3 px-0 gap-[24px] border-b-[1px] border-solid border-neutral-500">
                          <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
                            <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                              Languages
                            </div>
                            <div className="self-stretch relative text-sm tracking-[0.02em] leading-[140%] font-medium">
                              Hindi,Urdu,English Saraiki
                            </div>
                          </div>
                          <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
                            <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                              Agent Email
                            </div>
                            <a
                              className="self-stretch relative text-sm tracking-[0.02em] leading-[140%] font-medium text-[inherit] [text-decoration:none]"
                              href="mailto:example@email.com"
                              target="_blank"
                            >
                              example@email.com
                            </a>
                          </div>
                          <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
                            <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                              Agent Phone Number
                            </div>
                            <div className="self-stretch relative text-sm tracking-[0.02em] leading-[140%] font-medium">
                              +9272828282882882
                            </div>
                          </div>
                          <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
                            <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                              Request Submission Date
                            </div>
                            <div className="self-stretch relative text-sm tracking-[0.02em] leading-[140%] font-medium">
                              26-Aug-2023
                            </div>
                          </div>
                          <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
                            <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                              Application Status
                            </div>
                            <div className="self-stretch relative text-sm tracking-[0.02em] leading-[140%] font-medium text-maincolors-algawali-primary">
                              Pending
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch rounded-corner-radius-16-round-2 bg-neutral-300 overflow-hidden flex flex-col items-start justify-start">
                      <div className="relative rounded-corner-radius-16-round-2 bg-neutral-600 w-[55px] h-2 overflow-hidden shrink-0" />
                    </div>
                  </div>
                </div>
                <div className="self-stretch rounded-2xl h-14 flex flex-row items-start justify-start text-sm text-maincolors-algawali-secondry-color-dark">
                  <div className="flex-1 rounded-corner-radius-8-round flex flex-row items-center justify-center p-3 border-[2px] border-solid border-maincolors-algawali-secondry-color-dark">
                    <div className="relative tracking-[0.02em] leading-[140%] font-medium">
                      See Details
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-center text-left text-xs text-neutral-700">
              <div className="self-stretch rounded-corner-radius-8-round bg-neutral-200 flex flex-col items-start justify-start py-4 px-2 gap-[16px]">
                <div className="self-stretch flex flex-col  justify-start gap-[2px]">
                  <div className="self-stretch relative tracking-[0.02em] leading-[136%]">{`Write Your Response `}</div>
                  <div className="self-stretch rounded-corner-radius-8-round bg-neutral-400 [backdrop-filter:blur(80px)] flex flex-row items-center justify-start py-4 px-2 text-neutral-600 border-[1px] border-solid border-neutral-500">
                    <div className="flex-1 rounded flex flex-row items-center justify-start">
                      <div className="self-stretch flex-1 relative tracking-[0.02em] leading-[136%] flex items-center">
                        Thank you for contacting us
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch relative tracking-[0.02em] leading-[136%] text-statuscolor-red hidden">
                    error
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-center gap-[16px]">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                    <div className="flex-1 rounded-corner-radius-4-round box-border h-8 overflow-hidden flex flex-row items-center justify-center py-3 px-2 border-[1px] border-solid border-neutral-700">
                      <div className="flex flex-row items-center justify-center gap-[4px]">
                        <img
                          className="relative w-4 h-4 overflow-hidden shrink-0"
                          alt=""
                          src="/icons-25.svg"
                        />
                        <div className="relative tracking-[0.02em] leading-[136%] font-medium">
                          Reject
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 rounded-corner-radius-4-round bg-forestgreen box-border h-8 overflow-hidden flex flex-row items-center justify-center py-3 px-2 text-statuscolor-green border-[1px] border-solid border-statuscolor-green">
                      <div className="flex flex-row items-center justify-center gap-[4px]">
                        <img
                          className="relative w-4 h-4 overflow-hidden shrink-0"
                          alt=""
                          src="/icons-251.svg"
                        />
                        <div className="relative tracking-[0.02em] leading-[136%] font-medium">
                          Accept
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch rounded-2xl flex flex-row items-start justify-start text-center text-sm text-neutral-600">
                    <div className="flex-1 rounded-corner-radius-8-round bg-neutral-500 flex flex-row items-center justify-center p-3">
                      <div className="relative tracking-[0.02em] leading-[140%] font-medium">
                        Send
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-corner-radius-12-round bg-neutral-whitepure shadow-[0px_4px_12px_rgba(3,_12,_50,_0.16)] flex flex-col items-start justify-center p-4 box-border gap-[8px] min-w-[256px] text-center">
          <div className="overflow-hidden flex flex-col  justify-start">
            <div className="flex flex-col items-start justify-center gap-[16px]">
              <div className="self-stretch flex flex-col items-start justify-center gap-[8px]">
                <div className="flex flex-col items-start justify-center gap-[8px]">
                  <img
                    className="rounded-corner-radius-8-round  h-[295px] object-cover"
                    alt=""
                    src="/frame-2671@2x.png"
                  />
                  <b className="self-stretch relative tracking-[0.02em] leading-[140%]">
                    Roma Magar
                  </b>
                </div>
                <div className="self-stretch flex flex-col items-start justify-center gap-[8px] text-left text-xs text-neutral-700">
                  <div className="w-[295px] overflow-x-auto flex flex-col items-start justify-start min-w-[295px]">
                    <div className="w-[847px] flex flex-col items-start justify-start">
                      <div className="self-stretch flex flex-row items-start justify-start py-3 px-0 gap-[24px] border-b-[1px] border-solid border-neutral-500">
                        <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
                          <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                            Nationality
                          </div>
                          <div className="self-stretch relative text-sm tracking-[0.02em] leading-[140%] font-medium">
                            India
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
                          <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                            Religion
                          </div>
                          <div className="self-stretch relative text-sm tracking-[0.02em] leading-[140%] font-medium">
                            Muslim
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
                          <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                            Martial Status
                          </div>
                          <div className="self-stretch relative text-sm tracking-[0.02em] leading-[140%] font-medium">
                            Single
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
                          <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                            Children
                          </div>
                          <div className="self-stretch relative text-sm tracking-[0.02em] leading-[140%] font-medium">
                            4
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
                          <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                            Age
                          </div>
                          <div className="self-stretch relative text-sm tracking-[0.02em] leading-[140%] font-medium">
                            23Years Old
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start py-3 px-0 gap-[24px] border-b-[1px] border-solid border-neutral-500">
                        <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
                          <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                            Languages
                          </div>
                          <div className="self-stretch relative text-sm tracking-[0.02em] leading-[140%] font-medium">
                            Hindi,Urdu,English Saraiki
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
                          <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                            Agent Email
                          </div>
                          <a
                            className="self-stretch relative text-sm tracking-[0.02em] leading-[140%] font-medium text-[inherit] [text-decoration:none]"
                            href="mailto:example@email.com"
                            target="_blank"
                          >
                            example@email.com
                          </a>
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
                          <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                            Agent Phone Number
                          </div>
                          <div className="self-stretch relative text-sm tracking-[0.02em] leading-[140%] font-medium">
                            +9272828282882882
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
                          <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                            Request Submission Date
                          </div>
                          <div className="self-stretch relative text-sm tracking-[0.02em] leading-[140%] font-medium">
                            26-Aug-2023
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
                          <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                            Application Status
                          </div>
                          <div className="self-stretch relative text-sm tracking-[0.02em] leading-[140%] font-medium text-maincolors-algawali-primary">
                            Pending
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch rounded-corner-radius-16-round-2 bg-neutral-300 overflow-hidden flex flex-col items-start justify-start">
                    <div className="relative rounded-corner-radius-16-round-2 bg-neutral-600 w-[55px] h-2 overflow-hidden shrink-0" />
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-2xl h-14 flex flex-row items-start justify-start text-sm text-maincolors-algawali-secondry-color-dark">
                <div className="flex-1 rounded-corner-radius-8-round flex flex-row items-center justify-center p-3 border-[2px] border-solid border-maincolors-algawali-secondry-color-dark">
                  <div className="relative tracking-[0.02em] leading-[140%] font-medium">
                    See Details
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-center text-left text-xs text-neutral-700">
            <div className="self-stretch rounded-corner-radius-8-round bg-neutral-200 flex flex-col items-start justify-start py-4 px-2 gap-[16px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[2px]">
                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">{`Write Your Response `}</div>
                <div className="self-stretch rounded-corner-radius-8-round bg-neutral-400 [backdrop-filter:blur(80px)] flex flex-row items-center justify-start py-4 px-2 text-neutral-800 border-[1px] border-solid border-neutral-500">
                  <div className="flex-1 rounded flex flex-row items-center justify-start">
                    <div className="self-stretch flex-1 relative tracking-[0.02em] leading-[136%] flex items-center">
                      Thank you for contacting usThank you for contacting
                      usThank you for contacting usThank you for contacting
                      usThank you for contacting us
                    </div>
                  </div>
                </div>
                <div className="self-stretch relative tracking-[0.02em] leading-[136%] text-statuscolor-red hidden">
                  error
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-center gap-[16px] text-statuscolor-red">
                <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                  <div className="flex-1 rounded-corner-radius-4-round bg-firebrick box-border h-8 overflow-hidden flex flex-row items-center justify-center py-3 px-2 border-[1px] border-solid border-statuscolor-red">
                    <div className="flex flex-row items-center justify-center gap-[4px]">
                      <img
                        className="relative w-4 h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/icons-252.svg"
                      />
                      <div className="relative tracking-[0.02em] leading-[136%] font-medium">
                        Reject
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 rounded-corner-radius-4-round box-border h-8 overflow-hidden flex flex-row items-center justify-center py-3 px-2 text-neutral-700 border-[1px] border-solid border-neutral-700">
                    <div className="flex flex-row items-center justify-center gap-[4px]">
                      <img
                        className="relative w-4 h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/icons-253.svg"
                      />
                      <div className="relative tracking-[0.02em] leading-[136%] font-medium">
                        Accept
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch rounded-2xl flex flex-row items-start justify-start text-center text-sm text-neutral-whitepure">
                  <div className="flex-1 rounded-corner-radius-8-round bg-maincolors-algawali-secondry-color-dark shadow-[0px_8px_16px_rgba(1,_71,_38,_0.24)] flex flex-row items-center justify-center p-3">
                    <div className="relative tracking-[0.02em] leading-[140%] font-medium">
                      Send
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-corner-radius-12-round bg-neutral-whitepure shadow-[0px_4px_12px_rgba(3,_12,_50,_0.16)] flex flex-col items-start justify-center p-4 box-border gap-[8px] min-w-[256px] text-center">
          <div className="w-[295px] overflow-hidden flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-col items-start justify-center gap-[16px]">
              <div className="self-stretch flex flex-col items-start justify-center gap-[8px]">
                <div className="flex flex-col items-start justify-center gap-[8px]">
                  <img
                    className="rounded-corner-radius-8-round w-[295px] h-[295px] object-cover"
                    alt=""
                    src="/frame-2672@2x.png"
                  />
                  <b className="self-stretch relative tracking-[0.02em] leading-[140%]">
                    Roma Magar
                  </b>
                </div>
                <div className="self-stretch overflow-x-auto flex flex-col items-start justify-start text-left text-xs text-neutral-700">
                  <div className="w-[847px] flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-row items-start justify-start py-3 px-0 gap-[24px] border-b-[1px] border-solid border-neutral-500">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
                        <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                          Nationality
                        </div>
                        <div className="self-stretch relative text-sm tracking-[0.02em] leading-[140%] font-medium">
                          India
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
                        <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                          Religion
                        </div>
                        <div className="self-stretch relative text-sm tracking-[0.02em] leading-[140%] font-medium">
                          Muslim
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
                        <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                          Martial Status
                        </div>
                        <div className="self-stretch relative text-sm tracking-[0.02em] leading-[140%] font-medium">
                          Single
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
                        <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                          Children
                        </div>
                        <div className="self-stretch relative text-sm tracking-[0.02em] leading-[140%] font-medium">
                          4
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
                        <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                          Age
                        </div>
                        <div className="self-stretch relative text-sm tracking-[0.02em] leading-[140%] font-medium">
                          23Years Old
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start py-3 px-0 gap-[24px] border-b-[1px] border-solid border-neutral-500">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
                        <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                          Languages
                        </div>
                        <div className="self-stretch relative text-sm tracking-[0.02em] leading-[140%] font-medium">
                          Hindi,Urdu,English Saraiki
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
                        <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                          Agent Email
                        </div>
                        <a
                          className="self-stretch relative text-sm tracking-[0.02em] leading-[140%] font-medium text-[inherit] [text-decoration:none]"
                          href="mailto:example@email.com"
                          target="_blank"
                        >
                          example@email.com
                        </a>
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
                        <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                          Agent Phone Number
                        </div>
                        <div className="self-stretch relative text-sm tracking-[0.02em] leading-[140%] font-medium">
                          +9272828282882882
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
                        <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                          Request Submission Date
                        </div>
                        <div className="self-stretch relative text-sm tracking-[0.02em] leading-[140%] font-medium">
                          26-Aug-2023
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
                        <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                          Application Status
                        </div>
                        <div className="self-stretch relative text-sm tracking-[0.02em] leading-[140%] font-medium text-maincolors-algawali-primary">
                          Pending
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch rounded-corner-radius-16-round-2 bg-neutral-300 overflow-hidden flex flex-col items-start justify-start">
                  <div className="relative rounded-corner-radius-16-round-2 bg-neutral-600 w-[55px] h-2 overflow-hidden shrink-0" />
                </div>
              </div>
              <div className="self-stretch rounded-2xl h-14 flex flex-row items-start justify-start text-sm text-maincolors-algawali-secondry-color-dark">
                <div className="flex-1 rounded-corner-radius-8-round flex flex-row items-center justify-center p-3 border-[2px] border-solid border-maincolors-algawali-secondry-color-dark">
                  <div className="relative tracking-[0.02em] leading-[140%] font-medium">
                    See Details
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-center text-left text-sm">
            <div className="self-stretch rounded-corner-radius-8-round bg-neutral-200 flex flex-col items-start justify-start p-2 gap-[8px]">
              <div className="self-stretch rounded-corner-radius-8-round bg-neutral-whitepure flex flex-col items-start justify-start p-2 gap-[2px]">
                <b className="self-stretch relative tracking-[0.02em] leading-[140%]">
                  Admin Remarks
                </b>
                <div className="self-stretch flex flex-col items-start justify-start gap-[2px] text-3xs text-neutral-700">
                  <div className="relative tracking-[0.02em] leading-[140%]">
                    Remarks by
                  </div>
                  <div className="relative tracking-[0.02em] leading-[140%] font-medium">
                    Zeshan Khan Buniry Saib
                  </div>
                </div>
              </div>
              <div className="self-stretch relative text-xs tracking-[0.02em] leading-[136%] text-neutral-700">{`She's good in clean, washing, ironing and baby care. She's welling to learning cook. She's good in clean, washing, ironing and baby care. She's welling to learning cook. `}</div>
            </div>
          </div>
        </div>
      <Sidebar />
      </div>
     </div>
     </main>
      </Mobile>
    </div>
  )
}

export default Agentrequest