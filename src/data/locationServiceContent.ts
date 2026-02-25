/**
 * Location-specific data including neighborhoods, landmarks, and drainage challenges
 */
export interface LocationData {
  neighborhoods: string[];
  landmarks: string[];
  drainageInfo: string;
  responseTime: string;
  propertyTypes: string;
}

export const LOCATION_DATA: Record<string, LocationData> = {
  poole: {
    neighborhoods: ["Canford Heath", "Hamworthy", "Parkstone", "Branksome", "Broadstone", "Oakdale", "Turlin Moor", "Upton", "Fleetsbridge", "Newtown"],
    landmarks: ["Poole Harbour", "Brownsea Island", "Poole Quay", "the Old Town", "Poole Lighthouse arts centre"],
    drainageInfo: "Poole's coastal location and extensive harbour frontage means many properties face drainage challenges related to tidal influences and the town's sandy, permeable soils. The mix of Victorian terraces in Parkstone and Newtown, post-war housing on Canford Heath, and modern waterfront developments all present varied drainage needs. Proximity to the harbour and its inlets means surface water management is critical to prevent flooding during high tides and heavy rainfall.",
    responseTime: "typically within 30-45 minutes",
    propertyTypes: "Victorian terraces, post-war semis, modern waterfront apartments, detached bungalows, and harbour-side commercial premises"
  },
  bournemouth: {
    neighborhoods: ["Boscombe", "Winton", "Charminster", "Southbourne", "Springbourne", "Westbourne", "Moordown", "Talbot Woods", "Kinson", "Pokesdown"],
    landmarks: ["Bournemouth Pier", "the Lower Gardens", "Russell-Cotes Museum", "Bournemouth International Centre", "the Square"],
    drainageInfo: "Bournemouth's large stock of Victorian and Edwardian guesthouses and converted flats creates distinctive drainage demands, with many original systems having been modified multiple times over the decades. The town's sandy clifftop soils can cause ground movement that shifts buried pipework, while the famous chines create surface water challenges during heavy rainfall. Properties that have been converted from hotels or large houses into multiple flats often have complex, modified drainage layouts that benefit from professional CCTV assessment.",
    responseTime: "typically within 45-60 minutes",
    propertyTypes: "Victorian and Edwardian terraces, converted guesthouses and hotels, modern seafront apartments, Edwardian villas, and student accommodation"
  },
  ferndown: {
    neighborhoods: ["Longham", "Hampreston", "West Moors", "Trickett's Cross", "Parley", "Stapehill", "Uddens", "Cobham", "Canford Bottom", "Three Legged Cross"],
    landmarks: ["Ferndown Golf Club", "Stapehill Abbey", "Uddens Country Park", "Ferndown Forest", "Trickett's Cross Industrial Estate"],
    drainageInfo: "Ferndown's development as a residential suburb from the 1930s onwards means most properties have relatively modern drainage, though many original systems are now approaching the age where inspections and maintenance add real value. The area's sandy heathland soils drain freely but can shift around buried pipes over time, causing joint displacement and groundwater infiltration. Rural properties on the fringes of Ferndown and in surrounding villages may be served by private drainage systems that require specialist maintenance.",
    responseTime: "typically within 45-60 minutes",
    propertyTypes: "1930s–1960s semis and bungalows, modern detached homes, executive new-build estates, and rural properties with private drainage"
  },
  wimborne: {
    neighborhoods: ["Colehill", "Corfe Mullen", "Merley", "Walford", "Pamphill", "Eye", "Leigh", "Holt", "Mannington", "Canford Magna"],
    landmarks: ["Wimborne Minster", "the Model Town", "Kingston Lacy House", "the River Allen", "Wimborne Market"],
    drainageInfo: "Wimborne Minster's ancient market town character means properties range from medieval buildings in the town centre to Georgian townhouses and Victorian terraces, each with drainage infrastructure of very different ages and materials. The Rivers Allen and Stour converge near the town, placing some properties in flood-risk zones where surface water management is essential during periods of heavy rainfall. Rural properties in surrounding villages such as Pamphill and Holt are often served by septic tanks and private systems that require periodic specialist attention.",
    responseTime: "typically within 45-60 minutes",
    propertyTypes: "medieval and Georgian town-centre buildings, Victorian and Edwardian terraces, rural stone cottages, and modern residential estates"
  },
  wareham: {
    neighborhoods: ["Stoborough", "Northport", "Sandford", "Ridge", "Bere Regis", "East Stoke", "Arne", "Holton Heath", "Worgret", "Lytchett Matravers"],
    landmarks: ["Wareham Quay", "the Saxon Town Walls", "Wareham Forest", "the River Frome", "Lady St Mary Church"],
    drainageInfo: "Wareham sits within a loop of the River Frome and borders Poole Harbour, creating a water table that can be challenging for drainage throughout the year. The town's Saxon street layout and mixture of period stone buildings alongside more modern development mean drainage systems vary significantly across short distances. Properties near the River Frome and Poole Harbour tributaries experience seasonal high water tables that affect drainage performance and may require specialist solutions such as non-return valves or pumped systems.",
    responseTime: "typically within 60-75 minutes",
    propertyTypes: "period stone cottages, Georgian and Victorian town properties, modern estates, and rural properties with private drainage"
  },
  christchurch: {
    neighborhoods: ["Burton", "Highcliffe", "Mudeford", "Walkford", "Bransgore", "Somerford", "Fairmile", "Jumpers", "Stanpit", "Hurn"],
    landmarks: ["Christchurch Priory", "Christchurch Quay", "Mudeford Quay", "the River Stour", "Hengistbury Head"],
    drainageInfo: "Christchurch sits at the confluence of the Rivers Avon and Stour, and many of its properties lie within flood-risk zones that demand careful drainage management. The town's Saxon heritage means some central properties have very old foundations and drainage infrastructure, while coastal areas around Mudeford are exposed to tidal influences. Sandy soils in the area are prone to localised subsidence that can affect buried pipework, particularly beneath gardens, driveways, and patios.",
    responseTime: "typically within 60-75 minutes",
    propertyTypes: "period town-centre cottages, Victorian and Edwardian semis, modern riverside developments, and coastal bungalows"
  },
  ringwood: {
    neighborhoods: ["Ashley Heath", "St Leonards", "St Ives", "Poulner", "Harbridge", "Ellingham", "Mockbeggar", "Crow", "Hightown", "Blashford"],
    landmarks: ["Ringwood Market Place", "Ringwood Brewery", "the River Avon", "Liberty's Owl and Bird of Prey Centre", "Ringwood Forest"],
    drainageInfo: "Ringwood's position on the River Avon floodplain means many properties are at risk from seasonal flooding, and drainage management is particularly important during winter months when the Avon can rise rapidly. The New Forest setting brings heathland and woodland soils that shift and settle around drainage pipes, while properties in the Avon valley floodplain can experience groundwater rising close to the surface. Many rural properties in the surrounding area rely on private drainage solutions that require regular professional inspection.",
    responseTime: "typically within 60-75 minutes",
    propertyTypes: "Georgian and Victorian town-centre properties, New Forest cottages, modern suburban estates, and rural properties with private drainage"
  },
  swanage: {
    neighborhoods: ["Herston", "Langton Matravers", "Worth Matravers", "Studland", "Ulwell", "Godlingston", "Acton", "Kingston", "Harman's Cross", "Corfe Castle"],
    landmarks: ["Swanage Beach", "Durlston Country Park", "the Swanage Railway", "Corfe Castle", "Studland Bay"],
    drainageInfo: "Swanage is a Purbeck stone seaside town where the local geology of Portland limestone and Purbeck marble directly influences drainage conditions — fissured rock can allow water to travel unpredictably underground. Coastal properties face salt-air corrosion of metal fittings and components, while the town's steep topography generates fast surface water runoff that can overwhelm gullies during heavy rain. Many of the area's older cottages and Victorian seafront buildings have drainage that has never been comprehensively surveyed or upgraded.",
    responseTime: "typically within 60-75 minutes",
    propertyTypes: "Purbeck stone cottages, Victorian seaside terraces, holiday chalets and chalets, modern bungalows, and rural farmhouses"
  },
  verwood: {
    neighborhoods: ["Three Legged Cross", "Ebblake", "Alderholt", "Cranborne", "Ringwood Forest", "Mannington", "Gotham", "Crendell", "Edmondsham", "Horton"],
    landmarks: ["Moors Valley Country Park", "Verwood Heathland Heritage Centre", "Crane Valley Golf Club", "the River Crane", "Edmondsham House"],
    drainageInfo: "Verwood expanded rapidly from the 1960s through the 1990s, meaning most properties have plastic drainage systems that are now reaching the age where inspections and preventative maintenance become genuinely worthwhile. The surrounding heathland is a protected SSSI, so any drainage work affecting the ground must be carried out sensitively and with proper consideration for the environment. Sandy heathland soils offer good natural percolation but can shift around buried pipework over time, causing gradual joint displacement and root infiltration.",
    responseTime: "typically within 60-75 minutes",
    propertyTypes: "post-war bungalows, 1960s–1990s estates, modern detached homes, and rural properties near the forest"
  },
  "blandford-forum": {
    neighborhoods: ["Blandford St Mary", "Bryanston", "Langton Long", "Tarrant Hinton", "Stourpaine", "Durweston", "Tarrant Crawford", "Pimperne", "Tarrant Monkton", "Spetisbury"],
    landmarks: ["Blandford Town Hall", "the Coupar building", "the River Stour", "the Royal Signals Museum", "Bryanston School"],
    drainageInfo: "Blandford Forum is a Georgian market town rebuilt after the devastating fire of 1731, and its elegant period buildings sit above drainage infrastructure that is considerably older and of variable condition. The River Stour runs through the town, and low-lying properties near the river are susceptible to flooding during prolonged wet periods when the Stour can rise quickly across the valley floor. Rural properties in the surrounding Stour valley villages often rely on private septic tanks and package treatment plants, and the chalk and clay soils of north Dorset create varied drainage conditions across short distances.",
    responseTime: "typically within 60-75 minutes",
    propertyTypes: "Georgian townhouses, Victorian and Edwardian terraces, Dorset flint and stone cottages, and modern rural estates"
  }
};

/**
 * Service-specific content for each location
 */
export interface ServiceContent {
  intro: string;
  commonProblems: string[];
  process: string;
  localTip: string;
}

type LocationServiceContentMap = Record<string, Record<string, ServiceContent>>;

export const LOCATION_SERVICE_CONTENT: LocationServiceContentMap = {
  poole: {
    "blocked-drains": {
      intro: "Poole's diverse property mix — from Victorian terraces in Parkstone to modern harbour-side developments — means blocked drains can arise in any home or business. Our Poole-based engineers understand the local drainage landscape intimately, including the tidal influences on the harbour-side network and the sandy soils that can shift around pipework, and we respond swiftly to restore your system to full working order.",
      commonProblems: ["Fat and grease buildup from busy household and commercial kitchens", "Tree root intrusion in Parkstone and Branksome's mature streets", "Sand and silt ingress in properties near the harbour and beaches", "Shared drainage blockages in terraced housing in Newtown and Oakdale", "Foreign object obstructions in commercial harbour-side premises"],
      process: "We begin with a thorough assessment of your drainage system, using CCTV cameras where needed to pinpoint the exact location and cause of the blockage. Our high-pressure jetting equipment clears even the most stubborn obstructions, and we always advise on preventing future issues.",
      localTip: "Poole properties close to the harbour and waterways should have external gulley covers checked regularly — tidal surges can push sand and debris back up into surface drainage."
    },
    "drain-unblocking": {
      intro: "When drains back up anywhere in Poole — from Canford Heath to Hamworthy or the Old Town — our local teams respond quickly with the right equipment for every property type. We understand the varied drainage challenges across the town and work efficiently to clear blockages with minimal disruption.",
      commonProblems: ["Kitchen sink blockages from cooking fat and food waste", "Bathroom drain clogs from hair and soap accumulation", "External drain blockages from windblown sand and leaves", "Shared drainage issues in terraced properties", "Commercial kitchen drain problems in quayside premises"],
      process: "Our engineers arrive with manual rods, electromechanical machines, and high-pressure jetting units to handle any unblocking scenario. We identify the blockage type, select the appropriate method, and clear your drains while keeping disruption to a minimum.",
      localTip: "Poole's coastal winds carry sand and grit that can accumulate in external gullies. Fitting gully guards is an inexpensive way to prevent external drain blockages."
    },
    "cctv-drain-surveys": {
      intro: "Understanding the condition of drainage beneath your Poole property has never been more straightforward. Our advanced CCTV drain surveys provide crystal-clear footage of pipe conditions, helping identify hidden problems before they become costly emergencies — particularly valuable for Poole's older Victorian and post-war housing stock.",
      commonProblems: ["Hidden cracks in ageing clay and concrete pipes", "Displaced joints caused by sandy soil movement", "Root ingress at pipe connections beneath mature gardens", "Scale and deposit buildup restricting flow", "Structural damage in properties close to the harbour"],
      process: "We insert a high-definition camera into your drainage system and record footage showing the full condition of your pipes. You receive a detailed report with findings, recommendations, and annotated images clearly showing any areas of concern.",
      localTip: "Buying a property in Poole's sought-after harbour-side or Old Town area? A pre-purchase CCTV survey can reveal hidden drainage issues before they become expensive surprises after completion."
    },
    "drain-jetting": {
      intro: "High-pressure drain jetting is the most effective way to clear stubborn blockages and thoroughly clean Poole's varied pipe systems — from Victorian clay drains in Parkstone to modern plastic drainage in newer Canford Heath developments. Our specialist equipment delivers water at pressures up to 4,000 PSI, cutting through grease, sand, scale, and root growth.",
      commonProblems: ["Compacted sand and silt in harbour-adjacent drains", "Heavy grease accumulation in domestic and commercial pipes", "Scale buildup in older clay and concrete pipes", "Root masses restricting flow in garden drainage", "General pipe cleaning and maintenance needs"],
      process: "Jetting equipment is carefully inserted into your drainage system with water pressure calibrated to suit your pipe type and condition. The rotating nozzle scours pipe walls clean while flushing debris safely towards the sewer connection.",
      localTip: "Poole's proximity to sandy beaches means grit and sand can work into external drainage over time. Annual jetting keeps systems clear and prevents gradual flow reduction."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies don't respect the clock, and neither do we. Our Poole emergency response teams are on call around the clock, ready to tackle overflowing drains, sewage backups, and flooding anywhere in the town — from Broadstone family homes to Old Town businesses and harbour-side apartments.",
      commonProblems: ["Overflowing manholes and external drains", "Sewage backing up into properties during high tide", "Flooding from blocked surface water drains", "Collapsed drains causing ground instability", "Foul odours indicating a serious pipe failure"],
      process: "Call our emergency line and we will dispatch the nearest available Poole engineer to your location. They will assess the situation, implement containment measures where needed, and work to resolve the emergency quickly and safely.",
      localTip: "Know the location of your external manholes and stopcock before an emergency arises. This allows our engineers to begin work the moment they arrive, saving valuable time."
    },
    "drain-repairs": {
      intro: "Poole's mix of Victorian terraces, post-war estates, and modern waterfront developments means drain repairs require both traditional expertise and up-to-date techniques. Our repair specialists handle everything from patching minor cracks with no-dig relining to full pipe replacement, always selecting the most cost-effective approach for your specific property.",
      commonProblems: ["Cracked and fractured pipes caused by sandy soil movement", "Displaced or misaligned joints from ground settlement", "Root damage in mature residential areas", "Corrosion of older metal fittings and connections", "Subsidence-related damage near the harbour and waterways"],
      process: "We assess all damage using CCTV inspection and recommend the most appropriate repair method — from no-dig relining for accessible cracks to excavation for severely collapsed sections. All repairs come with our workmanship guarantee.",
      localTip: "Poole's sandy soils can shift seasonally around buried pipes. If you notice slow drainage or damp patches in walls or floors, arrange an inspection before minor movement becomes major damage."
    }
  },
  bournemouth: {
    "blocked-drains": {
      intro: "Bournemouth's large stock of converted properties, student houses, and former guesthouses presents distinctive drainage challenges, with systems that have often been modified repeatedly over the decades. Our Bournemouth blocked drain specialists are familiar with these complex layouts and respond promptly to clear blockages in any property type across the town.",
      commonProblems: ["Fat and grease buildup in properties with multiple kitchens", "Root intrusion from the town's many established trees and chine vegetation", "Debris washed into drains via the clifftop chines during heavy rain", "Shared drainage blockages in converted multi-occupancy properties", "Commercial drain blockages in Bournemouth's busy restaurant and hotel sector"],
      process: "We assess your Bournemouth property's drainage layout before selecting a clearing method, taking into account whether the system has been modified through conversion. High-pressure jetting, mechanical cutting, or careful rodding are deployed as the situation demands.",
      localTip: "Bournemouth's chines channel large volumes of surface water during storms. Properties at the base of or adjacent to a chine should ensure drainage gullies are kept clear throughout the year."
    },
    "drain-unblocking": {
      intro: "From Boscombe to Westbourne and Southbourne to Moordown, our Bournemouth drain unblocking teams respond rapidly to calls across the town. We handle the full spectrum of residential and commercial drainage issues, bringing the right equipment for everything from Victorian clay pipes to modern plastic systems in newer developments.",
      commonProblems: ["Kitchen drain blockages from food waste in HMOs and multi-occupancy properties", "Bathroom drain clogs from hair, soap, and scale in older properties", "External gulley obstructions from leaf fall and windblown debris", "Toilet blockages from inappropriate items being flushed", "Commercial kitchen drainage problems in Bournemouth's hospitality businesses"],
      process: "Our engineers arrive equipped for the area's varied property stock. We locate the blockage precisely and select the least invasive clearing method, restoring full flow while minimising disruption to your property.",
      localTip: "Bournemouth's many converted properties often have multiple separate drainage runs. If one drain is blocked but others are fine, the blockage is likely isolated to that run rather than a shared section."
    },
    "cctv-drain-surveys": {
      intro: "With so many converted and multi-occupancy properties in Bournemouth, understanding exactly how drainage is configured has real practical value. Our CCTV surveys map pipe routes and assess condition clearly, providing essential information for buyers, landlords, and property managers across the town.",
      commonProblems: ["Drainage route mapping in converted hotels and guesthouses", "Condition assessment for property purchases in Talbot Woods and Westbourne", "Root ingress investigation from chine and garden vegetation", "Recurring blockage investigation in multi-occupancy buildings", "Insurance and renovation planning documentation"],
      process: "We access your drainage system and guide our high-definition camera through the full network, recording all findings. The resulting report maps the system clearly and identifies any defects, suitable for property transactions, planning applications, and insurance purposes.",
      localTip: "Buying a former guesthouse or hotel in Bournemouth? Drainage systems in these properties can be unexpectedly complex — a CCTV survey before exchange can save significant cost and difficulty later."
    },
    "drain-jetting": {
      intro: "High-pressure jetting is particularly valuable in Bournemouth, where converted properties accumulate years of grease and scale in drainage that was never designed for its current use. Our specialist equipment removes all trace of deposits from clay and plastic pipes alike, restoring full flow capacity across the town.",
      commonProblems: ["Grease and fat accumulation in properties with multiple kitchens", "Scale and limescale buildup in older clay pipes", "Debris deposited by chine surface water flows", "Root mass removal from garden and chine vegetation", "Pre-survey cleaning to ensure accurate CCTV assessment"],
      process: "We calibrate jetting pressure to suit your pipe type and the nature of the deposits being removed. Older clay pipes receive a measured approach that achieves thorough cleaning without risk of damage.",
      localTip: "Bournemouth's older terraces and converted properties benefit most from periodic jetting — deposits accumulate faster in pipes that carry more water from multiple households."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies anywhere in Bournemouth receive our immediate response, day or night. From sewage backups in Charminster to flooding in Southbourne, our engineers are available around the clock, equipped to contain and resolve any drainage emergency quickly and professionally.",
      commonProblems: ["Sewage backing up through toilets and sinks in multi-occupancy buildings", "Surface water flooding during heavy rain and chine overflow", "Manhole overflows affecting neighbouring properties", "Drain collapses causing garden or driveway subsidence", "Foul odours indicating serious pipe damage or blockage"],
      process: "Emergency calls receive priority dispatch and we keep you updated on arrival times. On reaching your Bournemouth property, our engineers contain the immediate situation and implement an effective lasting solution as swiftly as possible.",
      localTip: "Bournemouth properties in areas with drainage that runs through communal grounds should exchange emergency contact details with neighbours or a managing agent in case of a shared drainage failure."
    },
    "drain-repairs": {
      intro: "Repairing drainage in Bournemouth's eclectic property stock — from Victorian seafront terraces to modern apartment blocks — demands both versatility and quality workmanship. Our repair teams cover the full range from no-dig relining of cracked pipes to complete excavation and replacement where collapse has occurred.",
      commonProblems: ["Cracked clay pipes from cliff-top soil movement and erosion", "Joint displacement in sandy subsoil beneath gardens and driveways", "Root damage to pipes from chine and garden vegetation", "Age-related deterioration of original Victorian drainage", "Damage caused by previous modification works in converted buildings"],
      process: "We investigate all damage thoroughly by CCTV before recommending a repair strategy. No-dig relining is our preferred approach where possible, avoiding disruption to mature gardens and established landscaping.",
      localTip: "Bournemouth's sandy clifftop soils move more than most — if a drain repair has been necessary once, consider relining the full run to prevent future cracks forming in adjacent pipe sections."
    }
  },
  ferndown: {
    "blocked-drains": {
      intro: "Ferndown's post-war and modern residential developments typically feature plastic drainage systems that are reliable but not immune to blockage. Our Ferndown blocked drain specialists understand the local housing stock and the sandy heathland soils that underlie much of the area, and we respond promptly to any drainage issue across the town and surrounding villages.",
      commonProblems: ["Fat and grease buildup from domestic kitchens", "Root intrusion from garden trees in established residential streets", "Sand and heathland grit infiltrating external drainage", "Blockages in private drainage systems serving rural fringe properties", "Debris accumulation in surface water drainage on flat terrain"],
      process: "We assess your Ferndown property's drainage configuration and pipe material before selecting a clearing method. Modern plastic systems generally respond well to high-pressure jetting, while rural properties with private drainage may require specialist approaches.",
      localTip: "Ferndown properties backing onto heathland or woodland should check external gullies after windy weather — leaf litter and pine needles can block surface drainage quickly."
    },
    "drain-unblocking": {
      intro: "From Longham to West Moors and Three Legged Cross, our teams cover the full Ferndown area with prompt, professional drain unblocking services. We carry equipment suited to every property type, from post-war bungalows with older clay connections to modern estate houses with plastic drainage.",
      commonProblems: ["Kitchen sink blockages from food waste and cooking fat", "Bathroom drain clogs from hair and soap accumulation", "External gulley blockages from heathland leaf and grit", "Washing machine and utility drain problems", "Private drainage blockages in rural properties"],
      process: "Our engineers diagnose the blockage location and type swiftly, then apply the most effective clearing technique. We confirm full flow restoration before completing the job and offer straightforward advice on avoiding repeat call-outs.",
      localTip: "Ferndown's bungalow stock can have drainage serving only a short distance before connecting to the main sewer — if the blockage is not in the obvious first section, a CCTV camera quickly locates the true position."
    },
    "cctv-drain-surveys": {
      intro: "Ferndown's drainage systems range from 1950s clay runs to modern plastic installations, and a CCTV survey is the most efficient way to understand exactly what you have and what condition it is in. Our surveys are particularly valuable for home buyers and owners planning extensions or renovations.",
      commonProblems: ["Pre-purchase condition assessment for 1950s–1970s properties", "Root ingress investigation in mature suburban gardens", "Mapping drainage before home extension projects", "Identifying cracked joints in ageing plastic pipe runs", "Private drainage assessment for rural fringe properties"],
      process: "We survey your accessible drainage systematically, recording footage and noting all findings. The resulting report provides a clear condition summary with prioritised recommendations and is suitable for property transactions and planning applications.",
      localTip: "Planning an extension or garage conversion in Ferndown? A drainage survey before work begins confirms pipe locations and condition, preventing expensive surprises mid-project."
    },
    "drain-jetting": {
      intro: "High-pressure jetting is the most effective maintenance treatment for Ferndown's drainage systems, removing the fat, scale, and heathland grit that accumulates over time. Our specialist equipment restores optimal flow in plastic and clay pipes alike, extending system lifespan and preventing emergency blockages.",
      commonProblems: ["Fat and grease deposits from domestic use", "Heathland sand and grit accumulation in external drains", "Scale buildup in older clay connections", "Root mass removal in garden drainage runs", "Preventative maintenance for aging plastic systems"],
      process: "We select jetting pressure and nozzle type to match your pipe material and the deposits being cleared. The process is controlled and thorough, leaving pipes clean without risk of damage.",
      localTip: "Ferndown properties with mature gardens should schedule a jetting and CCTV check every two to three years to stay ahead of root intrusion before it causes a full blockage."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies in Ferndown and its surrounding villages receive immediate response from our teams, available around the clock every day of the year. Whether you're dealing with a sewage backup in a Longham bungalow or a flooded garden in West Moors, we are on our way quickly.",
      commonProblems: ["Sewage backing up through toilets and sinks", "Surface water flooding from overwhelmed drainage on flat terrain", "Private drainage system failures in rural properties", "Manhole overflows causing access issues", "Foul odours indicating a collapsed or blocked drain"],
      process: "Emergency calls are dispatched to our nearest available engineer immediately. We keep you updated on arrival times and arrive prepared with the equipment needed to contain and resolve the emergency.",
      localTip: "Rural properties around Ferndown with private drainage — septic tanks and treatment plants — should keep the supplier's emergency contact number readily available alongside ours."
    },
    "drain-repairs": {
      intro: "Ferndown's mix of post-war and modern properties means drain repairs typically involve plastic pipe systems, though older clay connections still exist in parts of the town. Our repair specialists handle all types, from no-dig relining of cracked pipes to excavation and replacement where damage is more extensive.",
      commonProblems: ["Cracked plastic pipe joints from heathland soil movement", "Root damage in garden drainage runs of established properties", "Joint displacement caused by sandy soil settlement", "Age-related failure in 1950s–1960s drainage installations", "Private drainage repairs for rural septic and treatment plant connections"],
      process: "Following CCTV investigation, we recommend the most appropriate and cost-effective repair method. No-dig relining avoids disruption to gardens and driveways, while excavation is reserved for severe or collapsed sections requiring full replacement.",
      localTip: "Ferndown's sandy heathland soils can undermine drainage pipes gradually. If you have had one section repaired, consider a full run survey to assess whether adjacent sections are also at risk."
    }
  },
  wimborne: {
    "blocked-drains": {
      intro: "Wimborne Minster's varied building stock — from ancient town-centre properties to Georgian townhouses and Victorian terraces — means drainage systems range across many eras and materials. Our Wimborne blocked drain specialists understand these local complexities and respond promptly to restore drainage in any property across the town and surrounding villages.",
      commonProblems: ["Root intrusion from riverside and garden vegetation near the Rivers Allen and Stour", "Fat and grease buildup in domestic and commercial kitchens", "Debris accumulation following river flooding events", "Blocked private drainage systems in rural villages such as Pamphill and Holt", "Shared drainage blockages in older town-centre properties"],
      process: "We assess Wimborne properties with an eye for the age and type of drainage involved. Older stone-channel and clay systems are treated with the care they require, while modern connections are cleared swiftly using high-pressure jetting.",
      localTip: "Wimborne properties close to the River Stour or River Allen should have drainage checked after periods of heavy flooding — silt and debris can infiltrate through damaged joints during high water events."
    },
    "drain-unblocking": {
      intro: "From Wimborne town centre to Colehill, Corfe Mullen, and the surrounding villages, our drain unblocking teams cover the whole area with prompt, reliable service. We handle everything from simple kitchen sink blockages in modern homes to complex drainage issues in Wimborne's ancient town-centre buildings.",
      commonProblems: ["Kitchen and bathroom drain blockages in domestic properties", "External gulley obstructions from autumn leaf fall", "Toilet blockages from inappropriate items", "Private drainage failures in rural village properties", "Shared drainage conflicts in the town-centre conservation area"],
      process: "Our engineers carry comprehensive unblocking equipment suited to the area's mixed property stock, from flexible rods and electromechanical machines to high-pressure jetting units. We identify and clear the obstruction completely before confirming flow is fully restored.",
      localTip: "Wimborne town centre's older properties often have drainage running in unexpected routes beneath courtyards and shared passages. A CCTV survey quickly maps the system if you are unsure of the layout."
    },
    "cctv-drain-surveys": {
      intro: "Wimborne's heritage buildings and period properties benefit greatly from thorough CCTV drainage surveys, which reveal the true condition of underground systems without any need for speculative excavation. Our surveys are equally valuable for rural property buyers, where private drainage condition is a key consideration.",
      commonProblems: ["Pre-purchase drainage assessment for Wimborne town-centre period properties", "Private septic tank and soakaway condition assessment in rural villages", "Root ingress investigation near the Rivers Allen and Stour", "Mapping drainage in older properties with unknown pipe routes", "Condition surveys for insurance and renovation planning purposes"],
      process: "We survey your drainage system fully, recording footage and documenting all findings. Reports are thorough and professional, suitable for property transactions, planning applications, and discussions with insurers.",
      localTip: "Purchasing a rural property near Wimborne with private drainage? A specialist private drainage survey is just as important as a main sewer survey — soakaway failure can be an expensive repair."
    },
    "drain-jetting": {
      intro: "Regular high-pressure jetting keeps Wimborne's varied drainage systems clear and flowing freely. Our service is equally effective on original Victorian clay pipes in the town centre and modern plastic runs in newer residential estates, removing the accumulated grease, scale, and root debris that reduces flow over time.",
      commonProblems: ["Grease and fat accumulation in domestic drainage", "Scale buildup in older clay and concrete pipes", "Root mass and debris from riverside vegetation", "Silt deposits in drains near the Rivers Allen and Stour", "Preventative maintenance for private drainage systems"],
      process: "We calibrate jetting pressure to match your pipe type and the deposits being cleared, ensuring a thorough clean without risk of damage. Flow is tested after completion to confirm the system is performing as it should.",
      localTip: "Wimborne properties with mature riverside or garden trees should combine periodic jetting with a CCTV check to stay ahead of root intrusion before it becomes a serious problem."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies in and around Wimborne Minster receive our swift response, day or night. Whether you are facing sewage backup at a town-centre property, flooding in Colehill, or a private drainage failure at a rural village home, our teams are equipped and ready to help.",
      commonProblems: ["Sewage backing up into properties during or after flooding", "Surface water overwhelming drainage near the Rivers Allen and Stour", "Private drainage system failures in rural properties", "Manhole overflows affecting neighbouring properties", "Collapsed drains causing ground instability"],
      process: "Emergency calls receive immediate dispatch. We provide realistic arrival times and come prepared with pumping equipment and emergency repair materials to contain and resolve the situation promptly.",
      localTip: "Wimborne's river valley location means drainage can be affected by rising water tables during prolonged wet weather, even away from the riverbanks — be alert to slow drains as an early warning sign."
    },
    "drain-repairs": {
      intro: "Repairing drainage in Wimborne's historic and rural properties calls for versatility and quality craftsmanship. Our repair teams work confidently with all pipe materials and drainage types, from relining cracked Victorian clay in the town centre to replacing damaged sections in modern rural estates.",
      commonProblems: ["Cracked or collapsed clay pipes in Victorian town-centre properties", "Root damage to drainage in riverside and garden settings", "Joint displacement from ground movement near the river valleys", "Private drainage repairs and soakaway upgrades in rural villages", "Age-related deterioration in mixed-material drainage systems"],
      process: "We investigate all damage by CCTV before recommending a repair. No-dig relining is our preferred approach where suitable, preserving gardens and period features. Excavation is used only where damage is too severe for lining.",
      localTip: "Wimborne's older properties often have drainage that was laid to gradients that were acceptable at the time but are marginal by modern standards. If repairs are needed, it is worth discussing whether re-laying at an improved gradient is worthwhile."
    }
  },
  wareham: {
    "blocked-drains": {
      intro: "Wareham's position surrounded by the River Frome and Poole Harbour waterways creates drainage challenges specific to this unique town. Our Wareham blocked drain specialists understand how the area's high water table and varied property types — from ancient Saxon-era buildings to modern estates — affect drainage systems across the town and surrounding villages.",
      commonProblems: ["Silt and sediment ingress from high water table conditions", "Root intrusion from riverside and heathland vegetation", "Fat and grease buildup in domestic kitchens", "Private drainage blockages in rural Purbeck villages", "Shared drainage conflicts in Wareham's period town-centre properties"],
      process: "We approach Wareham properties with an understanding of local water table conditions. Ground conditions are assessed alongside blockage characteristics before we select the most effective and appropriate clearing method.",
      localTip: "Wareham properties close to the River Frome or Poole Harbour tributaries should have drainage inspected after sustained wet weather — silt can infiltrate through cracked or displaced joints when groundwater is high."
    },
    "drain-unblocking": {
      intro: "From Wareham town centre to Stoborough, Sandford, and the surrounding Purbeck villages, our teams provide prompt professional drain unblocking across the area. We handle everything from simple domestic blockages to complex issues in period properties and rural buildings with private drainage.",
      commonProblems: ["Kitchen and bathroom drain blockages in domestic properties", "External gulley obstructions from riverside and heathland debris", "Private drainage failures in rural properties around the Purbeck area", "Toilet blockages from inappropriate items", "Shared drainage blockages in Wareham town-centre period buildings"],
      process: "Our engineers carry comprehensive unblocking equipment and quickly diagnose the cause and location of any blockage. We apply the most effective clearing technique for your specific pipe type and confirm full flow restoration before leaving.",
      localTip: "Wareham's town centre has narrow access lanes and tight courtyard settings. Our engineers are experienced in working in confined spaces typical of this historic market town."
    },
    "cctv-drain-surveys": {
      intro: "CCTV drain surveys are particularly valuable in Wareham, where the varied age of properties and the proximity to waterways mean drainage conditions can be unpredictable. Our surveys provide an accurate picture of underground conditions without any speculative digging.",
      commonProblems: ["Pre-purchase drainage assessment for Wareham town-centre period properties", "Private drainage condition surveys for rural Purbeck properties", "Silt and sediment infiltration investigation in high water table areas", "Root ingress survey near the River Frome and harbour waterways", "Condition surveys for insurance, planning, and renovation purposes"],
      process: "We survey your accessible drainage fully, recording footage and documenting all findings. Reports are clear and professional, covering pipe condition, any defects identified, and prioritised maintenance recommendations.",
      localTip: "Buying a property in the Wareham area with private drainage? A specialist private drainage assessment is essential — the cost of replacing a failed soakaway or septic tank far outweighs the survey fee."
    },
    "drain-jetting": {
      intro: "High-pressure jetting is the most effective way to clean Wareham's drainage systems, removing the silt, scale, and root debris that accumulate in the area's varied pipe types. Our service is available across the town and surrounding Purbeck villages.",
      commonProblems: ["Silt and sediment deposits from high water table infiltration", "Grease and fat accumulation in domestic drainage", "Root mass removal from riverside and heathland vegetation", "Scale buildup in older clay and stone drainage channels", "Preventative maintenance cleaning for private drainage systems"],
      process: "We select appropriate jetting equipment and pressure settings for your pipe material and the deposits being removed. Flow is tested after jetting to confirm the system is operating at full capacity.",
      localTip: "Wareham properties near the River Frome benefit from more frequent jetting — the higher ambient groundwater level encourages silt to infiltrate through any minor joint defects, causing a gradual build-up over time."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies in the Wareham area receive our immediate response, available every hour of the day and night. Whether you are dealing with sewage backup, flooding in a riverside property, or a sudden private drainage failure at a rural village home, we respond quickly and professionally.",
      commonProblems: ["Sewage backing up during high groundwater events", "Surface water flooding near the River Frome and harbour waterways", "Private drainage failures requiring urgent attention", "Collapsed drains beneath driveways or garden areas", "Foul odours indicating serious pipe damage in older properties"],
      process: "Emergency calls are dispatched immediately to our nearest available engineer. We provide realistic arrival times and bring appropriate equipment to contain and resolve the situation, prioritising the protection of your property from further damage.",
      localTip: "Wareham and surrounding Purbeck villages can experience rapid groundwater rises after sustained rain. If drains begin to run slowly during wet periods, contact us promptly — early intervention prevents serious backup."
    },
    "drain-repairs": {
      intro: "Drain repairs in Wareham require an understanding of the local geology, water table, and varied building history. Our repair teams are experienced with all pipe types and drainage configurations found in this part of Dorset, from ancient stone channels in the town centre to modern plastic runs in newer estates.",
      commonProblems: ["Cracked clay pipes from ground movement near waterways", "Joint displacement caused by high water table and saturated ground", "Root damage from riverside and heathland vegetation", "Private drainage repairs and soakaway replacement in rural properties", "Deterioration of older mixed-material drainage systems"],
      process: "We conduct a full CCTV investigation before recommending any repair, ensuring we understand the full extent of the problem. No-dig relining is used wherever possible to preserve grounds and avoid the complications of excavating in high water table areas.",
      localTip: "In Wareham's high water table areas, excavation for drain repairs requires careful groundwater management. Ask us about no-dig relining as a preferred alternative that avoids this complication entirely."
    }
  },
  christchurch: {
    "blocked-drains": {
      intro: "Christchurch's position at the confluence of the Rivers Avon and Stour creates a distinctive drainage environment where high water tables and seasonal flood risk influence how drainage systems perform. Our Christchurch blocked drain specialists understand these local conditions and respond promptly to restore drainage in properties across the town and surrounding villages.",
      commonProblems: ["Silt and sediment infiltration near the Rivers Avon and Stour", "Root intrusion from riverside woodland and mature garden vegetation", "Fat and grease buildup in domestic and commercial properties", "Sand and soil infiltration in drains near Mudeford and the coastline", "Shared drainage blockages in Christchurch's older period properties"],
      process: "We factor in the local flood-risk environment and soil conditions when assessing Christchurch blockages. Our engineers select clearing methods appropriate for the pipe type and ground conditions, ensuring effective results without unnecessary disruption.",
      localTip: "Christchurch properties in flood-risk areas near the Stour or Avon should have drainage inspected annually — silt infiltrates through joints during flood events and gradually reduces flow capacity."
    },
    "drain-unblocking": {
      intro: "From Christchurch town centre to Highcliffe, Mudeford, and Bransgore, our local teams respond rapidly to drain unblocking calls across the area. We handle every type of drainage situation, from straightforward domestic blockages to complex issues in period properties and coastal homes with challenging access.",
      commonProblems: ["Kitchen and bathroom drain blockages in domestic properties", "External gulley obstructions from riverside and coastal debris", "Toilet blockages in holiday lets and seasonal properties", "Private drainage failures in rural village properties", "Coastal property drainage issues affected by sand and tidal debris"],
      process: "Our engineers arrive with comprehensive unblocking equipment and identify the blockage swiftly. We apply the most effective clearing method for your pipe material and configuration, confirming full flow restoration before completing the job.",
      localTip: "Christchurch properties near Mudeford Quay and the harbour can experience drainage affected by tidal conditions — if drains are slow during high tides, a non-return valve may provide a permanent solution."
    },
    "cctv-drain-surveys": {
      intro: "CCTV drain surveys provide essential drainage intelligence for Christchurch property owners and buyers, revealing underground conditions in a town where flood risk, sandy soils, and varied building ages all influence pipe condition and performance.",
      commonProblems: ["Pre-purchase drainage surveys for riverside and coastal properties", "Root ingress investigation near the Rivers Avon and Stour", "Silt infiltration assessment in flood-risk area properties", "Private drainage condition surveys for rural village properties", "Condition surveys for insurance, planning, and renovation purposes"],
      process: "We survey the full accessible drainage system, recording footage and documenting findings clearly. Reports are professional and comprehensive, suitable for property transactions, planning applications, and insurance purposes.",
      localTip: "Buying near Hengistbury Head or Mudeford? Sandy coastal soils can shift significantly around buried pipes — a CCTV survey before purchase confirms whether pipe joints have been affected."
    },
    "drain-jetting": {
      intro: "High-pressure jetting is the most effective maintenance option for Christchurch drainage, clearing the silt, grease, and root debris that accumulates in the town's varied pipe systems. Our service covers the full area from the town centre to coastal Highcliffe and rural Bransgore.",
      commonProblems: ["Silt and sediment deposits from riverside drainage conditions", "Grease and fat accumulation in domestic and commercial pipes", "Root mass removal from Avon and Stour valley vegetation", "Sand and grit buildup in coastal property drainage", "Preventative maintenance for properties in flood-risk zones"],
      process: "Jetting pressure and nozzle selection are matched to your pipe type and the nature of deposits being cleared. We work methodically to ensure the full drainage run is clean and flowing freely.",
      localTip: "Christchurch properties in flood-risk areas benefit from jetting before the autumn and winter wet season — clear drains are better placed to handle the additional surface water that comes with seasonal rainfall."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies in Christchurch receive our immediate response at any hour. The town's flood-risk setting means our engineers arrive prepared for water-related emergencies with pumping equipment and containment materials, ready to protect your property from further damage.",
      commonProblems: ["Sewage backing up during or after river flooding events", "Surface water overwhelming drainage in riverside and low-lying properties", "Coastal property drainage failures linked to tidal conditions", "Collapsed drains causing ground instability beneath driveways", "Private drainage failures requiring urgent professional attention"],
      process: "Emergency calls are dispatched immediately and we provide realistic arrival time updates. On arrival, we contain the immediate situation and implement the most effective lasting solution to prevent recurrence.",
      localTip: "Christchurch properties in flood-risk zones should ensure non-return valves are fitted to main drainage connections — these prevent river-level rises from forcing water back through the drainage system into the property."
    },
    "drain-repairs": {
      intro: "Drain repairs in Christchurch require expertise in the area's specific challenges — sandy soils, a high seasonal water table, and drainage ranging from ancient town-centre systems to modern coastal developments. Our repair specialists are experienced across all property types and pipe materials in the area.",
      commonProblems: ["Cracked and displaced pipe joints from sandy soil movement", "Root damage from Avon and Stour valley vegetation", "Age-related deterioration of period drainage in the town centre", "Coastal property pipe corrosion from salt-air exposure", "Private drainage repairs and soakaway upgrades in rural properties"],
      process: "We conduct a full CCTV assessment before recommending any repair approach. No-dig relining is preferred wherever possible, avoiding the complication of excavating in Christchurch's often-saturated ground conditions.",
      localTip: "Christchurch's sandy coastal soils mean that once one section of a drainage run begins to fail, adjacent sections are often also at risk. Relining the full run rather than patching individual sections is usually the most cost-effective long-term strategy."
    }
  },
  ringwood: {
    "blocked-drains": {
      intro: "Ringwood's location on the River Avon floodplain and within the New Forest creates drainage challenges that our local specialists understand well. From Georgian town-centre properties to rural New Forest cottages, we respond promptly to blocked drain calls across the town and surrounding Avon valley villages.",
      commonProblems: ["Silt and sediment infiltration in properties near the River Avon floodplain", "Root intrusion from New Forest woodland and mature garden trees", "Fat and grease buildup in domestic and commercial kitchens", "Private drainage failures in rural Avon valley properties", "Shared drainage blockages in Ringwood's older town-centre buildings"],
      process: "Ringwood's floodplain setting influences how we assess and clear blockages. We consider local groundwater conditions alongside blockage characteristics to select the most effective method without risk of causing further problems.",
      localTip: "Ringwood properties in the Avon floodplain should have drainage inspected after significant flood events — silt deposited by floodwater can infiltrate joints and gradually reduce drainage capacity."
    },
    "drain-unblocking": {
      intro: "From Ringwood town centre to Ashley Heath, St Leonards, and the surrounding Avon valley villages, our teams cover the full area with prompt, professional drain unblocking. We handle everything from simple domestic blockages to complex issues in rural properties with private drainage and New Forest cottages with mixed-age systems.",
      commonProblems: ["Kitchen and bathroom drain blockages in domestic properties", "External gulley obstructions from New Forest leaf fall and woodland debris", "Private drainage failures in rural Avon valley properties", "Toilet blockages in residential and holiday properties", "Shared drainage blockages in Ringwood town-centre period buildings"],
      process: "Our engineers quickly diagnose the blockage cause and location, then apply the most effective clearing technique. We carry equipment suited to all pipe materials from Victorian clay to modern plastic, and confirm full flow restoration before completing the job.",
      localTip: "Ringwood's rural properties with private drainage should act promptly on slow drainage signs — septic tank and soakaway issues that are caught early are significantly cheaper to address than full system failures."
    },
    "cctv-drain-surveys": {
      intro: "CCTV surveys are especially valuable in the Ringwood area, where rural properties often have private drainage of unknown age and condition, and town-centre buildings have systems that may not have been surveyed in decades. Our surveys provide clarity and confidence for buyers, owners, and landlords alike.",
      commonProblems: ["Private septic tank and soakaway condition surveys for rural properties", "Pre-purchase drainage assessment for Ringwood town-centre period properties", "Root ingress investigation near the River Avon and woodland boundaries", "Silt infiltration assessment in floodplain properties", "Drainage mapping for properties planning extensions or renovations"],
      process: "We survey your accessible drainage fully, recording footage and documenting all findings. Reports are clear and professional, covering pipe condition, identified defects, and maintenance recommendations, suitable for property transactions and planning purposes.",
      localTip: "Buying a New Forest property with private drainage? The SSSI-protected heathland setting means replacement drainage systems face strict planning constraints — surveying before purchase confirms the condition and avoids nasty surprises."
    },
    "drain-jetting": {
      intro: "High-pressure jetting is essential maintenance for Ringwood area drainage systems, removing the silt, forest debris, and root growth that accumulates in local pipes. Our service covers the town and surrounding Avon valley and New Forest villages.",
      commonProblems: ["Silt and sediment deposits from floodplain drainage conditions", "Grease and fat accumulation in domestic and commercial pipes", "Root mass removal from New Forest and Avon valley vegetation", "Leaf litter and organic debris in external surface drainage", "Preventative maintenance for private drainage systems"],
      process: "We select appropriate jetting equipment and pressure settings for your pipe material and the nature of deposits being cleared. Flow is tested after jetting to confirm the system is operating at full capacity.",
      localTip: "Ringwood properties at risk from River Avon flooding benefit from jetting before the winter wet season — clear drains recover more quickly when floodwater recedes and reduce the risk of post-flood silt building up in the system."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies in the Ringwood area receive our immediate response at any hour. The Avon valley's flood risk means our engineers arrive prepared for water-related emergencies with pumping equipment and containment materials, experienced in the specific drainage challenges this area presents.",
      commonProblems: ["Sewage backing up during or after River Avon flooding events", "Surface water overwhelming drainage in floodplain properties", "Private drainage failures requiring urgent professional attention", "Collapsed drains beneath driveways or garden areas", "Foul odours indicating serious pipe damage in rural properties"],
      process: "Emergency calls are dispatched immediately to our nearest available engineer. We provide realistic arrival times and bring appropriate equipment to contain and resolve the situation as efficiently as possible.",
      localTip: "Ringwood properties in the Avon floodplain should know the location of their external stopcock and main drainage access points before an emergency occurs — this preparation significantly speeds up our response."
    },
    "drain-repairs": {
      intro: "Drain repairs in the Ringwood area require expertise in floodplain drainage, New Forest ground conditions, and the varied building types found across this part of Hampshire. Our repair teams are confident with all pipe materials and drainage configurations, from town-centre Victorian clay to rural modern plastic systems.",
      commonProblems: ["Cracked and displaced pipe joints from floodplain ground movement", "Root damage from New Forest woodland and river valley trees", "Private drainage repairs and soakaway replacement in rural properties", "Age-related deterioration of period drainage in Ringwood town centre", "Damage from flooding events requiring post-flood assessment and repair"],
      process: "We conduct a thorough CCTV investigation before recommending any repair. No-dig relining is preferred wherever the pipe condition allows, avoiding the complication of excavating in the area's frequently saturated ground.",
      localTip: "Ringwood floodplain properties should have drainage assessed and repaired before winter. Pipes with minor cracks or displaced joints are significantly more vulnerable to silt infiltration when groundwater levels are high."
    }
  },
  swanage: {
    "blocked-drains": {
      intro: "Swanage's Purbeck stone buildings and steep topography create drainage challenges that are unlike most other locations. Our Swanage blocked drain specialists understand how the local Portland limestone geology, coastal conditions, and the town's hillside terrain influence drainage performance, and we respond promptly to calls across the town and surrounding Purbeck villages.",
      commonProblems: ["Sand and coastal debris infiltrating drainage near the beach and seafront", "Root intrusion from garden and clifftop vegetation", "Fat and grease buildup in Swanage's holiday let and tourist accommodation kitchens", "Debris accumulation in steep-gradient drainage from hillside runoff", "Period drainage blockages in older Purbeck stone properties"],
      process: "We assess Swanage blockages with an understanding of the local geology and coastal environment. Steep-gradient drainage requires different consideration from flat terrain, and our engineers carry equipment suited to every situation the Purbeck setting presents.",
      localTip: "Swanage properties near the beach front should have external gullies cleared before the summer season — tourist activity and coastal winds increase the rate of sand and debris accumulation significantly."
    },
    "drain-unblocking": {
      intro: "From Swanage seafront to Herston, Langton Matravers, and the surrounding Purbeck villages including Corfe Castle and Worth Matravers, our local teams cover the area with responsive, professional drain unblocking services. We bring the right equipment for stone cottages, Victorian terraces, and modern bungalows alike.",
      commonProblems: ["Kitchen drain blockages from food waste in holiday lets and permanent homes", "Bathroom drain clogs from hair and soap accumulation", "External gulley blockages from coastal debris and garden leaf fall", "Private drainage failures in remote Purbeck village properties", "Steep-gradient drain blockages from hillside silt and debris"],
      process: "Our engineers diagnose the blockage swiftly and apply the most effective clearing technique for your pipe type and configuration. We confirm full flow restoration before completing the job and offer practical advice on preventing recurrence.",
      localTip: "Swanage holiday lets experience intensive use in summer months. Arranging a drain unblock and clean at the start and end of the season prevents disruptive blockages during peak occupancy."
    },
    "cctv-drain-surveys": {
      intro: "CCTV surveys are invaluable in Swanage and the Purbeck villages, where drainage in older stone properties may never have been surveyed and local geology can create unexpected pipe conditions. Our surveys provide clear, accurate drainage intelligence for buyers, property managers, and homeowners.",
      commonProblems: ["Pre-purchase drainage surveys for Purbeck stone properties and coastal homes", "Root ingress investigation in clifftop and hillside garden drainage", "Condition assessment for holiday let properties with intensive usage", "Private drainage surveys for remote Purbeck village properties", "Post-storm drainage assessment after severe coastal weather"],
      process: "We survey the accessible drainage system fully, recording footage and noting all findings. Reports are detailed and professional, covering pipe condition, any defects, and prioritised recommendations.",
      localTip: "Swanage and Purbeck properties often have drainage installed in Purbeck stone channels rather than conventional clay or plastic pipe. Our cameras are suited to surveying these unusual configurations."
    },
    "drain-jetting": {
      intro: "High-pressure jetting is the most effective drainage maintenance option for Swanage and the Purbeck area, clearing coastal sand, heathland grit, and root debris from pipes of all types. Our service covers the full area from the seafront to the remote Purbeck villages.",
      commonProblems: ["Coastal sand and debris deposits in seafront and near-beach properties", "Grease and fat accumulation in holiday let and tourist accommodation drainage", "Root mass removal from clifftop and hillside garden vegetation", "Silt deposits from steep-gradient hillside drainage", "Preventative maintenance for period stone drainage channels"],
      process: "We calibrate jetting pressure and nozzle selection carefully for Swanage's often-unusual pipe materials. Purbeck stone channels and older clay drainage receive lower-pressure treatment to achieve thorough cleaning without damage.",
      localTip: "Swanage's steep streets mean drainage gradients are higher than average — debris moves quickly when water flows but builds up in any flat or reverse-gradient section. Periodic jetting finds and clears these accumulation points before they cause a blockage."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies in Swanage and the Purbeck villages receive our immediate response, available every hour of every day. Coastal storms, steep hillside runoff, and the challenges of older stone property drainage all feature in our local experience, and we arrive equipped for whatever the situation requires.",
      commonProblems: ["Drain overflows during coastal storms and heavy hillside rainfall", "Sewage backing up in older Purbeck stone properties", "Private drainage failures in remote Purbeck village properties", "Coastal debris-induced drain collapses near the seafront", "Foul odours indicating serious drainage failure in period properties"],
      process: "Emergency calls are dispatched immediately to our nearest available engineer. We provide realistic arrival times, and on arriving, we contain the situation and implement an effective solution as quickly as possible.",
      localTip: "Swanage properties on steep hillside streets should be aware that storm runoff can be intense and rapid. Keeping external gullies clear before forecast storms is a simple but effective precaution."
    },
    "drain-repairs": {
      intro: "Drain repairs in Swanage and the Purbeck villages demand expertise in local stone construction, coastal ground conditions, and the varied drainage types found across this special part of Dorset. Our repair specialists work confidently with Purbeck stone channels, Victorian clay, and modern plastic drainage.",
      commonProblems: ["Cracked Purbeck stone drainage channels from frost and ground movement", "Root damage from clifftop and garden vegetation", "Salt-air corrosion of metal drainage fittings in coastal properties", "Private drainage repairs and soakaway replacement in remote Purbeck village properties", "Age-related deterioration of Victorian seaside property drainage"],
      process: "We conduct a full CCTV investigation before recommending any repair, ensuring the right solution is applied first time. No-dig relining is used wherever the pipe condition is suitable, preserving gardens and avoiding disruption to Purbeck's sensitive landscape.",
      localTip: "Swanage's Purbeck stone drainage channels cannot always be conventionally relined — our engineers assess each situation individually and advise on the most practical repair approach for your specific property."
    }
  },
  verwood: {
    "blocked-drains": {
      intro: "Verwood's rapid post-war expansion means the majority of properties have plastic drainage systems that are now mature enough to benefit from regular maintenance. Our Verwood blocked drain specialists understand the local heathland setting and drainage characteristics, and respond promptly to calls across the town and surrounding Cranborne Chase villages.",
      commonProblems: ["Root intrusion from heathland vegetation and garden trees in established estates", "Fat and grease buildup in domestic kitchens across Verwood's residential areas", "Heathland sand and grit infiltrating external surface drainage", "Private drainage failures in rural properties near Edmondsham and Alderholt", "Shared drainage blockages in terrace and semi-detached housing"],
      process: "We assess Verwood properties with knowledge of the local heathland soils and typical drainage configurations. Modern plastic systems are often best cleared with high-pressure jetting, while older connections benefit from careful CCTV assessment first.",
      localTip: "Verwood's sandy heathland soils shift gradually around pipe joints, especially in dry summers followed by wet winters. If drainage has been slow for a while, a CCTV check is worth doing before a minor issue becomes a full blockage."
    },
    "drain-unblocking": {
      intro: "From Verwood town centre to Three Legged Cross, Alderholt, and the surrounding Cranborne Chase villages, our drain unblocking teams provide prompt, reliable service. We carry equipment suited to every pipe type found in the area, from 1960s clay connections to modern plastic systems in newer developments.",
      commonProblems: ["Kitchen and bathroom drain blockages in domestic properties", "External gulley obstructions from heathland leaf fall and grit", "Private drainage failures in rural Cranborne Chase properties", "Washing machine and utility room drainage problems", "Shared drainage blockages in estate housing"],
      process: "Our engineers diagnose blockage cause and location quickly and apply the most effective clearing technique. We confirm full flow restoration before completing the job and provide straightforward advice on avoiding future blockages.",
      localTip: "Verwood's post-war bungalow stock often has drainage running at relatively shallow depths due to the sandy heathland subsoil. Our engineers are experienced in locating and accessing these systems without unnecessary disruption."
    },
    "cctv-drain-surveys": {
      intro: "CCTV surveys are a smart investment for Verwood property owners, particularly for homes built in the 1960s–1980s where drainage is now at the age where early-stage deterioration begins to appear. Our surveys provide clear drainage intelligence for homeowners, buyers, and landlords across the area.",
      commonProblems: ["Condition surveys for 1960s–1980s drainage approaching end of design life", "Root ingress investigation in established residential areas", "Pre-purchase drainage assessment for Verwood and Cranborne Chase properties", "Private drainage condition surveys for rural properties", "Drainage mapping before home extensions and outbuilding projects"],
      process: "We survey the accessible drainage systematically, recording footage and documenting all findings. Reports are clear and professional, covering pipe condition, identified defects, and maintenance recommendations suitable for property transactions.",
      localTip: "Verwood's heathland is an SSSI and drainage works can be subject to environmental scrutiny. A CCTV survey that confirms drainage routes and condition before any groundworks is a sensible precaution and good practice."
    },
    "drain-jetting": {
      intro: "Regular high-pressure jetting is the most effective way to maintain Verwood's ageing drainage systems, removing the heathland grit, root debris, and grease deposits that accumulate over time. Our service covers the full town and surrounding Cranborne Chase area.",
      commonProblems: ["Heathland sand and grit accumulation in external drainage", "Root mass and debris from established residential garden planting", "Fat and grease buildup in domestic drainage", "Scale deposits in older clay connections", "Preventative maintenance for 1960s–1980s plastic drainage systems"],
      process: "We select jetting equipment and pressure settings appropriate for your pipe type and the nature of deposits to be cleared. Flow is tested after jetting to confirm the system is operating as it should.",
      localTip: "Verwood's plastic drainage systems from the 1970s–1980s can be more brittle than modern equivalents. We use careful pressure settings to ensure thorough cleaning without risk of damage to older pipe materials."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies in Verwood and the surrounding Cranborne Chase villages receive our immediate response at any time of day or night. Whether the problem is at a town-centre property or a remote rural home, we dispatch the nearest available engineer and keep you updated throughout.",
      commonProblems: ["Sewage backing up through toilets and sinks", "Surface water flooding on flat residential estate roads", "Private drainage system failures requiring urgent attention", "Collapsed drains beneath driveways or garden areas", "Foul odours indicating serious pipe damage or failure"],
      process: "Emergency calls are dispatched immediately. We provide realistic arrival time estimates and arrive prepared with equipment to contain and resolve the emergency. A permanent repair plan follows the immediate fix where needed.",
      localTip: "Verwood's heathland setting means the area is of significant ecological importance. In the unlikely event of a sewage spill from a private drainage failure, contact us immediately — we are experienced in managing drainage emergencies sensitively in SSSI-adjacent locations."
    },
    "drain-repairs": {
      intro: "Drain repairs in Verwood and the surrounding Cranborne Chase area typically involve plastic pipe systems from the 1960s through the 1990s, though older clay connections exist in parts of the town. Our repair specialists work with all types, from no-dig relining of cracked plastic to full excavation and replacement where damage is severe.",
      commonProblems: ["Cracked plastic pipe joints from heathland soil movement and root pressure", "Root damage in drainage runs of established garden areas", "Joint displacement in sandy heathland subsoil", "Private drainage repairs and soakaway upgrades in rural properties", "Age-related deterioration in 1970s–1980s plastic drainage installations"],
      process: "We conduct a full CCTV investigation before recommending any repair, ensuring the right solution is applied efficiently. No-dig relining is our preferred approach wherever the pipe condition is suitable, preserving heathland gardens and sensitive landscapes.",
      localTip: "Verwood's proximity to heathland SSSI means any excavated drainage repair must be planned carefully and conducted with appropriate environmental precautions. We are experienced in this requirement and handle all necessary considerations as part of the job."
    }
  },
  "blandford-forum": {
    "blocked-drains": {
      intro: "Blandford Forum's Georgian townscape and Stour valley setting create a distinctive drainage environment that our specialists understand well. From elegant period buildings in the town centre to rural Stour valley villages, we respond promptly to blocked drain calls across the Blandford area with expertise suited to every property type.",
      commonProblems: ["Silt and sediment infiltration from River Stour flooding events", "Root intrusion from mature Stour valley woodland and estate trees", "Fat and grease buildup in Blandford's domestic and commercial properties", "Private drainage failures in rural Stour valley villages", "Shared drainage blockages in Blandford's Georgian and Victorian town-centre properties"],
      process: "We assess Blandford blockages with an understanding of local flood risk and the varied age of drainage infrastructure across the area. Older Georgian and Victorian drainage is treated with care, while modern systems in newer estates are cleared swiftly and efficiently.",
      localTip: "Blandford Forum properties close to the River Stour should have drainage inspected after significant flood events — silt can infiltrate through cracked joints when groundwater is high and gradually restrict flow."
    },
    "drain-unblocking": {
      intro: "From Blandford Forum town centre to Blandford St Mary, Stourpaine, Pimperne, and the surrounding Stour valley villages, our teams provide prompt professional drain unblocking across the area. We handle everything from domestic kitchen sink blockages to complex private drainage issues in rural properties.",
      commonProblems: ["Kitchen and bathroom drain blockages in domestic properties", "External gulley obstructions from Stour valley leaf fall and rural debris", "Private drainage failures in surrounding village properties", "Toilet blockages in residential and commercial premises", "Shared drainage blockages in Blandford town-centre period buildings"],
      process: "Our engineers quickly diagnose blockage cause and location, then apply the most effective clearing technique for your pipe type and configuration. We confirm full flow restoration before completing the job.",
      localTip: "Blandford's Georgian buildings often have drainage infrastructure pre-dating the town's 1731 rebuild — if drainage has never been investigated, a CCTV survey may reveal heritage infrastructure that requires specialist handling."
    },
    "cctv-drain-surveys": {
      intro: "CCTV drain surveys are a particularly valuable tool in Blandford Forum, where the age of some drainage infrastructure is genuinely unknown and the Stour valley flood risk means hidden pipe defects can be exacerbated by seasonal groundwater rises. Our surveys provide clear, accurate drainage intelligence for every property type in the area.",
      commonProblems: ["Pre-purchase drainage surveys for Blandford Georgian and Victorian town-centre properties", "Private septic tank and soakaway condition surveys for rural Stour valley villages", "Root ingress investigation near the River Stour and estate woodland", "Silt infiltration assessment in flood-risk area properties", "Drainage mapping for properties planning extensions or renovations"],
      process: "We survey the accessible drainage fully, recording footage and documenting all findings. Reports are thorough and professional, covering pipe condition, identified defects, and recommendations — suitable for property transactions, planning, and insurance purposes.",
      localTip: "Purchasing a rural property near Blandford with private drainage? Dorset's chalk and clay soils vary significantly over short distances, affecting soakaway performance — a specialist private drainage survey before exchange is essential."
    },
    "drain-jetting": {
      intro: "High-pressure jetting is the most effective maintenance option for Blandford Forum's drainage systems, removing the silt, root debris, and grease that accumulates in pipes across this part of north Dorset. Our service covers the town and the full range of surrounding Stour valley and Cranborne Chase villages.",
      commonProblems: ["Silt and sediment deposits from Stour valley flood drainage", "Grease and fat accumulation in domestic and commercial properties", "Root mass removal from estate woodland and riverside vegetation", "Scale and mineral deposits in older clay drainage", "Preventative maintenance for private drainage systems in rural villages"],
      process: "We calibrate jetting equipment and pressure settings to match your pipe type and the nature of deposits being cleared. Flow is tested after jetting to confirm the system is performing as it should.",
      localTip: "Blandford properties in the Stour floodplain benefit from jetting before the winter wet season — clear systems recover more quickly from flood events and are less likely to retain the silt that floodwater carries into drainage joints."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies in the Blandford Forum area receive our immediate response at any hour. The Stour valley's flood risk means our engineers arrive prepared for water-related emergencies with pumping equipment and containment materials, experienced in the specific drainage challenges this part of north Dorset presents.",
      commonProblems: ["Sewage backing up during or after River Stour flooding events", "Surface water overwhelming drainage in low-lying Stour valley properties", "Private drainage failures requiring urgent attention in rural villages", "Collapsed drains causing ground instability beneath driveways or gardens", "Foul odours indicating serious pipe damage or failure in period properties"],
      process: "Emergency calls are dispatched immediately to our nearest available engineer. We provide realistic arrival times and bring appropriate equipment to contain and resolve the situation, prioritising the protection of your property from further damage.",
      localTip: "Blandford properties near the River Stour should have sandbags or flood barriers available during extreme weather. Keeping drainage clear is the first line of defence — our emergency team handles the rest."
    },
    "drain-repairs": {
      intro: "Drain repairs in the Blandford Forum area require expertise in Georgian and Victorian period drainage, Stour valley ground conditions, and the private drainage systems that serve many rural properties across north Dorset. Our repair specialists work confidently with all pipe materials and drainage configurations found in this area.",
      commonProblems: ["Cracked and displaced clay pipe joints from Stour valley ground movement", "Root damage from estate woodland and riverside vegetation", "Private drainage repairs and soakaway replacement in rural Stour valley villages", "Age-related deterioration of Georgian and Victorian town-centre drainage", "Flood damage requiring post-event assessment and structural repair"],
      process: "We conduct a full CCTV investigation before recommending any repair approach. No-dig relining is preferred wherever the pipe condition allows, avoiding the complications of excavating in the area's sometimes-saturated Stour valley ground.",
      localTip: "Blandford's north Dorset location places it at the edge of both chalk and clay geology — drainage conditions can vary significantly between adjacent properties. We always assess each site individually before committing to a repair method."
    }
  }
};

/**
 * How It Works steps per service (with {location} and {responseTime} placeholders)
 */
export interface HowItWorksStep {
  title: string;
  description: string;
}

export const SERVICE_HOW_IT_WORKS: Record<string, HowItWorksStep[]> = {
  "blocked-drains": [
    { title: "Call & Describe", description: "Phone us and describe the symptoms — slow drainage, gurgling, bad smells, or standing water. We dispatch a local engineer to your {location} property, arriving {responseTime}." },
    { title: "On-Site Diagnosis", description: "Your engineer inspects all access points and, where necessary, deploys a CCTV drain camera to pinpoint the exact blockage location and cause inside the pipework." },
    { title: "Clear the Blockage", description: "Using high-pressure water jetting, mechanical rodding, or electromechanical cutting tools, we remove the obstruction completely and flush the line clean." },
    { title: "Flow Verification", description: "We run water through every affected fixture and inspect the drainage run to confirm full flow has been restored with no secondary issues." },
    { title: "Report & Prevention Advice", description: "You receive a summary of what caused the blockage and practical steps to prevent it recurring, tailored to your {location} property type." }
  ],
  "drain-unblocking": [
    { title: "Emergency Contact", description: "Call our {location} response line. We gather details about the affected fixtures — sinks, toilets, baths, or external drains — and dispatch the nearest available engineer." },
    { title: "Access & Assessment", description: "On arrival {responseTime}, we identify which section of drainage is affected and determine whether the blockage is localised or further downstream." },
    { title: "Select the Right Method", description: "Depending on the blockage type, we use manual drain rods, an electromechanical drain snake, or high-pressure jetting equipment to clear the obstruction." },
    { title: "Clear & Flush", description: "The blockage is fully removed and the line is flushed with water to confirm unimpeded flow from every connected appliance." },
    { title: "Aftercare Guidance", description: "We explain what caused the issue and offer practical advice on preventing future blockages in your {location} property." }
  ],
  "cctv-drain-surveys": [
    { title: "Book Your Survey", description: "Contact us to arrange a convenient time. We arrive at your {location} property {responseTime} with self-contained survey equipment — no preparation is needed on your part." },
    { title: "Camera Insertion", description: "We access the drainage system through manholes or inspection chambers and feed a high-definition waterproof camera through the entire pipe network." },
    { title: "Live Inspection", description: "The camera transmits real-time footage to a monitor, allowing us to identify cracks, root ingress, displaced joints, blockages, and other defects as we progress." },
    { title: "Detailed Report", description: "You receive a written report with annotated screenshots, a pipe condition summary, and prioritised recommendations for any repairs or maintenance needed." }
  ],
  "drain-jetting": [
    { title: "Initial Assessment", description: "We inspect your {location} drainage system to determine pipe material, diameter, and condition. This ensures we select the correct jetting pressure and nozzle." },
    { title: "CCTV Pre-Check", description: "Where appropriate, a brief camera inspection confirms the location and nature of deposits so jetting effort is directed precisely where it is needed." },
    { title: "High-Pressure Cleaning", description: "Our specialist jetting unit delivers water at pressures up to 4,000 PSI through a rotating nozzle, scouring the pipe walls clean and flushing debris towards the sewer." },
    { title: "Post-Jetting Verification", description: "A final camera pass confirms the pipe is clear. We compare before-and-after footage so you can see the improvement, and advise on a suitable maintenance interval." }
  ],
  "emergency-drain-services": [
    { title: "Immediate Call Handling", description: "Our 24/7 emergency line is always staffed. Describe the situation — flooding, sewage backup, or collapse — and we prioritise dispatch to your {location} address." },
    { title: "Rapid Arrival", description: "The nearest available emergency engineer heads to your property {responseTime}, equipped with pumping, jetting, and containment gear to handle any scenario." },
    { title: "Containment & Safety", description: "On arrival, we secure the affected area, isolate the drainage failure if possible, and begin removing standing water or sewage to limit property damage." },
    { title: "Emergency Resolution", description: "We diagnose the root cause and implement the fastest effective repair — clearing blockages, patching failures, or arranging follow-up work for structural damage." },
    { title: "Follow-Up Support", description: "Once the immediate emergency is resolved, we provide a written summary and, if further repairs are needed, schedule them at a time that suits you." }
  ],
  "drain-repairs": [
    { title: "Diagnostic Survey", description: "We begin with a CCTV inspection of your {location} property's drainage to map the damage precisely — cracks, collapses, displaced joints, or root penetration." },
    { title: "Repair Options Explained", description: "You receive a clear explanation of available repair methods: no-dig pipe relining for accessible damage, patch repairs for localised cracks, or excavation for severe collapses." },
    { title: "Carry Out Repairs", description: "Our engineers complete the agreed work using professional-grade materials. No-dig relining typically takes a few hours; excavation work is completed as quickly as conditions allow." },
    { title: "Quality Verification", description: "A post-repair CCTV inspection confirms the fix is sound. We restore any excavated surfaces and provide a written guarantee on all completed repair work." }
  ]
};

/**
 * Why Choose Us bullet points per service (with placeholders)
 */
export const SERVICE_WHY_CHOOSE_US: Record<string, string[]> = {
  "blocked-drains": [
    "Local engineers who respond to {location} properties {responseTime}",
    "No call-out fee — you only pay for completed work",
    "Equipment suited to {propertyTypes}",
    "Familiarity with United Utilities infrastructure and local council requirements"
  ],
  "drain-unblocking": [
    "Rapid response across {location} — engineers arrive {responseTime}",
    "We carry manual rods, electric drain snakes, and jetting gear to every job",
    "Fixed pricing agreed before work starts, with no hidden charges",
    "Knowledge of drainage layouts common in {propertyTypes}"
  ],
  "cctv-drain-surveys": [
    "HD camera equipment producing detailed, professional-grade reports",
    "Engineers who understand drainage typical of {propertyTypes}",
    "Response to {location} bookings {responseTime}",
    "Reports accepted by solicitors, insurers, and United Utilities"
  ],
  "drain-jetting": [
    "Variable-pressure jetting units safe for all pipe materials",
    "Rapid attendance at {location} properties {responseTime}",
    "Before-and-after CCTV footage included at no extra cost",
    "Experience with drainage found in {propertyTypes}"
  ],
  "emergency-drain-services": [
    "Genuine 24/7 availability — nights, weekends, and bank holidays included",
    "Emergency engineers reach {location} {responseTime}",
    "Fully equipped vans carrying pumps, jetting gear, and repair materials",
    "Experienced with flood-risk and sewage situations across Poole and the surrounding Dorset area"
  ],
  "drain-repairs": [
    "Both no-dig relining and excavation capabilities in-house",
    "CCTV diagnosis included so you only pay for repairs actually needed",
    "Written workmanship guarantee on all completed repairs",
    "Engineers experienced with {propertyTypes} in {location}"
  ]
};

/**
 * FAQ templates per service (with placeholders resolved at build time)
 */
export interface FAQTemplate {
  question: string;
  answer: string;
}

export const SERVICE_FAQ_TEMPLATES: Record<string, FAQTemplate[]> = {
  "blocked-drains": [
    {
      question: "How quickly can you reach {location} to clear a blocked drain?",
      answer: "Our engineers are based across Poole and the surrounding Dorset area and typically reach {location} {responseTime}. For urgent blockages causing flooding or sewage backup, we prioritise dispatch to minimise property damage."
    },
    {
      question: "What does it cost to clear a blocked drain in {location}?",
      answer: "Most standard blockages in {location} are resolved for between £80 and £150 with no call-out fee. We provide a fixed quote before starting any work, so you know exactly what you will pay. Complex blockages requiring jetting or excavation may cost more."
    },
    {
      question: "What are the most common causes of blocked drains in {location}?",
      answer: "In {location} we frequently encounter {commonProblem1} and {commonProblem2}. Properties such as {propertyTypes} can be particularly susceptible due to ageing pipework and mature vegetation."
    }
  ],
  "drain-unblocking": [
    {
      question: "How fast can you unblock a drain in {location}?",
      answer: "We aim to arrive at {location} properties {responseTime}. Once on site, most drain unblocking jobs are completed within one to two hours depending on the nature and location of the obstruction."
    },
    {
      question: "Do you charge a call-out fee for drain unblocking in {location}?",
      answer: "No. We never charge a call-out fee for drain unblocking in {location} or anywhere else across Poole and the surrounding Dorset area. You only pay for the work carried out, and we confirm the price before we start."
    },
    {
      question: "Should I try to unblock the drain myself before calling you?",
      answer: "Simple blockages near the plughole may respond to a plunger or drain cleaner. However, if water is backing up from external drains or multiple fixtures are affected, professional equipment is needed. Attempting to rod shared drainage incorrectly can push the blockage further downstream."
    }
  ],
  "cctv-drain-surveys": [
    {
      question: "How much does a CCTV drain survey cost in {location}?",
      answer: "A standard residential CCTV drain survey in {location} typically costs between £150 and £300 depending on property size and drainage complexity. We provide a fixed quote beforehand. Properties such as {propertyTypes} with larger drainage networks may sit towards the upper end."
    },
    {
      question: "Do I need a CCTV drain survey before buying a property in {location}?",
      answer: "We strongly recommend a pre-purchase drain survey for {location} properties, especially older builds. Hidden drainage defects can cost thousands to repair and are not covered by standard homebuyer surveys. A CCTV inspection gives you negotiating power and peace of mind."
    },
    {
      question: "How long does a CCTV drain survey take in {location}?",
      answer: "A typical residential survey in {location} takes between one and two hours. You receive the full report with annotated footage within 24 hours. Larger properties or those with complex drainage layouts may require additional time."
    }
  ],
  "drain-jetting": [
    {
      question: "Is drain jetting safe for older pipes in {location}?",
      answer: "Yes, when carried out by qualified engineers. We adjust water pressure to suit the pipe material and condition — lower pressures for older clay pipes common in {location}, higher pressures for modern plastic systems. A brief CCTV check beforehand confirms the pipe can safely be jetted."
    },
    {
      question: "How much does drain jetting cost in {location}?",
      answer: "Drain jetting in {location} typically costs between £100 and £250 depending on the length of pipe and severity of deposits. We confirm the price before starting. Regular maintenance jetting is usually at the lower end of this range."
    },
    {
      question: "How often should drains be jetted in {location}?",
      answer: "For most {location} residential properties, jetting every 12 to 18 months keeps drainage flowing freely. Properties with mature trees nearby, or commercial kitchens producing grease, may benefit from more frequent cleaning — typically every 6 to 12 months."
    }
  ],
  "emergency-drain-services": [
    {
      question: "How quickly can you respond to a drain emergency in {location}?",
      answer: "Our emergency teams are positioned across Poole and the surrounding Dorset area and reach {location} {responseTime}. We operate around the clock — 24 hours a day, 7 days a week, including bank holidays — so help is available whenever you need it."
    },
    {
      question: "What counts as a drainage emergency?",
      answer: "Situations requiring an emergency response include sewage backing up into your property, flooding from blocked or collapsed drains, overflowing manholes, and any drainage failure presenting a health risk. If in doubt, call us and we will advise whether an emergency visit is needed."
    },
    {
      question: "Do you charge more for emergency callouts in {location}?",
      answer: "We offer competitive fixed pricing for emergency callouts in {location} with no hidden charges. While emergency work may cost more than routine maintenance due to the urgency and equipment required, we always confirm the price before starting."
    }
  ],
  "drain-repairs": [
    {
      question: "How much do drain repairs cost in {location}?",
      answer: "Drain repair costs in {location} depend on the extent of damage and the method required. No-dig pipe relining typically ranges from £300 to £800 per section. Excavation repairs vary more widely depending on depth and access. We provide a detailed quote after CCTV diagnosis."
    },
    {
      question: "Can drains be repaired without digging in {location}?",
      answer: "In many cases, yes. No-dig pipe relining inserts a resin-coated liner into the damaged pipe, which cures to form a new pipe within the old one. This is ideal for cracks, joint displacement, and root damage in {location} properties, avoiding disruption to gardens, driveways, and landscaping."
    },
    {
      question: "How long do drain repairs take in {location}?",
      answer: "No-dig relining is typically completed in a single day. Excavation repairs may take one to three days depending on the extent of damage, pipe depth, and ground conditions in {location}. We always provide a realistic timeframe before work begins."
    }
  ]
};

/**
 * Interpolate placeholders in template strings with location-specific data
 */
export function interpolateLocationText(
  text: string,
  locationName: string,
  locationData: LocationData | null,
  serviceContent: ServiceContent | null
): string {
  let result = text.replace(/\{location\}/g, locationName);
  if (locationData) {
    result = result
      .replace(/\{responseTime\}/g, locationData.responseTime)
      .replace(/\{propertyTypes\}/g, locationData.propertyTypes)
      .replace(/\{neighborhood\}/g, locationData.neighborhoods[0] || '')
      .replace(/\{landmark\}/g, locationData.landmarks[0] || '');
  }
  if (serviceContent) {
    result = result
      .replace(/\{commonProblem1\}/g, serviceContent.commonProblems[0]?.toLowerCase() || 'debris accumulation')
      .replace(/\{commonProblem2\}/g, serviceContent.commonProblems[1]?.toLowerCase() || 'root intrusion');
  }
  return result;
}

/**
 * Get resolved FAQs for a specific location and service combination
 */
export function getLocationServiceFAQs(
  locationSlug: string,
  serviceSlug: string
): Array<{ question: string; answer: string }> {
  const locationData = LOCATION_DATA[locationSlug] || null;
  const serviceContent = LOCATION_SERVICE_CONTENT[locationSlug]?.[serviceSlug] || null;
  const templates = SERVICE_FAQ_TEMPLATES[serviceSlug];
  if (!templates) return [];

  const locationName = locationSlug.charAt(0).toUpperCase() + locationSlug.slice(1);
  return templates.map(t => ({
    question: interpolateLocationText(t.question, locationName, locationData, serviceContent),
    answer: interpolateLocationText(t.answer, locationName, locationData, serviceContent)
  }));
}

/**
 * Get content for a specific location and service combination
 */
export function getLocationServiceContent(locationSlug: string, serviceSlug: string): ServiceContent | null {
  const locationContent = LOCATION_SERVICE_CONTENT[locationSlug];
  if (!locationContent) return null;
  return locationContent[serviceSlug] || null;
}

/**
 * Get location data
 */
export function getLocationData(locationSlug: string): LocationData | null {
  return LOCATION_DATA[locationSlug] || null;
}
