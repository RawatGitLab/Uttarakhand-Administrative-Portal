// Fallback GIS features for Uttarakhand / Chamoli District
// Used when external MongoDB Atlas is offline or unreachable

export const fallbackGisFeatures: any[] = [
  // 1. State Boundary
  {
    id: "uttarakhand-state-boundary-01",
    type: "Feature",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [77.57, 30.40],
          [78.05, 31.45],
          [79.05, 31.46],
          [80.12, 30.95],
          [81.04, 30.20],
          [80.55, 29.50],
          [80.08, 28.75],
          [79.25, 29.10],
          [78.60, 29.60],
          [77.95, 29.95],
          [77.57, 30.40]
        ]
      ]
    },
    properties: {
      name: "Uttarakhand State Boundary",
      layer: "Uttarakhand_State_Boundary",
      Layer: "Uttarakhand_State_Boundary",
      LAYER: "Uttarakhand_State_Boundary",
      state_code: "05",
      state_name: "Uttarakhand",
      area_sq_km: 53483
    }
  },

  // 2. Chamoli District Boundary
  {
    id: "chamoli-district-boundary-01",
    type: "Feature",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [79.35, 30.15],
          [79.25, 30.55],
          [79.55, 31.05],
          [80.05, 31.00],
          [80.20, 30.65],
          [80.00, 30.20],
          [79.65, 30.05],
          [79.35, 30.15]
        ]
      ]
    },
    properties: {
      name: "Chamoli District Boundary",
      district_name: "Chamoli",
      layer: "Uttarakhand_District_Boundary",
      Layer: "Uttarakhand_District_Boundary",
      LAYER: "Uttarakhand_District_Boundary",
      district_code: "0502",
      headquarters: "Gopeshwar",
      area_sq_km: 8030
    }
  },

  // 3. Tehsil Boundaries
  {
    id: "tehsil-joshimath",
    type: "Feature",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [79.50, 30.50],
          [79.55, 31.05],
          [80.15, 30.95],
          [80.10, 30.55],
          [79.70, 30.45],
          [79.50, 30.50]
        ]
      ]
    },
    properties: {
      name: "Joshimath Tehsil",
      layer: "Uttarakhand_Tehsil_Boundary",
      Layer: "Uttarakhand_Tehsil_Boundary",
      LAYER: "Uttarakhand_Tehsil_Boundary",
      tehsil_name: "Joshimath",
      district: "Chamoli"
    }
  },
  {
    id: "tehsil-chamoli",
    type: "Feature",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [79.25, 30.25],
          [79.35, 30.60],
          [79.60, 30.50],
          [79.55, 30.20],
          [79.25, 30.25]
        ]
      ]
    },
    properties: {
      name: "Chamoli (Gopeshwar) Tehsil",
      layer: "Uttarakhand_Tehsil_Boundary",
      Layer: "Uttarakhand_Tehsil_Boundary",
      LAYER: "Uttarakhand_Tehsil_Boundary",
      tehsil_name: "Chamoli",
      district: "Chamoli"
    }
  },
  {
    id: "tehsil-karnaprayag",
    type: "Feature",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [79.20, 30.15],
          [79.35, 30.30],
          [79.50, 30.15],
          [79.35, 30.05],
          [79.20, 30.15]
        ]
      ]
    },
    properties: {
      name: "Karnaprayag Tehsil",
      layer: "Uttarakhand_Tehsil_Boundary",
      Layer: "Uttarakhand_Tehsil_Boundary",
      LAYER: "Uttarakhand_Tehsil_Boundary",
      tehsil_name: "Karnaprayag",
      district: "Chamoli"
    }
  },
  {
    id: "tehsil-gairsain",
    type: "Feature",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [79.20, 30.00],
          [79.40, 30.12],
          [79.45, 29.95],
          [79.25, 29.90],
          [79.20, 30.00]
        ]
      ]
    },
    properties: {
      name: "Gairsain Tehsil",
      layer: "Uttarakhand_Tehsil_Boundary",
      Layer: "Uttarakhand_Tehsil_Boundary",
      LAYER: "Uttarakhand_Tehsil_Boundary",
      tehsil_name: "Gairsain",
      district: "Chamoli"
    }
  },

  // 4. Block Boundaries
  {
    id: "block-joshimath",
    type: "Feature",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [79.52, 30.52],
          [79.56, 30.98],
          [80.05, 30.90],
          [80.00, 30.50],
          [79.52, 30.52]
        ]
      ]
    },
    properties: {
      name: "Joshimath Block",
      layer: "Uttarakhand_Block_Boundary",
      Layer: "Uttarakhand_Block_Boundary",
      LAYER: "Uttarakhand_Block_Boundary",
      block_name: "Joshimath",
      district: "Chamoli"
    }
  },
  {
    id: "block-dasholi",
    type: "Feature",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [79.30, 30.35],
          [79.45, 30.55],
          [79.60, 30.40],
          [79.45, 30.30],
          [79.30, 30.35]
        ]
      ]
    },
    properties: {
      name: "Dasholi (Chamoli) Block",
      layer: "Uttarakhand_Block_Boundary",
      Layer: "Uttarakhand_Block_Boundary",
      LAYER: "Uttarakhand_Block_Boundary",
      block_name: "Dasholi",
      district: "Chamoli"
    }
  },
  {
    id: "block-ghat",
    type: "Feature",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [79.45, 30.25],
          [79.65, 30.35],
          [79.75, 30.15],
          [79.50, 30.15],
          [79.45, 30.25]
        ]
      ]
    },
    properties: {
      name: "Ghat Block",
      layer: "Uttarakhand_Block_Boundary",
      Layer: "Uttarakhand_Block_Boundary",
      LAYER: "Uttarakhand_Block_Boundary",
      block_name: "Ghat",
      district: "Chamoli"
    }
  },
  {
    id: "block-pokhari",
    type: "Feature",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [79.15, 30.35],
          [79.30, 30.45],
          [79.35, 30.30],
          [79.20, 30.25],
          [79.15, 30.35]
        ]
      ]
    },
    properties: {
      name: "Pokhari Block",
      layer: "Uttarakhand_Block_Boundary",
      Layer: "Uttarakhand_Block_Boundary",
      LAYER: "Uttarakhand_Block_Boundary",
      block_name: "Pokhari",
      district: "Chamoli"
    }
  },

  // 5. Major Rivers (Perennial)
  {
    id: "river-alaknanda",
    type: "Feature",
    geometry: {
      type: "LineString",
      coordinates: [
        [79.35, 30.85], // Satopanth glacier
        [79.49, 30.74], // Badrinath
        [79.56, 30.55], // Joshimath / Vishnuprayag
        [79.49, 30.40], // Nandaprayag
        [79.22, 30.26], // Karnaprayag
        [79.05, 30.28], // Rudraprayag
        [78.60, 30.15]  // Devprayag
      ]
    },
    properties: {
      name: "Alaknanda River",
      layer: "River-Perennial  (1965)",
      Layer: "River-Perennial  (1965)",
      LAYER: "River-Perennial  (1965)",
      river_name: "Alaknanda",
      length_km: 195,
      type: "Perennial"
    }
  },
  {
    id: "river-dhauliganga",
    type: "Feature",
    geometry: {
      type: "LineString",
      coordinates: [
        [79.95, 30.80], // Niti Pass area
        [79.80, 30.65], // Malari
        [79.68, 30.55], // Tapovan / Raini
        [79.56, 30.55]  // Confluence at Vishnuprayag
      ]
    },
    properties: {
      name: "Dhauliganga River",
      layer: "River-Perennial  (1965)",
      Layer: "River-Perennial  (1965)",
      LAYER: "River-Perennial  (1965)",
      river_name: "Dhauliganga",
      length_km: 82,
      type: "Perennial"
    }
  },
  {
    id: "river-pindar",
    type: "Feature",
    geometry: {
      type: "LineString",
      coordinates: [
        [79.98, 30.25], // Pindari Glacier
        [79.75, 30.15], // Tharali
        [79.55, 30.18], // Narayanbagar
        [79.22, 30.26]  // Confluence at Karnaprayag
      ]
    },
    properties: {
      name: "Pindar River",
      layer: "River-Perennial  (1965)",
      Layer: "River-Perennial  (1965)",
      LAYER: "River-Perennial  (1965)",
      river_name: "Pindar",
      length_km: 105,
      type: "Perennial"
    }
  },
  {
    id: "river-nandakini",
    type: "Feature",
    geometry: {
      type: "LineString",
      coordinates: [
        [79.75, 30.32], // Nanda Ghunti slope
        [79.55, 30.34], // Ghat
        [79.49, 30.40]  // Confluence at Nandaprayag
      ]
    },
    properties: {
      name: "Nandakini River",
      layer: "River-Perennial  (1965)",
      Layer: "River-Perennial  (1965)",
      LAYER: "River-Perennial  (1965)",
      river_name: "Nandakini",
      length_km: 56,
      type: "Perennial"
    }
  },

  // 6. Chamoli Key Villages & Settlements (Points)
  {
    id: "village-gopeshwar",
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [79.3330, 30.4136]
    },
    properties: {
      name: "Gopeshwar (District HQ)",
      village_name: "Gopeshwar",
      layer: "Chamoli-Villages",
      Layer: "Chamoli-Villages",
      LAYER: "Chamoli-Villages",
      tehsil: "Chamoli",
      block: "Dasholi",
      population: 21447,
      elevation_m: 1550,
      facilities: "District Court, Civil Hospital, PG College"
    }
  },
  {
    id: "village-joshimath",
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [79.5653, 30.5574]
    },
    properties: {
      name: "Joshimath (Jyotirmath)",
      village_name: "Joshimath",
      layer: "Chamoli-Villages",
      Layer: "Chamoli-Villages",
      LAYER: "Chamoli-Villages",
      tehsil: "Joshimath",
      block: "Joshimath",
      population: 16709,
      elevation_m: 1890,
      facilities: "Army Cantonment, Ropeway, Base for Auli"
    }
  },
  {
    id: "village-badrinath",
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [79.4938, 30.7433]
    },
    properties: {
      name: "Badrinath Dham",
      village_name: "Badrinath",
      layer: "Chamoli-Villages",
      Layer: "Chamoli-Villages",
      LAYER: "Chamoli-Villages",
      tehsil: "Joshimath",
      block: "Joshimath",
      population: 2438,
      elevation_m: 3133,
      facilities: "Temple Shrine, Pilgrim Dharamshalas, Helipad"
    }
  },
  {
    id: "village-mana",
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [79.4975, 30.7711]
    },
    properties: {
      name: "Mana Village (First Indian Village)",
      village_name: "Mana",
      layer: "Chamoli-Villages",
      Layer: "Chamoli-Villages",
      LAYER: "Chamoli-Villages",
      tehsil: "Joshimath",
      block: "Joshimath",
      population: 1214,
      elevation_m: 3200,
      facilities: "Bhotia Handloom Center, Indo-Tibetan Border Post"
    }
  },
  {
    id: "village-karnaprayag",
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [79.2185, 30.2589]
    },
    properties: {
      name: "Karnaprayag",
      village_name: "Karnaprayag",
      layer: "Chamoli-Villages",
      Layer: "Chamoli-Villages",
      LAYER: "Chamoli-Villages",
      tehsil: "Karnaprayag",
      block: "Karnaprayag",
      population: 8297,
      elevation_m: 1451,
      facilities: "Upcoming Railway Terminal, Sub-District Hospital"
    }
  },
  {
    id: "village-gairsain",
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [79.2882, 30.0528]
    },
    properties: {
      name: "Gairsain (Bhararisain Summer Capital)",
      village_name: "Gairsain",
      layer: "Chamoli-Villages",
      Layer: "Chamoli-Villages",
      LAYER: "Chamoli-Villages",
      tehsil: "Gairsain",
      block: "Gairsain",
      population: 7138,
      elevation_m: 1750,
      facilities: "Uttarakhand Vidhan Sabha Complex, Police Training"
    }
  },
  {
    id: "village-tharali",
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [79.5255, 30.1344]
    },
    properties: {
      name: "Tharali",
      village_name: "Tharali",
      layer: "Chamoli-Villages",
      Layer: "Chamoli-Villages",
      LAYER: "Chamoli-Villages",
      tehsil: "Tharali",
      block: "Tharali",
      population: 4320,
      elevation_m: 1280,
      facilities: "Degree College, Community Health Center"
    }
  },
  {
    id: "village-nandaprayag",
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [79.3245, 30.3308]
    },
    properties: {
      name: "Nandaprayag",
      village_name: "Nandaprayag",
      layer: "Chamoli-Villages",
      Layer: "Chamoli-Villages",
      LAYER: "Chamoli-Villages",
      tehsil: "Chamoli",
      block: "Dasholi",
      population: 1641,
      elevation_m: 1358,
      facilities: "Prayag Sangam Ghat, Primary Health Center"
    }
  },
  {
    id: "village-pokhari",
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [79.2012, 30.3541]
    },
    properties: {
      name: "Pokhari",
      village_name: "Pokhari",
      layer: "Chamoli-Villages",
      Layer: "Chamoli-Villages",
      LAYER: "Chamoli-Villages",
      tehsil: "Pokhari",
      block: "Pokhari",
      population: 3412,
      elevation_m: 1900,
      facilities: "Block Development Office, Government Inter College"
    }
  },
  {
    id: "village-dewal",
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [79.6231, 30.0821]
    },
    properties: {
      name: "Dewal",
      village_name: "Dewal",
      layer: "Chamoli-Villages",
      Layer: "Chamoli-Villages",
      LAYER: "Chamoli-Villages",
      tehsil: "Tharali",
      block: "Dewal",
      population: 2950,
      elevation_m: 1420,
      facilities: "Base Camp for Roopkund Trek, Primary Health Center"
    }
  },

  // 7. Almora District Villages
  {
    id: "almora-dayun",
    type: "Feature",
    geometry: { type: "Point", coordinates: [79.7461, 29.4342] },
    properties: { name: "Dayun", village_name: "Dayun", layer: "Almora-Villages", Layer: "Almora-Villages", LAYER: "Almora-Villages", tehsil: "Jainti", block: "Lamgara", DIST_NAME: "Almora", population: 86 }
  },
  {
    id: "almora-hq",
    type: "Feature",
    geometry: { type: "Point", coordinates: [79.6631, 29.5971] },
    properties: { name: "Almora (District HQ)", village_name: "Almora", layer: "Almora-Villages", Layer: "Almora-Villages", LAYER: "Almora-Villages", tehsil: "Almora", block: "Hawalbagh", DIST_NAME: "Almora", population: 34122 }
  },
  {
    id: "almora-ranikhet",
    type: "Feature",
    geometry: { type: "Point", coordinates: [79.4322, 29.6434] },
    properties: { name: "Ranikhet", village_name: "Ranikhet", layer: "Almora-Villages", Layer: "Almora-Villages", LAYER: "Almora-Villages", tehsil: "Ranikhet", block: "Tarikhet", DIST_NAME: "Almora", population: 18886 }
  },
  {
    id: "almora-dwarahat",
    type: "Feature",
    geometry: { type: "Point", coordinates: [79.4267, 29.7788] },
    properties: { name: "Dwarahat", village_name: "Dwarahat", layer: "Almora-Villages", Layer: "Almora-Villages", LAYER: "Almora-Villages", tehsil: "Dwarahat", block: "Dwarahat", DIST_NAME: "Almora", population: 2749 }
  },
  {
    id: "almora-someshwar",
    type: "Feature",
    geometry: { type: "Point", coordinates: [79.6053, 29.7780] },
    properties: { name: "Someshwar", village_name: "Someshwar", layer: "Almora-Villages", Layer: "Almora-Villages", LAYER: "Almora-Villages", tehsil: "Someshwar", block: "Takula", DIST_NAME: "Almora", population: 3120 }
  },
  {
    id: "almora-chaukhutiya",
    type: "Feature",
    geometry: { type: "Point", coordinates: [79.3524, 29.8770] },
    properties: { name: "Chaukhutiya", village_name: "Chaukhutiya", layer: "Almora-Villages", Layer: "Almora-Villages", LAYER: "Almora-Villages", tehsil: "Chaukhutiya", block: "Chaukhutiya", DIST_NAME: "Almora", population: 4620 }
  },

  // 8. Bageshwar District Villages
  {
    id: "bageshwar-hq",
    type: "Feature",
    geometry: { type: "Point", coordinates: [79.7712, 29.8398] },
    properties: { name: "Bageshwar (District HQ)", village_name: "Bageshwar", layer: "Bageshwar-Villages", Layer: "Bageshwar-Villages", LAYER: "Bageshwar-Villages", tehsil: "Bageshwar", block: "Bageshwar", DIST_NAME: "Bageshwar", population: 9800 }
  },
  {
    id: "bageshwar-kapkot",
    type: "Feature",
    geometry: { type: "Point", coordinates: [79.9042, 29.9450] },
    properties: { name: "Kapkot", village_name: "Kapkot", layer: "Bageshwar-Villages", Layer: "Bageshwar-Villages", LAYER: "Bageshwar-Villages", tehsil: "Kapkot", block: "Kapkot", DIST_NAME: "Bageshwar", population: 5120 }
  },
  {
    id: "bageshwar-baijnath",
    type: "Feature",
    geometry: { type: "Point", coordinates: [79.6200, 29.9100] },
    properties: { name: "Baijnath (Garur)", village_name: "Baijnath", layer: "Bageshwar-Villages", Layer: "Bageshwar-Villages", LAYER: "Bageshwar-Villages", tehsil: "Garur", block: "Garur", DIST_NAME: "Bageshwar", population: 3410 }
  },
  {
    id: "bageshwar-kausani",
    type: "Feature",
    geometry: { type: "Point", coordinates: [79.6000, 29.8500] },
    properties: { name: "Kausani", village_name: "Kausani", layer: "Bageshwar-Villages", Layer: "Bageshwar-Villages", LAYER: "Bageshwar-Villages", tehsil: "Garur", block: "Garur", DIST_NAME: "Bageshwar", population: 2408 }
  },

  // 9. Champawat District Villages
  {
    id: "champawat-hq",
    type: "Feature",
    geometry: { type: "Point", coordinates: [80.0988, 29.3344] },
    properties: { name: "Champawat (District HQ)", village_name: "Champawat", layer: "Champawat-Villages", Layer: "Champawat-Villages", LAYER: "Champawat-Villages", tehsil: "Champawat", block: "Champawat", DIST_NAME: "Champawat", population: 4801 }
  },
  {
    id: "champawat-lohaghat",
    type: "Feature",
    geometry: { type: "Point", coordinates: [80.0900, 29.4100] },
    properties: { name: "Lohaghat", village_name: "Lohaghat", layer: "Champawat-Villages", Layer: "Champawat-Villages", LAYER: "Champawat-Villages", tehsil: "Lohaghat", block: "Lohaghat", DIST_NAME: "Champawat", population: 5828 }
  },
  {
    id: "champawat-tanakpur",
    type: "Feature",
    geometry: { type: "Point", coordinates: [80.1100, 29.0700] },
    properties: { name: "Tanakpur", village_name: "Tanakpur", layer: "Champawat-Villages", Layer: "Champawat-Villages", LAYER: "Champawat-Villages", tehsil: "Poornagiri", block: "Champawat", DIST_NAME: "Champawat", population: 10404 }
  },
  {
    id: "champawat-banbasa",
    type: "Feature",
    geometry: { type: "Point", coordinates: [80.0700, 28.9900] },
    properties: { name: "Banbasa", village_name: "Banbasa", layer: "Champawat-Villages", Layer: "Champawat-Villages", LAYER: "Champawat-Villages", tehsil: "Poornagiri", block: "Champawat", DIST_NAME: "Champawat", population: 7990 }
  },

  // 10. Dehradun District Villages
  {
    id: "dehradun-hq",
    type: "Feature",
    geometry: { type: "Point", coordinates: [78.0322, 30.3165] },
    properties: { name: "Dehradun (Capital HQ)", village_name: "Dehradun", layer: "Dehradun-Villages", Layer: "Dehradun-Villages", LAYER: "Dehradun-Villages", tehsil: "Dehradun", block: "Raipur", DIST_NAME: "Dehradun", population: 574840 }
  },
  {
    id: "dehradun-rishikesh",
    type: "Feature",
    geometry: { type: "Point", coordinates: [78.2676, 30.0869] },
    properties: { name: "Rishikesh", village_name: "Rishikesh", layer: "Dehradun-Villages", Layer: "Dehradun-Villages", LAYER: "Dehradun-Villages", tehsil: "Rishikesh", block: "Doiwala", DIST_NAME: "Dehradun", population: 102464 }
  },
  {
    id: "dehradun-mussoorie",
    type: "Feature",
    geometry: { type: "Point", coordinates: [78.0754, 30.4598] },
    properties: { name: "Mussoorie", village_name: "Mussoorie", layer: "Dehradun-Villages", Layer: "Dehradun-Villages", LAYER: "Dehradun-Villages", tehsil: "Mussoorie", block: "Kalsi", DIST_NAME: "Dehradun", population: 30118 }
  },
  {
    id: "dehradun-chakrata",
    type: "Feature",
    geometry: { type: "Point", coordinates: [77.8687, 30.7016] },
    properties: { name: "Chakrata", village_name: "Chakrata", layer: "Dehradun-Villages", Layer: "Dehradun-Villages", LAYER: "Dehradun-Villages", tehsil: "Chakrata", block: "Chakrata", DIST_NAME: "Dehradun", population: 5121 }
  },

  // 11. Haridwar District Villages
  {
    id: "haridwar-hq",
    type: "Feature",
    geometry: { type: "Point", coordinates: [78.1642, 29.9457] },
    properties: { name: "Haridwar (District HQ)", village_name: "Haridwar", layer: "Haridwar-Villages", Layer: "Haridwar-Villages", LAYER: "Haridwar-Villages", tehsil: "Haridwar", block: "Bahadrabad", DIST_NAME: "Haridwar", population: 228832 }
  },
  {
    id: "haridwar-roorkee",
    type: "Feature",
    geometry: { type: "Point", coordinates: [77.8880, 29.8543] },
    properties: { name: "Roorkee", village_name: "Roorkee", layer: "Haridwar-Villages", Layer: "Haridwar-Villages", LAYER: "Haridwar-Villages", tehsil: "Roorkee", block: "Roorkee", DIST_NAME: "Haridwar", population: 118200 }
  },
  {
    id: "haridwar-laksar",
    type: "Feature",
    geometry: { type: "Point", coordinates: [78.0264, 29.7483] },
    properties: { name: "Laksar", village_name: "Laksar", layer: "Haridwar-Villages", Layer: "Haridwar-Villages", LAYER: "Haridwar-Villages", tehsil: "Laksar", block: "Laksar", DIST_NAME: "Haridwar", population: 21760 }
  },
  {
    id: "haridwar-bhagwanpur",
    type: "Feature",
    geometry: { type: "Point", coordinates: [77.8100, 29.9400] },
    properties: { name: "Bhagwanpur", village_name: "Bhagwanpur", layer: "Haridwar-Villages", Layer: "Haridwar-Villages", LAYER: "Haridwar-Villages", tehsil: "Bhagwanpur", block: "Bhagwanpur", DIST_NAME: "Haridwar", population: 38320 }
  },

  // 12. Nainital District Villages
  {
    id: "nainital-hq",
    type: "Feature",
    geometry: { type: "Point", coordinates: [79.4636, 29.3919] },
    properties: { name: "Nainital (District HQ)", village_name: "Nainital", layer: "Nainital-Villages", Layer: "Nainital-Villages", LAYER: "Nainital-Villages", tehsil: "Nainital", block: "Bhimtal", DIST_NAME: "Nainital", population: 41377 }
  },
  {
    id: "nainital-haldwani",
    type: "Feature",
    geometry: { type: "Point", coordinates: [79.5130, 29.2183] },
    properties: { name: "Haldwani", village_name: "Haldwani", layer: "Nainital-Villages", Layer: "Nainital-Villages", LAYER: "Nainital-Villages", tehsil: "Haldwani", block: "Haldwani", DIST_NAME: "Nainital", population: 156078 }
  },
  {
    id: "nainital-ramnagar",
    type: "Feature",
    geometry: { type: "Point", coordinates: [79.1264, 29.3950] },
    properties: { name: "Ramnagar", village_name: "Ramnagar", layer: "Nainital-Villages", Layer: "Nainital-Villages", LAYER: "Nainital-Villages", tehsil: "Ramnagar", block: "Ramnagar", DIST_NAME: "Nainital", population: 54787 }
  },
  {
    id: "nainital-bhimtal",
    type: "Feature",
    geometry: { type: "Point", coordinates: [79.5540, 29.3490] },
    properties: { name: "Bhimtal", village_name: "Bhimtal", layer: "Nainital-Villages", Layer: "Nainital-Villages", LAYER: "Nainital-Villages", tehsil: "Koshya Kutoali", block: "Bhimtal", DIST_NAME: "Nainital", population: 7722 }
  },

  // 13. Pauri Garhwal District Villages
  {
    id: "pauri-hq",
    type: "Feature",
    geometry: { type: "Point", coordinates: [78.7806, 30.1478] },
    properties: { name: "Pauri (District HQ)", village_name: "Pauri", layer: "Pauri-Villages", Layer: "Pauri-Villages", LAYER: "Pauri-Villages", tehsil: "Pauri", block: "Kot", DIST_NAME: "Pauri", population: 25440 }
  },
  {
    id: "pauri-srinagar",
    type: "Feature",
    geometry: { type: "Point", coordinates: [78.7844, 30.2227] },
    properties: { name: "Srinagar (Garhwal)", village_name: "Srinagar", layer: "Pauri-Villages", Layer: "Pauri-Villages", LAYER: "Pauri-Villages", tehsil: "Srinagar", block: "Khirsu", DIST_NAME: "Pauri", population: 37911 }
  },
  {
    id: "pauri-kotdwar",
    type: "Feature",
    geometry: { type: "Point", coordinates: [78.4975, 29.7460] },
    properties: { name: "Kotdwar", village_name: "Kotdwar", layer: "Pauri-Villages", Layer: "Pauri-Villages", LAYER: "Pauri-Villages", tehsil: "Kotdwar", block: "Dugadda", DIST_NAME: "Pauri", population: 33035 }
  },
  {
    id: "pauri-lansdowne",
    type: "Feature",
    geometry: { type: "Point", coordinates: [78.6811, 29.8377] },
    properties: { name: "Lansdowne", village_name: "Lansdowne", layer: "Pauri-Villages", Layer: "Pauri-Villages", LAYER: "Pauri-Villages", tehsil: "Lansdowne", block: "Jaiharikhal", DIST_NAME: "Pauri", population: 5667 }
  },

  // 14. Pithoragarh District Villages
  {
    id: "pithoragarh-hq",
    type: "Feature",
    geometry: { type: "Point", coordinates: [80.2182, 29.5829] },
    properties: { name: "Pithoragarh (District HQ)", village_name: "Pithoragarh", layer: "Pithoragarh-Villages", Layer: "Pithoragarh-Villages", LAYER: "Pithoragarh-Villages", tehsil: "Pithoragarh", block: "Bin", DIST_NAME: "Pithoragarh", population: 56044 }
  },
  {
    id: "pithoragarh-dharchula",
    type: "Feature",
    geometry: { type: "Point", coordinates: [80.5333, 29.8500] },
    properties: { name: "Dharchula", village_name: "Dharchula", layer: "Pithoragarh-Villages", Layer: "Pithoragarh-Villages", LAYER: "Pithoragarh-Villages", tehsil: "Dharchula", block: "Dharchula", DIST_NAME: "Pithoragarh", population: 7032 }
  },
  {
    id: "pithoragarh-munsyari",
    type: "Feature",
    geometry: { type: "Point", coordinates: [80.2366, 30.0667] },
    properties: { name: "Munsyari", village_name: "Munsyari", layer: "Pithoragarh-Villages", Layer: "Pithoragarh-Villages", LAYER: "Pithoragarh-Villages", tehsil: "Munsyari", block: "Munsyari", DIST_NAME: "Pithoragarh", population: 3120 }
  },
  {
    id: "pithoragarh-didihat",
    type: "Feature",
    geometry: { type: "Point", coordinates: [80.2500, 29.8000] },
    properties: { name: "Didihat", village_name: "Didihat", layer: "Pithoragarh-Villages", Layer: "Pithoragarh-Villages", LAYER: "Pithoragarh-Villages", tehsil: "Didihat", block: "Didihat", DIST_NAME: "Pithoragarh", population: 6522 }
  },

  // 15. Rudraprayag District Villages
  {
    id: "rudraprayag-hq",
    type: "Feature",
    geometry: { type: "Point", coordinates: [78.9814, 30.2858] },
    properties: { name: "Rudraprayag (District HQ)", village_name: "Rudraprayag", layer: "Rudraprayag-Villages", Layer: "Rudraprayag-Villages", LAYER: "Rudraprayag-Villages", tehsil: "Rudraprayag", block: "Augustmuni", DIST_NAME: "Rudraprayag", population: 9319 }
  },
  {
    id: "rudraprayag-kedarnath",
    type: "Feature",
    geometry: { type: "Point", coordinates: [79.0669, 30.7346] },
    properties: { name: "Kedarnath Dham", village_name: "Kedarnath", layer: "Rudraprayag-Villages", Layer: "Rudraprayag-Villages", LAYER: "Rudraprayag-Villages", tehsil: "Ukhimath", block: "Ukhimath", DIST_NAME: "Rudraprayag", population: 612 }
  },
  {
    id: "rudraprayag-ukhimath",
    type: "Feature",
    geometry: { type: "Point", coordinates: [79.0967, 30.5186] },
    properties: { name: "Ukhimath", village_name: "Ukhimath", layer: "Rudraprayag-Villages", Layer: "Rudraprayag-Villages", LAYER: "Rudraprayag-Villages", tehsil: "Ukhimath", block: "Ukhimath", DIST_NAME: "Rudraprayag", population: 2296 }
  },
  {
    id: "rudraprayag-guptkashi",
    type: "Feature",
    geometry: { type: "Point", coordinates: [79.0767, 30.5236] },
    properties: { name: "Guptkashi", village_name: "Guptkashi", layer: "Rudraprayag-Villages", Layer: "Rudraprayag-Villages", LAYER: "Rudraprayag-Villages", tehsil: "Ukhimath", block: "Ukhimath", DIST_NAME: "Rudraprayag", population: 3820 }
  },

  // 16. Tehri Garhwal District Villages
  {
    id: "tehri-hq",
    type: "Feature",
    geometry: { type: "Point", coordinates: [78.4800, 30.3800] },
    properties: { name: "New Tehri (District HQ)", village_name: "New Tehri", layer: "Tehri-Villages", Layer: "Tehri-Villages", LAYER: "Tehri-Villages", tehsil: "Tehri", block: "Chamba", DIST_NAME: "Tehri", population: 25425 }
  },
  {
    id: "tehri-chamba",
    type: "Feature",
    geometry: { type: "Point", coordinates: [78.3967, 30.3450] },
    properties: { name: "Chamba", village_name: "Chamba", layer: "Tehri-Villages", Layer: "Tehri-Villages", LAYER: "Tehri-Villages", tehsil: "Tehri", block: "Chamba", DIST_NAME: "Tehri", population: 7771 }
  },
  {
    id: "tehri-narendranagar",
    type: "Feature",
    geometry: { type: "Point", coordinates: [78.2867, 30.1650] },
    properties: { name: "Narendra Nagar", village_name: "Narendra Nagar", layer: "Tehri-Villages", Layer: "Tehri-Villages", LAYER: "Tehri-Villages", tehsil: "Narendra Nagar", block: "Narendra Nagar", DIST_NAME: "Tehri", population: 6049 }
  },
  {
    id: "tehri-devprayag",
    type: "Feature",
    geometry: { type: "Point", coordinates: [78.5989, 30.1458] },
    properties: { name: "Devprayag Sangam", village_name: "Devprayag", layer: "Tehri-Villages", Layer: "Tehri-Villages", LAYER: "Tehri-Villages", tehsil: "Devprayag", block: "Devprayag", DIST_NAME: "Tehri", population: 2152 }
  },

  // 17. Udham Singh Nagar District Villages
  {
    id: "usn-rudrapur",
    type: "Feature",
    geometry: { type: "Point", coordinates: [79.4000, 28.9800] },
    properties: { name: "Rudrapur (District HQ)", village_name: "Rudrapur", layer: "USN-Villages", Layer: "USN-Villages", LAYER: "USN-Villages", tehsil: "Rudrapur", block: "Rudrapur", DIST_NAME: "UdhamSinghNagar", population: 154554 }
  },
  {
    id: "usn-kashipur",
    type: "Feature",
    geometry: { type: "Point", coordinates: [78.9500, 29.2100] },
    properties: { name: "Kashipur", village_name: "Kashipur", layer: "USN-Villages", Layer: "USN-Villages", LAYER: "USN-Villages", tehsil: "Kashipur", block: "Kashipur", DIST_NAME: "UdhamSinghNagar", population: 121623 }
  },
  {
    id: "usn-pantnagar",
    type: "Feature",
    geometry: { type: "Point", coordinates: [79.4897, 29.0208] },
    properties: { name: "Pantnagar", village_name: "Pantnagar", layer: "USN-Villages", Layer: "USN-Villages", LAYER: "USN-Villages", tehsil: "Kichha", block: "Rudrapur", DIST_NAME: "UdhamSinghNagar", population: 35820 }
  },
  {
    id: "usn-khatima",
    type: "Feature",
    geometry: { type: "Point", coordinates: [79.9700, 28.9200] },
    properties: { name: "Khatima", village_name: "Khatima", layer: "USN-Villages", Layer: "USN-Villages", LAYER: "USN-Villages", tehsil: "Khatima", block: "Khatima", DIST_NAME: "UdhamSinghNagar", population: 53120 }
  },

  // 18. Uttarkashi (Uttrarkashi) District Villages
  {
    id: "uttarkashi-hq",
    type: "Feature",
    geometry: { type: "Point", coordinates: [78.4354, 30.7268] },
    properties: { name: "Uttarkashi (District HQ)", village_name: "Uttarkashi", layer: "Uttarkashi-Villages", Layer: "Uttarkashi-Villages", LAYER: "Uttarkashi-Villages", tehsil: "Bhatwari", block: "Bhatwari", DIST_NAME: "Uttrarkashi", population: 17475 }
  },
  {
    id: "uttarkashi-barkot",
    type: "Feature",
    geometry: { type: "Point", coordinates: [78.2089, 30.8100] },
    properties: { name: "Barkot", village_name: "Barkot", layer: "Uttarkashi-Villages", Layer: "Uttarkashi-Villages", LAYER: "Uttarkashi-Villages", tehsil: "Barkot", block: "Naugaon", DIST_NAME: "Uttrarkashi", population: 6712 }
  },
  {
    id: "uttarkashi-gangotri",
    type: "Feature",
    geometry: { type: "Point", coordinates: [78.9398, 30.9947] },
    properties: { name: "Gangotri Dham", village_name: "Gangotri", layer: "Uttarkashi-Villages", Layer: "Uttarkashi-Villages", LAYER: "Uttarkashi-Villages", tehsil: "Bhatwari", block: "Bhatwari", DIST_NAME: "Uttrarkashi", population: 110 }
  },
  {
    id: "uttarkashi-yamunotri",
    type: "Feature",
    geometry: { type: "Point", coordinates: [78.4600, 31.0100] },
    properties: { name: "Yamunotri Dham", village_name: "Yamunotri", layer: "Uttarkashi-Villages", Layer: "Uttarkashi-Villages", LAYER: "Uttarkashi-Villages", tehsil: "Barkot", block: "Naugaon", DIST_NAME: "Uttrarkashi", population: 60 }
  },
  {
    id: "uttarkashi-purola",
    type: "Feature",
    geometry: { type: "Point", coordinates: [78.0800, 30.8800] },
    properties: { name: "Purola", village_name: "Purola", layer: "Uttarkashi-Villages", Layer: "Uttarkashi-Villages", LAYER: "Uttarkashi-Villages", tehsil: "Purola", block: "Purola", DIST_NAME: "Uttrarkashi", population: 4500 }
  }
];

