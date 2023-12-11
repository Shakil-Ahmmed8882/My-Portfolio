import contestpopular from '../../assets/img/popularContest.png'
import fooddetails from '../../assets/img/fooddetails.png'

const Sidebar = () => {
      return (
            <div className="bg-primaryColor hidden md:block h-[80vh] -top-28  relative right-0   text-[white] text-6xl">
                  <div className='w-full h-full bg-primaryColor -bottom-32 absolute'></div>
                  <img className='absolute -left-40 top-16 rounded-lg' src={contestpopular} alt="" />
                  {/* <img className='absolute hover:h-screen hover:fixed transition-all hover:top-0 hover:left-80  -left-40 top-[330px] rounded-lg' src={project1} alt="" /> */}
                  <img className='absolute  -left-20 top-[330px] rounded-lg' src={fooddetails} alt="" />
            </div>
      );
};

export default Sidebar;