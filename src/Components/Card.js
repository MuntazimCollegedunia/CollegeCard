import React from 'react';

const Card = ({data}) => {
        return (
            <div className='card'>
                <div className='head'>
                    <img className='image' src={data.collegeImage} alt='college'/>
                    <div className='layer'></div>
                    <div className='headTextLeft'>
                        <i className="fa-regular fa-image imageicon"></i>
                        <span className='imagecount'>{data.imageCount}</span>
                        <i className="fa-regular fa-circle-play videoplay"></i>
                        <span className='videocount'>{data.videoCount}</span>
                    </div>

                    <div className='headTextRight'>
                        <i className="fa-solid fa-star"></i>
                        <span>COLLEGEDUNIA RATING</span>
                    </div>
                        <span className='rating'>{data.collegeduniaRating}/10</span>
                    <div className='headBottomLeft'>
                        <img className='collegelogo' src={data.collegeLogo} alt='logo'/>
                        <span className='collegeName'>{data.collegeName}</span>
                        <div className='address'>
                            <i className="fa-solid fa-location-dot"></i>
                            <span>{data.collegeAddress}</span>
                            <i className="fa-solid fa-check"></i>
                            <span>AICTE</span>
                        </div>
                    </div>   
                </div>
                <div className='down'>
                    <div className='desc'>
                        <div className='descdiv1'>
                            <div className='fees'>
                            <i className="fa-solid fa-indian-rupee-sign"></i>
                                <span> {data.courseFees}</span>
                            </div>
                            <span className='feesText'>BE/B.Tech first year</span>
                            <div className='feesText'>fees</div>
                        </div>
                        <div className='descdiv2'></div>
                        <div className='descdiv1'>
                            <div className='fees'>
                                <span> {data.UserRating} / 10</span>
                            </div>
                            <span className='feesText'>Based on 415 user</span>
                            <div className='feesText'>reviews</div>
                        </div>
                    </div>
                    <div className='horizontalLine'></div>
                    <div className='desc2'>
                        <span className='nirf'>Ranked 50 out of 300 NIRF</span>
                        <span className='theWeek'>Ranked 26 out of 216 The week</span>
                    </div>
                    <div className='desc3'>
                        <span>admission 2022</span>
                        <span>reviews</span>
                        <span>course & fees</span>
                    </div>
                    <button className='btn1'><i className="fa-sharp fa-solid fa-tablet-screen-button"></i> Apply Now</button>
                    <button className='btn2'><i className="fa-solid fa-download"></i> Brochure</button>
                </div>
            </div>
        );
    }
export default Card;