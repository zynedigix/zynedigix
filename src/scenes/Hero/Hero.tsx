const Hero = () => {
    return (
        <section
            id="hero"
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
            }}
        >
            <div
                style={{
                    textAlign: "center",
                    zIndex: 10,
                }}
            >
                <p>AI Powered Digital Experiences</p>

                <h1>
                    We Don't Build Websites.
                    <br />
                    We Build Experiences.
                </h1>

                <p>
                    Premium UX.
                    <br />
                    Interactive 3D.
                    <br />
                    Built for ambitious brands.
                </p>

                <button>
                    Start Your Project
                </button>
            </div>
        </section>
    );
};

export default Hero;