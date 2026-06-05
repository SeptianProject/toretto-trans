import type {
  Tour,
  Destination,
  CompanyStats,
  Testimonial,
  Vehicle,
} from "@/types";

// ─── Tours ───────────────────────────────────────────────────────────────────

export const mockTours: Tour[] = [
  {
    id: "1",
    slug: "pulau-madura-2d1n",
    title: "Pulau Madura Adventure",
    category: "Pulau",
    description:
      "Jelajahi keindahan Pulau Madura dengan itinerary yang sudah dipersiapkan secara profesional.",
    price: 450000,
    duration: "2 Hari 1 Malam",
    minParticipants: 5,
    maxParticipants: 20,
    image: "/images/tours/madura.jpg",
    rating: 4.8,
    reviewCount: 32,
    highlights: [
      "Jembatan Suramadu",
      "Pantai Lombang",
      "Kuliner Sate Madura",
      "Keraton Sumenep",
    ],
    isPopular: true,
  },
  {
    id: "2",
    slug: "pantai-papuma-1d",
    title: "Pantai Papuma & Watu Ulo",
    category: "Pantai",
    description:
      "Nikmati keindahan pantai tersembunyi Jember dengan pemandangan batu karang yang spektakuler.",
    price: 320000,
    duration: "1 Hari",
    minParticipants: 8,
    maxParticipants: 30,
    image: "/images/tours/papuma.jpg",
    rating: 4.9,
    reviewCount: 47,
    highlights: ["Pantai Papuma", "Watu Ulo", "Snorkeling", "Sunset View"],
    isPopular: true,
  },
  {
    id: "3",
    slug: "bromo-sunrise-2d1n",
    title: "Bromo Sunrise Magical",
    category: "Alam",
    description:
      "Saksikan sunrise paling dramatis di Indonesia dari puncak Gunung Bromo bersama tim kami.",
    price: 680000,
    duration: "2 Hari 1 Malam",
    minParticipants: 6,
    maxParticipants: 25,
    image: "/images/tours/bromo.jpg",
    rating: 5.0,
    reviewCount: 61,
    highlights: [
      "Sunrise Penanjakan",
      "Kawah Bromo",
      "Pasir Berbisik",
      "Bukit Teletubbies",
    ],
    isPopular: true,
  },
  {
    id: "4",
    slug: "team-gathering-surabaya",
    title: "Team Gathering Package",
    category: "Gathering",
    description:
      "Paket gathering perusahaan yang customizable sesuai kebutuhan tim Anda.",
    price: 250000,
    duration: "Fleksibel",
    minParticipants: 20,
    maxParticipants: 100,
    image: "/images/tours/gathering.jpg",
    rating: 4.7,
    reviewCount: 28,
    highlights: [
      "Outbound Activities",
      "Team Building",
      "Catering",
      "Dokumentasi",
    ],
    isPopular: false,
  },
  {
    id: "5",
    slug: "pulau-bawean-3d2n",
    title: "Pulau Bawean Explorer",
    category: "Pulau",
    description:
      "Temukan surga tersembunyi Bawean — danau vulkanik, hutan tropis, dan pantai perawan.",
    price: 950000,
    duration: "3 Hari 2 Malam",
    minParticipants: 8,
    maxParticipants: 20,
    image: "/images/tours/bawean.jpg",
    rating: 4.9,
    reviewCount: 19,
    highlights: [
      "Danau Kastoba",
      "Penangkaran Rusa",
      "Snorkeling",
      "Pantai Mayangkara",
    ],
    isPopular: false,
  },
  {
    id: "6",
    slug: "pantai-plengkung-g-land",
    title: "G-Land Surfing Paradise",
    category: "Pantai",
    description:
      "Destinasi surfing kelas dunia di ujung Selatan Jawa Timur, Plengkung Bay.",
    price: 780000,
    duration: "2 Hari 1 Malam",
    minParticipants: 5,
    maxParticipants: 15,
    image: "/images/tours/gland.jpg",
    rating: 4.8,
    reviewCount: 22,
    highlights: [
      "Surfing World Class",
      "Hutan Tropis",
      "Camping",
      "Snorkeling",
    ],
    isPopular: false,
  },
];

// ─── Destinations ─────────────────────────────────────────────────────────────

export const mockDestinations: Destination[] = [
  {
    id: "1",
    name: "Bromo Tengger",
    province: "Jawa Timur",
    image: "/images/destinations/bromo.jpg",
    tourCount: 4,
    description:
      "Keajaiban vulkanik Jawa Timur dengan sunrise paling ikonik di Indonesia.",
  },
  {
    id: "2",
    name: "Banyuwangi",
    province: "Jawa Timur",
    image: "/images/destinations/banyuwangi.jpg",
    tourCount: 6,
    description:
      "The Sunrise of Java — surga tersembunyi dengan Kawah Ijen, G-Land, dan Baluran.",
  },
  {
    id: "3",
    name: "Pulau Madura",
    province: "Jawa Timur",
    image: "/images/destinations/madura.jpg",
    tourCount: 3,
    description:
      "Budaya kerapan sapi, kuliner sate legendaris, dan pantai-pantai eksotis.",
  },
  {
    id: "4",
    name: "Malang Raya",
    province: "Jawa Timur",
    image: "/images/destinations/malang.jpg",
    tourCount: 5,
    description:
      "Kota wisata dengan Coban Rondo, Selecta, dan sejuknya udara pegunungan.",
  },
];

// ─── Stats ───────────────────────────────────────────────────────────────────

export const mockStats: CompanyStats = {
  yearsOfExperience: 5,
  totalTourPackages: 24,
  totalCustomers: 85,
  totalFleet: 12,
};

// ─── Testimonials ─────────────────────────────────────────────────────────────

export const mockTestimonials: Testimonial[] = [
  {
    id: "1",
    name: "Rizky Pratama",
    avatar: "/images/avatars/rizky.jpg",
    rating: 5,
    comment:
      "Pelayanan PT New Toretto Trans sangat profesional! Trip ke Bromo kemarin sangat berkesan. Guide-nya ramah, akomodasi oke, dan harga sangat terjangkau. Pasti balik lagi!",
    tourName: "Bromo Sunrise Magical",
    date: "2026-04-15",
  },
  {
    id: "2",
    name: "Sari Dewi",
    avatar: "/images/avatars/sari.jpg",
    rating: 5,
    comment:
      "Pertama kali pakai jasa tour, dan PT New Toretto Trans tidak mengecewakan. Itinerary-nya simple dan tidak ribet. Sangat recommended untuk keluarga!",
    tourName: "Pantai Papuma & Watu Ulo",
    date: "2026-03-22",
  },
  {
    id: "3",
    name: "Deni Kurniawan",
    avatar: "/images/avatars/deni.jpg",
    rating: 5,
    comment:
      "Kami pakai untuk gathering kantor 50 orang. Semua terorganisir dengan baik. Tim Toretto sangat responsif dan fleksibel sesuai kebutuhan kami.",
    tourName: "Team Gathering Package",
    date: "2026-02-10",
  },
  {
    id: "4",
    name: "Mega Putri",
    avatar: "/images/avatars/mega.jpg",
    rating: 5,
    comment:
      "Trip ke Pulau Bawean selama 3 hari benar-benar menakjubkan. Spot yang dikunjungi keren semua, guide lokal yang berpengalaman. Worth every penny!",
    tourName: "Pulau Bawean Explorer",
    date: "2026-01-30",
  },
];

// ─── Vehicles ─────────────────────────────────────────────────────────────────

export const mockVehicles: Vehicle[] = [
  {
    id: "1",
    type: "mobil",
    name: "Toyota Alphard",
    capacity: 7,
    pricePerDay: 2300000,
    image: "/images/vehicles/toyota-alpard.webp",
    features: ["Mobil", "Driver", "BBM", "Minum", "Buah"],
    available: true,
  },
  {
    id: "2",
    type: "mobil",
    name: "Toyota Avanza",
    capacity: 7,
    pricePerDay: 700000,
    image: "/images/vehicles/toyota-avanza.webp",
    features:  ["Mobil","Driver", "BBM"],
    available: true,
  },
  {
    id: "3",
    type: "mobil",
    name: "Toyota Innova Reborn",
    capacity: 8,
    pricePerDay: 800000,
    image: "/images/vehicles/toyota-innova-reborn.webp",
    features:  ["Mobil","Driver", "BBM"],
    available: true,
  },
  {
    id: "4",
    type: "mobil",
    name: "Zenix Q",
    capacity: 7,
    pricePerDay: 1200000,
    image: "/images/vehicles/zenix-q.webp",
    features: ["Mobil","Driver", "BBM"],
    available: true,
  },
  {
    id: "5",
    type: "mobil",
    name: "Premio",
    capacity: 14,
    pricePerDay: 1200000,
    image: "/images/vehicles/premio.webp",
    features: ["Mobil","Driver", "BBM", "Minum"],
    available: true,
  },
  {
    id: "6",
    type: "mobil",
    name: "Zenix G",
    capacity: 7,
    pricePerDay: 1000000,
    image: "/images/vehicles/zenix-g.webp",
    features: ["Mobil","Driver", "BBM"],
    available: true,
  },
  {
    id: "7",
    type: "mobil",
    name: "Commuter",
    capacity: 16,
    pricePerDay: 1000000,
    image: "/images/vehicles/commuter.webp",
    features: ["Mobil", "Driver", "BBM", "Minum"],
    available: true,
  },
  {
    id: "8",
    type: "bis",
    name: "Bus Medium (35 seat)",
    capacity: 35,
    pricePerDay: 1700000,
    image: "/images/vehicles/bus-m.webp",
    features: [
      // "AC",
      // "Full Tank",
      // "Driver",
      // "Asuransi",
      // "Reclining Seat",
      // "Audio",
    ],
    available: true,
  },
  {
    id: "9",
    type: "bis",
    name: "Bus Besar (50 seat)",
    capacity: 50,
    pricePerDay: 2000000,
    image: "/images/vehicles/bus-b.webp",
    features: [
      // "AC",
      // "Full Tank",
      // "Driver",
      // "Asuransi",
      // "Reclining Seat",
      // "TV",
      // "Toilet",
    ],
    available: true,
  },
];
