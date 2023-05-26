import CertCard from "./CertCard.js";

import hr from "../assets/line.svg";
import javascript from "../assets/certs/javascript.jpg";
import morgan from "../assets/certs/morgan.jpg";
import web from "../assets/certs/web.jpg";
import android from "../assets/certs/android.jpg";

// import

export default function Certs() {
  return (
    <div id="certs" className="mt-4 text-white">
      <h1 className="text-2xl font-bold">Certifications</h1>
      <p className="font-light text-gray-400">
        Here are some of my Certifications
      </p>

      {/* <div className="flex flex-col md:flex-row flex-wrap mt-4 gap-5"> */}
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
        <CertCard
          name="JavaScript"
          img={javascript}
          issued="Udemy"
          date="May 2023"
        />
        <CertCard
          name="Web Development"
          img={web}
          issued="Internshala"
          date="June 2021"
        />
        <CertCard
          name="Software Engineering Virtual Experience"
          img={morgan}
          issued="JPMorgan Chase & Co."
          date="Jun 2022"
        />

        <CertCard
          name="Android App Development"
          img={android}
          issued="Internshala"
          date="July 2022"
        />
      </div>
      <center>
        <img src={hr} alt="hr" />
      </center>
    </div>
  );
}
