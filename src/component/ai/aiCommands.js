const scrollToSection = (id) => {
  document
    .getElementById(id)
    ?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
};

export const commands = [
  {
    keywords: [
      "home",
      "hero",
      "start",
      "landing",
    ],
    action: () => scrollToSection("hero"),
  },

  {
    keywords: [
      "about",
      "journey",
      "my journey",
      "introduction",
    ],
    action: () => scrollToSection("journey"),
  },

  {
    keywords: [
      "career",
      "experience",
      "work",
      "job",
      "company",
    ],
    action: () => scrollToSection("career"),
  },

  {
    keywords: [
      "skills",
      "tech",
      "technology",
      "frontend",
      "backend",
      "database",
    ],
    action: () => scrollToSection("skills"),
  },

  {
    keywords: [
      "project",
      "projects",
      "portfolio",
      "work",
    ],
    action: () => scrollToSection("projects"),
  },

  {
    keywords: [
      "contact",
      "email",
      "phone",
      "hire",
      "linkedin",
      "connect",
    ],
    action: () => scrollToSection("contact"),
  },

  // {
  //   keywords: [
  //     "resume",
  //     "cv",
  //     "download resume",
  //     "download cv",
  //   ],
  //   action: () => {
  //     window.open("/assets/saumya_gupta-resume_2026.pdf", "_blank");
  //   },
  // },

  {
  keywords: [
    "resume",
    "cv",
    "download resume",
    "download cv",
  ],

  action: () => {
    window.open(
      `${import.meta.env.BASE_URL}assets/saumya_gupta-resume_2026.pdf`,
      "_blank"
    );
  },
},

  {
    keywords: [
      "github",
      "source code",
      "repository",
      "repo",
    ],
    action: () => {
      window.open(
        "https://github.com/Saumya19gupta",
        "_blank"
      );
    },
  },

  {
    keywords: [
      "linkedin",
      "profile",
    ],
    action: () => {
      window.open(
        "https://www.linkedin.com/in/saumyaguptaa1903/",
        "_blank"
      );
    },
  },
];