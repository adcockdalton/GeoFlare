"use client";

//import packages and components
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { ArrowUpRightIcon } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { TypeAnimation } from "react-type-animation";

import "./global.sass";

/**
 * Renders the Home page component.
 *
 * @returns The JSX element representing the Home page.
 */
export default function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once
  });

  return (
    <>
      {/* Navigation */}
      <nav>
        <ul className="flex-row">
                <div
                className="nav-sides"
                style={{ borderRight: "1px solid #fff", paddingRight: "28px" }}
                >
                <Image
                  src="./geoFlareLogo.svg"
                  alt=""
                  style={{ maxWidth: "150px", width: "auto", height: "auto" }}
                  width={150}
                  height={50}
                  priority
                />
                </div>

                {/* Menu */}
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

          {/* Sign up button */}
          <div
            className="nav-sides"
            style={{ borderLeft: "1px solid #fff", paddingLeft: "28px" }}
          >
            <button className="special">
              Sign up
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </ul>
      </nav>

      {/* Introduction section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="hero">
          <div className="container" style={{ padding: "0 2vw 0 5vw" }}>
            {/* Tagline */}
            <div className="tag">
              <ArrowUpRightIcon />
              Try it for free
            </div>

            {/* Title */}
            <h3>Meet GeoFlare</h3>
            <h1>
              Your Real-Time, AI-Powered &nbsp;
              <span>
                <TypeAnimation
                  sequence={[
                    //! one second wait
                    " ✹ Wildfire Strategy Co-pilot",
                    1500,
                    " ⚑ Firefighter Communication",
                    1500,
                    " ♥︎ Homeowner Safety",
                    1500,
                  ]}
                  wrapper="span"
                  speed={15}
                  repeat={Infinity}
                />
              </span>
            </h1>

            {/* Buttons */}
            <div className="row-contain" style={{ marginTop: "22px" }}>
              <Link href="/home">
                <Button className="primary">
                  <p>Get started</p> <ArrowUpRightIcon />
                </Button>
              </Link>
              <Link href="/map">
                <Button className="secondary">
                  <p>Demo</p>
                </Button>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="container" style={{ padding: "0" }}>
            <Image
              src="./mockupGeoFlare.svg"
              alt=""
              style={{ paddingTop: "15vh", width: "1500px" }}
              width={1500}
              height={1000}
              priority
            />
          </div>
        </div>
      </motion.div>

      {/* About section */}
      <div className="about">
        <div className="container">
          <Image 
            src="./lineGeoFlare.svg" 
            alt=""
            width={400}
            height={250}
            style={{ width: "auto", height: "auto" }}
          />

          {/* Description */}
          <h2 ref={ref}>
            <span>
              {" "}
              {inView && (
                <TypeAnimation
                  sequence={[
                    //! one second wait
                    " Removing the uncertainty",
                  ]}
                  wrapper="span"
                  speed={15}
                />
              )}
            </span>{" "}
            of wildfires with satellite imagery, computer vision, and{" "}
            <span>real-time communication</span> between firefighters and
            operators
          </h2>

          {/* Line */}
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
          <Image 
            src="./lineRightGeoFlare.svg"
            alt=""
            width={400}
            height={250}
            style={{ width: "auto", height: "auto" }}
          />
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className="features">
        <div className="container">
          {/* Tagline */}
          <div className="tag">Features</div>

          {/* Title */}
          <h2>
            Live, actionable, and visual wildfire visualization{" "}
            <span>designed for action</span>
          </h2>

          {/* Description */}
          <p>We enable firefighters to take action across all use cases.</p>
        </div>

        <div className="container">
          <div className="grid">
            {/* Feature 1 */}
            <div
              className="feature-item"
              style={{
                transform: "scale(1.05)",
                border: "2px solid #12BADF",
                opacity: "1",
              }}
            >
              <h3>Live strategic recommendations</h3>
              <p>interact with a live chat to make the decisions for you.</p>
              <img src="./strategyGeoFlare.svg" alt="" />
            </div>

            {/* Feature 2 */}
            <div className="feature-item">
              <h3>Track Homes around a Radius</h3>
              <p>Receive info about surrounding homes to prevent fire spread</p>
              <img src="./radiusGeoFlare.svg" alt="" />
            </div>
          </div>

          <div className="grid-two">
            {/* Feature 3 */}
            <div className="feature-item">
              <h3>Path optimization for Firefighters</h3>
              <p>maps out the most efficient path to an address</p>
              <img src="./pathGeoFlare.svg" alt="" />
            </div>

            {/* Feature 4 */}
            <div className="feature-item">
              <h3>3D rendering of homes at risk</h3>
              <p>Get a ground-level view of the problem space</p>
              <img src="./3dGeoFlare.svg" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Callout feature */}
      <div className="callout">
        <div className="container">
          {/* Title */}
          <h1>
            <span>Everything</span> you’ll ever need to strategize for
            wildfires. <span>Automated</span> by AI.
          </h1>

          {/* Image */}
          <img src="./calloutGeoFire.svg" alt="" />
        </div>
      </div>

      {/* Call to action */}
      <div className="CTA">
        <img src="./backdropGeoFlare.svg" alt="" />
        <div className="container">
          {/* Title */}
          <h1>
            Strategize Fast. Save homes. <span>Save lives.</span>
          </h1>

          {/* Description */}
          <p style={{ color: "rgba(255,255,255,.5)" }}>
            unlock freedom and confidence in your decision-making
          </p>

          {/* Buttons */}
          <div className="row-contain" style={{ marginTop: "22px" }}>
            <Link href="/home">
              <Button className="primary">
                <p>Get started</p> <ArrowUpRightIcon />
              </Button>
            </Link>
            <Link href="/map">
              <Button className="secondary">
                <p>Demo</p>
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <hr />
        <h4>made with 🤍 and lots of ☕️ @ UCI</h4>
      </div>
    </>
  );
}
