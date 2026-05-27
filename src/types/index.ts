// ─── Tour & Destination Types ───────────────────────────────────────────────

export type TourCategory = "Semua" | "Pulau" | "Pantai" | "Alam" | "Gathering";

export interface Tour {
  id: string;
  slug: string;
  title: string;
  category: Exclude<TourCategory, "Semua">;
  description: string;
  price: number;
  duration: string; // e.g. "3 Hari 2 Malam"
  minParticipants: number;
  maxParticipants: number;
  image: string;
  rating: number;
  reviewCount: number;
  highlights: string[];
  isPopular: boolean;
}

export interface Destination {
  id: string;
  name: string;
  province: string;
  image: string;
  tourCount: number;
  description: string;
}

// ─── Company Stats ───────────────────────────────────────────────────────────

export interface CompanyStats {
  yearsOfExperience: number;
  totalTourPackages: number;
  totalCustomers: number;
  totalFleet: number;
}

// ─── Testimonial ─────────────────────────────────────────────────────────────

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  comment: string;
  tourName: string;
  date: string;
}

// ─── Auth ────────────────────────────────────────────────────────────────────

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
}

// ─── Booking ─────────────────────────────────────────────────────────────────

export type BookingStep =
  | "select"
  | "date"
  | "participants"
  | "confirm"
  | "success";

export interface BookingState {
  step: BookingStep;
  selectedTour: Tour | null;
  date: string | null;
  participants: number;
  notes: string;
  totalPrice: number;
}

// ─── Vehicle Rental ──────────────────────────────────────────────────────────

export interface Vehicle {
  id: string;
  type: "mobil" | "bis";
  name: string;
  capacity: number;
  pricePerDay: number;
  image: string;
  features: string[];
  available: boolean;
}
