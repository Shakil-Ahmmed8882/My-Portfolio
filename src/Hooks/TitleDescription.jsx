const TitleDescription = ({ title, description }) => {
  return (
    <div>
      <h1 className="text-5xl font-semi-bold mb-1  ">{title}</h1>
      <p className="pr-32 text-[#5c5c5c]">
        {description}
      </p>
    </div>
  );
};
//https://contestcraft-350e1.web.app/allContests
export default TitleDescription;
