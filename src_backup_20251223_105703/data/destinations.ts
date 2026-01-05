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
  }
];

export const mainNews: NewsItem[] = [
  {
    id: "main1",
    title: "TAWA YAKABIDHI BWENI LA WASICHANA SHULE YA SEKONDARI MCHENGERWA, RUFIJI",
    date: "2024-12-15",
    excerpt: "TAWA imekabidhi bweni la wasichana shule ya sekondari Mchengerwa, Rufiji kwa ajili ya kuimarisha elimu na maendeleo ya jamii.",
    image: "/news/tawa-bweni-wasichana.jpg"
  },
  {
    id: "main2",
    title: "TAWA YAGUSA MAISHA YA WANANCHI MEATU",
    date: "2024-12-10",
    excerpt: "TAWA inaendelea kugusa maisha ya wananchi kwa kuwekeza katika miradi mbalimbali ya maendeleo ya jamii.",
    image: "/news/tawa-gusa-maisha-meatu.jpg"
  },
  {
    id: "main3",
    title: "TUZINGATIE UTU KATIKA UTEKELEZAJI WA MAJUKUMU YA ULINZI WA RASILIMALI ZA TAIFA- DKT KIJAJI",
    date: "2024-12-05",
    excerpt: "Dkt Kijaji anaasisi umuhimu wa kuzingatia utu katika utekelezaji wa majukumu ya ulinzi wa rasilimali za taifa.",
    image: "/news/tawa-dkt-kijaji.jpg"
  },
  {
    id: "main4",
    title: "TAWA YAKABIDHI MADAWATI 150 SHULE ZA MSINGI BARIDI",
    date: "2024-11-28",
    excerpt: "TAWA imekabidhi madawati 150 kwa shule za msingi Baridi kwa ajili ya kuboresha hali ya elimu.",
    image: "/news/tawa-madawati-baridi.jpg"
  }
];

export const tawaStats = {
  protectedArea: "170,000+",
  wildlifeSpecies: "1,500+",
  annualVisitors: "150,000+",
  conservationProjects: "45+"
};
