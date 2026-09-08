export const profile = {
  name: "Lalit Garghate",
  handle: "lalitlsg",
  role: "SDE III — UI",
  company: "Navi",
  location: "Bangalore / Maharashtra, India",
  years: 6,
  email: "lalit.garghate@gmail.com",
  phone: "+91 9673720736",
  resumeUrl: "/Lalit_Garghate_Resume.pdf",
  resumeDrive:
    "https://drive.google.com/file/d/1rfyHEMBzgsqMRPNgW2MTLtbtE7b_YWAL/view",
  github: "https://github.com/lalitlsg",
  linkedin: "https://www.linkedin.com/in/lalit-garghate/",
  summary:
    "Senior Frontend Engineer with 6 years of experience designing and building scalable, high-performance customer-facing web applications using React.js, Next.js, and modern JavaScript. Experienced in frontend architecture, SSR, server-driven UI, authentication, localization, and Core Web Vitals.",
};

export const stats = [
  { value: "6+", label: "Years building product UI" },
  { value: "25M+", label: "Daily payments at Paytm checkout" },
  { value: "54%", label: "Faster WebView render at Navi" },
  { value: "39%", label: "Faster CRM ticket handling" },
];

export const highlights = [
  "Frontend architecture for Navi Personal Loan on Next.js",
  "HTTP-only cookie auth, SSR, and server-driven UI",
  "i18Next localization and Core Web Vitals work",
  "Payments, lending, CRM, KYC, and multi-cloud platforms",
];

export const experience = [
  {
    company: "Navi",
    location: "Bangalore",
    period: "Jul 2022 — Present",
    roles: [
      {
        title: "SDE III — UI",
        period: "Jul 2024 — Present",
        points: [
          "Designed and architected Navi's Personal Loan web application using Next.js, defining frontend architecture and reusable component modules.",
          "Implemented secure HTTP-only cookie authentication, strengthening session security against client-side attacks.",
          "Integrated a Server-Driven UI architecture for dynamic feature rollout without frontend deployments.",
          "Optimized a critical Android WebView page from 960ms to 440ms (54% faster).",
          "Built a settlement portal for Recharge and Bill Payments, streamlining transaction operations.",
          "Implemented a scalable multilingual solution with i18Next across the Personal Loan journey.",
        ],
      },
      {
        title: "SDE II — UI",
        period: "Jul 2023 — Jul 2024",
        points: [
          "Developed a Video KYC platform for secure live customer verification by lending agents.",
          "Designed an email communication module with ticket-based conversation threads.",
          "Integrated REST APIs with backend teams to ship production-grade, responsive web apps.",
        ],
      },
      {
        title: "SDE I — UI",
        period: "Jul 2022 — Jul 2023",
        points: [
          "Designed a real-time CRM chat platform that improved customer communication and response time.",
          "Implemented chatbot workflows that automated common queries and reduced manual effort.",
          "Built a data annotation platform supporting machine-learning labeling workflows.",
        ],
      },
    ],
  },
  {
    company: "Paytm",
    location: "Bangalore",
    period: "May 2021 — Jul 2022",
    roles: [
      {
        title: "SDE — UI",
        period: "May 2021 — Jul 2022",
        points: [
          "Built and maintained Paytm's Checkout JavaScript Library processing 25+ million daily transactions across UPI, cards, wallets, and net banking.",
          "Developed reusable checkout components and improved long-term maintainability.",
          "Created monitoring dashboards for Electronic Data Capture (EDC) devices.",
          "Improved developer documentation, reducing merchant onboarding effort for the payment gateway.",
        ],
      },
    ],
  },
  {
    company: "GS Lab",
    location: "Pune",
    period: "May 2019 — May 2021",
    roles: [
      {
        title: "SDE — UI",
        period: "May 2019 — May 2021",
        points: [
          "Developed a Multi-Cloud Management Portal for VMware vSphere, AWS, and Azure VM lifecycle operations.",
          "Implemented authentication, authorization, approval workflows, and role-based access control.",
          "Designed an employee seat-booking portal with an interactive floor map for COVID-era social distancing.",
          "Collaborated across teams on scalable, reusable frontend modules.",
        ],
      },
    ],
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    items: [
      "JavaScript (ES6+)",
      "TypeScript",
      "React.js",
      "Next.js",
      "HTML5",
      "CSS3",
      "SCSS",
      "Tailwind CSS",
      "Redux",
      "Redux Toolkit",
      "React Hooks",
      "i18Next",
      "Webpack",
    ],
  },
  {
    title: "Performance & architecture",
    items: [
      "SSR / CSR",
      "Server-Driven UI",
      "Code splitting",
      "Lazy loading",
      "Core Web Vitals",
      "Responsive design",
      "Component architecture",
      "System design",
    ],
  },
  {
    title: "Backend & platform",
    items: ["Node.js", "MongoDB", "Firebase", "REST APIs", "Docker", "Kubernetes", "AWS", "Nginx"],
  },
  {
    title: "Engineering",
    items: ["Git / GitHub", "Jira", "GoCD", "DSA", "Microservices", "VS Code", "Windsurf"],
  },
];

export const education = [
  {
    title: "B.Tech, Computer Science",
    place: "SGGSIE&T, Nanded",
    period: "Jul 2015 — May 2019",
    meta: "CGPA 7.24",
  },
  {
    title: "HSC",
    place: "GBMM Jr. College, Hinganghat",
    period: "May 2013 — Feb 2015",
    meta: "85.23%",
  },
  {
    title: "SSC",
    place: "Bharat Vidyalaya, Hinganghat",
    period: "Feb 2012 — Mar 2013",
    meta: "91.27%",
  },
];

export const awards = [
  "Winner, Gen AI Hackathon, Navi",
  "Meritorious Student Awards for HSC and SSC",
];

export const blogs = [
  {
    id: 1,
    title: "Handling OpenStack through APIs",
    info: "Working with OpenStack programmatically via APIs.",
    link: "https://medium.com/@lalit.garghate/handling-openstack-through-apis-1dd9298b68c8",
  },
  {
    id: 2,
    title: "OpenStack two-node setup",
    info: "Two-node VirtualBox setup for OpenStack installation.",
    link: "https://medium.com/@lalit.garghate/two-node-setup-in-virtual-box-for-openstack-installation-a36db75a10fe",
  },
  {
    id: 3,
    title: "WebSockets in Golang",
    info: "Realtime data from MongoDB over WebSockets in Go.",
    link: "https://medium.com/@lalit.garghate/create-websocket-in-golang-to-take-data-from-mongodb-5e90651611a6",
  },
  {
    id: 4,
    title: "Zabbix + vSphere",
    info: "Monitor VMware vSphere (vCenter) with Zabbix.",
    link: "https://medium.com/@lalit.garghate/monitor-vmware-vsphere-vcenter-with-zabbix-44e77d46c1fc",
  },
];

export const socials = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/lalit-garghate/" },
  { name: "GitHub", href: "https://github.com/lalitlsg" },
  { name: "LeetCode", href: "https://leetcode.com/lalitlsg/" },
  { name: "HackerRank", href: "https://www.hackerrank.com/lalit_garghate1" },
  { name: "GeeksforGeeks", href: "https://auth.geeksforgeeks.org/user/lalitgarghate/profile" },
  { name: "YouTube", href: "https://www.youtube.com/channel/UCHOKI7oqx0J7iEmeTR2V7xw" },
  { name: "Medium", href: "https://medium.com/@lalit.garghate" },
  { name: "X", href: "https://twitter.com/lalitlsg" },
  { name: "Stack Overflow", href: "https://stackoverflow.com/users/11844605/lalit-garghate" },
  { name: "AngelList", href: "https://angel.co/u/lalit-garghate" },
];

export const codingProfiles = [
  { name: "LeetCode", href: "https://leetcode.com/lalitlsg/" },
  { name: "HackerRank", href: "https://www.hackerrank.com/lalit_garghate1" },
  { name: "GeeksforGeeks", href: "https://auth.geeksforgeeks.org/user/lalitgarghate/profile" },
];
