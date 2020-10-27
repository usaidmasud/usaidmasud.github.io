const ContactInfo = ({icon, title}) => {
  return (
    <div className="bg-gray-700 rounded-md overflow-hidden max-w-sm">
      <div className="py-4 px-6 flex flex-col items-center">
        <i className={`fa fa-${icon} fa-3x text-orange-400`}></i>
        <span className="mt-2 text-lg font-normal text-white tracking-wide">
          {title}
        </span>
      </div>
    </div>
  );
};

export default ContactInfo;
