import WorkHistoryIcon from '@mui/icons-material/WorkHistory';

const Work=()=>{
    return (
        <div className='flex items-center'>
            <div className='flex flex-col items-center mr-5'>
                <WorkHistoryIcon sx={{ fontSize: 150, color: '#34b4eb' }} />
                <span className=' font-bold'>WORK</span>
            </div>

            <div className='flex flex-col gap-3 mt-5'>
                <div className='text-left flex gap-5'>
                    <p className='font-bold w-24'>Present</p>
                    <p><span className=' font-bold'>Jessica Greene Marketing &#128900; Freelance Writer </span> <br />
                    Create blog posts, landing pages, e-books, and case studies for clients </p>
                </div>
                <div className='text-left flex gap-5'>
                    <p className='font-bold w-24'>2016</p>
                    <p><span className=' font-bold'>Kaiser Permanente &#128900; Lead Agile Product Owner</span> <br /> Created and socialized best practices for Agile software development</p>
                </div>
                <div className='text-left flex gap-5'>
                    <p className='font-bold w-24'>2013 - 2015</p>
                    <p><span className=' font-bold'>Humana &#128900; Agile Product Owner</span> <br /> Oversaw the implementation of six major development projects</p>
                </div>
            </div>

        </div>
    )
}

export default Work;

