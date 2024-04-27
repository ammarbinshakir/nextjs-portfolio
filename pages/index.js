import { contactLinks, socialLinks } from "@/utils";
import { Icon } from "@iconify/react";
import { Fira_Code } from "next/font/google";
import Head from "next/head";
import { useState } from "react";
import Typewriter from "typewriter-effect";
import { icons } from "./api/utils";
const recursive = Fira_Code({ weight: "400", subsets: ["latin-ext"] });

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleLinkClick = (link) => {
    window.open(link, "_blank");
  };
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredIcons = icons.filter((icon) =>
    icon.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <>
      <Head>
        <title>Ammar Bin Shakir - Fullstack Engineer</title>
        <meta
          name="description"
          content="👋 Hey there! I’m Ammar Bin Shakir, a fullstack engineer experienced in React, Node.js, Next.js, React Native, and AWS services. I specialize in building dynamic web and mobile applications with a strong emphasis on utilizing AWS to enhance scalability, security, and overall performance. If you need help or have any questions regarding fullstack development, AWS integrations, or any of these technologies, feel free to reach out. I’m here to assist you in bringing your ideas to life!"
        />
        <meta
          property="og:title"
          content="Ammar Bin Shakir - Fullstack Engineer"
        />
        <meta
          property="og:description"
          content="👋 Hey there! I’m Ammar Bin Shakir, a fullstack engineer experienced in React, Node.js, Next.js, React Native, and AWS services. I specialize in building dynamic web and mobile applications with a strong emphasis on utilizing AWS to enhance scalability, security, and overall performance. If you need help or have any questions regarding fullstack development, AWS integrations, or any of these technologies, feel free to reach out. I’m here to assist you in bringing your ideas to life!"
        />
        <meta
          property="og:image"
          content="https://ammar.geekscrew.xyz/avatar.jpeg"
        />
        <meta property="og:url" content="https://ammar.geekscrew.xyz" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Ammar Bin Shakir - Fullstack Engineer"
        />
        <meta
          name="twitter:description"
          content="👋 Hey there! I’m Ammar Bin Shakir, a fullstack engineer experienced in React, Node.js, Next.js, React Native, and AWS services. I specialize in building dynamic web and mobile applications with a strong emphasis on utilizing AWS to enhance scalability, security, and overall performance. If you need help or have any questions regarding fullstack development, AWS integrations, or any of these technologies, feel free to reach out. I’m here to assist you in bringing your ideas to life!"
        />
        <meta
          name="twitter:image"
          content="https://ammar.geekscrew.xyz/avatar.jpeg"
        />
        <link rel="icon" href="/avatar.jpeg" />
      </Head>

      <div
        className={` ${recursive.className} w-full bg-gradient-to-r p-[6px] from-[#a4e6bd] via-[#ccc85f] to-[#ea3333] animate-gradient`}
        >
        <div
          className={` flex min-h-screen flex-col items-center justify-center`}
        >
          {/* <h1 className="text-4xl font-extrabold text-gray-700"> */}
          <img
            class="w-48 h-48 rounded-full object-fill bg-gradient-to-r p-[6px] from-[#a4e6bd] via-[#ccc85f] to-[#ea3333] animate-gradient"
            src="/avatar.jpeg"
            alt="Rounded avatar"
          />
          {/* </h1> */}

          <h1 className="mt-4 mb-4 text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Ammar Bin Shakir
          </h1>

          <h3 className="mt-4 mb-4 text-2xl font-light leading-none tracking-tight text-gray-900 md:text-4xl lg:text-4xl dark:text-white">
            <Typewriter
              options={{
                strings: [
                  "Fullstack Engineer",
                  "MERN Stack Developer",
                  "Front-end Developer",
                  "Back-end Developer",
                  "Mobile App Developer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h3>
        </div>

        <div className="  px-3 min-h-fit mb-5 ">
          <h3 className="text-center py-5 text-2xl font-light leading-none tracking-tight text-gray-900 md:text-4xl lg:text-4xl dark:text-white">
            <Typewriter
              options={{
                strings: ["About me", "Introduction"],
                autoStart: true,
                loop: true,
              }}
            />
          </h3>
          <div className="container mx-auto  flex flex-col-reverse gap-4   items-center">
            <div className="p-5 rounded-lg  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
              <div className="flex  pb-5 gap-2 ">
                <div className="w-3 h-3 rounded-full bg-red-600  text-center">
                  <span />
                </div>
                <div className="w-3 h-3 rounded-full bg-yellow-500  text-center">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="w-3 h-3 rounded-full bg-green-600  text-center">
                  <i className="fas fa-check-circle"></i>
                </div>
              </div>
              <div>
                <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  Hi :)
                </h5>
                <p className="mb-4 text-base dark:text-neutral-50">
                  👋 Hey there! I&rsquo;m Ammar Bin Shakir, a fullstack engineer
                  experienced in React, Node.js, Next.js, React Native, and AWS
                  services. I specialize in building dynamic web and mobile
                  applications with a strong emphasis on utilizing AWS to
                  enhance scalability, security, and overall performance. If you
                  need help or have any questions regarding fullstack
                  development, AWS integrations, or any of these technologies,
                  feel free to reach out. I’m here to assist you in bringing
                  your ideas to life!
                </p>
              </div>
              <div className="flex justify-end flex-wrap ">
                {Object.entries(socialLinks).map(([icon, link]) => (
                  <button
                    key={icon}
                    type="button"
                    className="rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    onClick={() => handleLinkClick(link)}
                  >
                    <Icon icon={`bxl:${icon}`} fontSize={"large"} />
                  </button>
                ))}

                {Object.entries(contactLinks).map(([icon, link]) => (
                  <button
                    key={icon}
                    type="button"
                    className="rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    onClick={() => handleLinkClick(link)}
                  >
                    <Icon icon={`bi:${icon}`} fontSize={"large"} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="px-3 min-h-fit mb-5 ">
          <h3 className="text-center py-5 text-2xl font-light leading-none tracking-tight text-gray-900 md:text-4xl lg:text-4xl dark:text-white">
            <Typewriter
              options={{
                strings: ["Skills", "Technologies", "Tech-stacks"],
                autoStart: true,
                loop: true,
              }}
            />
          </h3>
          <div className="flex justify-center space-x-2 my-5">
            <div className=" p-3 rounded-lg  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  ">
              {filteredIcons.length > 0 && searchQuery.length > 0 && (
                <Icon icon="solar:ghost-smile-bold" fontSize={"36"} />
              )}
              {filteredIcons.length === 0 && searchQuery.length > 0 && (
                <Icon icon="mynaui:sad-ghost" fontSize={"36"} />
              )}
              {searchQuery.length === 0 && (
                <Icon icon="mingcute:search-line" fontSize={"36"} />
              )}
            </div>
            <div className=" rounded-lg  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  ">
              {/* <h1>KNow more about me</h1> */}

              <input
                className="p-4 bg-transparent focus:outline-none"
                placeholder="Search my skills..."
                value={searchQuery}
                onChange={handleInputChange}
              />
            </div>
          </div>
          {filteredIcons.length > 0 ? (
            <div className=" p-5  flex flex-wrap space-x-3 space-y-1  lg:mx-auto rounded-lg  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  ">
              {filteredIcons.map((icon, index) => (
                <div
                  key={index}
                  className="rounded-lg p-3 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                >
                  <Icon icon={icon.icon} fontSize={"36"} />
                </div>
              ))}
            </div>
          ) : (
            <div className=" p-5  flex items-center flex-col space-x-3 space-y-1  lg:mx-auto rounded-lg  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  ">
              <Icon icon="mynaui:sad-ghost" fontSize={"36"} />
              <p className="text-inherit mt-2">I am constantly learning...</p>
            </div>
          )}
        </div>
        <div className="  min-h-screen mt-5">
          <h3 className="text-center pt-5 text-2xl font-light leading-none tracking-tight text-gray-900 md:text-4xl lg:text-4xl dark:text-white">
            <Typewriter
              options={{
                strings: ["Background", "Experience"],
                autoStart: true,
                loop: true,
              }}
            />
          </h3>
          <div className="container mx-auto  flex flex-col-reverse gap-4   items-center p-5">
            <div className="container">
              <div className="flex flex-col md:grid grid-cols-12 text-gray-50">
                <div className="flex md:contents">
                  <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                    <div className="h-full w-6 flex items-center justify-center">
                      <div className="h-full w-1 bg-green-500 pointer-events-none"></div>
                    </div>
                    <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-500 shadow text-center">
                      {/* <i className="fas fa-check-circle text-white"></i> */}
                      🌟
                    </div>
                  </div>
                  <div className="bg-green-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                    <h3 className="font-semibold text-lg mb-1">
                      Senior MERN Stack Engineer
                    </h3>
                    <p className="leading-tight text-justify w-full">
                      @ Pixelpk Technologies Jan 2023 - Present
                    </p>
                  </div>
                </div>

                <div className="flex md:contents">
                  <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                    <div className="h-full w-6 flex items-center justify-center">
                      <div className="h-full w-1 bg-green-500 pointer-events-none"></div>
                    </div>
                    <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-500 shadow text-center">
                      {/* <i className="fas fa-check-circle text-white"></i> */}
                      🚀
                    </div>
                  </div>
                  <div className="bg-green-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                    <h3 className="font-semibold text-lg mb-1">
                      Senior Web Engineer
                    </h3>
                    <p className="leading-tight text-justify">
                      @ Geekinate May 2022 - Dec 2022
                    </p>
                  </div>
                </div>

                <div className="flex md:contents">
                  <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                    <div className="h-full w-6 flex items-center justify-center">
                      <div className="h-full w-1 bg-yellow-500 pointer-events-none"></div>
                    </div>
                    <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-yellow-500 shadow text-center">
                      {/* <i className="fas fa-times-circle text-white"></i> */}
                      🏃🏾‍♂️
                    </div>
                  </div>
                  <div className="bg-yellow-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                    <h3 className="font-semibold text-lg mb-1 text-gray-50">
                      MERN Stack Developer
                    </h3>
                    <p className="leading-tight text-justify">
                      @ SAS Technology Apr 2021 - Apr 2022
                    </p>
                  </div>
                </div>

                <div className="flex md:contents">
                  <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                    <div className="h-full w-6 flex items-center justify-center">
                      <div className="h-full w-1 bg-yellow-500 pointer-events-none"></div>
                    </div>
                    <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-yellow-500 shadow text-center">
                      {/* <i className="fas fa-exclamation-circle text-gray-50"></i> */}
                      🚶🏾‍♂️
                    </div>
                  </div>
                  <div className="bg-yellow-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                    <h3 className="font-semibold text-lg mb-1 text-gray-50">
                      MERN Stack Developer
                    </h3>
                    <p className="leading-tight text-justify">
                      @ Cipher Savvy Sep 2020 - Mar 2021
                    </p>
                  </div>
                </div>
                <div className="flex md:contents">
                  <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                    <div className="h-full w-6 flex items-center justify-center">
                      <div className="h-full w-1 bg-gray-400 pointer-events-none"></div>
                    </div>
                    <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-400 shadow text-center">
                      {/* <i className="fas fa-exclamation-circle text-gray-50"></i> */}
                      🧍🏽
                    </div>
                  </div>
                  <div className="bg-gray-400 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                    <h3 className="font-semibold text-lg mb-1 text-gray-50">
                      Web Development Intern
                    </h3>
                    <p className="leading-tight text-justify">
                      @ Seven Technologies Feb 2020 - Apr 2020
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
