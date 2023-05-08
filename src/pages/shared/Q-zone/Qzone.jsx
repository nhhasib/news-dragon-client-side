import React from 'react';
import img1 from '../../../assets/image/qZone1.png';
import img2 from "../../../assets/image/qZone2.png";
import img3 from "../../../assets/image/qZone3.png"

const Qzone = () => {
    return (
        <div className='bg-light text-center rounded'>
                <h4>Q-Zone</h4>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
        </div>
    );
};

export default Qzone;