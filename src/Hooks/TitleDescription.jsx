const TitleDescription = ({ title, description }) => {
  return (
    <div>
      <h1 className="text-5xl font-semi-bold mb-3 ">{title}</h1>
      <p className=" text-[#5c5c5c] text-[17px] pb-3 text-description_text md:pr-48">
        {description}
      </p>
    </div>
  );
};
//https://contestcraft-350e1.web.app/allContests
export default TitleDescription;
