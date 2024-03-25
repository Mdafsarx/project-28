import bg1 from '../../assets/images/bg1.png'
import bg2 from '../../assets/images/bg2.png'


const JobBanner = () => {
    return (
        <div className="bg-gray-100   relative">
       <figure className='flex justify-end'><img src={bg2} alt="" /></figure>

        <h2 className="text-2xl font-bold flex justify-center items-center hover:text-cyan-600">Job Details</h2>
       
       <figure className=''><img src={bg1} alt="" /></figure>
       </div>
    );
};

export default JobBanner;