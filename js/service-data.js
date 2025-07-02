const services = {
  postconstruction: {
    title: "Post Construction Cleaning",
    image: "img/postconstruction.png",
    description: "Our post construction cleaning service ensures your new or renovated space is spotless, safe, and ready for use.",
    longDescription: "We specialize in removing construction debris, dust, and residues from every corner of your property. Our team uses professional equipment to clean floors, windows, walls, and fixtures, ensuring your space is move-in ready. We pay special attention to safety and detail, so you can enjoy your new or renovated space without hassle.",
    features: [
      "Debris and dust removal",
      "Detailed cleaning of all surfaces",
      "Window and glass cleaning",
      "Safe disposal of construction waste",
      "Final inspection for spotless results"
    ]
  },
  fumigation: {
    title: "Fumigation",
    image: "img/fumigation.png",
    description: "Fumigation services are essential for eliminating pests and ensuring a safe environment. Our expert team uses advanced techniques to provide effective pest control solutions.",
    longDescription: "Our fumigation process targets a wide range of pests, including insects, rodents, and termites. We use eco-friendly and safe chemicals to protect your family, pets, and property. Our team conducts a thorough inspection, applies the treatment, and provides guidance on maintaining a pest-free environment.",
    features: [
      "Comprehensive pest inspection",
      "Safe and eco-friendly chemicals",
      "Effective against insects, rodents, and termites",
      "Post-treatment support and advice",
      "Flexible scheduling for minimal disruption"
    ]
  },
  residential: {
    title: "Residential Cleaning",
    image: "img/residential.png",
    description: "We provide thorough residential cleaning to keep your home fresh, healthy, and sparkling clean.",
    longDescription: "Our residential cleaning covers every room in your home, from kitchens and bathrooms to living areas and bedrooms. We use non-toxic products and pay attention to high-touch surfaces, ensuring a hygienic environment for your family. Custom cleaning plans are available to fit your needs and schedule.",
    features: [
      "Kitchen, bathroom, and living area cleaning",
      "Dusting, vacuuming, and mopping",
      "Sanitization of high-touch surfaces",
      "Customizable cleaning plans",
      "Trained and background-checked staff"
    ]
  },
  office: {
    title: "Office Cleaning",
    image: "img/feature4.jpeg",
    description: "Our office cleaning service creates a clean, productive, and welcoming workspace for your team and clients.",
    longDescription: "We offer daily, weekly, or custom office cleaning schedules to keep your workspace tidy and professional. Our services include desk and workstation cleaning, restroom sanitization, trash removal, and common area maintenance. We work after hours or during off-peak times to minimize disruption.",
    features: [
      "Desk and workstation cleaning",
      "Restroom and kitchen sanitization",
      "Trash removal and recycling",
      "Common area maintenance",
      "Flexible scheduling to suit your business"
    ]
  },
  pool: {
    title: "Pool Cleaning",
    image: "img/poolcleaning.png",
    description: "Keep your pool crystal clear and safe with our professional pool cleaning and maintenance services.",
    longDescription: "Our pool cleaning includes skimming, vacuuming, brushing, and chemical balancing to ensure safe and sparkling water. We inspect pool equipment, clean filters, and provide regular maintenance to prevent issues. Enjoy a healthy, inviting pool all year round.",
    features: [
      "Skimming, vacuuming, and brushing",
      "Chemical testing and balancing",
      "Filter and equipment inspection",
      "Algae and debris removal",
      "Scheduled maintenance plans"
    ]
  },
  carpet: {
    title: "Carpet Cleaning",
    image: "img/carpet.png",
    description: "Our carpet cleaning services remove dirt, allergens, and stains, leaving your carpets fresh and hygienic.",
    longDescription: "We use deep-cleaning methods such as hot water extraction and eco-friendly solutions to remove embedded dirt, stains, and allergens. Our process restores the appearance and extends the life of your carpets, making your home or office healthier and more comfortable.",
    features: [
      "Deep cleaning and stain removal",
      "Allergen and dust mite reduction",
      "Eco-friendly cleaning solutions",
      "Quick drying times",
      "Safe for children and pets"
    ]
  },
  sofa: {
    title: "Sofa-set Cleaning",
    image: "img/sofa.png",
    description: "Restore the beauty and comfort of your sofas with our deep sofa-set cleaning service.",
    longDescription: "Our sofa cleaning removes dirt, stains, and odors from all types of upholstery. We use gentle, effective products that protect fabric and color, leaving your furniture looking and smelling fresh. Regular cleaning extends the life of your sofas and improves indoor air quality.",
    features: [
      "Stain and odor removal",
      "Safe for all upholstery types",
      "Fabric protection treatments",
      "Quick drying process",
      "Improved indoor air quality"
    ]
  },
  highpressure: {
    title: "High Pressure Cleaning",
    image: "img/service-1.jpg",
    description: "Powerful cleaning for stubborn dirt and grime on hard surfaces, driveways, and exteriors.",
    longDescription: "Our high pressure cleaning service removes tough stains, dirt, and debris from driveways, walkways, walls, and other hard surfaces. Ideal for both residential and commercial properties.",
    features: [
      "Removes stubborn dirt and grime",
      "Suitable for driveways, walkways, and exteriors",
      "Eco-friendly cleaning methods",
      "Quick and efficient service",
      "Restores original appearance"
    ]
  },
  waste: {
    title: "Waste Management Solutions",
    image: "img/service-2.jpg",
    description: "Comprehensive waste collection, sorting, and disposal for homes and businesses.",
    longDescription: "We provide reliable waste management solutions including collection, sorting, recycling, and safe disposal for residential and commercial clients.",
    features: [
      "Regular waste collection",
      "Sorting and recycling",
      "Safe disposal methods",
      "Custom schedules available",
      "Eco-friendly focus"
    ]
  },
  garbage: {
    title: "Garbage Collection & Disposal",
    image: "img/service-3.jpg",
    description: "Reliable garbage collection and safe disposal services for all types of waste.",
    longDescription: "Our team ensures timely and safe collection and disposal of all types of garbage, helping you maintain a clean and healthy environment.",
    features: [
      "Residential and commercial service",
      "Safe and hygienic disposal",
      "Flexible pickup schedules",
      "Handles all waste types",
      "Licensed and insured"
    ]
  },
  electronics: {
    title: "Electronic Equipment Cleaning",
    image: "img/service-4.jpg",
    description: "Specialized cleaning for computers, servers, and sensitive electronic devices.",
    longDescription: "We use safe, non-abrasive methods to clean computers, servers, and other electronic equipment, reducing dust and improving performance.",
    features: [
      "Non-abrasive cleaning methods",
      "Reduces dust and allergens",
      "Improves equipment performance",
      "Safe for sensitive devices",
      "Trained technicians"
    ]
  },
  landscaping: {
    title: "Landscaping & Gardening",
    image: "img/landscaping.png",
    description: "Design, maintenance, and beautification of gardens and outdoor spaces.",
    longDescription: "Our landscaping and gardening services include design, planting, maintenance, and beautification for homes, offices, and public spaces.",
    features: [
      "Garden design and planting",
      "Lawn care and maintenance",
      "Tree and shrub trimming",
      "Seasonal cleanups",
      "Custom landscaping solutions"
    ]
  },
  renovations: {
    title: "Renovations, Repairs & Painting",
    image: "img/service-1.jpg",
    description: "Professional renovations, repairs, and painting for residential and commercial properties.",
    longDescription: "We offer a full range of renovation, repair, and painting services to keep your property looking its best.",
    features: [
      "Interior and exterior painting",
      "General repairs",
      "Remodeling and upgrades",
      "Quality materials used",
      "Experienced craftsmen"
    ]
  },
  eventcleaning: {
    title: "Event Cleaning & Garden Services",
    image: "img/service-2.jpg",
    description: "Pre- and post-event cleaning, plus garden care for all types of events.",
    longDescription: "We provide thorough cleaning before and after events, as well as garden maintenance to ensure your venue looks perfect.",
    features: [
      "Pre-event setup cleaning",
      "Post-event cleanup",
      "Garden and outdoor care",
      "Flexible scheduling",
      "Suitable for all event sizes"
    ]
  },
  windowcleaning: {
    title: "Window Cleaning & Wall Dusting",
    image: "img/service-3.jpg",
    description: "Streak-free window cleaning and thorough wall dusting for a spotless finish.",
    longDescription: "Our team delivers streak-free window cleaning and detailed wall dusting for homes and businesses.",
    features: [
      "Streak-free window cleaning",
      "Detailed wall dusting",
      "Safe for all surfaces",
      "Interior and exterior service",
      "Flexible appointments"
    ]
  },
  woodpolishing: {
    title: "Polishing Wooden Floors",
    image: "img/service-4.jpg",
    description: "Restore and maintain the shine and durability of your wooden floors.",
    longDescription: "We use professional equipment and products to polish and protect your wooden floors, enhancing their appearance and longevity.",
    features: [
      "Professional floor polishing",
      "Scratch and stain removal",
      "Protective finishes applied",
      "Enhances durability",
      "Suitable for all wood types"
    ]
  },
  washroomequip: {
    title: "Provision of Washroom Equipment & Consumables",
    image: "img/service-1.jpg",
    description: "Supply and installation of washroom equipment and consumables for hygiene and convenience.",
    longDescription: "We supply and install a wide range of washroom equipment and consumables, ensuring your facilities are always hygienic and well-stocked.",
    features: [
      "Soap and sanitizer dispensers",
      "Hand dryers and paper towels",
      "Toilet tissue and holders",
      "Feminine hygiene bins",
      "Scheduled restocking"
    ]
  }
}; 