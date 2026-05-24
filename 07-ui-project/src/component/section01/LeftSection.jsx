import React from 'react'

const LeftSection = () => {
    return (
        <div className='h-screen  w-1/3 flex flex-col items-start justify-center gap-8  p-5' >
            {/*  heading  */}
            <div className='font-extrabold' >
                <h1 className='uppercase text-4xl' >Teachers </h1>
                <h1 className='uppercase text-4xl text-blue-700' >on Pariwartan Edu</h1>
            </div>

            {/* paragraph  */}

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus earum temporibus eum ea esse accusantium corrupti necessitatibus culpa odio ab.</p>

            {/* key points */}
            <div className='flex justify-between w-full p-3' >
                <div className=' flex flex-col items-start gap-2 '>
                    <div className='flex items-center justify-between gap-5' > 
                        <h1 className='text-3xl text-orange-600 font-semibold' >87%</h1>
                        <p>01</p>
                    </div>
                    <ul className='list-disc marker:text-orange-500'>
                        <li>Busey ipsum</li>
                        <li>Urinated ipsum</li>
                    </ul>
                </div>
            <div className=' flex flex-col items-start gap-2 '>
                    <div className='flex items-center justify-between gap-5' > 
                        <h1 className='text-3xl text-orange-600 font-semibold' >77%</h1>
                        <p>02</p>
                    </div>
                    <ul className='list-disc marker:text-orange-500'>
                        <li>Busey ipsum</li>
                        <li>Urinated ipsum</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default LeftSection
