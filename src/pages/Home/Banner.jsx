import bgImg from "../../assets/images/user.png"

const Banner = () => {
    return (
        <section className="flex items-center justify-between mx-8 pt-6 bg-gray-100 md:bg-white">


            {/* banner title */}
            <div className="space-y-4 ">
                <h2 className="text-3xl md:text-6xl font-extrabold">One Step <br />
                    Closer To Your <br />
                    <span className="text-[#838AFE]">Dream Job</span></h2>

                <p className="hidden md:flex text-balance  text-gray-600 ">Explore thousands of job opportunities with all <br />the information you need. Its your future. Come find it. Manage <br />  all your job application from start to finish.</p>

                <button className="btn bg-[#838AFE] text-white">Get Started</button>
            </div>
             
             {/* banner image */}
            <div className="w-1/2 md:w-[37%]">
                <img src={bgImg} alt="" className=" w-full "/>
            </div>


        </section>
    );
};

export default Banner;