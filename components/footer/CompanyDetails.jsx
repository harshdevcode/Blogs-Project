import React from 'react';
import Button from 'components/button';
import Image from 'next/image';

export default function CompanyDetails() {
    const handleOnSignupClick = (event) => {
        event.preventDefault();
        window.location.href = 'https://www.miniorange.com/businessfreetrial';
    };
    return (
        <div className='py-md pr-xl sm:w-[328px]'>
            <figure className='w-40 text-lg title cursor-pointer'>
                <Image
                    width={250}
                    height={55}
                    alt='miniorange logo inverted'
                    src='https://www.miniorange.com/images/footer/miniorange-white.webp'
                />
            </figure>

            <p className='title !text-gray-400 mt-sm'>
                Secure Identity Solutions for your Workforce & Customers
            </p>
            <h3 className='title-semibold text-inherit mt-lg'>+1 978 658 9387 (USA)</h3>
            <h3 className='title-semibold text-inherit mt-sm'>+91 97178 45846 (India)</h3>
            <h3 className='title-semibold text-inherit mt-sm'>infoxecurify.com</h3>
            <Button
                text='Sign up free'
                onClick={handleOnSignupClick}
                className='mt-lg'
                variant='secondary'
            />
        </div>
    );
}
