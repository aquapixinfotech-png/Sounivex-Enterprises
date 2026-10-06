export interface ServiceItem {
  id: string;
  name: string;
  desc: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  shortTitle: string;
  iconName: string;
  badge: string;
  description: string;
  items: ServiceItem[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "govt-id",
    title: "Govt. ID & Digital Services",
    shortTitle: "Govt. ID & Citizen",
    iconName: "IdCard",
    badge: "Official & Quick",
    description: "Fast-track processing for all essential Government identities, citizenship documents, certificates, and online portal submissions.",
    items: [
      { id: "pan-aadhaar-voter", name: "PAN Card, Voter Card & Aadhaar Link/Correction", desc: "New issue, name/DOB change, biometric correction & mobile linking." },
      { id: "passport-new", name: "Passport - New & Renewal Assistance", desc: "Fresh passports, tatkaal booking, verification slot appointment." },
      { id: "birth-ration", name: "Birth Certificate & Digital Ration Card", desc: "Hospital/KMC birth issuance, digital ration category changes." },
      { id: "digital-birth-marriage", name: "Digital Birth Certificate & Marriage Certificate", desc: "Government verified digitized copies & formal certificate filings." },
      { id: "residential-domicile", name: "Residential / Domicile Certificate", desc: "Local counselor & SDO/BDO endorsed residential attestations." },
      { id: "online-marriage", name: "Online Marriage Registration Certificate", desc: "Special Marriage Act & Hindu Marriage Act legal registrations." },
      { id: "govt-form-fillup", name: "Any Type of Govt. Online Form Fillup", desc: "Govt schemes, scholarship forms, exam applications, portal filings." },
      { id: "driving-license", name: "Driving License - New, Learner & Renewal", desc: "RTO license appointments, slot booking, commercial endorsements." }
    ]
  },
  {
    id: "taxation-legal",
    title: "Taxation & Legal Services",
    shortTitle: "Tax & Legal",
    iconName: "Scale",
    badge: "100% Compliant",
    description: "Expert tax consultants and legal practitioners delivering timely filings, trade licenses, property legalities, and notary deeds.",
    items: [
      { id: "trade-license", name: "Trade License - KMC / Municipality / Gram Panchayat", desc: "New issuance, annual renewals, and municipal clearance in Kolkata & WB." },
      { id: "gst-registration", name: "GST Registration & Return Filing (GSTR-1, 3B, 9)", desc: "Quick GSTIN allotment, monthly compliance, reconciliation, and audit." },
      { id: "income-tax", name: "Income Tax File - New & Annual Returns (ITR)", desc: "ITR-1 to ITR-4 filing for salaried employees, professionals & businesses." },
      { id: "ptax-property-tax", name: "Professional Tax (P-Tax) & Property Tax Services", desc: "Enrolment, registration, challan generation & municipality assessments." },
      { id: "property-registration", name: "Land & Property Registration & Mutation", desc: "Registry documentation, title deed search, BL&LRO mutation processing." },
      { id: "notary-partnership", name: "Notary Services & Partnership Deed Drafting", desc: "Court sworn affidavits, agreements, partnership deeds, power of attorney." }
    ]
  },
  {
    id: "business-license",
    title: "Business Registrations & Licenses",
    shortTitle: "Business Licenses",
    iconName: "Building2",
    badge: "Corporate Ready",
    description: "End-to-end statutory business licensing, corporate entity establishment, trademark protection, and central certifications.",
    items: [
      { id: "udyam-msme", name: "Udyam Registration - MSME Certificate", desc: "Official government MSME certificate for bank subsidies & tenders." },
      { id: "drug-license", name: "Drug License (Retail, Wholesale & Manufacturing)", desc: "State Pharmacy Council documentation & health dept clearances." },
      { id: "fssai-fire", name: "FSSAI Food License & Fire License (All Types)", desc: "Food safety registration, state/central license, fire NOC certificate." },
      { id: "import-export-code", name: "Export / Import License - IE Code (DGFT)", desc: "Lifetime IE Code registration for international cross-border trade." },
      { id: "company-formation", name: "Company Formation - Pvt. Ltd. / LLP / OPC", desc: "MCA name approval, CIN incorporation, MOA/AOA, PAN, TAN & Bank A/C." },
      { id: "trademark-iso", name: "Trademark Registration (™) & ISO Certification", desc: "Brand logo/name protection, trademark filings & ISO 9001 auditing." },
      { id: "dsc-token", name: "Digital Signature Certificate - DSC (Class 3)", desc: "Paperless USB cryptotoken for tenders, GST, MCA & Income Tax filing." },
      { id: "society-club", name: "Society & Club Registration / Renewal", desc: "West Bengal Societies Registration Act compliance & renewal documentation." },
      { id: "aml-license", name: "Money Laundering Compliance & Financial Licenses", desc: "Statutory documentation, KYC policies, and financial licensing advisory." }
    ]
  },
  {
    id: "loan-assistance",
    title: "All Types of Loan Assistance",
    shortTitle: "Loan Assistance",
    iconName: "Banknote",
    badge: "Fast Disbursal",
    description: "Direct bank and NBFC liaison for business expansion, unsecured retail credit, property mortgages, and quick loan sanctions.",
    items: [
      { id: "business-mudra", name: "Business Loan & Mudra Loan (PMMY)", desc: "Shishu, Kishore, and Tarun schemes with zero collateral requirements." },
      { id: "non-gst-loan", name: "Loan for Non-GST Business & Small Traders", desc: "Special lending programs based on banking turnover and daily cash flow." },
      { id: "home-car-mortgage", name: "Home Loan, Car Loan & Mortgage Loan (LAP)", desc: "Lowest interest rates, maximum tenure, and balance transfer options." },
      { id: "instant-approval", name: "Instant Loan Approval Assistance", desc: "Document preparation, project report making, CMA data & fast sanction." }
    ]
  },
  {
    id: "it-creative",
    title: "IT, Software & Creative Services",
    shortTitle: "IT & Software",
    iconName: "Laptop",
    badge: "Digital Growth",
    description: "Modern technological horsepower to digitize your enterprise, elevate brand recognition, and capture high-intent customers.",
    items: [
      { id: "web-dev", name: "Website Design & Development", desc: "Modern, responsive, high-speed business websites, portfolios & e-commerce." },
      { id: "digital-marketing", name: "Digital Marketing, SEO & Graphic Design", desc: "Social media marketing, Google Local SEO, banners, flyers & logo branding." },
      { id: "software-app", name: "Custom Software & Mobile App Development", desc: "Billing software, CRM, inventory management, Android & iOS applications." },
      { id: "photography", name: "Commercial & Studio Photography Services", desc: "Product shoots, corporate events, model portfolios & high-res media." }
    ]
  },
  {
    id: "hardware-networking",
    title: "Hardware & Networking Repair",
    shortTitle: "Hardware & CCTV",
    iconName: "Wrench",
    badge: "Chip-Level Care",
    description: "Precision bench-level electronic motherboard repairs, high-performance office network cabling, and CCTV surveillance setups.",
    items: [
      { id: "chip-level-repair", name: "Desktop & Laptop Repairing - Chip Level", desc: "Motherboard BGA rework, display replacement, hinge repair & SSD upgrades." },
      { id: "networking-solutions", name: "Professional Networking Services (LAN / WAN / Wi-Fi)", desc: "Structured cabling, router/switch configuration, VPN & office Wi-Fi setup." },
      { id: "cctv-surveillance", name: "CCTV Installation & Maintenance Services", desc: "HD/IP cameras, DVR/NVR setup, remote mobile view & annual maintenance." }
    ]
  }
];

export const allFlatServices = serviceCategories.flatMap(cat => 
  cat.items.map(item => ({
    ...item,
    categoryTitle: cat.title,
    categoryId: cat.id
  }))
);
