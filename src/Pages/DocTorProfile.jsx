import React from 'react';
import { FaStar, FaStarHalf } from 'react-icons/fa';
import Rating from 'react-rating';
import { useLoaderData } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

const DocTorProfile = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div className='bg-gray-200 lg:p-20'>
            <div className='max-w-[75%] mx-auto bg-white p-5 rounded-lg'>
                <div className='flex gap-6 items-center'>
                    <img className='w-[280px] h-[300px] rounded-lg' src={data?.image} alt="" />
                    <div>
                        <div className='space-y-2'>
                            <h3 className='font-bold text-3xl'>{data?.name}</h3>
                            <p className='text-sm text-gray-400'>{data?.designation}</p>
                            <Rating className='text-yellow-400' readonly initialRating={data?.ratings} fullSymbol={<FaStar />} emptySymbol={<FaStarHalf />} />
                            <div className='flex items-center gap-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M15 10.5C15 11.2956 14.6839 12.0587 14.1213 12.6213C13.5587 13.1839 12.7956 13.5 12 13.5C11.2044 13.5 10.4413 13.1839 9.87868 12.6213C9.31607 12.0587 9 11.2956 9 10.5C9 9.70435 9.31607 8.94129 9.87868 8.37868C10.4413 7.81607 11.2044 7.5 12 7.5C12.7956 7.5 13.5587 7.81607 14.1213 8.37868C14.6839 8.94129 15 9.70435 15 10.5V10.5Z" stroke="#6C6B6B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M19.5 10.5C19.5 17.642 12 21.75 12 21.75C12 21.75 4.5 17.642 4.5 10.5C4.5 8.51088 5.29018 6.60322 6.6967 5.1967C8.10322 3.79018 10.0109 3 12 3C13.9891 3 15.8968 3.79018 17.3033 5.1967C18.7098 6.60322 19.5 8.51088 19.5 10.5V10.5Z" stroke="#6C6B6B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p className='text-sm card-text'>Dhanmondi, Dhaka, Bangladesh</p>
                            </div>
                        </div>
                        <div className='flex flex-wrap items-center gap-4 mt-4'>
                            {
                                data?.specializations?.map(d => <div className='btn btn-outline bg-white border-2 border-gray-300' key={d._id}>{d}</div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-10 max-w-[75%] p-5 mx-auto bg-white'>
                <Tabs>
                    <TabList>
                        <Tab>Title 1</Tab>
                        <Tab>Title 2</Tab>
                    </TabList>
                    <TabPanel>
                        <h2>Any content 1</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default DocTorProfile;