import ContactInfo from "../../../components/moleculs/ContactInfo";

function Contact() {
  return (
    <div className="p-6 h-full">
      <h1 className="text-4xl font-semibold">Contact</h1>
      <div className="flex mt-10">
        <div className="w-3/12">
          <div className="flex flex-col gap-2">
            <ContactInfo icon="map-marker" title="Narmada - NTB" />
            <ContactInfo icon="phone" title="+62 878 5237 3926" />
            <ContactInfo icon="envelope" title="syaripmasud@gmail.com" />
            <ContactInfo icon="check-circle" title="Freelance Available" />
          </div>
        </div>
        <div className="mx-4 w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.058023526156!2d116.24638111488196!3d-8.590420093825818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcdb7cbff54b3a9%3A0x6ed3ab42fc64f57f!2sKIOS%20USAID!5e0!3m2!1sen!2sin!4v1603766016381!5m2!1sen!2sin"
            className="w-full h-64"
            frameborder="0"
            style={{ border: 0 }}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
          <div className="my-4">
            <h3 className="text-2xl">
              {/* How Can I <span className="text-indigo-600">Help You</span> */}
            </h3>
          </div>
          <div>

            {/* <div className="leading-normal">
              <div className="w-1/2">
                <div className="w-full">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-1"
                    htmlFor="fullName"
                  >
                    Full Name
                  </label>
                  <input
                    className="border-2 bg-gray-100 border-gray-300 appearance-none rounded shadow-sm h-12 text-gray-700 py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-orange-400"
                    type="text"
                    placeholder="Full Name"
                  />
                </div>
              </div>
              <div className="w-1/2">
                <textarea
                  className="border rounded-md h-12 text-gray-700 py-2 px-4 leading-tight"
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Message"
                ></textarea>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
