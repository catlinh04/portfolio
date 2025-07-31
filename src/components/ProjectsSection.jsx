import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
// import { GitHub } from "lucide-react";
import Slider from "react-slick";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Perfect CV",
    description:
      "Developed the backend for an AI-powered CV generator using ASP.NET Core. Built RESTful APIs for authentication, template management, and CV grading. Integrated AI services for real-time suggestions and automated content generation, focusing on secure, scalable architecture and efficient data handling.",
    image: "/projects/perfect-cv-project.png",
    tags: [
      ".NET",
      "ASP.NET",
      "C#",
      "REST API",
      "Docker",
      "Redis",
      "Oauth2",
      "JWT",
      "Firebase",
      "AI Integration",
      "Clean Architecture",
    ],
    githubUrl: "https://github.com/orgs/fpt-devteam/teams/swd392/repositories",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "Built a personal portfolio website to showcase my projects and skills. Used React and Tailwind CSS for a responsive, fast, and accessible user experience.",
    image: "/projects/portfolio-website.png",
    tags: ["React", "Tailwind CSS", "JavaScript", "Responsive Design"],
    githubUrl: "https://github.com/catlinh04/portfolio",
  },
  {
    id: 3,
    title: "Koi Auction",
    description:
      "Developed backend RESTful APIs for an e-commerce platform using Node.js and Express. Handled product management, user authentication, order processing, and integrated secure payment gateway.",
    image: "/projects/koi-auction-project.png",
    tags: [
      ".NET",
      "ASP.NET",
      "C#",
      "SQL Server",
      "JWT",
      "Microservices",
      "REST API",
    ],
    githubUrl: "https://github.com/orgs/fpt-devteam/teams/swp391/repositories",
  },
  {
    id: 4,
    title: "Cinema Booking System",
    description:
      "Designed and implemented a full-stack cinema ticket booking system with features for movie browsing, seat selection, and secure payment processing. Integrated user accounts, booking history, and an admin panel for managing screenings and generating reports.",
    image: "/projects/cinema-project.png",
    tags: [".NET", "ASP.NET", "C#", "SQL Server", "JWT", "REST API"],
    githubUrl: "https://github.com/catlinh04",
  },
];

// Custom Arrow Components
const ArrowButton = ({ style, onClick, direction }) => {
  const posClass =
    direction === "left"
      ? "sm:-left-6 md:-left-20"
      : "sm:-right-6 md:-right-20";
  return (
    <button
      type="button"
      className={cn(
        "z-10 absolute top-1/2 -translate-y-1/2 items-center justify-center p-0 m-0 bg-transparent border-none focus:outline-none transition hover:text-primary",
        posClass,
        "hidden sm:flex"
      )}
      style={{ ...style, position: "absolute" }}
      onClick={onClick}
      aria-label={direction === "left" ? "Previous" : "Next"}
    >
      {direction === "left" ? (
        <svg
          width="44"
          height="44"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="drop-shadow-[0_0_8px_rgba(139,92,246,0.3)]"
        >
          <path d="m28 36-12-12 12-12" />
        </svg>
      ) : (
        <svg
          width="44"
          height="44"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="drop-shadow-[0_0_8px_rgba(139,92,246,0.3)]"
        >
          <path d="m16 36 12-12-12-12" />
        </svg>
      )}
    </button>
  );
};

export const ProjectsSection = () => {
  const [slider, setSlider] = useState(null);
  const [current, setCurrent] = useState(0);
  const [showArrows, setShowArrows] = useState(true);

  useEffect(() => {
    const checkWidth = () => {
      setShowArrows(window.innerWidth >= 640);
    };
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: showArrows,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    prevArrow: showArrows ? <ArrowButton direction="left" /> : undefined,
    nextArrow: showArrows ? <ArrowButton direction="right" /> : undefined,
    beforeChange: (oldIdx, newIdx) => setCurrent(newIdx),
  };

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-4 max-w-3xl mx-auto">
          A selection of my most notable projects, showcasing my skills in
          full-stack development, UI/UX design, and integration of modern
          technologies.
        </p>

        {/* <div className="flex justify-center mb-2">
          <ul className="flex gap-2">
            {projects.map((_, idx) => (
              <li key={idx}>
                <button
                  className={`w-6 h-1.5 rounded-md border transition-all duration-200
                    ${
                      current === idx
                        ? "bg-foreground border-foreground text-glow"
                        : "bg-white/30 border-white/30"
                    }
                  `}
                  onClick={() => slider && slider.slickGoTo(idx)}
                  aria-label={`Go to project ${idx + 1}`}
                />
              </li>
            ))}
          </ul>
        </div> */}

        <Slider ref={setSlider} {...settings} className="mb-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-80 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-1">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary/10 hover:bg-secondary transition-colors duration-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 mx-4">
                {project.description}
              </p>

              <div className="flex justify-between items-center mb-2">
                <div className="flex space-x-2 mx-6">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <div className="mt-6 text-center">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            href="https://github.com/catlinh04"
            target="_blank"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
