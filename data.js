const DATA = {
  skills: [
    { category: "Languages", icon: "⌨", items: ["C", "C++", "Java"] },
    { category: "Backend", icon: "⚙", items: ["Node.js", "WebSocket", "XAMPP"] },
    { category: "Database", icon: "🗄", items: ["MySQL"] },
    { category: "Frontend", icon: "🎨", items: ["HTML", "CSS", "JavaScript"] },
    { category: "CS Concepts", icon: "🧠", items: ["DSA", "OOP", "DBMS", "OS"] },
    { category: "Tools", icon: "🛠", items: ["VS Code", "Git", "MS Office"] },
  ],

  projects: [
    {
      title: "Doctor-Patient Consultation Chat",
      period: "Mar 2025 – May 2025",
      description:
        "Real-time, browser-based chat app for secure telemedicine communication using unique room IDs for private sessions.",
      highlights: [
        "One-on-one messaging & file sharing",
        "Live user status updates",
        "WebSocket-based low-latency communication",
        "Responsive UI across all devices",
      ],
      stack: ["Node.js", "WebSocket", "XAMPP", "JavaScript"],
      emoji: "🏥",
      color: "#0ea5e9",
    },
    {
      title: "Atlas Game — Word Antakshari",
      period: "Jan 2025 – Feb 2025",
      description:
        "Multiplayer online game inspired by the Indian musical game Antakshari with real-time gameplay over WebSockets.",
      highlights: [
        "Real-time multiplayer via WebSocket",
        "Searchable song database",
        "User authentication system",
        "Game room management",
      ],
      stack: ["Node.js", "WebSocket", "MySQL", "JavaScript"],
      emoji: "🎵",
      color: "#f59e0b",
    },
  ],

  education: [
    {
      year: "2027 (Expected)",
      degree: "M.C.A",
      institution: "NIT, Trichy",
      score: "7.30 CGPA*",
    },
    {
      year: "2023",
      degree: "B.C.A",
      institution: "Christian Eminent College, Indore",
      score: "81.68%",
    },
    {
      year: "2020",
      degree: "Class XII (ISC)",
      institution: "St. Joseph Montessori School, Lucknow",
      score: "77.00%",
    },
    {
      year: "2018",
      degree: "Class X (ICSE)",
      institution: "St. Joseph Montessori School, Lucknow",
      score: "78.00%",
    },
  ],

  activities: [
    {
      icon: "🏆",
      title: "1st Place — Mystic Maze",
      sub: "Acumen Intra-Dept Fest · ACM, NIT Trichy",
    },
    {
      icon: "🏃",
      title: "10 KM Marathon",
      sub: "Sportsfete'24 · NIT Trichy",
    },
    {
      icon: "🥇",
      title: "1st Place — Kho-Kho",
      sub: "Spardha'20 · St. Joseph Inter-School Meet",
    },
    {
      icon: "🤝",
      title: "Volunteer — VERSION'25",
      sub: "Event Execution Committee · NIT Trichy",
    },
  ],
};
