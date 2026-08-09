import "./About.css";
import aboutVideo from "../../assets/videos/about.mp4";

export default function About() {
  return (
    <section
      id="about"
      className="about-section"
    >
      {/*  relative flex min-h-screen items-center bg-white py-28 */}
      
      <div className="mx-auto w-full max-w-[1440px] px-8 xl:px-12">
        <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-[45%_55%]">
          <div>
            <span className="mb-6 inline-block rounded-full bg-[#16C6B7]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.15em] text-[#16C6B7]">
              About ZyneDigix
            </span>

            <h2 className="max-w-xl text-5xl font-black leading-tight text-[#111111]">
              We Design Digital Experiences That Inspire, Engage & Convert.
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-9 text-[#1D3633]">
              We combine premium UI/UX, interactive web technologies, cinematic
              motion, AI-powered workflows and immersive storytelling to create
              unforgettable digital experiences.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-6">
              <div className="rounded-3xl border border-black/5 p-6">
                <h3 className="text-xl font-bold text-[#111111]">
                  Premium UI/UX
                </h3>

                <p className="mt-4 text-[#666666] text-lg">
                  Modern interfaces focused on business growth.
                </p>
              </div>

              <div className="rounded-3xl border border-black/5 p-6">
                <h3 className="text-xl font-bold text-[#111111]">
                  Interactive 3D
                </h3>

                <p className="mt-3 text-[#666666] text-lg">
                  Immersive experiences using WebGL & Three.js.
                </p>
              </div>

              <div className="rounded-3xl border border-black/5 p-6">
                <h3 className="text-xl font-bold text-[#111111]">
                  AI Solutions
                </h3>

                <p className="mt-3 text-[#666666] text-lg">
                  Automation that improves productivity.
                </p>
              </div>

              <div className="rounded-3xl border border-black/5 p-6">
                <h3 className="text-xl font-bold text-[#111111]">
                  Performance
                </h3>

                <p className="mt-3 text-[#666666] text-lg">
                  Fast, scalable and SEO-friendly websites.
                </p>
              </div>
            </div>
          </div>

          <div className="about-video-wrapper">
            <div className="about-video-glow"></div>

            <div className="about-video-card">
              <video
                className="about-video"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                src={aboutVideo}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
