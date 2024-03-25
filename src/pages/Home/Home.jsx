import Banner from "./Banner";
import FeaturedJobs from "./FeaturedJobs";
import JobCategory from "./JobCategory";

const Home = () => {
    return (
        <div className="space-y-32 ">
            
            <Banner></Banner>
            <JobCategory></JobCategory>
            <FeaturedJobs></FeaturedJobs>

        </div>
    );
};

export default Home;