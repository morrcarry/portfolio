import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import hr from "../assets/line.svg";

export default function Hiro() {
  return (
    <>
      <div
        id="home"
        className="flex w-full h-screen flex-col md:flex-row gap-5 items-center justify-center text-white relative"
      >
        <div
          className="md:w-3/6"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-offset="100"
        >
          <div className="flex flex-col w-full mt-8">
            <h1 className="text-xl text-gray-400">Hi, I'm</h1>
            <h1 className="text-2xl font-bold">Mudit Singh</h1>
            <p class="text-xl font-bold text-gray-300">MERN Developer</p>
            <p className="text-md font-light text-gray-400">
              An enthusiastic and committed web developer with a focus on C++
              and JavaScript. I have good knowledge of developing websites
              utilising the MERN stack and aim to produce outstanding user
              interfaces and solid apps.
              <p className="text-md font-bold">
                In addition to my technological expertise, I enjoy playing
                interactive games like FIFA and Valorant.You can also give me a
                cat as a gift, if you like.
              </p>
            </p>
          </div>
          <a className="mt-2 block">Follow me </a>
          <ul className="flex mt-2 gap-4 items-center">
            <li>
              <a
                href="https://github.com/morrcarry"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon size="2xl" icon={faGithub} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/mudit-singh-96464420b/"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon size="2xl" icon={faLinkedinIn} />
              </a>
            </li>
            <li>
              <a
                href="mailto:mudits423@gmail.com"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon size="2xl" icon={faEnvelope} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/m.singh.07/?igshid=MzRlODBiNWFlZA%3D%3D"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon size="2xl" icon={faInstagram} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <center>
        <img src={hr} alt="hr" />
      </center>
    </>
  );
}
