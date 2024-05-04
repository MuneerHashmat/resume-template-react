import LightbulbCircleOutlinedIcon from '@mui/icons-material/LightbulbCircleOutlined';
import HomeRepairServiceOutlinedIcon from '@mui/icons-material/HomeRepairServiceOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import LaptopMacOutlinedIcon from '@mui/icons-material/LaptopMacOutlined';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';

const Icons=()=>{
    return (
        <div className='flex gap-14 mt-5'>
            <div className=''>
                <LightbulbCircleOutlinedIcon sx={{ fontSize: 130, color: 'black', borderRadius:"50%",backgroundColor: "#34b4eb", padding:"20px"}} />
            </div>
           
           <div className='flex gap-8'>
                <HomeRepairServiceOutlinedIcon sx={{ fontSize: 130, color: '#34b4eb', borderRadius:"50%",backgroundColor: "black", padding:"20px"}}/>
                <CampaignOutlinedIcon sx={{ fontSize: 130, color: '#34b4eb', borderRadius:"50%",backgroundColor: "black", padding:"20px"}}/>
                <LaptopMacOutlinedIcon sx={{ fontSize: 130, color: '#34b4eb', borderRadius:"50%",backgroundColor: "black", padding:"20px"}}/>
                <TipsAndUpdatesOutlinedIcon sx={{ fontSize: 130, color: '#34b4eb', borderRadius:"50%",backgroundColor: "black", padding:"20px"}}/>
           </div>
        </div>
    )
}

export default Icons;