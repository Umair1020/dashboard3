import React from 'react';
import StaffCard from '../component/StaffCard'; // Assuming the file path where StaffCard component is saved
import Sidebar from '../component/Sidebar';
import { BsList, BsFilter, BsSearch , BsArrowDown, BsPlus } from 'react-icons/bs';
import { FaAngleDown, FaFilter } from "react-icons/fa"
import { useMediaQuery } from "react-responsive";
import { Button } from "react-bootstrap";

const AccessPage = () => {
    const Desktop = ({ children }) => {
        const isDesktop = useMediaQuery({ minWidth: 992 })
        return isDesktop ? children : null
    }

    const Mobile = ({ children }) => {
        const isMobile = useMediaQuery({ maxWidth: 767 })
        return isMobile ? children : null
    }
    const staffMembers = [
        {
            name: 'John Doe',
            dashboardId: 'JD001',
            email: 'john@example.com',
            imageSrc: '/user.png', // Replace with the actual image path
        },
        {
            name: 'John Doe',
            dashboardId: 'JD001',
            email: 'john@example.com',
            imageSrc: '/user.png', // Replace with the actual image path
        },
        {
            name: 'John Doe',
            dashboardId: 'JD001',
            email: 'john@example.com',
            imageSrc: '/user.png', // Replace with the actual image path
        },
        // Add more staff members in a similar format
    ];

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
                    <div className="staff-cards-container " style={{ background: "rgba(242, 242, 242, 1)" }}>
                        {staffMembers.map((staff, index) => (
                            <>
                                <StaffCard
                                    key={index}

                                    name={staff.name}
                                    dashboardId={staff.dashboardId}
                                    email={staff.email}
                                    imageSrc={staff.imageSrc}
                                />

                            </>
                        ))}
                    </div>
                </main>
            </Desktop>
            <Mobile>
                <div className="relative bg-neutral-200 w-full flex flex-col items-start justify-start pt-[116px] px-0 pb-14 box-border text-left text-lg text-neutral-800 font-phragraph-title3">
                    <div className="self-stretch flex flex-col items-start justify-start pt-4 px-4 pb-2 gap-[16px] z-[0]">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-xs text-neutral-600"> <br /><br />
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
                                         
                                              <BsPlus className="h-75" style={{ height: "30px", width: "30px" }} />
                                            <b className="relative tracking-[0.02em] leading-[136%] hidden">
                                                Button CTA
                                            </b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[4px] min-w-[256px] text-neutral-700">
                                <div className="rounded-corner-radius-8-round bg-neutral-300 overflow-hidden flex flex-row items-center justify-center p-3 gap-[2px] border-[1px] border-solid border-neutral-700">
                                    <img
                                        className="relative w-4 h-4 overflow-hidden shrink-0"
                                        alt=""
                                        src="/frame.svg"
                                    />
                                    <div className="relative tracking-[0.02em] leading-[136%] font-medium">{`Staff Activity `}</div>
                                </div>
                                <div className="rounded-corner-radius-8-round bg-neutral-300 overflow-hidden hidden flex-row items-center justify-center p-3 gap-[2px] border-[1px] border-solid border-neutral-700">
                                    <img
                                        className="relative w-4 h-4 overflow-hidden shrink-0"
                                        alt=""
                                        src="/frame1.svg"
                                    />
                                    <div className="relative tracking-[0.02em] leading-[136%] font-medium">
                                        Cancel
                                    </div>
                                </div>
                                <div className="rounded-corner-radius-8-round bg-neutral-300 overflow-hidden hidden flex-row items-center justify-center p-3 gap-[2px] border-[1px] border-solid border-neutral-700">
                                    <img
                                        className="relative w-4 h-4 overflow-hidden shrink-0"
                                        alt=""
                                        src="/frame2.svg"
                                    />
                                    <div className="relative tracking-[0.02em] leading-[136%] font-medium">
                                        Re-schedule
                                    </div>
                                </div>
                                <div className="rounded-corner-radius-8-round bg-neutral-300 overflow-hidden flex flex-row items-center justify-center p-3 gap-[2px] border-[1px] border-solid border-neutral-700">
                                    <img
                                        className="relative w-4 h-4 overflow-hidden shrink-0"
                                        alt=""
                                        src="/frame3.svg"
                                    />
                                    <div className="relative tracking-[0.02em] leading-[136%] font-medium">
                                        15 - August - 2023
                                    </div>
                                </div>
                                <div className="flex flex-row items-center justify-start p-3 text-statuscolor-red">
                                    <div className="relative tracking-[0.02em] leading-[136%] font-medium">
                                        Clear All Filters
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-base">
                            <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                                <b className="relative tracking-[0.02em]">{`All Staff `}</b>
                                <div className="flex-1 flex flex-row items-center justify-start text-neutral-700">
                                    <div className="relative tracking-[0.02em]">12000</div>
                                </div>
                            </div>
                            <div className="self-stretch rounded-corner-radius-12-round bg-neutral-whitepure shadow-[0px_4px_12px_rgba(3,_12,_50,_0.16)] overflow-hidden flex flex-col items-start justify-center p-4 box-border min-w-[256px] text-center text-lg">
                                <div className="self-stretch flex flex-col items-start justify-start">
                                    <div className="self-stretch flex flex-col items-start justify-center gap-[8px]">
                                        <div className="self-stretch flex flex-col items-start justify-center gap-[8px]">
                                            <img
                                                className="self-stretch rounded-corner-radius-8-round max-w-full overflow-hidden h-[296px] shrink-0 object-cover"
                                                alt=""
                                                src="/user2.png"
                                            />
                                            <b className="self-stretch relative tracking-[0.02em] leading-[140%]">
                                                Roma Magar
                                            </b>
                                        </div>
                                        <div className="self-stretch overflow-hidden flex flex-col items-start justify-start text-left text-xs text-neutral-700">
                                            <div className="self-stretch flex flex-row items-start justify-start py-3 px-0 border-b-[1px] border-solid border-neutral-500">
                                                <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
                                                    <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                        Dashboard Id
                                                    </div>
                                                    <div className="self-stretch relative text-sm tracking-[0.02em] leading-[140%] font-medium text-[inherit]">
                                                        <a
                                                            className="text-[inherit]"
                                                            href="mailto:parker@otopay.com"
                                                            target="_blank"
                                                        >
                                                            p
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="self-stretch flex flex-row items-start justify-start py-3 px-0 border-b-[1px] border-solid border-neutral-500">
                                                <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
                                                    <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                        Dashboard Password
                                                    </div>
                                                    <div className="self-stretch relative text-sm tracking-[0.02em] leading-[140%] font-medium">
                                                        otop@y1234
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="self-stretch flex flex-row items-start justify-center gap-[16px] text-3xs text-neutral-whitepure">
                                            <div className="  rounded-corner-radius-16-round-2 bg-neutral-300 flex flex-row items-start justify-start p-3 relative gap-[10px]">
                                                <img
                                                    className="relative w-10 h-10 overflow-hidden shrink-0 z-[0]"
                                                    alt=""
                                                    src="/edit.png"
                                                />
                                                <div className="my-0 mx-[!important] absolute top-[-1px] right-[-1px] rounded-20xl bg-maincolors-algawali-secondry-color-dark flex flex-row items-center justify-center py-1 px-2 opacity-[0] z-[1] border-[1px] border-solid border-maincolors-algawali-background-color">
                                                    <div className="relative tracking-[0.02em] leading-[140%] font-medium">
                                                        13
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="rounded-corner-radius-16-round-2 bg-neutral-300 flex flex-row items-start justify-start p-3 relative gap-[10px]">
                                                <img
                                                    className="relative w-10 h-10 overflow-hidden shrink-0 z-[0]"
                                                    alt=""
                                                    src="/delete.png"
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
                            </div>
                        </div>
                        <div className="self-stretch rounded-corner-radius-12-round bg-neutral-whitepure shadow-[0px_4px_12px_rgba(3,_12,_50,_0.16)] overflow-hidden flex flex-col items-start justify-center p-4 box-border min-w-[256px] text-center">
                            <div className="flex flex-col items-start justify-start">
                                <div className="self-stretch flex flex-col items-start justify-center gap-[8px]">
                                    <div className="flex flex-col items-start justify-center gap-[8px]">
                                        <img
                                            className="self-stretch rounded-corner-radius-8-round max-w-full overflow-hidden h-[296px] shrink-0 object-cover"
                                            alt=""
                                            src="/user2.png"
                                        />
                                        <b className="self-stretch relative tracking-[0.02em] leading-[140%]">
                                            Roma Magar
                                        </b>
                                    </div>
                                    <div className="self-stretch overflow-hidden flex flex-col items-start justify-start text-left text-xs text-neutral-700">
                                        <div className="self-stretch flex flex-row items-start justify-start py-3 px-0 border-b-[1px] border-solid border-neutral-500">
                                            <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Dashboard Id
                                                </div>
                                                <div className="self-stretch relative text-sm tracking-[0.02em] leading-[140%] font-medium text-[inherit]">
                                                    <a
                                                        className="text-[inherit]"
                                                        href="mailto:parker@otopay.com"
                                                        target="_blank"
                                                    >
                                                        p
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="self-stretch flex flex-row items-start justify-start py-3 px-0 border-b-[1px] border-solid border-neutral-500">
                                            <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Dashboard Password
                                                </div>
                                                <div className="self-stretch relative text-sm tracking-[0.02em] leading-[140%] font-medium">
                                                    otop@y1234
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="self-stretch flex flex-row items-start justify-center gap-[16px] text-3xs text-neutral-whitepure">
                                        <div className="rounded-corner-radius-16-round-2 bg-neutral-300 flex flex-row items-start justify-start p-3 relative gap-[10px]">
                                        <img
                                                    className="relative w-10 h-10 overflow-hidden shrink-0 z-[0]"
                                                    alt=""
                                                    src="/edit.png"
                                                />
                                            <div className="my-0 mx-[!important] absolute top-[-1px] right-[-1px] rounded-20xl bg-maincolors-algawali-secondry-color-dark flex flex-row items-center justify-center py-1 px-2 opacity-[0] z-[1] border-[1px] border-solid border-maincolors-algawali-background-color">
                                                <div className="relative tracking-[0.02em] leading-[140%] font-medium">
                                                    13
                                                </div>
                                            </div>
                                        </div>
                                        <div className="rounded-corner-radius-16-round-2 bg-neutral-300 flex flex-row items-start justify-start p-3 relative gap-[10px]">
                                        <img
                                                    className="relative w-10 h-10 overflow-hidden shrink-0 z-[0]"
                                                    alt=""
                                                    src="/delete.png"
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
                        </div>
                        <div className="rounded-corner-radius-12-round bg-neutral-whitepure shadow-[0px_4px_12px_rgba(3,_12,_50,_0.16)] overflow-hidden flex flex-col items-start justify-center p-4 box-border min-w-[256px] text-center">
                            <div className="flex flex-col items-start justify-start">
                                <div className="self-stretch flex flex-col items-start justify-center gap-[8px]">
                                    <div className="flex flex-col items-start justify-center gap-[8px]">
                                    <img
                                                className="self-stretch rounded-corner-radius-8-round max-w-full overflow-hidden h-[296px] shrink-0 object-cover"
                                                alt=""
                                                src="/user2.png"
                                            />
                                            <b className="self-stretch relative tracking-[0.02em] leading-[140%]">
                                                Roma Magar
                                            </b>
                                    </div>
                                    <div className="self-stretch overflow-hidden flex flex-col items-start justify-start text-left text-xs text-neutral-700">
                                        <div className="self-stretch flex flex-row items-start justify-start py-3 px-0 border-b-[1px] border-solid border-neutral-500">
                                            <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Dashboard Id
                                                </div>
                                                <div className="self-stretch relative text-sm tracking-[0.02em] leading-[140%] font-medium text-[inherit]">
                                                    <a
                                                        className="text-[inherit]"
                                                        href="mailto:parker@otopay.com"
                                                        target="_blank"
                                                    >
                                                        p
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="self-stretch flex flex-row items-start justify-start py-3 px-0 border-b-[1px] border-solid border-neutral-500">
                                            <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
                                                <div className="self-stretch relative tracking-[0.02em] leading-[136%]">
                                                    Dashboard Password
                                                </div>
                                                <div className="self-stretch relative text-sm tracking-[0.02em] leading-[140%] font-medium">
                                                    otop@y1234
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="self-stretch flex flex-row items-start justify-center gap-[16px] text-3xs text-neutral-whitepure">
                                        <div className="rounded-corner-radius-16-round-2 bg-neutral-300 flex flex-row items-start justify-start p-3 relative gap-[10px]">
                                        <img
                                                    className="relative w-10 h-10 overflow-hidden shrink-0 z-[0]"
                                                    alt=""
                                                    src="/edit.png"
                                                />
                                            <div className="my-0 mx-[!important] absolute top-[-1px] right-[-1px] rounded-20xl bg-maincolors-algawali-secondry-color-dark flex flex-row items-center justify-center py-1 px-2 opacity-[0] z-[1] border-[1px] border-solid border-maincolors-algawali-background-color">
                                                <div className="relative tracking-[0.02em] leading-[140%] font-medium">
                                                    13
                                                </div>
                                            </div>
                                        </div>
                                        <div className="rounded-corner-radius-16-round-2 bg-neutral-300 flex flex-row items-start justify-start p-3 relative gap-[10px]">
                                        <img
                                                    className="relative w-10 h-10 overflow-hidden shrink-0 z-[0]"
                                                    alt=""
                                                    src="/delete.png"
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
                        </div>
               <Sidebar />
                    </div>
                </div>
            </Mobile>
        </div>
    );
};

export default AccessPage;
