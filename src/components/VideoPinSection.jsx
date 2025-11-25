import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

const VideoPinSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  useGSAP(() => {
    if (!isMobile) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".vd-pin-section",
          start: "-15% top",
          end: "200% top",
          scrub: 1.5,
          pin: true,
        },
      });

      tl.to(".video-box", {
        clipPath: "circle(100% at 50% 50%)",
        ease: "power1.inOut",
      });
    }
  });

  return (
    <section className="vd-pin-section">
      <div
        style={{
          clipPath: isMobile
            ? "circle(100% at 50% 50%)"
            : "circle(6% at 50% 50%)",
        }}
        className="size-full video-box"
      >
        <video
          src="https://videos.pexels.com/video-files/3861446/3861446-uhd_2560_1440_30fps.mp4"
          playsInline
          muted
          loop
          autoPlay
          poster="/images/event.jpeg"
        />

        <div className="abs-center md:scale-100 scale-200">
          <div className="play-btn">
            <p className="text-milk font-semibold uppercase text-center text-[2vw] md:text-[1vw] tracking-tight">
              Inside Dev O’Clock
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPinSection;
