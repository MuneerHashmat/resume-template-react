import AssignmentIcon from '@mui/icons-material/Assignment';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Skills=()=>{
    return (
        <div className='flex items-center mt-5'>
            <div className='flex flex-col items-center mr-5'>
                <AssignmentIcon sx={{ fontSize: 150, color: '#34b4eb' }} />
                <span className=' font-bold'>SKILLS & <br /> SAMPLES</span>
            </div>

            <div className='flex gap-5 border-t-4 border-b-4 border-black items-center'>
                <div className='flex flex-col gap-2'>
                    <div className='flex items-center text-left gap-9'>
                            <p className='font-bold w-24 whitespace-nowrap'>Writing</p>
                            <div>
                                <FiberManualRecordIcon  sx={{ color:'#34b4eb' }} />
                                <FiberManualRecordIcon  sx={{ color:'#34b4eb' }} />
                                <FiberManualRecordIcon  sx={{ color:'#34b4eb' }} />
                                <FiberManualRecordIcon  sx={{ color:'#34b4eb' }} />
                                <FiberManualRecordIcon  sx={{ color:'#34b4eb' }} />
                            </div>
                    </div>
                        <div className='flex items-center text-left gap-9'>
                            <p className='font-bold w-24 whitespace-nowrap'>Editing</p>
                            <div>
                                <FiberManualRecordIcon  sx={{ color:'#34b4eb' }} />
                                <FiberManualRecordIcon  sx={{ color:'#34b4eb' }} />
                                <FiberManualRecordIcon  sx={{ color:'#34b4eb' }} />
                                <FiberManualRecordIcon  sx={{ color:'#34b4eb' }} />
                            </div>
                        </div>
                        <div className='flex items-center text-left gap-9'>
                            <p className='font-bold w-24 whitespace-nowrap'>Social Media</p>
                            <div>
                                <FiberManualRecordIcon  sx={{ color:'#34b4eb' }} />
                                <FiberManualRecordIcon  sx={{ color:'#34b4eb' }} />
                                <FiberManualRecordIcon  sx={{ color:'#34b4eb' }} />
                            </div>
                        </div>
                        <div className='flex items-center text-left gap-9'>
                            <p className='font-bold w-24 whitespace-nowrap'>Researching</p>
                            <div>
                                <FiberManualRecordIcon  sx={{ color:'#34b4eb' }} />
                                <FiberManualRecordIcon  sx={{ color:'#34b4eb' }} />
                                <FiberManualRecordIcon  sx={{ color:'#34b4eb' }} />
                                <FiberManualRecordIcon  sx={{ color:'#34b4eb' }} />
                                <FiberManualRecordIcon  sx={{ color:'#34b4eb' }} />
                            </div>
                        </div>
                        <div className='flex items-center text-left gap-9'>
                            <p className='font-bold w-24 whitespace-nowrap'>SEO</p>
                            <div>
                                <FiberManualRecordIcon  sx={{ color:'#34b4eb' }} />
                                <FiberManualRecordIcon  sx={{ color:'#34b4eb' }} />
                                <FiberManualRecordIcon  sx={{ color:'#34b4eb' }} />
                                <FiberManualRecordIcon  sx={{ color:'#34b4eb' }} />
                            </div>
                        </div>
                </div>

                <div className='border-l-4 border-black h-52'></div>

                <div className='text-left w-3/6 flex flex-col gap-4'>
                    <div className='flex'>
                            <p className='font-bold w-14 mr-5'>Zapier</p>
                            <p>Organize your life with the Agile Method</p>
                    </div> 
                    <div className='flex'>
                            <p className='font-bold w-14 mr-5'>Spoke</p>
                            <p>Is 40 hours a week br too much? Here is what history and science say</p>
                    </div> 
                    <div className='flex'>
                            <p className='font-bold w-14 mr-5'>nDash</p>
                            <p>Why Generalist Writers Lead to Lost Profits in B2B Tech</p>
                    </div> 
                </div>  
           </div>
        </div>
    )
}

export default Skills;