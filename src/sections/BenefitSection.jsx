import { useGSAP } from "@gsap/react";
import ClipPathTitle from "../components/ClipPathTitle";
import gsap from "gsap";
import VideoPinSection from "../components/VideoPinSection";

const BenefitSection = () => {
  useGSAP(() => {
    const revealTl = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".benefit-section",
        start: "top 60%",
        end: "top top",
        scrub: 1.5,
      },
    });

    revealTl
      .to(".benefit-section .first-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".benefit-section .second-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".benefit-section .third-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".benefit-section .fourth-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      });
  });

  return (
    <section className="benefit-section">
      <div className="container mx-auto pt-20">
        <div className="col-center">
          <p>
            What you get inside Dev O’Clock: <br />
            a fast, friendly space to build, learn, and stay in the loop.
          </p>

          <div className="mt-20 col-center">
            <ClipPathTitle
              title={"Announcements that matter"}
              color={"#0b1226"}
              bg={"#a5f3fc"}
              className={"first-title"}
              borderColor={"#0b1226"}
            />
            <ClipPathTitle
              title={"Topic-based chats"}
              color={"#0b1226"}
              bg={"#bbf7d0"}
              className={"second-title"}
              borderColor={"#0b1226"}
            />
            <ClipPathTitle
              title={"Projects & hack nights"}
              color={"#0b1226"}
              bg={"#fde68a"}
              className={"third-title"}
              borderColor={"#0b1226"}
            />
            <ClipPathTitle
              title={"Career drops & notes"}
              color={"#0b1226"}
              bg={"#c7d2fe"}
              className={"fourth-title"}
              borderColor={"#0b1226"}
            />
          </div>

          <div className="md:mt-0 mt-10">
            <p>Weekly sprints, collab partners, and the accountability to ship.</p>
          </div>
        </div>
      </div>

      <div className="relative overlay-box">
        <VideoPinSection />
      </div>
    </section>
  );
};

export default BenefitSection;
