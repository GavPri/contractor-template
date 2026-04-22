// ============================================================
// CLIENT CONFIGURATION FILE
// ============================================================
// This is the ONLY file you need to edit for each new client.
// Change the values below to match the client's business.
// All pages and components read from this file automatically.
// ============================================================

export const client = {

  // ── BUSINESS INFO ─────────────────────────────────────────
  name: "Summit Roofing Meath",
  tagline: "Meath's Most Trusted Roofing Specialists",
  phone: "041 987 4532",
  mobile: "087 234 8765",
  email: "info@summitrooofingmeath.ie",
  website: "www.summitrooofingmeath.ie",
  address: {
    line1: "Unit 4, Navan Business Park",
    city: "Navan",
    county: "Co. Meath",
    eircode: "C15 XP42",
    full: "Unit 4, Navan Business Park, Navan, Co. Meath, C15 XP42",
  },
  founded: 2007,
  registrationNumber: "IE 4821903",
  emergency: true,
  emergencyText: "24/7 Emergency Call-Out Available",

  // ── TRUST STATS ───────────────────────────────────────────
  stats: {
    yearsExperience: 17,
    jobsCompleted: "1,400+",
    googleRating: "4.9",
    reviewCount: 127,
    guarantee: "10 Year",
  },

  // ── OPENING HOURS ─────────────────────────────────────────
  hours: [
    { day: "Monday – Friday", hours: "7:30am – 6:00pm" },
    { day: "Saturday",        hours: "8:00am – 2:00pm" },
    { day: "Sunday",          hours: "Closed" },
  ],

  // ── BRAND COLORS ──────────────────────────────────────────
  colors: {
    primary:    "#4C9DB0",
    background: "#FFEBAF",
    dark:       "#1A2E35",
    text:       "#2C3E50",
  },

  // ── SEO ───────────────────────────────────────────────────
  seo: {
    title:       "Summit Roofing Meath | Expert Roofers in Co. Meath",
    description: "Family-run roofing contractors serving County Meath since 2007. Free quotes on roof replacement, repairs, storm damage & more. Call 041 987 4532.",
    keywords:    "roofer meath, roofing contractor navan, roof repair meath, roof replacement meath",
    ogImage:     "/images/og-image.jpg",
  },

  // ── SERVICES ──────────────────────────────────────────────
  services: [
    {
      id: "roof-replacement",
      title: "Roof Replacement",
      shortDescription: "Full tear-off and replacement for pitched and flat roofs.",
      fullDescription: "Our full roof replacement service covers everything from initial survey through to final clean-up. We work with all tile, slate, and flat roof materials and provide a 10-year workmanship guarantee on every job.",
      icon: "home",
      price: "From €3,500",
      featured: true,
    },
    {
      id: "roof-repair",
      title: "Roof Repair",
      shortDescription: "Leak diagnosis, tile and slate repair, ridge and verge repairs.",
      fullDescription: "No leak is too small or too complex. Our repair team provides same-week appointments and honest assessments. We only fix what needs fixing.",
      icon: "wrench",
      price: "From €150",
      featured: true,
    },
    {
      id: "new-installation",
      title: "New Roof Installation",
      shortDescription: "New-build and extension roofing, all materials and finishes.",
      fullDescription: "Working closely with builders and self-builders across Meath, we deliver new roof installations on time and to spec. All materials are sourced from trusted Irish suppliers.",
      icon: "building",
      price: "From €4,200",
      featured: true,
    },
    {
      id: "storm-damage",
      title: "Storm Damage Repair",
      shortDescription: "24/7 emergency response for wind, hail, and fallen tree damage.",
      fullDescription: "When storms hit, we respond fast. Our emergency team is on call 24/7 to make your roof safe and watertight. We also assist with insurance claim documentation.",
      icon: "cloud-lightning",
      price: "From €200",
      featured: true,
      emergency: true,
    },
    {
      id: "flat-roofs",
      title: "Flat Roof Systems",
      shortDescription: "GRP fibreglass, EPDM rubber, and felt flat roof installations.",
      fullDescription: "Modern flat roof systems are durable, lightweight, and virtually maintenance-free. We install GRP fibreglass, EPDM rubber, and reinforced felt systems with full guarantees.",
      icon: "layers",
      price: "From €1,800",
      featured: false,
    },
    {
      id: "insulation",
      title: "Roof Insulation",
      shortDescription: "Attic and roof insulation to improve energy efficiency and BER rating.",
      fullDescription: "Improve your home's BER rating and reduce heating bills with professional roof insulation. We use certified materials and can advise on SEAI grant eligibility.",
      icon: "thermometer",
      price: "From €900",
      featured: false,
    },
    {
      id: "fascia-soffit",
      title: "Fascia, Soffit & Guttering",
      shortDescription: "uPVC replacement and repair, seamless gutters, downpipe installation.",
      fullDescription: "Protect your roof edges and walls with quality uPVC fascia, soffit, and guttering. We supply and fit all profiles and colours to match your home.",
      icon: "droplets",
      price: "From €450",
      featured: false,
    },
    {
      id: "chimney",
      title: "Chimney Repairs",
      shortDescription: "Repointing, flashing, cowl fitting, full chimney rebuilds.",
      fullDescription: "From minor repointing to full chimney rebuilds, our masons have the skills and equipment to work safely at height. All chimney work is fully insured.",
      icon: "flame",
      price: "From €300",
      featured: false,
    },
    {
      id: "velux",
      title: "Velux & Skylight Installation",
      shortDescription: "Supply and fit of Velux windows, sun tunnels, and flat rooflights.",
      fullDescription: "Bring natural light into your home with a professionally installed Velux window or rooflight. We are Velux-approved installers and handle full waterproofing and finishing.",
      icon: "sun",
      price: "From €650",
      featured: false,
    },
    {
      id: "inspection",
      title: "Roof Inspection & Report",
      shortDescription: "Full written inspection with photos. Ideal before buying a property.",
      fullDescription: "Our comprehensive roof inspection includes a full written report with photographs and a clear list of any remedial works required. Ideal for property purchases or peace of mind.",
      icon: "clipboard-check",
      price: "From €120",
      featured: false,
    },
  ],

  // ── SERVICE AREAS ─────────────────────────────────────────
  serviceAreas: [
    { name: "Navan",         primary: true  },
    { name: "Trim",          primary: true  },
    { name: "Kells",         primary: true  },
    { name: "Ashbourne",     primary: true  },
    { name: "Ratoath",       primary: false },
    { name: "Dunboyne",      primary: false },
    { name: "Dunshaughlin",  primary: false },
    { name: "Athboy",        primary: false },
    { name: "Oldcastle",     primary: false },
    { name: "Slane",         primary: false },
    { name: "Drogheda",      primary: false },
    { name: "Laytown",       primary: false },
    { name: "Bettystown",    primary: false },
    { name: "Enfield",       primary: false },
    { name: "Kilcock",       primary: false },
    { name: "Stamullen",     primary: false },
    { name: "Duleek",        primary: false },
    { name: "Nobber",        primary: false },
    { name: "Crossakeel",    primary: false },
    { name: "Maynooth",      primary: false },
  ],

  // ── REVIEWS ───────────────────────────────────────────────
  reviews: [
    {
      name: "Seán Murphy",
      location: "Navan, Co. Meath",
      rating: 5,
      date: "2024-02-14",
      text: "Summit replaced our entire roof after the storms last January. The crew arrived on time every day, were clean and tidy throughout, and the job was finished two days ahead of schedule. Couldn't ask for better. Highly recommend to anyone in Meath.",
      service: "Roof Replacement",
      featured: true,
    },
    {
      name: "Aoife Brennan",
      location: "Trim, Co. Meath",
      rating: 5,
      date: "2024-03-28",
      text: "Called them on a Thursday evening after spotting a leak above the sitting room. They had someone out Friday morning and fixed it the same day. Fair price and no fuss. Will definitely use Summit again.",
      service: "Roof Repair",
      featured: true,
    },
    {
      name: "Declan O'Brien",
      location: "Ashbourne, Co. Meath",
      rating: 5,
      date: "2024-01-09",
      text: "We got three quotes for a full re-roof and Summit came in competitively priced and by far the most professional. They walked us through every option without any pressure at all. The finished roof looks class.",
      service: "Roof Replacement",
      featured: true,
    },
    {
      name: "Patricia Fogarty",
      location: "Dunboyne, Co. Meath",
      rating: 4,
      date: "2023-11-15",
      text: "Really happy with the fascia, soffit and guttering replacement. Good quality materials and the team were very tidy. Only minor issue was a slight delay on start date but they kept us informed throughout. Would use again.",
      service: "Fascia, Soffit & Guttering",
      featured: false,
    },
    {
      name: "Ciarán Kelly",
      location: "Kells, Co. Meath",
      rating: 5,
      date: "2024-04-02",
      text: "Had Summit out twice — once for an emergency repair after the October storms and again for a full flat roof on our extension. Consistent quality and a fair price both times. They're my go-to roofers in Meath.",
      service: "Storm Damage Repair",
      featured: true,
    },
    {
      name: "Mary Flanagan",
      location: "Dunshaughlin, Co. Meath",
      rating: 5,
      date: "2024-02-29",
      text: "I was nervous about getting the roof done after hearing horror stories from neighbours. Summit completely put me at ease. Professional from start to finish, and they even sent photos during the work. Brilliant service.",
      service: "Roof Replacement",
      featured: false,
    },
    {
      name: "Tom Reilly",
      location: "Ratoath, Co. Meath",
      rating: 5,
      date: "2023-12-11",
      text: "Needed a Velux window fitted and the surrounding area re-flashed. Quick quote, turned up when they said they would, and the finish is perfect. No leaks since. Exactly what you want from a roofer.",
      service: "Velux & Skylight Installation",
      featured: false,
    },
    {
      name: "Linda Carroll",
      location: "Slane, Co. Meath",
      rating: 5,
      date: "2024-01-22",
      text: "Summit did a full chimney rebuild for us — repointing, new flashing, new cowl, the works. The price was very reasonable and the lads were sound. Wouldn't hesitate to recommend them to family and friends.",
      service: "Chimney Repairs",
      featured: false,
    },
  ],

  // ── TEAM ──────────────────────────────────────────────────
  team: [
    {
      name: "Pádraic Quinn",
      role: "Founder & Lead Roofer",
      bio: "17 years experience. Certified by the Roofing and Cladding Alliance of Ireland. Meath born and bred.",
      image: "/images/team/padraic.jpg",
    },
    {
      name: "Conor Fitzpatrick",
      role: "Senior Roofer",
      bio: "12 years experience. Specialist in flat roof systems and Velux installations.",
      image: "/images/team/conor.jpg",
    },
    {
      name: "Niamh Burke",
      role: "Office Manager & Estimator",
      bio: "Handles all quotes, scheduling, and customer care. Your first point of contact.",
      image: "/images/team/niamh.jpg",
    },
  ],

  // ── SOCIAL LINKS ──────────────────────────────────────────
  social: {
    facebook:  "https://facebook.com/summitroofinmeath",
    instagram: "https://instagram.com/summitroofinmeath",
    google:    "https://g.page/summitroofinmeath",
  },

  // ── CERTIFICATIONS / TRUST BADGES ─────────────────────────
  certifications: [
    "Roofing & Cladding Alliance of Ireland",
    "Velux Approved Installer",
    "Public Liability Insured",
    "SEAI Registered Contractor",
    "10 Year Workmanship Guarantee",
  ],

} as const;

export type ClientConfig = typeof client;