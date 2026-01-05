export interface Tour {
  id: string;
  name: string;
  duration: string;
  price: number;
  highlights: string[];
  description: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image?: string;
  destination?: string;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  location: string;
  excerpt: string;
  image?: string;
  description?: string;
}

export interface Destination {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  longDescription: string;
  image: string;
  wildlife: string[];
  area: string;
  established: string;
  tours: Tour[];
  news: NewsItem[];
  stats: {
    area: string;
    species: number;
    visitors: string;
  };
}

// Main news items that aren't specific to a single destination
export const mainNews: NewsItem[] = [
  {
    id: "main1",
    title: "TAWA YAKABIDHI BWENI LA WASICHANA SHULE YA SEKONDARI MCHENGERWA, RUFIJI",
    date: "2024-12-15",
    excerpt: "TAWA imekabidhi bweni la wasichana shule ya sekondari Mchengerwa, Rufiji kwa ajili ya kuimarisha elimu na maendeleo ya jamii.",
    image: "news-image" // Uses image from src/assets/news/latest/image.png
  },
  {
    id: "main2",
    title: "New Lion Enclosure Opening Soon",
    date: "2024-12-15",
    excerpt: "State-of-the-art lion habitat with improved facilities for both animals and visitors.",
    destination: "Tabora Zoo",
    image: "news-image" // Uses image from src/assets/news/latest/image.png
  },
  {
    id: "main3",
    title: "New Anti-Poaching Unit Deployed",
    date: "2024-12-12",
    excerpt: "Enhanced protection measures implemented across the reserve.",
    destination: "Selous Game Reserve",
    image: "news-image" // Uses image from src/assets/news/latest/image.png
  },
  {
    id: "main4",
    title: "TAWA YAGUSA MAISHA YA WANANCHI MEATU",
    date: "2024-12-10",
    excerpt: "TAWA inaendelea kugusa maisha ya wananchi kwa kuwekeza katika miradi mbalimbali ya maendeleo ya jamii.",
    image: "tawa-gusa-maisha-meatu" // Uses image from src/assets/news/latest/ folder
  }
];

// Upcoming events data
export const upcomingEvents: EventItem[] = [
  {
    id: 'e1',
    title: 'Wildlife Conservation Day',
    date: '2025-01-15',
    location: 'Pande Game Reserve',
    excerpt: 'Join us for a day of conservation activities and wildlife education.',
    description: 'Join us for a day of conservation activities and wildlife education. This special event brings together conservationists, researchers, and wildlife enthusiasts to celebrate and learn about Tanzania\'s incredible biodiversity. Participate in guided tours, educational workshops, and hands-on conservation activities.'
  },
  {
    id: 'e2',
    title: 'Guided Night Safari',
    date: '2025-01-22',
    location: 'Mpanga Kipengele',
    excerpt: 'Experience the magic of the African bush at night with our expert guides.',
    description: 'Experience the magic of the African bush at night with our expert guides. Discover the nocturnal world of Tanzania\'s wildlife as you embark on an unforgettable night safari. Our experienced guides will help you spot elusive creatures that only come out after dark, including leopards, hyenas, and various nocturnal birds.'
  },
  {
    id: 'e3',
    title: 'Bird Watching Tour',
    date: '2025-02-05',
    location: 'Selous Game Reserve',
    excerpt: 'Discover the incredible birdlife of Tanzania with our ornithology experts.',
    description: 'Discover the incredible birdlife of Tanzania with our ornithology experts. Tanzania is home to over 1,000 bird species, making it one of the world\'s premier bird-watching destinations. Join our expert ornithologists for a comprehensive tour of Selous Game Reserve, where you\'ll learn to identify various species and understand their behaviors and habitats.'
  },
  {
    id: 'e4',
    title: 'Community Conservation Workshop',
    date: '2025-02-15',
    location: 'Tabora Zoo',
    excerpt: 'Learn about community-based conservation efforts and how you can help.',
    description: 'Learn about community-based conservation efforts and how you can help. This workshop focuses on the importance of involving local communities in conservation efforts. Learn about successful community-based conservation programs, sustainable practices, and how you can contribute to protecting Tanzania\'s wildlife heritage for future generations.'
  },
  {
    id: 'e5',
    title: 'Elephant Migration Observation',
    date: '2025-03-10',
    location: 'Ikorongo & Grumeti Reserves',
    excerpt: 'Witness the spectacular elephant migration through critical corridors.',
    description: 'Witness the spectacular elephant migration through critical corridors. Join us for a unique opportunity to observe one of nature\'s most impressive spectacles - the annual elephant migration. Learn about the critical migration corridors that connect these twin reserves and the conservation efforts to protect these essential pathways.'
  },
  {
    id: 'e6',
    title: 'Photography Safari Workshop',
    date: '2025-03-20',
    location: 'Mikumi National Park',
    excerpt: 'Capture stunning wildlife moments with professional photography guidance.',
    description: 'Capture stunning wildlife moments with professional photography guidance. Perfect your wildlife photography skills with our expert photographers. Learn techniques for capturing the perfect shot, understanding animal behavior, and using natural light to create breathtaking images of Tanzania\'s wildlife.'
  }
];

export const destinations: Destination[] = [
  {
    id: "1",
    name: "Pande Game Reserve",
    slug: "pande",
    tagline: "Where Wilderness Meets Wonder",
    description: "A pristine wilderness sanctuary featuring dense jungle forests and winding rivers.",
    longDescription: "Pande Game Reserve represents one of Tanzania's most remarkable conservation success stories. This lush sanctuary is home to an incredible diversity of wildlife, from majestic elephants to rare bird species. The reserve's dense forests and river systems create a unique ecosystem that supports both terrestrial and aquatic life.",
    image: "/destination-pande.jpg",
    wildlife: ["African Elephants", "Lions", "Leopards", "Buffalo", "Various Antelope Species"],
    area: "2,500 km²",
    established: "1994",
    tours: [
      {
        id: "p1",
        name: "Jungle Safari Adventure",
        duration: "3 Days / 2 Nights",
        price: 850,
        highlights: ["Game drives", "Walking safari", "Bird watching", "Night safari"],
        description: "Immerse yourself in the heart of Pande's wilderness with expert guides."
      },
      {
        id: "p2",
        name: "River Expedition",
        duration: "2 Days / 1 Night",
        price: 550,
        highlights: ["Boat safari", "Fishing experience", "Riverside camping", "Wildlife viewing"],
        description: "Explore Pande's waterways and discover aquatic wildlife."
      },
      {
        id: "p3",
        name: "Photography Special",
        duration: "5 Days / 4 Nights",
        price: 1200,
        highlights: ["Professional guide", "Hide photography", "Golden hour drives", "Post-processing workshop"],
        description: "Capture stunning wildlife images with expert photography guidance."
      }
    ],
    news: [
      {
        id: "pn1",
        title: "New Elephant Corridor Established",
        date: "2024-12-10",
        excerpt: "A new wildlife corridor has been established to protect elephant migration routes."
      },
      {
        id: "pn2",
        title: "Conservation Success: Lion Population Grows",
        date: "2024-11-28",
        excerpt: "Recent surveys show a 15% increase in the lion population over the past year."
      }
    ],
    stats: {
      area: "2,500 km²",
      species: 350,
      visitors: "25,000+"
    }
  },
  {
    id: "2",
    name: "Mpanga Kipengele",
    slug: "mpanga-kipengele",
    tagline: "The Hidden Gem of Tanzania's Wilderness",
    description: "A pristine natural reserve featuring diverse ecosystems and unique wildlife species.",
    longDescription: "Mpanga Kipengele is a hidden treasure in Tanzania's conservation landscape, known for its rich biodiversity and relatively untouched wilderness. The reserve offers a more intimate wildlife experience, with opportunities to see both common and rare species in their natural habitat. Its varied terrain includes woodlands, grasslands, and seasonal wetlands that support a wide range of flora and fauna.",
    image: "/destination-mpanga.jpg",
    wildlife: ["African Elephants", "Lions", "Leopards", "Buffalo", "Various Antelope Species"],
    area: "1,850 km²",
    established: "1978",
    tours: [
      {
        id: "m1",
        name: "Classic Safari Experience",
        duration: "4 Days / 3 Nights",
        price: 950,
        highlights: ["Full-day game drives", "Sundowner experience", "Bush breakfast", "Night drives"],
        description: "The quintessential African safari experience in Mikumi's stunning landscapes."
      },
      {
        id: "m2",
        name: "Weekend Getaway",
        duration: "2 Days / 1 Night",
        price: 450,
        highlights: ["Morning game drive", "Afternoon drive", "Picnic lunch", "Sunset viewing"],
        description: "Perfect for a quick escape into the wild."
      },
      {
        id: "m3",
        name: "Big Five Quest",
        duration: "6 Days / 5 Nights",
        price: 1500,
        highlights: ["Extended game drives", "Walking safari", "Bird watching", "Cultural visit"],
        description: "An in-depth exploration to spot all of Africa's Big Five."
      }
    ],
    news: [
      {
        id: "mn1",
        title: "Rare Wild Dog Pack Spotted",
        date: "2024-12-05",
        excerpt: "Rangers have confirmed sightings of a pack of endangered African wild dogs."
      },
      {
        id: "mn2",
        title: "New Visitor Center Opens",
        date: "2024-11-15",
        excerpt: "State-of-the-art visitor center now open to enhance tourist experience."
      }
    ],
    stats: {
      area: "3,230 km²",
      species: 400,
      visitors: "50,000+"
    }
  },
  {
    id: "3",
    name: "Tabora Zoo",
    slug: "tabora-zoo",
    tagline: "A Unique Wildlife Experience in the Heart of Tanzania",
    description: "Discover the diverse wildlife of Tanzania in a family-friendly environment with well-maintained habitats.",
    longDescription: "Tabora Zoo offers visitors a chance to see a wide variety of African wildlife in a more accessible setting. With a focus on conservation and education, the zoo provides excellent opportunities for families and wildlife enthusiasts to learn about Tanzania's rich biodiversity. The zoo features both native and exotic species in spacious, naturalistic enclosures.",
    image: "/destination-tabora.jpg",
    wildlife: ["Lions", "Giraffes", "Zebras", "Monkeys", "Various Bird Species"],
    area: "50 hectares",
    established: "1985",
    tours: [
      {
        id: "t1",
        name: "Family Day Out",
        duration: "1 Day",
        price: 150,
        highlights: ["Guided zoo tour", "Animal feeding sessions", "Educational talks", "Children's play area"],
        description: "A perfect day out for families to enjoy and learn about wildlife together."
      },
      {
        id: "t2",
        name: "Behind the Scenes",
        duration: "3 Hours",
        price: 75,
        highlights: ["Keeper for a day experience", "Animal feeding", "Conservation talk", "Photo opportunities"],
        description: "Get exclusive access to see what goes on behind the scenes at the zoo."
      },
      {
        id: "t3",
        name: "Sunset Safari",
        duration: "4 Hours",
        price: 90,
        highlights: ["Evening animal viewing", "Sunset views", "Nocturnal animal exhibit", "Dinner package available"],
        description: "Experience the zoo in the beautiful evening light when many animals are most active."
      }
    ],
    news: [
      {
        id: "tn1",
        title: "New Lion Enclosure Opening Soon",
        date: "2024-12-15",
        excerpt: "State-of-the-art lion habitat with improved facilities for both animals and visitors.",
        image: "/news/lion-enclosure.jpg"
      },
      {
        id: "tn2",
        title: "Conservation Breeding Program Success",
        date: "2024-11-10",
        excerpt: "Successful breeding of endangered species marks a milestone for our conservation efforts.",
        image: "/news/breeding-success.jpg"
      }
    ],
    stats: {
      area: "50 hectares",
      species: 120,
      visitors: "100,000+"
    }
  },
  {
    id: "4",
    name: "Selous Game Reserve",
    slug: "selous",
    tagline: "Africa's Untamed Wilderness",
    description: "One of Africa's largest protected areas with pristine rivers and diverse ecosystems.",
    longDescription: "The Selous Game Reserve is a UNESCO World Heritage Site and one of the largest faunal reserves in the world. Its river systems, including the mighty Rufiji River, create a unique environment where hippos, crocodiles, and a vast array of bird species thrive alongside big game.",
    image: "/destination-selous.jpg",
    wildlife: ["Hippos", "Crocodiles", "Elephants", "Buffalo", "Over 440 Bird Species"],
    area: "50,000 km²",
    established: "1922",
    tours: [
      {
        id: "s1",
        name: "River Safari Ultimate",
        duration: "5 Days / 4 Nights",
        price: 1350,
        highlights: ["Boat safaris", "Walking safaris", "Fly camping", "Hot air balloon (optional)"],
        description: "Experience the Rufiji River ecosystem like never before."
      },
      {
        id: "s2",
        name: "Fishing & Wildlife",
        duration: "3 Days / 2 Nights",
        price: 750,
        highlights: ["Tiger fish fishing", "Game drives", "Sundowner cruise", "Bush dinner"],
        description: "Combine world-class fishing with wildlife viewing."
      },
      {
        id: "s3",
        name: "Birder's Paradise",
        duration: "4 Days / 3 Nights",
        price: 900,
        highlights: ["Expert ornithologist guide", "All ecosystems covered", "Photography hides", "Species checklist"],
        description: "Discover over 440 bird species in their natural habitat."
      }
    ],
    news: [
      {
        id: "sn1",
        title: "New Anti-Poaching Unit Deployed",
        date: "2024-12-12",
        excerpt: "Enhanced protection measures implemented across the reserve."
      },
      {
        id: "sn2",
        title: "Record Hippo Census Completed",
        date: "2024-11-20",
        excerpt: "Latest census reveals healthy hippo population in the Rufiji River system."
      }
    ],
    stats: {
      area: "50,000 km²",
      species: 440,
      visitors: "35,000+"
    }
  },
  {
    id: "5",
    name: "Ikorongo & Grumet Game Reserve",
    slug: "ikorongo-grumet",
    tagline: "Twin Reserves Protecting Critical Migration Corridors",
    description: "Twin reserves protecting critical elephant migration corridors and diverse savanna ecosystems with rich biodiversity.",
    longDescription: "Ikorongo & Grumet Game Reserve consists of two interconnected reserves that form a critical wildlife corridor. These twin reserves protect essential elephant migration routes and support diverse savanna ecosystems. The area is known for its rich biodiversity, supporting large herds of elephants, lions, buffalo, and giraffes across its vast landscapes.",
    image: "/destination-ikorongo-grumet.jpg",
    wildlife: ["African Elephants", "Lions", "Buffalo", "Giraffes", "Various Antelope Species"],
    area: "8,500 km²",
    established: "1990",
    tours: [
      {
        id: "ig1",
        name: "Migration Corridor Safari",
        duration: "4 Days / 3 Nights",
        price: 1100,
        highlights: ["Elephant migration viewing", "Game drives", "Walking safari", "Bird watching"],
        description: "Witness the spectacular elephant migration through critical corridors."
      }
    ],
    news: [],
    stats: {
      area: "8,500 km²",
      species: 380,
      visitors: "15,000+"
    }
  },
  {
    id: "6",
    name: "Maswa Game Reserve",
    slug: "maswa",
    tagline: "Vital Wildlife Corridor",
    description: "A vital wildlife corridor connecting Serengeti ecosystems, home to large predators and migratory herds.",
    longDescription: "Maswa Game Reserve serves as a crucial wildlife corridor connecting the Serengeti ecosystem. This reserve is home to large predators including lions, leopards, and cheetahs, as well as migratory herds of wildebeest and other antelope species. The reserve's strategic location makes it essential for maintaining wildlife connectivity across the region.",
    image: "/destination-maswa.jpg",
    wildlife: ["Lions", "Leopards", "Cheetahs", "Wildebeest", "Zebras", "Various Antelope Species"],
    area: "2,200 km²",
    established: "1975",
    tours: [
      {
        id: "m1",
        name: "Predator Safari",
        duration: "3 Days / 2 Nights",
        price: 850,
        highlights: ["Big cat viewing", "Game drives", "Sundowner experience", "Wildlife photography"],
        description: "Experience the thrill of spotting Africa's big cats in their natural habitat."
      }
    ],
    news: [],
    stats: {
      area: "2,200 km²",
      species: 320,
      visitors: "12,000+"
    }
  },
  {
    id: "7",
    name: "Kijereshi Game Reserve",
    slug: "kijereshi",
    tagline: "Forested Sanctuary",
    description: "Forested sanctuary preserving ancient woodlands and providing habitat for endangered forest-dwelling species.",
    longDescription: "Kijereshi Game Reserve is a forested sanctuary that preserves ancient woodlands and provides critical habitat for endangered forest-dwelling species. The reserve's dense forests are home to forest elephants, various primate species, and rare birds. This unique ecosystem plays a vital role in conserving Tanzania's forest biodiversity.",
    image: "/destination-kijereshi.jpg",
    wildlife: ["Forest Elephants", "Primates", "Rare Birds", "Forest Antelopes", "Various Monkey Species"],
    area: "1,200 km²",
    established: "1988",
    tours: [
      {
        id: "k1",
        name: "Forest Exploration",
        duration: "3 Days / 2 Nights",
        price: 750,
        highlights: ["Forest walks", "Primate watching", "Bird watching", "Canopy exploration"],
        description: "Discover the secrets of Tanzania's ancient woodlands."
      }
    ],
    news: [],
    stats: {
      area: "1,200 km²",
      species: 280,
      visitors: "8,000+"
    }
  },
  {
    id: "8",
    name: "Lukwati & Piti Game Reserve",
    slug: "lukwati-piti",
    tagline: "Coastal Reserves",
    description: "Coastal reserves protecting mangrove ecosystems and serving as critical breeding grounds for marine and terrestrial wildlife.",
    longDescription: "Lukwati & Piti Game Reserve consists of two coastal reserves that protect vital mangrove ecosystems. These reserves serve as critical breeding grounds for both marine and terrestrial wildlife. The unique coastal environment supports marine birds, crocodiles, and various coastal wildlife species, making it an important conservation area for Tanzania's coastal biodiversity.",
    image: "/destination-lukwati-piti.jpg",
    wildlife: ["Marine Birds", "Crocodiles", "Coastal Wildlife", "Mangrove Species", "Various Water Birds"],
    area: "3,500 km²",
    established: "1992",
    tours: [
      {
        id: "lp1",
        name: "Coastal Safari",
        duration: "3 Days / 2 Nights",
        price: 800,
        highlights: ["Mangrove exploration", "Bird watching", "Boat safari", "Coastal wildlife viewing"],
        description: "Explore the unique coastal ecosystems and mangrove forests."
      }
    ],
    news: [],
    stats: {
      area: "3,500 km²",
      species: 350,
      visitors: "10,000+"
    }
  },
  {
    id: "9",
    name: "Moyowosi Game Reserve",
    slug: "moyowosi",
    tagline: "Wetland Reserve",
    description: "Wetland reserve featuring extensive swamps and floodplains, supporting large herds and diverse aquatic life.",
    longDescription: "Moyowosi Game Reserve is a wetland reserve featuring extensive swamps and floodplains. This unique ecosystem supports large herds of hippos, waterbucks, sitatunga, and various water birds. The reserve's aquatic habitats are essential for maintaining the region's biodiversity and provide critical resources for both resident and migratory species.",
    image: "/destination-moyowosi.jpg",
    wildlife: ["Hippos", "Waterbucks", "Sitatunga", "Water Birds", "Crocodiles", "Various Aquatic Species"],
    area: "6,000 km²",
    established: "1980",
    tours: [
      {
        id: "mo1",
        name: "Wetland Safari",
        duration: "4 Days / 3 Nights",
        price: 950,
        highlights: ["Hippo viewing", "Boat safari", "Bird watching", "Wetland exploration"],
        description: "Experience the unique wetland ecosystems and aquatic wildlife."
      }
    ],
    news: [],
    stats: {
      area: "6,000 km²",
      species: 400,
      visitors: "18,000+"
    }
  },
  {
    id: "10",
    name: "Mkungunero Game Reserve",
    slug: "mkungunero",
    tagline: "Pristine Wilderness",
    description: "Pristine wilderness area protecting critical wildlife corridors and supporting diverse savanna ecosystems.",
    longDescription: "Mkungunero Game Reserve is a pristine wilderness area that protects critical wildlife corridors. The reserve supports diverse savanna ecosystems and is home to elephants, lions, buffalo, and various antelope species. Its strategic location makes it an important part of the regional wildlife network.",
    image: "/destination-mkungunero.jpg",
    wildlife: ["Elephants", "Lions", "Buffalo", "Antelopes", "Giraffes", "Various Savanna Species"],
    area: "2,800 km²",
    established: "1985",
    tours: [
      {
        id: "mk1",
        name: "Wilderness Safari",
        duration: "3 Days / 2 Nights",
        price: 850,
        highlights: ["Game drives", "Walking safari", "Wildlife viewing", "Bird watching"],
        description: "Explore the pristine wilderness and diverse savanna ecosystems."
      }
    ],
    news: [],
    stats: {
      area: "2,800 km²",
      species: 340,
      visitors: "14,000+"
    }
  },
  {
    id: "11",
    name: "Swagaswaga Game Reserve",
    slug: "swagaswaga",
    tagline: "Diverse Habitats",
    description: "Vast protected area featuring diverse habitats from woodlands to grasslands, home to numerous wildlife species.",
    longDescription: "Swagaswaga Game Reserve is a vast protected area featuring diverse habitats ranging from woodlands to grasslands. This variety of ecosystems supports numerous wildlife species including lions, leopards, elephants, and giraffes. The reserve's diverse landscape provides excellent opportunities for wildlife viewing and photography.",
    image: "/destination-swagaswaga.jpg",
    wildlife: ["Lions", "Leopards", "Elephants", "Giraffes", "Buffalo", "Various Antelope Species"],
    area: "4,200 km²",
    established: "1978",
    tours: [
      {
        id: "s1",
        name: "Diverse Habitat Safari",
        duration: "4 Days / 3 Nights",
        price: 1000,
        highlights: ["Multi-habitat exploration", "Game drives", "Wildlife photography", "Bird watching"],
        description: "Discover the diverse habitats and rich wildlife of Swagaswaga."
      }
    ],
    news: [],
    stats: {
      area: "4,200 km²",
      species: 360,
      visitors: "16,000+"
    }
  },
  {
    id: "12",
    name: "Liparamba Game Reserve",
    slug: "liparamba",
    tagline: "Forested Reserve",
    description: "Forested reserve preserving unique woodland ecosystems and providing sanctuary for rare and endangered species.",
    longDescription: "Liparamba Game Reserve is a forested reserve that preserves unique woodland ecosystems. The reserve provides sanctuary for rare and endangered species including forest elephants, various primates, rare birds, and forest antelopes. This protected area plays a crucial role in conserving Tanzania's forest biodiversity.",
    image: "/destination-liparamba.jpg",
    wildlife: ["Forest Elephants", "Primates", "Rare Birds", "Antelopes", "Various Monkey Species", "Forest Dwellers"],
    area: "1,500 km²",
    established: "1987",
    tours: [
      {
        id: "l1",
        name: "Forest Sanctuary Safari",
        duration: "3 Days / 2 Nights",
        price: 750,
        highlights: ["Forest walks", "Primate watching", "Bird watching", "Endangered species viewing"],
        description: "Explore the unique woodland ecosystems and rare species."
      }
    ],
    news: [],
    stats: {
      area: "1,500 km²",
      species: 290,
      visitors: "9,000+"
    }
  },
  {
    id: "13",
    name: "Lukwika Lumesule Game Reserve",
    slug: "lukwika-lumesule",
    tagline: "Twin Reserves",
    description: "Twin reserves protecting critical migration routes and diverse ecosystems with rich biodiversity.",
    longDescription: "Lukwika Lumesule Game Reserve consists of two interconnected reserves that protect critical migration routes. These twin reserves support diverse ecosystems with rich biodiversity, including elephants, buffalo, lions, and various antelope species. The reserves play an essential role in maintaining wildlife connectivity across the region.",
    image: "/destination-lukwika-lumesule.jpg",
    wildlife: ["Elephants", "Buffalo", "Lions", "Various Antelope Species", "Giraffes", "Savanna Wildlife"],
    area: "3,600 km²",
    established: "1991",
    tours: [
      {
        id: "ll1",
        name: "Migration Route Safari",
        duration: "4 Days / 3 Nights",
        price: 950,
        highlights: ["Migration viewing", "Game drives", "Wildlife corridors", "Bird watching"],
        description: "Witness wildlife migrations through critical corridors."
      }
    ],
    news: [],
    stats: {
      area: "3,600 km²",
      species: 370,
      visitors: "13,000+"
    }
  }
];

export const tawaStats = {
  protectedArea: "170,000+",
  wildlifeSpecies: "1,500+",
  annualVisitors: "150,000+",
  conservationProjects: "45+"
};
