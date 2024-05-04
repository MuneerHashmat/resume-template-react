import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Profile=()=>{
    return (
        <div className='flex items-center h-52'>
            <div className='flex flex-col items-center'>
                <AccountCircleIcon sx={{ fontSize: 150, color: '#34b4eb' }} />
                <span className=' font-bold'>Profile</span>
            </div>

            <div>
                <div className='flex items-center'>
                    <div className='px-5 text-left'>
                        <h1 className=' text-4xl font-extrabold'>JESSICA <br />GREENE</h1>
                        <h2 className=' text-2xl'>FREELANCE WRITER</h2>
                    </div>
                    <div className=' h-52 border-l-4 border-black'></div>
                    <div>
                        <p className=' text-base'>I specialize in writing long-form blog <br />content, case studies, e-books, and <br /> white papers for B2Bs,tech startups,<br /> and marketing agencies</p>

                        <p><span>Email:</span> mymail@gmail.com</p>
                        <p><span>Website:</span> mywebsite.com</p>
                    </div>
                </div>
               <div className=' border-b-4 border-black'></div>
            </div>
        </div>
    )
}

export default Profile;