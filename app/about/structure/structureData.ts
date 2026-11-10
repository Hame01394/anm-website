export type OrganizationPerson = {
  name: string;
  position: string;
  image?: string;
  bio: string;
};

export type OrganizationUnit = {
  slug: string;
  name: string;
  shortDescription: string;
  responsibilities: string[];
  head: OrganizationPerson;
};

export const nationalLeadership: OrganizationPerson[] = [
  {
    name: "Daniel Temelso",
    position: "Secretary-General",
    image: "/images/secretary-general.png",
    bio: "Coordinates the movement's administrative work and supports cooperation across its national leadership and organizational structures.",
  },
  {
    name: "Yehshelu Gebremariam",
    position: "Head of Political Affairs",
    image: "/images/head-of-political-affairs.png",
    bio: "Leads political affairs, strategy and the development of the movement's national political agenda.",
  },
  {
    name: "Futsum Kidane",
    position: "Head of Media and Communication",
    image: "/images/head-of-media-and-communication.png",
    bio: "Coordinates public communications, media engagement and the presentation of the movement's positions.",
  },
  {
    name: "Asmerom Tesfahuney",
    position: "Head of External Relations",
    image: "/images/head-of-external-relations.png",
    bio: "Coordinates relations with international organizations, institutions and external partners.",
  },
];

export const chairperson: OrganizationPerson = {
  name: "Habtom Mehari",
  position: "Chairperson",
  image: "/images/chairperson.png",
  bio: "Provides national leadership and represents the movement in accordance with its principles and organizational framework.",
};

export const departments: OrganizationUnit[] = [
  {
    slug: "political-affairs",
    name: "Political Affairs and Strategy",
    shortDescription: "Political direction, strategy and the national agenda.",
    responsibilities: [
      "Develop the movement's political strategy and priorities.",
      "Prepare political statements, positions and programme proposals.",
      "Analyze political developments and advise national leadership.",
      "Coordinate political engagement and advocacy.",
    ],
    head: {
      name: "Yehshelu Gebremariam",
      position: "Head of Political Affairs",
      image: "/images/head-of-political-affairs.png",
      bio: "Leads political affairs and supports the development and communication of the movement's political programme.",
    },
  },
  {
    slug: "policy-research-planning",
    name: "Policy, Research and Planning",
    shortDescription: "Research and practical policy development.",
    responsibilities: [
      "Research political, economic and social challenges.",
      "Develop policy proposals and strategic plans.",
      "Prepare evidence-based recommendations.",
      "Coordinate research and policy publications.",
    ],
    head: {
      name: "To be appointed",
      position: "Department Head",
      bio: "The department head will be announced following an official appointment.",
    },
  },
  {
    slug: "media-communications",
    name: "Media and Communications",
    shortDescription: "Public information, media and communications.",
    responsibilities: [
      "Manage the movement's website and official publications.",
      "Prepare press releases and public statements.",
      "Coordinate interviews and media engagement.",
      "Manage social media and public information campaigns.",
    ],
    head: {
      name: "Futsum Kidane",
      position: "Head of Media and Communication",
      image: "/images/head-of-media-and-communication.png",
      bio: "Leads media and communications and coordinates the movement's public information activities.",
    },
  },
  {
    slug: "external-relations",
    name: "External Relations and Diplomacy",
    shortDescription: "International relations and external engagement.",
    responsibilities: [
      "Develop relationships with international institutions.",
      "Coordinate engagement with political and civic organizations.",
      "Present the movement's positions to external audiences.",
      "Support diplomatic and international advocacy initiatives.",
    ],
    head: {
      name: "Asmerom Tesfahuney",
      position: "Head of External Relations",
      image: "/images/head-of-external-relations.png",
      bio: "Leads external relations and coordinates engagement with international organizations and partners.",
    },
  },
  {
    slug: "organization-membership",
    name: "Organization and Membership",
    shortDescription: "Membership, internal organization and development.",
    responsibilities: [
      "Coordinate membership and recruitment.",
      "Maintain organizational records and membership procedures.",
      "Support the establishment of local chapters.",
      "Develop internal organizational guidelines.",
    ],
    head: {
      name: "To be appointed",
      position: "Department Head",
      bio: "The department head will be announced following an official appointment.",
    },
  },
  {
    slug: "finance-administration",
    name: "Finance and Administration",
    shortDescription: "Financial management and administration.",
    responsibilities: [
      "Prepare budgets and financial reports.",
      "Coordinate fundraising and financial administration.",
      "Maintain transparent financial records.",
      "Support administrative operations.",
    ],
    head: {
      name: "To be appointed",
      position: "Department Head",
      bio: "The department head will be announced following an official appointment.",
    },
  },
  {
    slug: "legal-constitutional-affairs",
    name: "Legal Affairs and Constitutional Development",
    shortDescription: "Legal research, rights and constitutional development.",
    responsibilities: [
      "Research constitutional and legal frameworks.",
      "Develop proposals for the protection of fundamental rights.",
      "Study democratic institutions and the rule of law.",
      "Provide legal and institutional policy recommendations.",
    ],
    head: {
      name: "To be appointed",
      position: "Department Head",
      bio: "The department head will be announced following an official appointment.",
    },
  },
  {
    slug: "cultural-education",
    name: "Cultural Affairs and Education",
    shortDescription: "Cultural heritage, language and education.",
    responsibilities: [
      "Promote Tigrinya language and cultural heritage.",
      "Support Ge'ez language and historical research.",
      "Develop cultural and educational initiatives.",
      "Document and preserve cultural traditions.",
    ],
    head: {
      name: "To be appointed",
      position: "Department Head",
      bio: "The department head will be announced following an official appointment.",
    },
  },
  {
    slug: "economic-development",
    name: "Economic Development",
    shortDescription: "Economic policy, investment and development.",
    responsibilities: [
      "Develop economic policy proposals.",
      "Research investment and industrial development opportunities.",
      "Promote enterprise, innovation and employment.",
      "Contribute to national reconstruction planning.",
    ],
    head: {
      name: "To be appointed",
      position: "Department Head",
      bio: "The department head will be announced following an official appointment.",
    },
  },
  {
    slug: "humanitarian-social-affairs",
    name: "Humanitarian and Social Affairs",
    shortDescription: "Humanitarian issues and social development.",
    responsibilities: [
      "Research humanitarian and social challenges.",
      "Develop proposals for community welfare.",
      "Coordinate relevant civic and humanitarian engagement.",
      "Promote equal access to essential services.",
    ],
    head: {
      name: "To be appointed",
      position: "Department Head",
      bio: "The department head will be announced following an official appointment.",
    },
  },
  {
    slug: "youth-womens-affairs",
    name: "Youth and Women's Affairs",
    shortDescription: "Participation and leadership development.",
    responsibilities: [
      "Encourage youth participation in the movement.",
      "Promote women's participation and leadership.",
      "Support training and leadership development.",
      "Coordinate youth and women's initiatives.",
    ],
    head: {
      name: "To be appointed",
      position: "Department Head",
      bio: "The department head will be announced following an official appointment.",
    },
  },
  {
    slug: "digital-technology",
    name: "Digital Technology and Information Systems",
    shortDescription: "Digital infrastructure and information systems.",
    responsibilities: [
      "Maintain digital platforms and information systems.",
      "Support website and technology operations.",
      "Develop digital communication tools.",
      "Promote responsible information management and digital security.",
    ],
    head: {
      name: "To be appointed",
      position: "Department Head",
      bio: "The department head will be announced following an official appointment.",
    },
  },
];

export const committees: OrganizationUnit[] = [
  {
    slug: "constitutional-affairs",
    name: "Constitutional Affairs Committee",
    shortDescription: "Constitutional principles and institutional design.",
    responsibilities: [
      "Examine constitutional principles and proposals.",
      "Study the separation of powers and institutional safeguards.",
      "Review proposals for democratic governance.",
      "Submit recommendations to national leadership.",
    ],
    head: {
      name: "To be appointed",
      position: "Committee Chairperson",
      bio: "The committee chairperson will be announced following an official appointment.",
    },
  },
  {
    slug: "ethics-accountability",
    name: "Ethics and Accountability Committee",
    shortDescription: "Ethical standards and organizational accountability.",
    responsibilities: [
      "Develop ethical standards for organizational officeholders.",
      "Promote transparency and accountability.",
      "Review internal governance procedures.",
      "Recommend measures to strengthen public trust.",
    ],
    head: {
      name: "To be appointed",
      position: "Committee Chairperson",
      bio: "The committee chairperson will be announced following an official appointment.",
    },
  },
  {
    slug: "finance-audit",
    name: "Finance and Audit Committee",
    shortDescription: "Financial oversight and accountability.",
    responsibilities: [
      "Review financial reports and budgets.",
      "Examine financial controls and procedures.",
      "Promote transparent financial management.",
      "Submit audit and oversight recommendations.",
    ],
    head: {
      name: "To be appointed",
      position: "Committee Chairperson",
      bio: "The committee chairperson will be announced following an official appointment.",
    },
  },
  {
    slug: "membership-elections",
    name: "Membership and Elections Committee",
    shortDescription: "Membership procedures and internal elections.",
    responsibilities: [
      "Review membership procedures.",
      "Develop transparent internal election processes.",
      "Support fair participation in organizational elections.",
      "Maintain relevant procedural guidelines.",
    ],
    head: {
      name: "To be appointed",
      position: "Committee Chairperson",
      bio: "The committee chairperson will be announced following an official appointment.",
    },
  },
  {
    slug: "policy-review",
    name: "Policy Review Committee",
    shortDescription: "Review and evaluation of policy proposals.",
    responsibilities: [
      "Review proposals submitted by departments.",
      "Assess consistency with the movement's principles.",
      "Coordinate specialist feedback.",
      "Submit policy recommendations.",
    ],
    head: {
      name: "To be appointed",
      position: "Committee Chairperson",
      bio: "The committee chairperson will be announced following an official appointment.",
    },
  },
  {
    slug: "disciplinary-mediation",
    name: "Disciplinary and Mediation Committee",
    shortDescription: "Internal dispute resolution and mediation.",
    responsibilities: [
      "Provide fair procedures for internal disputes.",
      "Support mediation and conflict resolution.",
      "Review disciplinary matters under approved rules.",
      "Protect procedural fairness and confidentiality.",
    ],
    head: {
      name: "To be appointed",
      position: "Committee Chairperson",
      bio: "The committee chairperson will be announced following an official appointment.",
    },
  },
  {
    slug: "congress-conference",
    name: "Congress and Conference Committee",
    shortDescription: "National congresses and official conferences.",
    responsibilities: [
      "Coordinate national congresses and conferences.",
      "Prepare meeting schedules and documentation.",
      "Support delegate and participant arrangements.",
      "Coordinate conference reports and outcomes.",
    ],
    head: {
      name: "To be appointed",
      position: "Committee Chairperson",
      bio: "The committee chairperson will be announced following an official appointment.",
    },
  },
];

export const regions: OrganizationUnit[] = [
  {
    slug: "eritrea",
    name: "Eritrea",
    shortDescription: "Regional and local organizational branches in Eritrea.",
    responsibilities: [
      "Coordinate regional and local organizational activities.",
      "Support communication between local chapters and national leadership.",
      "Organize community engagement and membership activities.",
      "Report regional priorities and organizational developments.",
    ],
    head: {
      name: "To be appointed",
      position: "Regional Head",
      bio: "The regional head will be announced following an official appointment.",
    },
  },
  {
    slug: "ethiopia",
    name: "Ethiopia",
    shortDescription: "Regional organization and community engagement in Ethiopia.",
    responsibilities: [
      "Coordinate regional activities and local chapters.",
      "Support community participation.",
      "Maintain communication with national leadership.",
      "Report regional organizational priorities.",
    ],
    head: {
      name: "To be appointed",
      position: "Regional Head",
      bio: "The regional head will be announced following an official appointment.",
    },
  },
  {
    slug: "israel",
    name: "Israel",
    shortDescription: "Regional organization and community engagement in Israel.",
    responsibilities: [
      "Coordinate local organizational activities.",
      "Support membership and community engagement.",
      "Coordinate communication with national leadership.",
      "Organize approved public and community initiatives.",
    ],
    head: {
      name: "To be appointed",
      position: "Regional Head",
      bio: "The regional head will be announced following an official appointment.",
    },
  },
  {
    slug: "europe",
    name: "Europe",
    shortDescription: "Coordination of country-level branches across Europe.",
    responsibilities: [
      "Coordinate country-level branches.",
      "Support cooperation between local chapters.",
      "Encourage membership and community participation.",
      "Communicate regional priorities to national leadership.",
    ],
    head: {
      name: "To be appointed",
      position: "Regional Coordinator",
      bio: "The regional coordinator will be announced following an official appointment.",
    },
  },
  {
    slug: "north-america",
    name: "North America",
    shortDescription: "Coordination of country-level branches across North America.",
    responsibilities: [
      "Coordinate country-level branches.",
      "Support local organizational development.",
      "Encourage community participation.",
      "Maintain communication with national leadership.",
    ],
    head: {
      name: "To be appointed",
      position: "Regional Coordinator",
      bio: "The regional coordinator will be announced following an official appointment.",
    },
  },
  {
    slug: "other-regions",
    name: "Other International Locations",
    shortDescription: "Developing branches in other international locations.",
    responsibilities: [
      "Support the establishment of new branches.",
      "Coordinate local community participation.",
      "Maintain communication with national leadership.",
      "Support the development of regional organizational capacity.",
    ],
    head: {
      name: "To be appointed",
      position: "Regional Coordinator",
      bio: "The regional coordinator will be announced following an official appointment.",
    },
  },
];