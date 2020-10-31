import photoProfile from "../../../assets/images/profile.png";
const Default = () => {
  return (
    <div className="m-0 p-0">
      <div className="h-48 md:h-64 w-full bg-orange-400 relative">
        <img
          className="relative border-4 md:border-8 
          border-gray-200 -bottom-24 ml-auto mr-auto 
          text-center h-32 w-32 md:h-64 md:w-64 object-cover object-center rounded-full"
          src={photoProfile}
          alt=""
        />
      </div>
      <div className="flex flex-col items-center justify-center mt-20 md:mt-32">
        <h1 className="text-2xl md:text-4xl tracking-wider text-gray-700 font-medium">
          Syarip Mas'ud
        </h1>
        <span className="text-md md:text-xl text-gray-800">WEB DEVELOPER</span>
      </div>
    </div>
  );
};

export default Default;
