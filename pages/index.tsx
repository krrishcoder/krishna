import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram, AiFillGithub } from "react-icons/ai";
import devImg from "@/public/dev-ed-wave.png";
import Image from "next/image";
import design from "@/public/design.png";
import code from "@/public/code.png";
import consulting from "@/public/consulting.png";
import web1 from "@/public/web1.png";
import web2 from "@/public/web2.png";
import web3 from "@/public/web3.png";
import web4 from "@/public/web4.png";
import { useState } from "react";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <><Head>
      <title>Krrish Coder</title>
    </Head>
      <div className={darkMode ? "dark" : ""}>
        <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-950">
          <section className="min-h-screen">
            <nav className="py-10 mb-12 flex justify-between">
              <h1 className="text-2xl font-burtons dark:text-white">krrish coder</h1>
              <ul className="flex items-center">
                <li>
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer text-2xl dark:text-white"
                  />
                </li>
                <li className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8">
                  <Link href="#">Resume</Link>
                </li>
              </ul>
            </nav>
            <div className="text-center p-10">
              <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Krishna Kumar</h2>
              <h3 className="text-2xl py-2 md:text-3xl dark:text-white">Developer and Designer</h3>
              <p className="text-md py-2 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-200">Freelance providing services for programming and design needs. join me down below and let's get cracking.</p>
            </div>
            <div className="text-gray-800 text-5xl flex justify-center gap-16 py-3 dark:text-white">
              <Link href="https://github.com/krrishcoder"><AiFillGithub /></Link>
              <Link href="https://twitter.com/Kk612470Kumar"><AiFillTwitterCircle /></Link>
              <Link href="https://www.linkedin.com/in/krishna-kumar-549894219/"><AiFillLinkedin /></Link>
{/*               <Link href="https://www.instagram.com/krsna.kk/"><AiFillInstagram /></Link> */}
            </div>
            {/* ! profile image  */}
            {/* <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={devImg} layout="fill" objectFit="cover" alt="dev icon" />
          </div> */}
            <div className=" flex flex-col items-center justify-between">
              <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
                <Image
                  className="relative "
                  src="/avatar.svg"
                  alt="images"
                  width={400}
                  height={400}
                  priority
                />
              </div>
            </div>

          </section>

          <section>
            <div>
              <h3 className="text-3xl py-1 dark:text-white">Services I Offer</h3>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">Since the beginning of my jounery as a freelance designer and developer. I've done remote work for
                <span className="text-teal-500"> agencies</span> consulted for <span className="text-teal-500">startups</span>  and collaborated with talanted people to create digital products for both business and consumer use.
              </p>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
                I offer from a wide range of services, including brand design, programming and teaching.
              </p>
            </div>
            {/* cards  */}
            <div className="lg:flex gap-10">
              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
                <Image className="mx-auto" src={design} alt="design icons" />
                <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Design</h3>
                <p className="py-2"> Creating elegant designs suited for your needs folling core design theory</p>
                <h4 className="py-4 text-teal-600">Design tools I use</h4>
                <p className="py-1">Figma</p>
                <p className="py-1">Sketch</p>
                <p className="py-1">Photoshope</p>
                <p className="py-1">Illustrator</p>
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
                <Image className="mx-auto" src={code} alt="design icons" />
                <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Design</h3>
                <p className="py-2"> Creating elegant designs suited for your needs folling core design theory</p>
                <h4 className="py-4 text-teal-600">Design tools I use</h4>
                <p className="py-1">Figma</p>
                <p className="py-1">Sketch</p>
                <p className="py-1">Photoshope</p>
                <p className="py-1">Illustrator</p>
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
                <Image className="mx-auto" src={consulting} alt="design icons" />
                <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Design</h3>
                <p className="py-2"> Creating elegant designs suited for your needs folling core design theory</p>
                <h4 className="py-4 text-teal-600">Design tools I use</h4>
                <p className="py-1">Figma</p>
                <p className="py-1">Sketch</p>
                <p className="py-1">Photoshope</p>
                <p className="py-1">Illustrator</p>
              </div>
            </div>
          </section>

          <section>
            <div>
              <h3 className="text-3xl py-1s dark:text-white">Portfolio</h3>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">Since the beginning of my jounery as a freelance designer and developer. I've done remote work for
                <span className="text-teal-500"> agencies</span> consulted for <span className="text-teal-500">startups</span>  and collaborated with talanted people to create digital products for both business and consumer use.
              </p>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
                I offer from a wide range of services, including brand design, programming and teaching.
              </p>
            </div>

            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <div className="basis-1/3 flex-1"><Image className="rounded-lg object-cover w-full h-full" layout="responsive" src={web1} alt="" /></div>
              <div className="basis-1/3 flex-1"><Image className="rounded-lg object-cover w-full h-full" layout="responsive" src={web2} alt="" /></div>
              <div className="basis-1/3 flex-1"><Image className="rounded-lg object-cover w-full h-full" layout="responsive" src={web3} alt="" /></div>
              <div className="basis-1/3 flex-1"><Image className="rounded-lg object-cover w-full h-full" layout="responsive" src={web4} alt="" /></div>
            </div>
          </section>

          {/* mail connect */}
          <section className="text-center p-10">
            <div className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8">
              <Link href="mailto:kk612470@gmail.com"><h3 className="text-2xl py-2 md:text-3xl dark:text-white">Connect with Me</h3></Link>
            </div>
          </section>
          <p className="text-center pb-5 dark:text-white">©copyright 2023</p>
        </main >
      </div>
    </>

  )

}
