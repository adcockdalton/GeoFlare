"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { ArrowUpRightIcon } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

// import Logo from "../../public/geoFlareLogo.svg"
import "./global.sass";

export default function Home() {
  return (
    <>
      <nav>
        <ul className="flex-row">
          <div
            className="nav-sides"
            style={{ borderRight: "1px solid #fff", paddingRight: "28px" }}
          >
            <img
              src="./geoFlareLogo.svg"
              alt=""
              style={{ maxWidth: "100px" }}
            />
          </div>

          <li className="flex-row">
            <a href="#" target="_blank" rel="noopener noreferrer">
              About us
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Features
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Pricing
            </a>
          </li>
          <div
            className="nav-sides"
            style={{ borderLeft: "1px solid #fff", paddingLeft: "28px" }}
          >
            {/* Sign up  */}
            <button className="special">
              Sign up
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </ul>
      </nav>
      {/* hero section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="hero">
          <div className="container">
            <div className="tag">
              <ArrowUpRightIcon />
              Try it for free
            </div>
            <h3>Meet GeoFlare</h3>
            <h1>
              Your Real-Time, AI-Powered &nbsp;
              <span>
                <TypeAnimation
                  sequence={[
                    //! one second wait
                    " Wildfire Strategy Assistant",
                    1500,
                    " Firefighter Communication Assistant",
                    1500,
                    " Homeowner Safety Assistant",
                    1500,
                  ]}
                  wrapper="span"
                  repeat={Infinity}
                />
              </span>
            </h1>
            <div className="row-contain">
              <Link href="/home">
                <Button className="primary">
                  <p>Get started</p> <ArrowUpRightIcon />
                </Button>
              </Link>
              <Link href="/home">
                <Button className="secondary">
                  <p>Demo</p>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
