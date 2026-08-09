import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import {
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

import "./Footer.css";

const footerLinks = {
  Services: [
    "AI Website Development",
    "3D Interactive Experiences",
    "UX/UI Design",
    "SaaS Product Design",
    "AI Video Marketing",
  ],

  Company: [
    "About ZyneDigix",
    "Portfolio",
    "Case Studies",
    "Contact",
    "Careers",
  ],

  Resources: [
    "Blog",
    "AI Insights",
    "Design Trends",
    "Case Studies",
    "Newsletter",
  ],
};

const socialLinks = [
  {
    icon: FaInstagram,
    link: "#",
  },
  {
    icon: FaLinkedinIn,
    link: "#",
  },
  {
    icon: FaYoutube,
    link: "#",
  },
  {
    icon: FaXTwitter,
    link: "#",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black text-white">

      {/* Glow Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="
          absolute
          left-1/2
          top-0
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-cyan-500/10
          blur-[140px]
        " />
      </div>


      <div className="
        relative
        mx-auto
        max-w-7xl
        px-6
        py-20
        lg:px-8
      ">

        {/* Top CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            mb-20
            rounded-3xl
            border
            border-white/10
            bg-white/[0.04]
            backdrop-blur-xl
            p-10
            text-center
          "
        >

          <h2 className="
            text-4xl
            font-semibold
            tracking-tight
            md:text-6xl
          ">
            Let's Build The
            <span className="text-cyan-400">
              {" "}Future
            </span>
            {" "}Together
          </h2>


          <p className="
            mx-auto
            mt-5
            max-w-2xl
            text-white/60
            text-lg
          ">
            Transform your ideas into immersive AI-powered digital
            experiences that inspire, engage and convert.
          </p>


          <button
            className="
              group
              mt-8
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-white
              px-8
              py-4
              font-medium
              text-black
              transition
              hover:bg-cyan-400
            "
          >
            Start Your Project

            <ArrowUpRight
              size={20}
              className="
                transition-transform
                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            />

          </button>

        </motion.div>



        {/* Footer Grid */}
        <div className="
          grid
          gap-12
          md:grid-cols-2
          lg:grid-cols-5
        ">


          {/* Brand */}
          <div className="lg:col-span-2">

            <h3 className="
              text-3xl
              font-bold
              tracking-wide
            ">
              ZyneDigix
            </h3>


            <p className="
              mt-5
              max-w-sm
              text-white/60
              leading-relaxed
            ">
              AI-Powered Interactive 3D Digital Experience Studio
              creating next-generation websites, SaaS products and
              immersive brand experiences.
            </p>


            <div className="
              mt-8
              space-y-4
              text-white/70
            ">

              <div className="flex items-center gap-3">
                <Mail size={18}/>
                zynedigix@gmail.com
              </div>


              <div className="flex items-center gap-3">
                <Phone size={18}/>
                +91 9591909721
              </div>


              <div className="flex items-center gap-3">
                <MapPin size={18}/>
                India
              </div>

            </div>


            {/* Social */}
            <div className="
              mt-8
              flex
              gap-4
            ">

              {socialLinks.map((item, index)=>{

                const Icon = item.icon;

                return (
                  <a
                    key={index}
                    href={item.link}
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/10
                      bg-white/5
                      transition
                      hover:border-cyan-400
                      hover:text-cyan-400
                    "
                  >
                    <Icon size={18}/>
                  </a>
                )

              })}

            </div>

          </div>




          {/* Links */}

          {Object.entries(footerLinks).map(
            ([title, links])=>(
              
              <div key={title}>

                <h4 className="
                  mb-6
                  text-sm
                  uppercase
                  tracking-[0.2em]
                  text-white/40
                ">
                  {title}
                </h4>


                <ul className="space-y-4">

                  {links.map((link)=>(
                    <li key={link}>

                      <a
                        href="#"
                        className="
                          text-white/70
                          transition
                          hover:text-cyan-400
                        "
                      >
                        {link}
                      </a>

                    </li>
                  ))}

                </ul>


              </div>

            )
          )}

        </div>



        {/* Bottom Bar */}

        <div className="
          mt-16
          border-t
          border-white/10
          pt-8
          flex
          flex-col
          gap-4
          text-sm
          text-white/40
          md:flex-row
          md:items-center
          md:justify-between
        ">

          <p>
            © {new Date().getFullYear()} ZyneDigix. All rights reserved.
          </p>


          <div className="
            flex
            gap-6
          ">
            <a href="#">
              Privacy Policy
            </a>

            <a href="#">
              Terms
            </a>

          </div>

        </div>


      </div>

    </footer>
  );
}