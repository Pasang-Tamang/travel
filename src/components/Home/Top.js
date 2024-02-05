"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import { motion } from "framer-motion";
import { useScroll } from "../UseScroll";
import { topPlaceContent } from "@/animation/Animation";
import { topDist } from "@/animation/Animation";

const Top = ({ destination }) => {
  const [element, controls] = useScroll();

  return (
    <>
      <section className="top-destination pt-5" ref={element}>
        <h1 className="mb-4">
          <span>Top</span> Destinations
        </h1>
        <Container>
          <Row className="gy-4">
            {console.log("desti", destination)}
            {destination?.slice(0, 3)?.map((item) => {
              return (
                <Col md={6} lg={4} key={item.id}>
                  <div className="dist-box">
                    <Link href={"/trip"}>
                      <motion.div
                        className="img-box"
                        variants={topDist}
                        animate={controls}
                        transition={{
                          duration: 0.8,
                        }}
                      >
                        <img
                          src={
                            "https://destination.missionsummittreks.com/" +
                            item?.image
                          }
                          alt=""
                          className="img-fluid"
                          loading="lazy"
                        />
                        <div className="top-dist-content">
                          <div className="title-place">
                            <motion.div
                              animate={controls}
                              variants={topPlaceContent}
                            >
                              <h2> {item.title}</h2>
                              <span>Holiday Package</span>
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Top;