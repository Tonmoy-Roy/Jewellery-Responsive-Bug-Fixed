import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <div className="flex flex-col justify-center items-start w-full lg:w-[48%] p-6 lg:p-14 gap-6">
            <div className="flex flex-col gap-3">
                <h2 className="text-lg sm:text-xl font-normal italic text-white">
                    Visit Our Studio or Connect With Us
                </h2>
                <p className="text-xs sm:text-sm font-normal text-white">
                    We're here to help you find the perfect piece for every occasion.
                </p>
            </div>
            <div className="flex flex-col gap-4 w-full">
                <div className="flex items-center gap-2">
                    <Image src="/images/icon/Vector3.svg" alt="Phone" width={12} height={12} />
                    <p className="text-xs sm:text-sm text-white">+880 1537-570379</p>
                </div>
                <div className="flex items-center gap-2">
                    <Image src="/images/icon/Vector2.svg" alt="Location" width={12} height={12} />
                    <p className="text-xs sm:text-sm text-white">House D/36, Block E, Lalmatia, Dhaka-1207</p>
                </div>
                <div className="flex items-center gap-2">
                    <Image src="/images/icon/Vector1.svg" alt="Email" width={12} height={12} />
                    <p className="text-xs sm:text-sm text-white">info@deshit-bd.com</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;