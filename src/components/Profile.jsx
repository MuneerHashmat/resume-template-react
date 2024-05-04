import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Profile=()=>{
    return (
        <div className='flex items-center'>
            <div className='flex flex-col items-center'>
                <AccountCircleIcon sx={{ fontSize: 150, color: '#34b4eb' }} />
                <span className=' font-bold'>PROFILE</span>
            </div>

            <div>
                <div className='flex items-center'>
                    <div className='px-5 text-left flex flex-col gap-4'>
                        <h1 className=' text-4xl font-extrabold'>JESSICA <br />GREENE</h1>
                        <h2 className=' text-2xl whitespace-nowrap'>FREELANCE WRITER</h2>
                    </div>
                    <div className=' h-48 border-l-4 border-black'></div>
                    <div className=' text-left px-5'>
                        <p className=' text-base'>I specialize in writing long-form blog
                         content, case studies, e-books, and white papers for B2Bs,
                         tech startups and marketing agencies</p>

                        <div className=' mt-5 flex gap-14'>
                           <p className='font-bold'>Email:</p>
                           <p>mymail@gmail.com</p>
                        </div>

                        <div className='flex gap-10'>
                            <p className='font-bold'>Website:</p>
                            <p>mywebsite.com</p>
                        </div>
                    </div>
                </div>
               <div className='border-b-4 border-black'></div>
            </div>
        </div>
    )
}

export default Profile;