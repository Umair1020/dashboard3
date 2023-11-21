import React from 'react'
import Sidebar from '../component/Sidebar'
import { BsList, BsFilter, BsSearch, BsPlus } from 'react-icons/bs';
import { FaAngleDown, FaFilter, FaPlus } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import { Button } from "react-bootstrap";


const PlantedInterview = () => {
    const Desktop = ({ children }) => {
        const isDesktop = useMediaQuery({ minWidth: 770 })
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
                                <button className="btn btn-filter" style={{ padding: "10px" }}>
                                    <FaFilter /> Filter Button <FaAngleDown />
                                </button>
                            </div>
                            <div className="filter-button ">
                                <button className="btn btn-success" style={{ padding: "9px" }}>
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
                    <table className='table-users ' style={{ borderCollapse: "collapse" }} cellspacing="0">
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
            </Desktop>
            <Mobile>
                <Sidebar />
                <main id="main" className="main" >
                    <div className="relative bg-neutral-200 w-full flex flex-col items-start justify-start pt-[140px] px-0 pb-14 box-border text-left text-xs text-neutral-600 font-phragraph-title3">
                        <div className="self-stretch flex flex-col items-start justify-start pt-4 px-4 pb-2 gap-[16px] z-[0]">
                            <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                                <div className="self-stretch flex flex-row items-start justify-start gap-[4px]">
                                    <div className="flex-1 rounded-corner-radius-8-round bg-neutral-300 flex flex-row items-center justify-start py-4 px-2 gap-[4px] border-[1px] border-solid border-neutral-500">
                                        <img
                                            className="relative w-4 h-4 overflow-hidden shrink-0"
                                            alt=""
                                            src="/icons.svg"
                                        />
                                        <div className="flex-1 rounded flex flex-row items-center justify-start">
                                            <div className="flex-1 relative tracking-[0.02em] leading-[136%]">
                                                Search
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-start justify-start gap-[4px] text-center text-neutral-whitepure">
                                        <div className="rounded-corner-radius-8-round bg-maincolors-algawali-primary-2 overflow-hidden flex flex-col items-center justify-center">
                                            <div className="self-stretch rounded overflow-hidden flex flex-row items-center justify-center p-3">
                                                <img
                                                    className="relative w-6 h-6 overflow-hidden shrink-0"
                                                    alt=""
                                                    src="/filter.svg"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-start justify-start">
                                            <div className="self-stretch rounded-corner-radius-8-round bg-maincolors-algawali-secondry-color-dark flex flex-row items-center justify-center p-3 gap-[4px]">
                                                <FaPlus />
                                                <b className="relative tracking-[0.02em] leading-[136%] hidden">
                                                    Button CTA
                                                </b>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[4px] min-w-[256px] text-neutral-700">
                                    <div className="rounded-corner-radius-8-round bg-neutral-300 overflow-hidden flex flex-row items-center justify-center  gap-[2px] border-[1px] border-solid border-neutral-700">
                                        <Button className="flex-1" color="primary" variant="contained">
                                            <img
                                                className="relative w-4 h-4 overflow-hidden shrink-0"
                                                alt=""
                                                src="/frame1.png"
                                            />
                                            Done
                                        </Button>
                                    </div>
                                    <div className="rounded-corner-radius-8-round bg-neutral-300 overflow-hidden flex flex-row items-center justify-center  gap-[2px] border-[1px] border-solid border-neutral-700">
                                        <Button className="flex-1" color="primary" variant="contained">
                                            <img
                                                className="relative w-4 h-4 overflow-hidden shrink-0"
                                                alt=""
                                                src="/frame1.png"
                                            />
                                            Cancel
                                        </Button>
                                    </div>
                                    <div className="rounded-corner-radius-8-round bg-neutral-300 overflow-hidden flex flex-row items-center justify-center gap-[2px] border-[1px] border-solid border-neutral-700">
                                        <Button className="flex-1" color="primary" variant="contained">
                                            <img
                                                className="relative w-4 h-4 overflow-hidden shrink-0"
                                                alt=""
                                                src="/frame1.png"
                                            />
                                            Re schedule
                                        </Button>
                                    </div>
                                    <div className="rounded-corner-radius-8-round bg-neutral-300 overflow-hidden flex flex-row items-center justify-center  gap-[2px] border-[1px] border-solid border-neutral-700">
                                        <Button className="flex-1" color="primary" variant="contained">
                                            <img
                                                className="relative w-4 h-4 overflow-hidden shrink-0"
                                                alt=""
                                                src="/frame1.png"
                                            />
                                            15 -Aug - 2023
                                        </Button>
                                    </div>
                                    <div className="flex flex-row items-center justify-start  text-statuscolor-red">
                                        <div className="relative tracking-[0.02em] leading-[136%] font-medium">
                                            <Button className="flex-1" color="primary" variant="contained">
                                                
                                                Clear ALL fILTER
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch flex flex-row items-center justify-start gap-[8px] text-base text-neutral-800">
                                <b className="relative tracking-[0.02em]">All Planed Interviews</b>
                                <div className="flex-1 flex flex-row items-center justify-start text-neutral-700">
                                    <div className="relative tracking-[0.02em]">12000</div>
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch overflow-x-auto flex flex-col items-start justify-start min-w-[256px] z-[1] text-neutral-700">
                            <div className="bg-neutral-whitepure shadow-[0px_4px_12px_rgba(3,_12,_50,_0.16)] w-[1024px] flex flex-col items-start justify-start p-2 box-border gap-[16px]">
                                <div className="self-stretch flex flex-col items-start justify-start">
                                    <div className="self-stretch rounded flex flex-row items-end justify-center">
                                        <div className="flex-1 flex flex-row items-start justify-start">
                                            <div className="self-stretch flex flex-row items-start justify-center p-2 border-[1px] border-solid border-neutral-500">
                                                <div className="flex flex-col items-start justify-center">
                                                    <img
                                                        className="rounded-corner-radius-2-round w-12 h-12 object-cover"
                                                        alt=""
                                                        src="/frame-267@2x.png"
                                                    />
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-1 flex flex-col items-center justify-start p-2 gap-[2px] border-t-[1px] border-solid border-neutral-500 border-r-[1px] border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Maid Name
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium">
                                                    Saleena Gomezz
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-1 flex flex-col items-center justify-start p-2 gap-[2px] border-t-[1px] border-solid border-neutral-500 border-r-[1px] border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Maid Tracking Code
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium">
                                                    INGSKUJTVR
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-1 flex flex-col items-center justify-start p-2 gap-[2px] border-t-[1px] border-solid border-neutral-500 border-r-[1px] border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Client Ph#
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium">
                                                    +9272828282882882
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-1 flex flex-col items-center justify-start p-2 gap-[2px] border-t-[1px] border-solid border-neutral-500 border-r-[1px] border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Client Email
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium">{`example@email.com `}</div>
                                            </div>
                                            <div className="self-stretch flex-1 flex flex-col items-center justify-start p-2 gap-[2px] border-t-[1px] border-solid border-neutral-500 border-r-[1px] border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Interview Date
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium">
                                                    26-Aug-2023
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-1 flex flex-col items-center justify-start p-2 gap-[2px] border-t-[1px] border-solid border-neutral-500 border-r-[1px] border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Interview Time
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium">
                                                    05:23 AM
                                                </div>
                                            </div>
                                            <div className="self-stretch flex flex-col items-center justify-start p-2 gap-[2px] border-t-[1px] border-solid border-neutral-500 border-r-[1px] border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Days Left
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium text-center">
                                                    5
                                                </div>
                                            </div>
                                            <div className="self-stretch flex flex-col items-center justify-start p-2 gap-[2px] text-center border-t-[1px] border-solid border-neutral-500 border-r-[1px] border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Status
                                                </div>
                                                <div className="relative tracking-[0.02em] leading-[136%] font-medium text-statuscolor-red inline-block w-[59px]">
                                                    Cancel
                                                </div>
                                            </div>
                                        </div>
                                        <div className="self-stretch flex flex-col items-center justify-start p-2 text-center text-3xs text-neutral-whitepure border-t-[1px] border-solid border-neutral-500 border-r-[1px] border-b-[1px]">
                                            <div className="rounded-corner-radius-16-round-2 bg-neutral-300 flex flex-row items-start justify-start p-3 relative gap-[10px]">
                                                <img
                                                    className="relative w-6 h-6 overflow-hidden shrink-0 z-[0]"
                                                    alt=""
                                                    src="/edit.png"
                                                />
                                                <div className="my-0 mx-[!important] absolute top-[-1px] right-[-1px] rounded-20xl bg-maincolors-algawali-secondry-color-dark flex flex-row items-center justify-center py-1 px-2 opacity-[0] z-[1] border-[1px] border-solid border-maincolors-algawali-background-color">
                                                    <div className="relative tracking-[0.02em] leading-[140%] font-medium">
                                                        13
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="self-stretch rounded bg-neutral-200 flex flex-row items-end justify-center">
                                        <div className="flex-1 flex flex-row items-start justify-start">
                                            <div className="self-stretch flex flex-row items-start justify-center p-2 border-r-[1px] border-solid border-neutral-500 border-b-[1px] border-l-[1px]">
                                                <div className="flex flex-col items-start justify-center">
                                                    <img
                                                        className="rounded-corner-radius-2-round w-12 h-12 object-cover"
                                                        alt=""
                                                        src="/frame-2671@2x.png"
                                                    />
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-1 flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Maid Name
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium">
                                                    Saleena Gomezz
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-1 flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Maid Tracking Code
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium">
                                                    INGSKUJTVR
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-1 flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Client Ph#
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium">
                                                    +9272828282882882
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-1 flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Client Email
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium">{`example@email.com `}</div>
                                            </div>
                                            <div className="self-stretch flex-1 flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Interview Date
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium">
                                                    26-Aug-2023
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-1 flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Interview Time
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium">
                                                    05:23 AM
                                                </div>
                                            </div>
                                            <div className="self-stretch flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Days Left
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium text-center">
                                                    25
                                                </div>
                                            </div>
                                            <div className="self-stretch flex flex-col items-center justify-start p-2 gap-[2px] text-center border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Status
                                                </div>
                                                <div className="relative tracking-[0.02em] leading-[136%] font-medium text-statuscolor-green inline-block w-[59px]">
                                                    Done
                                                </div>
                                            </div>
                                        </div>
                                        <div className="self-stretch flex flex-col items-center justify-start p-2 text-center text-3xs text-neutral-whitepure border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                            <div className="rounded-corner-radius-16-round-2 bg-neutral-300 flex flex-row items-start justify-start p-3 relative gap-[10px]">
                                                <img
                                                    className="relative w-6 h-6 overflow-hidden shrink-0 z-[0]"
                                                    alt=""
                                                    src="/edit.png"
                                                />
                                                <div className="my-0 mx-[!important] absolute top-[-1px] right-[-1px] rounded-20xl bg-maincolors-algawali-secondry-color-dark flex flex-row items-center justify-center py-1 px-2 opacity-[0] z-[1] border-[1px] border-solid border-maincolors-algawali-background-color">
                                                    <div className="relative tracking-[0.02em] leading-[140%] font-medium">
                                                        13
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="self-stretch rounded flex flex-row items-end justify-center">
                                        <div className="flex-1 flex flex-row items-start justify-start">
                                            <div className="self-stretch flex flex-row items-start justify-center p-2 border-r-[1px] border-solid border-neutral-500 border-b-[1px] border-l-[1px]">
                                                <div className="flex flex-col items-start justify-center">
                                                    <img
                                                        className="rounded-corner-radius-2-round w-12 h-12 object-cover"
                                                        alt=""
                                                        src="/frame-2672@2x.png"
                                                    />
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-1 flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Maid Name
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium">
                                                    Saleena Gomezz
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-1 flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Maid Tracking Code
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium">
                                                    INGSKUJTVR
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-1 flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Client Ph#
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium">
                                                    +9272828282882882
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-1 flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Client Email
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium">{`example@email.com `}</div>
                                            </div>
                                            <div className="self-stretch flex-1 flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Interview Date
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium">
                                                    26-Aug-2023
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-1 flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Interview Time
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium">
                                                    05:23 AM
                                                </div>
                                            </div>
                                            <div className="self-stretch flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Days Left
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium text-center">
                                                    5
                                                </div>
                                            </div>
                                            <div className="self-stretch flex flex-col items-center justify-start p-2 gap-[2px] text-center border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Status
                                                </div>
                                                <div className="relative tracking-[0.02em] leading-[136%] font-medium text-maincolors-algawali-primary inline-block w-[59px]">
                                                    Re-schedule
                                                </div>
                                            </div>
                                        </div>
                                        <div className="self-stretch flex flex-col items-center justify-start p-2 text-center text-3xs text-neutral-whitepure border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                            <div className="rounded-corner-radius-16-round-2 bg-neutral-300 flex flex-row items-start justify-start p-3 relative gap-[10px]">
                                                <img
                                                    className="relative w-6 h-6 overflow-hidden shrink-0 z-[0]"
                                                    alt=""
                                                    src="/edit.png"
                                                />
                                                <div className="my-0 mx-[!important] absolute top-[-1px] right-[-1px] rounded-20xl bg-maincolors-algawali-secondry-color-dark flex flex-row items-center justify-center py-1 px-2 opacity-[0] z-[1] border-[1px] border-solid border-maincolors-algawali-background-color">
                                                    <div className="relative tracking-[0.02em] leading-[140%] font-medium">
                                                        13
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="self-stretch rounded flex flex-row items-end justify-center">
                                        <div className="flex-1 flex flex-row items-start justify-start">
                                            <div className="self-stretch flex flex-row items-start justify-center p-2 border-r-[1px] border-solid border-neutral-500 border-b-[1px] border-l-[1px]">
                                                <div className="flex flex-col items-start justify-center">
                                                    <img
                                                        className="rounded-corner-radius-2-round w-12 h-12 object-cover"
                                                        alt=""
                                                        src="/frame-267@2x.png"
                                                    />
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-1 flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Maid Name
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium">
                                                    Saleena Gomezz
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-1 flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Maid Tracking Code
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium">
                                                    INGSKUJTVR
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-1 flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Client Ph#
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium">
                                                    +9272828282882882
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-1 flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Client Email
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium">{`example@email.com `}</div>
                                            </div>
                                            <div className="self-stretch flex-1 flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Interview Date
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium">
                                                    26-Aug-2023
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-1 flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Interview Time
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium">
                                                    05:23 AM
                                                </div>
                                            </div>
                                            <div className="self-stretch flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Days Left
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium text-center">
                                                    5
                                                </div>
                                            </div>
                                            <div className="self-stretch flex flex-col items-center justify-start p-2 gap-[2px] text-center border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Status
                                                </div>
                                                <div className="relative tracking-[0.02em] leading-[136%] font-medium text-statuscolor-yellow inline-block w-[59px]">
                                                    Late
                                                </div>
                                            </div>
                                        </div>
                                        <div className="self-stretch flex flex-col items-center justify-start p-2 text-center text-3xs text-neutral-whitepure border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                            <div className="rounded-corner-radius-16-round-2 bg-neutral-300 flex flex-row items-start justify-start p-3 relative gap-[10px]">
                                                <img
                                                    className="relative w-6 h-6 overflow-hidden shrink-0 z-[0]"
                                                    alt=""
                                                    src="/edit.png"
                                                />
                                                <div className="my-0 mx-[!important] absolute top-[-1px] right-[-1px] rounded-20xl bg-maincolors-algawali-secondry-color-dark flex flex-row items-center justify-center py-1 px-2 opacity-[0] z-[1] border-[1px] border-solid border-maincolors-algawali-background-color">
                                                    <div className="relative tracking-[0.02em] leading-[140%] font-medium">
                                                        13
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="self-stretch rounded flex flex-row items-end justify-center">
                                        <div className="flex-1 flex flex-row items-start justify-start">
                                            <div className="self-stretch flex flex-row items-start justify-center p-2 border-r-[1px] border-solid border-neutral-500 border-b-[1px] border-l-[1px]">
                                                <div className="flex flex-col items-start justify-center">
                                                    <img
                                                        className="rounded-corner-radius-2-round w-12 h-12 object-cover"
                                                        alt=""
                                                        src="/frame-267@2x.png"
                                                    />
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-1 flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Maid Name
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium">
                                                    Saleena Gomezz
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-1 flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Maid Tracking Code
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium">
                                                    INGSKUJTVR
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-1 flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Client Ph#
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium">
                                                    +9272828282882882
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-1 flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Client Email
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium">{`example@email.com `}</div>
                                            </div>
                                            <div className="self-stretch flex-1 flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Interview Date
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium">
                                                    26-Aug-2023
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-1 flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Interview Time
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium">
                                                    05:23 AM
                                                </div>
                                            </div>
                                            <div className="self-stretch flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Days Left
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium text-center">
                                                    5
                                                </div>
                                            </div>
                                            <div className="self-stretch flex flex-col items-center justify-start p-2 gap-[2px] text-center border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Status
                                                </div>
                                                <div className="relative tracking-[0.02em] leading-[136%] font-medium text-statuscolor-red inline-block w-[59px]">
                                                    Cancel
                                                </div>
                                            </div>
                                        </div>
                                        <div className="self-stretch flex flex-col items-center justify-start p-2 text-center text-3xs text-neutral-whitepure border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                            <div className="rounded-corner-radius-16-round-2 bg-neutral-300 flex flex-row items-start justify-start p-3 relative gap-[10px]">
                                                <img
                                                    className="relative w-6 h-6 overflow-hidden shrink-0 z-[0]"
                                                    alt=""
                                                    src="/edit.png"
                                                />
                                                <div className="my-0 mx-[!important] absolute top-[-1px] right-[-1px] rounded-20xl bg-maincolors-algawali-secondry-color-dark flex flex-row items-center justify-center py-1 px-2 opacity-[0] z-[1] border-[1px] border-solid border-maincolors-algawali-background-color">
                                                    <div className="relative tracking-[0.02em] leading-[140%] font-medium">
                                                        13
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="self-stretch rounded flex flex-row items-end justify-center">
                                        <div className="flex-1 flex flex-row items-start justify-start">
                                            <div className="self-stretch flex flex-row items-start justify-center p-2 border-r-[1px] border-solid border-neutral-500 border-b-[1px] border-l-[1px]">
                                                <div className="flex flex-col items-start justify-center">
                                                    <img
                                                        className="rounded-corner-radius-2-round w-12 h-12 object-cover"
                                                        alt=""
                                                        src="/frame-267@2x.png"
                                                    />
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-1 flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Maid Name
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium">
                                                    Saleena Gomezz
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-1 flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Maid Tracking Code
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium">
                                                    INGSKUJTVR
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-1 flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Client Ph#
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium">
                                                    +9272828282882882
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-1 flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Client Email
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium">{`example@email.com `}</div>
                                            </div>
                                            <div className="self-stretch flex-1 flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Interview Date
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium">
                                                    26-Aug-2023
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-1 flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Interview Time
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium">
                                                    05:23 AM
                                                </div>
                                            </div>
                                            <div className="self-stretch flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Days Left
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium text-center">
                                                    5
                                                </div>
                                            </div>
                                            <div className="self-stretch flex flex-col items-center justify-start p-2 gap-[2px] text-center border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Status
                                                </div>
                                                <div className="relative tracking-[0.02em] leading-[136%] font-medium text-statuscolor-red inline-block w-[59px]">
                                                    Cancel
                                                </div>
                                            </div>
                                        </div>
                                        <div className="self-stretch flex flex-col items-center justify-start p-2 text-center text-3xs text-neutral-whitepure border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                            <div className="rounded-corner-radius-16-round-2 bg-neutral-300 flex flex-row items-start justify-start p-3 relative gap-[10px]">
                                                <img
                                                    className="relative w-6 h-6 overflow-hidden shrink-0 z-[0]"
                                                    alt=""
                                                    src="/edit.png"
                                                />
                                                <div className="my-0 mx-[!important] absolute top-[-1px] right-[-1px] rounded-20xl bg-maincolors-algawali-secondry-color-dark flex flex-row items-center justify-center py-1 px-2 opacity-[0] z-[1] border-[1px] border-solid border-maincolors-algawali-background-color">
                                                    <div className="relative tracking-[0.02em] leading-[140%] font-medium">
                                                        13
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="self-stretch rounded flex flex-row items-end justify-center">
                                        <div className="flex-1 flex flex-row items-start justify-start">
                                            <div className="self-stretch flex flex-row items-start justify-center p-2 border-r-[1px] border-solid border-neutral-500 border-b-[1px] border-l-[1px]">
                                                <div className="flex flex-col items-start justify-center">
                                                    <img
                                                        className="rounded-corner-radius-2-round w-12 h-12 object-cover"
                                                        alt=""
                                                        src="/frame-267@2x.png"
                                                    />
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-1 flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Maid Name
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium">
                                                    Saleena Gomezz
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-1 flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Maid Tracking Code
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium">
                                                    INGSKUJTVR
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-1 flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Client Ph#
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium">
                                                    +9272828282882882
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-1 flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Client Email
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium">{`example@email.com `}</div>
                                            </div>
                                            <div className="self-stretch flex-1 flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Interview Date
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium">
                                                    26-Aug-2023
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-1 flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Interview Time
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium">
                                                    05:23 AM
                                                </div>
                                            </div>
                                            <div className="self-stretch flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Days Left
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium text-center">
                                                    5
                                                </div>
                                            </div>
                                            <div className="self-stretch flex flex-col items-center justify-start p-2 gap-[2px] text-center border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Status
                                                </div>
                                                <div className="relative tracking-[0.02em] leading-[136%] font-medium text-statuscolor-red inline-block w-[59px]">
                                                    Cancel
                                                </div>
                                            </div>
                                        </div>
                                        <div className="self-stretch flex flex-col items-center justify-start p-2 text-center text-3xs text-neutral-whitepure border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                            <div className="rounded-corner-radius-16-round-2 bg-neutral-300 flex flex-row items-start justify-start p-3 relative gap-[10px]">
                                                <img
                                                    className="relative w-6 h-6 overflow-hidden shrink-0 z-[0]"
                                                    alt=""
                                                    src="/edit.png"
                                                />
                                                <div className="my-0 mx-[!important] absolute top-[-1px] right-[-1px] rounded-20xl bg-maincolors-algawali-secondry-color-dark flex flex-row items-center justify-center py-1 px-2 opacity-[0] z-[1] border-[1px] border-solid border-maincolors-algawali-background-color">
                                                    <div className="relative tracking-[0.02em] leading-[140%] font-medium">
                                                        13
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="self-stretch rounded flex flex-row items-end justify-center">
                                        <div className="flex-1 flex flex-row items-start justify-start">
                                            <div className="self-stretch flex flex-row items-start justify-center p-2 border-r-[1px] border-solid border-neutral-500 border-b-[1px] border-l-[1px]">
                                                <div className="flex flex-col items-start justify-center">
                                                    <img
                                                        className="rounded-corner-radius-2-round w-12 h-12 object-cover"
                                                        alt=""
                                                        src="/frame-267@2x.png"
                                                    />
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-1 flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Maid Name
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium">
                                                    Saleena Gomezz
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-1 flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Maid Tracking Code
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium">
                                                    INGSKUJTVR
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-1 flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Client Ph#
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium">
                                                    +9272828282882882
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-1 flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Client Email
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium">{`example@email.com `}</div>
                                            </div>
                                            <div className="self-stretch flex-1 flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Interview Date
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium">
                                                    26-Aug-2023
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-1 flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Interview Time
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium">
                                                    05:23 AM
                                                </div>
                                            </div>
                                            <div className="self-stretch flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Days Left
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium text-center">
                                                    5
                                                </div>
                                            </div>
                                            <div className="self-stretch flex flex-col items-center justify-start p-2 gap-[2px] text-center border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Status
                                                </div>
                                                <div className="relative tracking-[0.02em] leading-[136%] font-medium text-statuscolor-red inline-block w-[59px]">
                                                    Cancel
                                                </div>
                                            </div>
                                        </div>
                                        <div className="self-stretch flex flex-col items-center justify-start p-2 text-center text-3xs text-neutral-whitepure border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                            <div className="rounded-corner-radius-16-round-2 bg-neutral-300 flex flex-row items-start justify-start p-3 relative gap-[10px]">
                                                <img
                                                    className="relative w-6 h-6 overflow-hidden shrink-0 z-[0]"
                                                    alt=""
                                                    src="/edit.png"
                                                />
                                                <div className="my-0 mx-[!important] absolute top-[-1px] right-[-1px] rounded-20xl bg-maincolors-algawali-secondry-color-dark flex flex-row items-center justify-center py-1 px-2 opacity-[0] z-[1] border-[1px] border-solid border-maincolors-algawali-background-color">
                                                    <div className="relative tracking-[0.02em] leading-[140%] font-medium">
                                                        13
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="self-stretch rounded flex flex-row items-end justify-center">
                                        <div className="flex-1 flex flex-row items-start justify-start">
                                            <div className="self-stretch flex flex-row items-start justify-center p-2 border-r-[1px] border-solid border-neutral-500 border-b-[1px] border-l-[1px]">
                                                <div className="flex flex-col items-start justify-center">
                                                    <img
                                                        className="rounded-corner-radius-2-round w-12 h-12 object-cover"
                                                        alt=""
                                                        src="/frame-267@2x.png"
                                                    />
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-1 flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Maid Name
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium">
                                                    Saleena Gomezz
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-1 flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Maid Tracking Code
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium">
                                                    INGSKUJTVR
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-1 flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Client Ph#
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium">
                                                    +9272828282882882
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-1 flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Client Email
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium">{`example@email.com `}</div>
                                            </div>
                                            <div className="self-stretch flex-1 flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Interview Date
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium">
                                                    26-Aug-2023
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-1 flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Interview Time
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium">
                                                    05:23 AM
                                                </div>
                                            </div>
                                            <div className="self-stretch flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Days Left
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium text-center">
                                                    5
                                                </div>
                                            </div>
                                            <div className="self-stretch flex flex-col items-center justify-start p-2 gap-[2px] text-center border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Status
                                                </div>
                                                <div className="relative tracking-[0.02em] leading-[136%] font-medium text-statuscolor-red inline-block w-[59px]">
                                                    Cancel
                                                </div>
                                            </div>
                                        </div>
                                        <div className="self-stretch flex flex-col items-center justify-start p-2 text-center text-3xs text-neutral-whitepure border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                            <div className="rounded-corner-radius-16-round-2 bg-neutral-300 flex flex-row items-start justify-start p-3 relative gap-[10px]">
                                                <img
                                                    className="relative w-6 h-6 overflow-hidden shrink-0 z-[0]"
                                                    alt=""
                                                    src="/edit.png"
                                                />
                                                <div className="my-0 mx-[!important] absolute top-[-1px] right-[-1px] rounded-20xl bg-maincolors-algawali-secondry-color-dark flex flex-row items-center justify-center py-1 px-2 opacity-[0] z-[1] border-[1px] border-solid border-maincolors-algawali-background-color">
                                                    <div className="relative tracking-[0.02em] leading-[140%] font-medium">
                                                        13
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="self-stretch rounded flex flex-row items-end justify-center">
                                        <div className="flex-1 flex flex-row items-start justify-start">
                                            <div className="self-stretch flex flex-row items-start justify-center p-2 border-r-[1px] border-solid border-neutral-500 border-b-[1px] border-l-[1px]">
                                                <div className="flex flex-col items-start justify-center">
                                                    <img
                                                        className="rounded-corner-radius-2-round w-12 h-12 object-cover"
                                                        alt=""
                                                        src="/frame-267@2x.png"
                                                    />
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-1 flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Maid Name
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium">
                                                    Saleena Gomezz
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-1 flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Maid Tracking Code
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium">
                                                    INGSKUJTVR
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-1 flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Client Ph#
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium">
                                                    +9272828282882882
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-1 flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Client Email
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium">{`example@email.com `}</div>
                                            </div>
                                            <div className="self-stretch flex-1 flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Interview Date
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium">
                                                    26-Aug-2023
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-1 flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Interview Time
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium">
                                                    05:23 AM
                                                </div>
                                            </div>
                                            <div className="self-stretch flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Days Left
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium text-center">
                                                    5
                                                </div>
                                            </div>
                                            <div className="self-stretch flex flex-col items-center justify-start p-2 gap-[2px] text-center border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Status
                                                </div>
                                                <div className="relative tracking-[0.02em] leading-[136%] font-medium text-statuscolor-red inline-block w-[59px]">
                                                    Cancel
                                                </div>
                                            </div>
                                        </div>
                                        <div className="self-stretch flex flex-col items-center justify-start p-2 text-center text-3xs text-neutral-whitepure border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                            <div className="rounded-corner-radius-16-round-2 bg-neutral-300 flex flex-row items-start justify-start p-3 relative gap-[10px]">
                                                <img
                                                    className="relative w-6 h-6 overflow-hidden shrink-0 z-[0]"
                                                    alt=""
                                                    src="/edit.png"
                                                />
                                                <div className="my-0 mx-[!important] absolute top-[-1px] right-[-1px] rounded-20xl bg-maincolors-algawali-secondry-color-dark flex flex-row items-center justify-center py-1 px-2 opacity-[0] z-[1] border-[1px] border-solid border-maincolors-algawali-background-color">
                                                    <div className="relative tracking-[0.02em] leading-[140%] font-medium">
                                                        13
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="self-stretch rounded flex flex-row items-end justify-center">
                                        <div className="flex-1 flex flex-row items-start justify-start">
                                            <div className="self-stretch flex flex-row items-start justify-center p-2 border-r-[1px] border-solid border-neutral-500 border-b-[1px] border-l-[1px]">
                                                <div className="flex flex-col items-start justify-center">
                                                    <img
                                                        className="rounded-corner-radius-2-round w-12 h-12 object-cover"
                                                        alt=""
                                                        src="/frame-267@2x.png"
                                                    />
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-1 flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Maid Name
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium">
                                                    Saleena Gomezz
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-1 flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Maid Tracking Code
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium">
                                                    INGSKUJTVR
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-1 flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Client Ph#
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium">
                                                    +9272828282882882
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-1 flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Client Email
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium">{`example@email.com `}</div>
                                            </div>
                                            <div className="self-stretch flex-1 flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Interview Date
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium">
                                                    26-Aug-2023
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-1 flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Interview Time
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium">
                                                    05:23 AM
                                                </div>
                                            </div>
                                            <div className="self-stretch flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Days Left
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium text-center">
                                                    5
                                                </div>
                                            </div>
                                            <div className="self-stretch flex flex-col items-center justify-start p-2 gap-[2px] text-center border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Status
                                                </div>
                                                <div className="relative tracking-[0.02em] leading-[136%] font-medium text-statuscolor-red inline-block w-[59px]">
                                                    Cancel
                                                </div>
                                            </div>
                                        </div>
                                        <div className="self-stretch flex flex-col items-center justify-start p-2 text-center text-3xs text-neutral-whitepure border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                            <div className="rounded-corner-radius-16-round-2 bg-neutral-300 flex flex-row items-start justify-start p-3 relative gap-[10px]">
                                                <img
                                                    className="relative w-6 h-6 overflow-hidden shrink-0 z-[0]"
                                                    alt=""
                                                    src="/edit.png"
                                                />
                                                <div className="my-0 mx-[!important] absolute top-[-1px] right-[-1px] rounded-20xl bg-maincolors-algawali-secondry-color-dark flex flex-row items-center justify-center py-1 px-2 opacity-[0] z-[1] border-[1px] border-solid border-maincolors-algawali-background-color">
                                                    <div className="relative tracking-[0.02em] leading-[140%] font-medium">
                                                        13
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="self-stretch rounded flex flex-row items-end justify-center">
                                        <div className="flex-1 flex flex-row items-start justify-start">
                                            <div className="self-stretch flex flex-row items-start justify-center p-2 border-r-[1px] border-solid border-neutral-500 border-b-[1px] border-l-[1px]">
                                                <div className="flex flex-col items-start justify-center">
                                                    <img
                                                        className="rounded-corner-radius-2-round w-12 h-12 object-cover"
                                                        alt=""
                                                        src="/frame-267@2x.png"
                                                    />
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-1 flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Maid Name
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium">
                                                    Saleena Gomezz
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-1 flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Maid Tracking Code
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium">
                                                    INGSKUJTVR
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-1 flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Client Ph#
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium">
                                                    +9272828282882882
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-1 flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Client Email
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium">{`example@email.com `}</div>
                                            </div>
                                            <div className="self-stretch flex-1 flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Interview Date
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium">
                                                    26-Aug-2023
                                                </div>
                                            </div>
                                            <div className="self-stretch flex-1 flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Interview Time
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium">
                                                    05:23 AM
                                                </div>
                                            </div>
                                            <div className="self-stretch flex flex-col items-center justify-start p-2 gap-[2px] border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Days Left
                                                </div>
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%] font-medium text-center">
                                                    5
                                                </div>
                                            </div>
                                            <div className="self-stretch flex flex-col items-center justify-start p-2 gap-[2px] text-center border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Status
                                                </div>
                                                <div className="relative tracking-[0.02em] leading-[136%] font-medium text-statuscolor-red inline-block w-[59px]">
                                                    Cancel
                                                </div>
                                            </div>
                                        </div>
                                        <div className="self-stretch flex flex-col items-center justify-start p-2 text-center text-3xs text-neutral-whitepure border-r-[1px] border-solid border-neutral-500 border-b-[1px]">
                                            <div className="rounded-corner-radius-16-round-2 bg-neutral-300 flex flex-row items-start justify-start p-3 relative gap-[10px]">
                                                <img
                                                    className="relative w-6 h-6 overflow-hidden shrink-0 z-[0]"
                                                    alt=""
                                                    src="/edit.png"
                                                />
                                                <div className="my-0 mx-[!important] absolute top-[-1px] right-[-1px] rounded-20xl bg-maincolors-algawali-secondry-color-dark flex flex-row items-center justify-center py-1 px-2 opacity-[0] z-[1] border-[1px] border-solid border-maincolors-algawali-background-color">
                                                    <div className="relative tracking-[0.02em] leading-[140%] font-medium">
                                                        13
                                                    </div>
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

                    </div>
                </main>
            </Mobile>
        </div>
    )
}

export default PlantedInterview