import { contactLinks, socialLinks } from "@/utils";
import { Icon } from "@iconify/react";
import { Fira_Code } from "next/font/google";
import Head from "next/head";
import Typewriter from "typewriter-effect";
const recursive = Fira_Code({ weight: "400", subsets: ["latin-ext"] });

export default function Home() {
  const handleLinkClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <>
      <Head>
        <title>Ammar Bin Shakir - Fullstack Engineer</title>
      </Head>
      <div className={` ${recursive.className} w-full`}>
        <div
          className={`bg-slate-800 flex min-h-screen flex-col items-center justify-center`}
        >
          <h1 className="text-4xl font-extrabold text-gray-700">
            <img
              class="w-40 h-40 rounded-full object-fill"
              src="/avatar.jpeg"
              alt="Rounded avatar"
            />
          </h1>

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

        <div className=" bg-slate-700 px-5 min-h-fit pb-10 ">
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
            <div className="p-5 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-400">
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
                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
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

        <div className=" bg-slate-700 min-h-screen ">
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
                      <i className="fas fa-check-circle text-white"></i>
                    </div>
                  </div>
                  <div className="bg-green-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                    <h3 className="font-semibold text-lg mb-1">
                      Senior MERN Stack Engineer 👨‍💻🚀
                    </h3>
                    <p className="leading-tight text-justify w-full">
                      Jan 2023 - Present
                    </p>
                  </div>
                </div>

                <div className="flex md:contents">
                  <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                    <div className="h-full w-6 flex items-center justify-center">
                      <div className="h-full w-1 bg-green-500 pointer-events-none"></div>
                    </div>
                    <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-500 shadow text-center">
                      <i className="fas fa-check-circle text-white"></i>
                    </div>
                  </div>
                  <div className="bg-green-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                    <h3 className="font-semibold text-lg mb-1">
                      Senior Web Engineer 🌐💼
                    </h3>
                    <p className="leading-tight text-justify">
                      May 2022 - Dec 2022
                    </p>
                  </div>
                </div>

                <div className="flex md:contents">
                  <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                    <div className="h-full w-6 flex items-center justify-center">
                      <div className="h-full w-1 bg-yellow-500 pointer-events-none"></div>
                    </div>
                    <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-yellow-500 shadow text-center">
                      <i className="fas fa-times-circle text-white"></i>
                    </div>
                  </div>
                  <div className="bg-yellow-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                    <h3 className="font-semibold text-lg mb-1 text-gray-50">
                      MERN Stack Developer 🚀💻
                    </h3>
                    <p className="leading-tight text-justify">
                      Apr 2021 - Apr 2022
                    </p>
                  </div>
                </div>

                <div className="flex md:contents">
                  <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                    <div className="h-full w-6 flex items-center justify-center">
                      <div className="h-full w-1 bg-yellow-500 pointer-events-none"></div>
                    </div>
                    <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-yellow-500 shadow text-center">
                      <i className="fas fa-exclamation-circle text-gray-50"></i>
                    </div>
                  </div>
                  <div className="bg-yellow-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                    <h3 className="font-semibold text-lg mb-1 text-gray-50">
                      MERN Stack Developer 🌐💻
                    </h3>
                    <p className="leading-tight text-justify">
                      Sep 2020 - Mar 2021
                    </p>
                  </div>
                </div>
                <div className="flex md:contents">
                  <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                    <div className="h-full w-6 flex items-center justify-center">
                      <div className="h-full w-1 bg-gray-400 pointer-events-none"></div>
                    </div>
                    <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-400 shadow text-center">
                      <i className="fas fa-exclamation-circle text-gray-50"></i>
                    </div>
                  </div>
                  <div className="bg-gray-400 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                    <h3 className="font-semibold text-lg mb-1 text-gray-50">
                      Web Development Intern 👶🌱
                    </h3>
                    <p className="leading-tight text-justify">
                      Feb 2020 - Apr 2020
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-500 min-h-fit ">
          <h3 className="text-center pt-5 text-2xl font-light leading-none tracking-tight text-gray-900 md:text-4xl lg:text-4xl dark:text-white">
            <Typewriter
              options={{
                strings: ["Skills", "Technologies"],
                autoStart: true,
                loop: true,
              }}
            />
          </h3>
          <div className=" p-3 flex flex-wrap space-x-3 space-y-1 lg:max-w-5xl lg:mx-auto">
            <div className=" rounded-lg bg-white p-3 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-400">
              <Icon icon="devicon:react" fontSize={"36"} />
            </div>
            <div className="  rounded-lg bg-white p-3 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-400">
              <Icon icon="logos:html-5" fontSize={"36"} />
            </div>
            <div className="block rounded-lg bg-white p-3 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-400">
              <Icon icon="logos:css-3" fontSize={"36"} />
            </div>
            <div className=" rounded-lg bg-white p-3 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-400">
              <Icon icon="logos:javascript" fontSize={"36"} />
            </div>
            <div className=" rounded-lg bg-white p-3 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-400">
              <Icon icon="logos:nextjs-icon" fontSize={"36"} />
            </div>
            <div className=" rounded-lg bg-white p-3 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-400">
              <Icon icon="logos:gatsby" fontSize={"36"} />
            </div>
            <div className=" rounded-lg bg-white p-3 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-400">
              <Icon icon="logos:bootstrap" fontSize={"36"} />
            </div>
            <div className=" rounded-lg bg-white p-3 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-400">
              <Icon icon="logos:tailwindcss" fontSize={"36"} />
            </div>
            <div className=" rounded-lg bg-white p-3 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-400">
              <Icon icon="logos:material-ui" fontSize={"36"} />
            </div>
            <div className=" rounded-lg bg-white p-3 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-400">
              <Icon icon="logos:ant-design" fontSize={"36"} />
            </div>
            <div className=" rounded-lg bg-white p-3 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-400">
              <Icon icon="logos:nodejs-icon" fontSize={"36"} />
            </div>
            <div className=" rounded-lg bg-white p-3 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-400">
              <Icon icon="logos:express" fontSize={"36"} />
            </div>
            <div className=" rounded-lg bg-white p-3 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-400">
              <Icon icon="logos:mongodb-icon" fontSize={"36"} />
            </div>
            <div className=" rounded-lg bg-white p-3 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-400">
              <Icon icon="logos:cassandra" fontSize={"36"} />
            </div>
            <div className=" rounded-lg bg-white p-3 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-400">
              <Icon icon="logos:elasticsearch" fontSize={"36"} />
            </div>
            <div className=" rounded-lg bg-white p-3 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-400">
              <Icon icon="logos:redis" fontSize={"36"} />
            </div>
            <div className=" rounded-lg bg-white p-3 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-400">
              <Icon icon="logos:socket-io" fontSize={"36"} />
            </div>
            <div className=" rounded-lg bg-white p-3 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-400">
              <Icon icon="logos:graphql" fontSize={"36"} />
            </div>
            <div className=" rounded-lg bg-white p-3 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-400">
              <Icon icon="logos:aws" fontSize={"36"} />
            </div>
            <div className=" rounded-lg bg-white p-3 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-400">
              <Icon icon="logos:netlify" fontSize={"36"} />
            </div>
            <div className=" rounded-lg bg-white p-3 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-400">
              <Icon icon="logos:heroku" fontSize={"36"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
