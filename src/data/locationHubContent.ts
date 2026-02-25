/**
 * Location hub page content: Drainage profiles, landmarks, FAQs, and case studies
 * Each location has unique, genuinely researched content optimized for SEO and user experience
 */

export interface LocationHubFAQ {
  question: string;
  answer: string;
}

export interface LocationHubContent {
  landmarks: string[];
  drainageProfile: string;
  localFAQs: LocationHubFAQ[];
  caseStudy: string;
}

export const LOCATION_HUB_CONTENT: Record<string, LocationHubContent> = {
  poole: {
    landmarks: [
      "Poole Quay",
      "Poole Harbour",
      "Sandbanks Peninsula",
      "Brownsea Island",
      "Poole Old Town",
      "Canford Cliffs",
      "Lilliput",
      "Parkstone",
      "Hamworthy",
      "Poole Park",
      "Twin Sails Bridge",
      "Dolphin Shopping Centre",
      "Poole High Street",
      "Longfleet",
      "Canford Heath",
      "Turlin Moor",
      "Tatnam",
      "Bourne Valley",
      "Newtown",
      "Baiter Park"
    ],
    drainageProfile: `Poole sits alongside one of the largest natural harbours in the world, and this geography defines the town's drainage challenges in ways that are unique in southern England. The water table across much of central Poole, Hamworthy, and the Quay area is exceptionally high—often within a metre of the surface—meaning that even minor pipe failures can rapidly introduce groundwater into drainage systems, overwhelming capacity and causing back-flow into properties. The reclaimed land around the Quay and Twin Sails Bridge area adds further complexity: made ground of variable composition sits above natural harbour sediments, making underground work unpredictable and requiring careful assessment before any excavation.

Sandbanks and Canford Cliffs present a distinct set of challenges. These ultra-high-value properties sit on a narrow sand spit and sandy coastal soils where the saline water table sits close to the surface. The marine environment is harsh on drainage infrastructure: even modern materials experience accelerated corrosion from salt-laden groundwater, and the sandy, free-draining soils mean surface water can undermine pipe beds if joints fail. Older properties on Sandbanks—some dating to the 1930s and 1940s—carry clay drain runs that have survived decades but now face the combined pressures of age, ground movement from freeze-thaw cycles, and root intrusion from garden planting.

Poole's Old Town and the streets around the Quay retain Victorian and Edwardian drainage infrastructure that was built when Poole was primarily a trading port. The original combined sewers—carrying both surface water and foul drainage in a single pipe—are now under the pressure of much denser occupation and dramatically increased water usage per household. Tree root intrusion is a persistent problem on the older residential streets of Parkstone and Longfleet, where mature street trees and established garden planting seek out moisture in ageing clay pipe joints. Properties near Poole Park's lake and the Bourne Stream corridor also face elevated groundwater and surface water management challenges during winter rainfall.

On the northern fringes of Poole, the heathland soils of Canford Heath are predominantly sandy and acidic—very different from the harbour-edge areas. Drainage here is generally free-draining but the loose, sandy substrate can shift over time, causing gradual pipe misalignment and joint separation that worsens slowly before becoming a visible problem. Our engineers carry a detailed working knowledge of Poole's varied geology and drainage history: from harbour-adjacent properties with high water tables to heathland estates where soil movement is the primary concern, we match our approach to the specific conditions of your location within the town.`,
    localFAQs: [
      {
        question: "Why is drainage so challenging near Poole Harbour and the Quay?",
        answer: "The land around Poole Harbour—including Hamworthy, the Old Town, and the Quay area—has an exceptionally high water table, often within a metre of the surface. This means groundwater can enter cracked or poorly-jointed pipes, adding to the volume drainage systems must carry. During heavy rain, combined sewers in the older parts of town can become surcharge and back-flow into properties. Regular CCTV surveys and prompt repairs are especially important for properties in these low-lying areas."
      },
      {
        question: "What drainage issues are common for Sandbanks and Canford Cliffs properties?",
        answer: "Sandbanks sits on a sand spit with a saline water table close to the surface, which accelerates corrosion of drainage infrastructure. Many properties here have clay drain runs installed decades ago that are now cracking or suffering root intrusion from garden planting. The coastal environment also means any open defects can allow sand ingress, which rapidly builds up and causes blockages. We recommend CCTV drainage surveys for any Sandbanks or Canford Cliffs property purchase or if you experience recurrent slow drainage."
      },
      {
        question: "Does the heathland soil on Canford Heath affect drainage differently?",
        answer: "Yes. The sandy, acidic heathland soils of Canford Heath drain surface water freely but are prone to gradual movement and settlement. Over time this can cause drain runs to lose their fall (gradient), meaning waste no longer flows freely and solids accumulate. This type of problem develops slowly and is often only identified during a CCTV survey. Post-war housing estates in this area often have uPVC drainage that is aging and may show deformation or joint separation."
      },
      {
        question: "How does Poole's Victorian combined sewer system affect modern properties?",
        answer: "Older streets around Parkstone, Longfleet, and the Old Town are served by Victorian-era combined sewers that carry both foul and surface water. These pipes are over 100 years old in places and are vulnerable to root intrusion, cracking, and capacity shortfalls during heavy rain. If your property is on one of these older streets and you experience drainage issues during or after rainfall, a CCTV survey will identify whether the public sewer or your private drain is contributing to the problem."
      }
    ],
    caseStudy: `Emergency call-out to a Victorian terraced property on Longfleet Road: the owners had experienced slow drainage and an unpleasant smell from the ground floor bathroom for several weeks. CCTV survey revealed a root mass from a mature street tree had penetrated a clay drain joint and was partially blocking the 4-inch pipe, with a secondary crack allowing groundwater ingress that was diluting waste and reducing flow velocity. We carried out high-pressure jetting to clear the root blockage, followed by an epoxy patch lining repair at the crack location, restoring full flow without excavation. The entire job was completed within a single working day, eliminating the smell and preventing the defect from developing into a full collapse.`
  },

  bournemouth: {
    landmarks: [
      "Bournemouth Pier",
      "Bournemouth Beach",
      "East Cliff",
      "West Cliff",
      "Boscombe",
      "Westbourne",
      "Winton",
      "Charminster",
      "Talbot Woods",
      "Queens Park",
      "Bournemouth International Centre",
      "Russell-Cotes Museum",
      "Bournemouth University",
      "Castlepoint Shopping Park",
      "The Lansdowne",
      "Lower Gardens",
      "Kinson",
      "Southbourne",
      "Pokesdown",
      "St Peter's Church"
    ],
    drainageProfile: `Bournemouth's dramatic topography—sandy cliffs rising 30–40 metres above a wide beach, cut through by numerous chines—creates a drainage environment unlike most UK towns. The sandy Barton Clay and Boscombe Sand geology that forms the cliffs is highly susceptible to erosion and ground movement. Where this instability affects underground drainage, the consequences can be rapid: a small pipe defect in sandy cliff-top soils can allow water to migrate through the ground, undermining pipe beds and causing sinkholes. Properties on the cliff tops of East Cliff, West Cliff, and Canford Cliffs Road require particular vigilance because ground movement here is an ongoing process, not a one-time event.

The town grew rapidly from the 1860s through the Edwardian era as a genteel seaside resort, and large swathes of Bournemouth—including Talbot Woods, Charminster, and Winton—retain Victorian and Edwardian drainage infrastructure. These areas present classic challenges: clay pipes with deteriorating joints, root intrusion from the mature trees that line residential streets, and capacity limitations when multiple properties share a common drain run. The conversion of large Victorian villas into flats and HMOs—very common in the student areas near Bournemouth University and around Charminster—imposes drainage loads on systems that were designed for a single household. Shared drains in converted properties frequently suffer from grease accumulation and are more likely to block than single-occupancy equivalents.

Bournemouth's proximity to the sea and its position above chalk and sand aquifers means groundwater levels fluctuate seasonally. During wet winters, the water table rises in lower-lying areas such as the Bourne Stream valley and the Stour flood corridor near Kinson, increasing the risk of groundwater entering drainage systems through any cracks or open joints. Southbourne and Pokesdown, on the slightly lower ground between the cliff tops and the River Stour, can experience both coastal groundwater effects and fluvial flooding influence, making drainage management particularly important for properties in these transitional areas.

Modern commercial Bournemouth—the BIC, Castlepoint, and the town centre—brings the drainage demands of high footfall venues and food-service operations: grease traps, interceptors, and high-capacity gully systems require regular maintenance that domestic drainage does not. Our Bournemouth engineers are experienced in both the domestic conversion pressures of the older residential streets and the commercial drainage maintenance requirements of the town centre and retail parks.`,
    localFAQs: [
      {
        question: "Why do cliff-top properties in Bournemouth have drainage concerns?",
        answer: "East Cliff, West Cliff, and similar elevated areas sit on sandy, unstable Barton Clay and Boscombe Sand geology that is prone to gradual ground movement. Any cracked or leaking drain in this environment allows water to migrate through loose sandy soils, potentially undermining pipe beds and nearby foundations. We recommend periodic CCTV surveys for cliff-top properties—particularly if you notice any ground subsidence, cracking in drives or paths, or slow drainage."
      },
      {
        question: "My converted Victorian property in Charminster keeps blocking—why?",
        answer: "Large Victorian and Edwardian properties converted to multiple flats or HMOs are very common near Bournemouth University and in Charminster. The original single-household drainage was not designed for the water usage of three or more independent units. Grease from multiple kitchens accumulates rapidly in shared drains, and without regular maintenance the build-up can cause complete blockages. We recommend quarterly jetting for converted properties and a full CCTV survey to check whether the drainage capacity is adequate for current occupancy."
      },
      {
        question: "How does Bournemouth's seasonal population affect drainage?",
        answer: "Bournemouth's large student and tourist populations create significant seasonal variation in water usage, particularly in the town centre, Boscombe, and student accommodation areas. Drainage systems that manage comfortably during quieter months can struggle during peak occupancy periods. If you manage rental accommodation near the seafront or university, pre-tenancy CCTV surveys and regular jetting help prevent blockages at the worst possible times."
      },
      {
        question: "Is there a flood risk from the Bourne Stream?",
        answer: "The Bourne Stream flows through the Lower Gardens and town centre before discharging via the pier. In normal conditions it is modest, but during intense rainfall events the stream can surcharge the drainage network in lower-lying streets around the valley floor. Properties in the Bourne Valley area—including parts of Westbourne and the town centre—should understand their flood risk designation and maintain clear drainage to minimise back-flow risk."
      }
    ],
    caseStudy: `Called to a converted Victorian villa in Charminster occupied as five student flats: the ground-floor kitchen had completely flooded with grey water overnight. Inspection confirmed a full blockage in the shared 4-inch drain caused by a compacted grease and wet-wipe mass approximately two metres from the access point. High-pressure jetting cleared the blockage within an hour, and a subsequent CCTV survey revealed three further areas of partial grease accumulation along the shared run, as well as a cracked clay pipe section that was allowing root ingress. We scheduled a return visit for patch lining of the cracked section, and the landlord enrolled in our annual jetting programme—preventing the same emergency from recurring.`
  },

  ferndown: {
    landmarks: [
      "Ferndown Town Centre",
      "Dudsbury Golf Club",
      "Hampreston Village",
      "West Moors",
      "Stapehill",
      "Longham",
      "Trickett's Cross",
      "Ferndown Industrial Estate",
      "Ferndown Upper School",
      "River Stour (Longham stretch)",
      "Parley Cross",
      "East Parley",
      "Ferndown Common",
      "Cherry Grove",
      "Cobham Road",
      "Victoria Road",
      "Ringwood Road",
      "Wimborne Road East",
      "New Road",
      "Wimborne Road"
    ],
    drainageProfile: `Ferndown grew from a small heathland village into a substantial Dorset town primarily during the post-war decades of the 1950s through to the 1980s, and this relatively recent development history shapes its drainage character. Unlike the Victorian terraces of central Poole or Bournemouth, most of Ferndown's housing stock was built during the era of uPVC and rigid plastic pipework—materials that are generally more resistant to root intrusion than clay but that are nonetheless now reaching middle age. Settlement and minor ground movement in Ferndown's heathland soils can cause uPVC pipes to lose fall (gradient) over time, leading to slow drainage and solids accumulation even in pipes that show no visible cracks.

The underlying geology is predominantly the Poole Formation—sandy, acidic heathland soils with free-draining characteristics. While this means Ferndown rarely suffers the high water table issues seen closer to Poole Harbour, the loose sandy substrate is susceptible to gradual movement and can allow drain runs to shift from their original alignment over decades. Properties in the established residential streets around Cherry Grove and Cobham Road, built in the 1960s and 1970s, are at the stage where drainage surveys are increasingly revealing deflection and deformation in original pipework.

The River Stour runs to the south of Ferndown through the Longham and Hampreston area, and its floodplain presents real risk to properties in the lower-lying parts of East Parley and Parley Cross. During significant rain events—the Stour catchment is large, extending well into Wiltshire—river levels can rise rapidly and remain elevated for extended periods. Drainage systems in floodplain-adjacent properties can experience back-pressure from a saturated ground environment even when direct flooding does not reach the property itself.

Ferndown's industrial estate and commercial area along the Ringwood Road generate drainage demands typical of light industrial and trade premises: vehicle wash-down water, oils, and commercial waste water require interceptors and trade effluent management that differ significantly from domestic drainage. Our engineers understand both Ferndown's residential heathland drainage characteristics and the commercial requirements of the industrial estate, providing joined-up service across the town.`,
    localFAQs: [
      {
        question: "Why might 1960s or 1970s Ferndown properties be experiencing drainage problems now?",
        answer: "Ferndown's post-war housing estates were mostly built with uPVC drainage that is now 40–60 years old. While more durable than Victorian clay in some respects, these pipes have been subject to decades of ground movement in heathland soils and can show deformation, joint separation, and loss of fall. If your Ferndown property has never had a drainage survey and you experience slow or recurrent blockages, a CCTV inspection is a sound investment."
      },
      {
        question: "Is there a flood risk in Ferndown?",
        answer: "Most of Ferndown town itself is on elevated heathland ground with low direct flood risk. However, properties near the River Stour in Longham, Hampreston, and East Parley are within the floodplain and should understand their Environment Agency flood risk rating. During major Stour flood events, groundwater saturation can affect drainage performance even for properties that don't flood directly."
      },
      {
        question: "What drainage issues affect the Ferndown Industrial Estate?",
        answer: "Commercial premises on the Ferndown Industrial Estate require properly maintained interceptors and grease traps if they handle oils, vehicle wash-down, or food preparation. Failure to maintain these can result in pollution incidents and Environment Agency enforcement action. We provide regular interceptor emptying and inspection services for commercial properties throughout the Ferndown area."
      }
    ],
    caseStudy: `Routine maintenance visit to a 1970s detached property on Cobham Road: the owners had noticed slow kitchen drainage for several months but no blockage. CCTV survey identified a 15-metre section of the main drain run where gradual ground settlement had reduced the pipe's fall to nearly zero—waste was flowing but solids were settling out and accumulating. We used a combination of high-pressure jetting to clear the existing build-up and then excavated a small section to re-bed the pipe at the correct gradient, restoring free-flowing drainage and preventing a full blockage that could have caused waste to back up into the property.`
  },

  wimborne: {
    landmarks: [
      "Wimborne Minster",
      "East Borough",
      "West Borough",
      "River Stour",
      "River Allen",
      "Walford Mill",
      "Priors Walk",
      "Merley",
      "Colehill",
      "Leigh Park",
      "Canford Magna",
      "The Square",
      "Crown Mead Shopping Centre",
      "Stone Lane",
      "Victoria Road",
      "Wimborne Corn Exchange",
      "Julian's Road",
      "Rowlands Hill",
      "Wimborne Model Town",
      "Millhams Street"
    ],
    drainageProfile: `Wimborne Minster occupies a strategically important position at the confluence of the River Stour and the River Allen—a location that has been settled since Roman times precisely because of its riverside character. Today, that same geography creates significant drainage and flooding challenges for modern property owners. The town centre and the residential streets immediately around the Minster sit on ground that is bounded on two sides by rivers, and the flood risk here is well-documented: the Environment Agency's flood mapping shows substantial areas of central Wimborne within Flood Zone 2 and 3. During major Stour flood events—such as those seen in 2012 and 2023—properties in the lower-lying streets around Millhams Street, East Borough, and near the river corridor can experience both direct flooding and drainage surcharging as the combined sewer network backs up.

The soil profile beneath Wimborne reflects its river valley position: alluvial silts and clays overlie older river terrace gravels, and the water table in the lower parts of town is consistently high, particularly in winter. This means that even properties that do not flood directly can experience drainage performance issues during wet periods, as groundwater enters cracked clay drainage through open joints and overwhelms pipe capacity. The older properties around East Borough, West Borough, and the streets immediately surrounding the Minster are predominantly Victorian and Edwardian, with clay drainage infrastructure that is now well over a century old. Root intrusion from the mature trees characteristic of these streets is a persistent issue.

Upstream of the town centre, the residential development in Colehill and Leigh Park sits on higher, more freely draining ground with fewer flood-related concerns, but properties here still benefit from periodic inspection of aging drainage. Merley and Canford Magna, to the south, sit closer to the Stour floodplain and share some of the flood-risk characteristics of the town centre. New developments on the outskirts of Wimborne have been built with modern drainage incorporating sustainable urban drainage systems (SuDS), which require different maintenance—including inspection of soakaways and attenuation features—compared to traditional drains.

The Wimborne area's mix of historic town centre properties, floodplain-adjacent Victorian streets, and more recent suburban developments means a genuinely varied drainage landscape. Our engineers are familiar with both the older combined infrastructure under the town centre and the SuDS systems serving newer developments, and we work alongside the Environment Agency's local flood risk data to give accurate advice to Wimborne property owners.`,
    localFAQs: [
      {
        question: "What flood risk should Wimborne town centre property owners be aware of?",
        answer: "Wimborne's position between the Stour and Allen rivers means parts of the town centre—particularly around Millhams Street and East Borough—fall within Environment Agency Flood Zones 2 and 3. Property owners in these areas should check their specific flood risk rating, consider flood-resilience measures such as non-return valves on drainage, and ensure their drainage systems are clear and well-maintained to minimise the risk of back-flow during flood events."
      },
      {
        question: "How does the high water table affect drainage in central Wimborne?",
        answer: "The river valley soils in central Wimborne mean groundwater can be close to the surface throughout winter. Any crack or open joint in clay drainage allows groundwater to enter pipes, effectively diluting waste flow and reducing system capacity. CCTV surveys in Wimborne town centre properties frequently reveal groundwater ingress that goes unnoticed by the owner until drainage performance deteriorates significantly."
      },
      {
        question: "Do newer Wimborne developments need drainage maintenance too?",
        answer: "Yes. Modern housing developments on the outskirts of Wimborne typically incorporate sustainable drainage systems (SuDS) including soakaways, attenuation tanks, and permeable surfaces. These need periodic inspection and maintenance to continue functioning correctly—soakaways in particular can silt up over time. We inspect and maintain SuDS features as well as traditional drainage, ensuring modern Wimborne properties are as well-maintained as older ones."
      }
    ],
    caseStudy: `Emergency call-out during the January 2024 wet spell to a Victorian terraced property on East Borough: the owners discovered sewage backing up into the ground-floor toilet during a period of sustained heavy rainfall. The public sewer in this low-lying riverside street was surcharging due to groundwater inflow across the combined system, and the resulting back-pressure was pushing waste back through the private drain into the property. We installed a reflux (non-return) valve on the outgoing drain, preventing further back-flow events, and carried out a CCTV survey to identify two cracked clay pipe sections that were contributing to groundwater entry into the private drainage. Pipe lining of both defective sections was completed the following week.`
  },

  wareham: {
    landmarks: [
      "Wareham Town Walls",
      "River Frome",
      "River Piddle",
      "Wareham Quay",
      "St Martin's Church",
      "Lady St Mary Church",
      "North Street",
      "South Street",
      "West Street",
      "East Street",
      "Northport",
      "Stoborough",
      "Sandford",
      "East Stoke",
      "Worgret",
      "Purbeck District",
      "Wareham Forest",
      "Holton Heath",
      "Swineham Point",
      "Wareham Station"
    ],
    drainageProfile: `Wareham is one of the most dramatically encircled towns in England: the Saxon town walls sit on a promontory almost entirely surrounded by the Rivers Frome to the south and the River Piddle (Trent) to the north, with the rivers converging near Swineham Point before discharging into Poole Harbour. This means Wareham has a genuinely exceptional flood risk profile—the Environment Agency records it as one of the most flood-vulnerable small towns in Dorset. The town centre ground level is only marginally above normal river levels, and during major Stour catchment flood events, the flooding of streets such as North Street and areas around the Quay is a genuine possibility, as demonstrated by the significant 2012 Wareham floods.

The implications for drainage are far-reaching. The water table beneath the town is permanently high—within a metre or less of the surface in many locations—and drainage systems in the older residential streets within the town walls are working in conditions where the surrounding ground is often saturated. Clay drainage pipes here, many of which date to the late Victorian period, are subject to continual groundwater pressure and root intrusion from the mature trees that line the grid-pattern streets. The soil is predominantly Frome valley alluvium: heavy, clay-rich, and slow-draining, which further exacerbates the challenges of managing both surface and foul water.

The Purbeck stone buildings that give Wareham its distinctive character—substantial 18th and 19th century townhouses and commercial properties—present access challenges for drainage work. Solid stone external walls and original flagstone floors can make it difficult to trace drainage routes without specialist CCTV investigation. Properties along South Street and North Street, many of which are Listed Buildings, require sensitive handling when drainage access or repair is needed, and we have experience working within conservation area constraints.

Outside the town walls, the settlements of Stoborough, Northport, and Sandford sit on slightly higher ground and have lower direct flood risk, but are still connected to the same river drainage catchment. Holton Heath, to the east of Wareham, includes both residential properties and industrial heritage from the former Royal Naval Cordite Factory, and the ground conditions here reflect the industrial past. Our engineers understand Wareham's complex drainage environment—combining heritage property constraints, high water tables, and genuine flood risk—and provide honest assessments of what can realistically be achieved within the town's challenging geography.`,
    localFAQs: [
      {
        question: "How serious is the flood risk for Wareham town centre properties?",
        answer: "Wareham town centre has a well-documented and genuine flood risk from the Rivers Frome and Piddle, which almost entirely encircle the town. Properties within the town walls should check their Environment Agency flood risk designation and consider flood-resilience measures including non-return valves on drainage outfalls, raised electrical installations, and flood-resilient ground-floor materials. Regular drainage maintenance is essential to minimise back-flow risk during high river levels."
      },
      {
        question: "My Wareham property is a Listed Building—can you work on the drainage?",
        answer: "Yes. We have experience working sensitively on Listed Buildings and within Wareham's conservation area. CCTV drain surveys allow us to understand your drainage layout without excavation, and where repair or lining work is needed, we use techniques that minimise disruption to historic fabric. We can advise on any listed building or conservation area consent requirements that may be relevant to more significant drainage work."
      },
      {
        question: "Why does Wareham drainage keep blocking during wet weather?",
        answer: "During periods of heavy rain or high river levels, the combined sewers in Wareham town centre are subject to groundwater infiltration across the entire network. As the surrounding soil becomes saturated, groundwater enters through cracked pipes and open joints, dramatically increasing the volume in the system. Private drains can experience back-pressure and reduced flow. A CCTV survey will identify whether your private drain has defects that are contributing to this problem, and pipe lining can reduce groundwater infiltration significantly."
      }
    ],
    caseStudy: `Call-out to a Grade II Listed townhouse on South Street following reports of a persistent damp smell near the ground-floor utility room. Non-invasive CCTV survey located a collapsed section of the original ceramic glazed-ware drain at a depth of approximately 0.6 metres—consistent with the high water table—where the pipe had fractured and was admitting groundwater and surrounding soil into the drainage system. Because of the Listed Building status and proximity to the stone-flagged hallway, we used a structural drain liner to reline the affected section entirely without excavation, preserving the original floor surfaces and completing the work within a single day. Post-lining CCTV confirmed a fully sealed repair.`
  },

  christchurch: {
    landmarks: [
      "Christchurch Priory",
      "Christchurch Harbour",
      "Mudeford Quay",
      "Stanpit Marsh",
      "River Avon",
      "River Stour",
      "Wick",
      "Bargates",
      "Burton",
      "Highcliffe",
      "Friars Cliff",
      "Twynham Avenue",
      "Purewell",
      "Somerford",
      "Jumpers",
      "Fairmile",
      "Heron Court Road",
      "Barrack Road",
      "Bridge Street",
      "Place Mill"
    ],
    drainageProfile: `Christchurch occupies one of the most hydrologically complex positions on the south coast: the town sits at the confluence of the Rivers Avon and Stour, with Christchurch Harbour to the east and Stanpit Marsh—a nationally important wetland—along the northern harbour shore. The Avon flows south from Salisbury through the New Forest, while the Stour arrives from the Dorset interior via Wimborne and Bournemouth, and both rivers converge just upstream of the Priory before reaching the harbour. This means Christchurch is essentially an island of higher ground in a floodplain, and the flood risk across the town centre and riverside areas is both real and well-documented.

The Environment Agency maps large parts of Christchurch within Flood Zones 2 and 3, particularly in the historic town centre, along the River Avon corridor through Wick, and in lower-lying parts of Purewell and Somerford. Properties in these zones are at genuine risk during major flood events and face a permanently elevated water table, especially in the months from October to March. The drainage consequences are significant: clay pipes in the older streets around the Priory and Bargates are routinely subject to groundwater ingress through cracked joints, and the combined sewer network serving the town centre struggles during flood events as both surface water and groundwater overwhelm its capacity.

Highcliffe and Friars Cliff, on the coastal strip to the east, present a different set of challenges. Here, the geology transitions to sandy cliffs and coastal plain—similar to neighbouring Bournemouth—with a higher risk of cliff erosion and ground movement affecting buried infrastructure. Coastal properties at Friars Cliff and along the Avon Beach frontage sit on marine sand and gravel above a saline water table. The marine environment accelerates corrosion of older metallic pipe fittings and creates specific challenges for any below-ground drainage repair.

The Avon Valley floodplain at Wick and the broader Stour floodplain around Somerford and Jumpers contain both older residential properties and more recent development. New development in these areas is required by planning conditions to incorporate SuDS, but older properties may have drainage layouts designed without consideration of the floodplain context. Our engineers have detailed knowledge of Christchurch's varied geography—from the historic riverside town centre to the coastal strip at Highcliffe—and provide drainage assessments that account for the specific flood risk and ground conditions of each area.`,
    localFAQs: [
      {
        question: "What drainage precautions should Christchurch riverside property owners take?",
        answer: "Properties along the River Avon and Stour corridors, including parts of Wick, Purewell, and the town centre, should fit non-return (reflux) valves on their outgoing drains as a standard precaution. These prevent sewage from backing up into the property when the public sewer surcharges during flood events. Regular jetting and CCTV inspection also help ensure your private drain is in the best possible condition to handle high-water-table conditions."
      },
      {
        question: "Are Highcliffe and Friars Cliff properties affected by cliff erosion and drainage problems?",
        answer: "The sandy coastal cliffs at Highcliffe and Friars Cliff are subject to ongoing erosion, and any drainage defect in this geology allows water to migrate through loose sandy soils—potentially accelerating ground instability. We recommend CCTV surveys for cliff-top properties that haven't been inspected recently, and prompt repair of any identified defects to protect both your drainage system and the ground stability around your property."
      },
      {
        question: "Does Stanpit Marsh affect drainage for nearby properties?",
        answer: "Properties adjacent to Stanpit Marsh and the upper harbour shore are on very low-lying ground with a permanently high water table. This makes them vulnerable to groundwater infiltration into drainage systems throughout the year, not just during flood events. If you have a property in the Stanpit or Mudeford area and experience recurrent drainage problems, a CCTV survey is likely to reveal groundwater infiltration as a contributing factor."
      }
    ],
    caseStudy: `Scheduled CCTV survey for new owners of a riverside property on Wick Lane, purchased without a prior drainage survey: inspection revealed that the previous owners had extended the property and re-routed the main drain run, but the new routing had been poorly backfilled, leaving a 20cm sag in the pipe where solids were accumulating. A second defect—an open joint allowing harbour-area groundwater to enter the system—was also identified. We relined the sagging section using a cured-in-place structural liner and patch-lined the open joint, restoring correct gradient and preventing groundwater infiltration. The new owners appreciated having a complete drainage survey report before committing to further renovation work.`
  },

  ringwood: {
    landmarks: [
      "Ringwood Market Place",
      "River Avon",
      "Bickerley Green",
      "Blashford Lakes",
      "Poulner",
      "Hightown",
      "Moortown",
      "Ashley Heath",
      "Hangersley",
      "Ringwood Town Centre",
      "The Furlong Shopping Centre",
      "Meeting House Lane",
      "Southampton Road",
      "Christchurch Road",
      "Crow Hill",
      "Liberty's of London (Ringwood Brewery)",
      "Ringwood School",
      "Ellingham",
      "Harbridge",
      "Picket Post"
    ],
    drainageProfile: `Ringwood is a Hampshire market town in the Avon Valley, sitting at a point where the River Avon broadens and slows as it approaches the southern fringes of the New Forest. The town's drainage challenges are shaped by two dominant factors: the River Avon floodplain to the east of the town, and the New Forest heathland soils that underlie the western residential areas. These two very different geological and hydrological environments create distinctly different drainage experiences for properties on opposite sides of the town.

The River Avon at Ringwood is a wide, chalk-fed river that rises and falls relatively predictably with rainfall in the Wiltshire and Hampshire chalk downlands. However, during extended wet periods—as seen in the winter of 2023–24—the Avon floodplain around Bickerley, Blashford, and the lower-lying parts of the town can hold substantial standing water for weeks at a time. Properties on Bickerley Green and roads adjacent to the water meadows face genuine flood risk and experience the same groundwater-infiltration drainage problems seen across the Avon Valley: saturated soils push groundwater into any drainage defect, and the combined sewer network in the older parts of town has limited capacity to absorb this additional volume.

The western residential areas of Ringwood—Poulner, Hightown, and Ashley Heath—sit on New Forest gravels and sandy heathland soils. Here, drainage is the opposite extreme: the freely-draining sandy substrate means surface water disappears quickly but the soil can move and settle, causing pipe misalignment over time. Post-war housing in Poulner and Hightown uses a mixture of clay and early uPVC drainage, and properties from the 1950s and 1960s are now at an age where drainage surveys reveal the cumulative effects of decades of minor ground movement—sagging pipe runs, joint separation, and root intrusion from the mature gardens that are characteristic of New Forest edge settlements.

Ringwood town centre, including the older properties around the Market Place and Meeting House Lane, contains Georgian and Victorian buildings with drainage infrastructure of varying age and condition. Commercial properties around the Furlong shopping area and along Southampton Road need to manage trade waste water effectively, and we regularly service grease traps and commercial drainage in these premises. Our Ringwood engineers work across both the floodplain-adjacent east side of town and the sandy heathland west side, bringing appropriate expertise to each environment.`,
    localFAQs: [
      {
        question: "How serious is the flood risk around Ringwood's River Avon?",
        answer: "The River Avon floodplain around Bickerley and Blashford is a genuine flood risk area, and the Environment Agency flood maps show significant flood zone coverage in eastern Ringwood. Property owners near the river should check their flood risk designation and consider whether non-return valves, flood barriers, and flood-resilient fittings are appropriate. Maintaining clear drainage and a CCTV-surveyed private drain in good condition reduces the risk of drainage back-flow adding to flood damage."
      },
      {
        question: "Why is drainage on the Poulner and Hightown side of Ringwood different?",
        answer: "Poulner, Hightown, and Ashley Heath sit on New Forest sands and gravels that drain freely but are prone to slow settlement over decades. Post-war housing in these areas can have drain runs that have gradually lost their gradient, causing solids to settle out and accumulate over time. If you have a 1950s–1970s Ringwood property and have never had a drainage survey, a CCTV inspection is a worthwhile exercise."
      },
      {
        question: "Does the New Forest proximity affect Ringwood drainage in other ways?",
        answer: "Properties on the western edge of Ringwood and in Ashley Heath are close to New Forest land with ancient and established trees. Root intrusion from Forest edge planting—particularly oak, beech, and birch—can be a problem in older drainage with clay pipe joints. If your property backs onto or is adjacent to established woodland, a CCTV survey should specifically examine pipe joints for root ingress."
      }
    ],
    caseStudy: `Call-out to a 1960s semi-detached property in Poulner following repeated blockages in the downstairs bathroom: previous occupants had simply jetted the drain each time without investigating further. CCTV survey revealed the main 4-inch drain had lost approximately 8mm of fall over a 12-metre run due to ground settlement in the sandy subsoil, creating a low point where solids accumulated. Rather than excavating the full run, we used our pipe re-rounding and structural lining technique to re-establish a smooth bore with the correct gradient, eliminating the low spot. The property has had no recurrence in the 18 months since the lining was completed.`
  },

  swanage: {
    landmarks: [
      "Swanage Bay",
      "Swanage Pier",
      "Peveril Point",
      "Durlston Country Park",
      "Swanage Railway",
      "Ulwell",
      "Herston",
      "The Beach",
      "High Street",
      "Shore Road",
      "Townsend",
      "Ballard Down",
      "Old Harry Rocks",
      "Swanage Town Hall",
      "Mowlem Theatre",
      "Institute Road",
      "Kings Road",
      "Victoria Avenue",
      "Newton Manor",
      "Prospect Farm"
    ],
    drainageProfile: `Swanage sits in a sheltered bay carved from the Purbeck limestone and chalk hills of the Isle of Purbeck—a geological setting that fundamentally shapes the town's drainage characteristics in ways that differ markedly from the sand and clay environments of Poole and Bournemouth. The Purbeck limestone that outcrops around Peveril Point and forms the cliffs of Durlston Country Park is a hard, jointed rock with its own internal drainage systems: natural fissures and joints carry water through the rock, which means that in many parts of Swanage the formal drainage infrastructure interacts with a naturally karstic environment rather than the predictable clay or sand substrates found elsewhere in Dorset.

The town sits in a narrow valley draining to Swanage Bay, and the level ground immediately behind the beach—Shore Road and the southern seafront—is barely above sea level. Properties here experience the combined pressure of a saline coastal water table and the tidal influence of the bay. The marine environment is notably aggressive towards drainage infrastructure: cast iron and older metallic fittings corrode rapidly in this environment, and even modern drainage materials experience accelerated degradation when in contact with saline groundwater. Victorian and Edwardian hotels and boarding houses along Shore Road and the beachfront, built to serve the town's heyday as a fashionable resort, have drainage systems that are now well over a century old and typically have not been comprehensively surveyed.

Swanage's geology also means that excavation for drainage repair can be significantly more challenging than in sand or clay areas: encountering limestone bedrock at shallow depths is common, particularly in Herston, Townsend, and the higher parts of town around Ballard Down. This increases the cost and complexity of any drainage repair requiring open excavation, making no-dig repair techniques—pipe lining, patch repairs, and robotic cutting—particularly valuable in Swanage. The town's limited road network and narrow older streets also restrict access for larger equipment.

The seasonal character of Swanage—a popular holiday destination that swells dramatically in summer—creates demand pressures on drainage in holiday lets and seafront accommodation that are absent during quieter months. Heavy summer usage followed by winter quiet can exacerbate grease and scale accumulation in pipes serving commercial holiday accommodation. We recommend annual pre-season jetting and inspection for Swanage holiday properties to avoid blockages during peak occupancy.`,
    localFAQs: [
      {
        question: "How does Swanage's limestone geology affect drainage work?",
        answer: "Purbeck limestone can appear at very shallow depths in parts of Swanage, making open excavation for drainage repairs more difficult and expensive than in sandy or clay areas. This makes no-dig repair techniques—pipe lining, patch lining, and CCTV-guided robotic repairs—especially valuable in Swanage. If you need drainage work, it's worth asking specifically about no-dig options before assuming excavation is necessary."
      },
      {
        question: "What drainage issues affect Swanage's seafront and Shore Road properties?",
        answer: "Properties on and near Shore Road sit very close to sea level with a saline coastal water table. This environment accelerates corrosion of older metallic drainage fittings and can cause joint deterioration in even relatively modern installations. Victorian seafront buildings have drainage that may not have been comprehensively inspected for decades. We recommend CCTV surveys for seafront properties—especially those used as holiday lets—to identify any defects before they develop into costly emergencies."
      },
      {
        question: "How should Swanage holiday let owners manage drainage maintenance?",
        answer: "Holiday lets experience concentrated high usage during summer, which can overload drainage systems if they are carrying any existing grease or scale accumulation. We recommend an annual pre-season jet and CCTV inspection for Swanage holiday properties. This identifies any defects during the quiet winter period when repairs can be scheduled without affecting bookings, and clears accumulated grease and debris before the summer peak begins."
      },
      {
        question: "Is there a flood risk in Swanage?",
        answer: "Swanage Bay can generate significant wave action during south-easterly storms, and the low-lying area around Shore Road is susceptible to coastal flooding during severe weather events. The valley floor behind the town can also carry surface water rapidly towards the bay during intense rainfall. Properties in the lowest-lying parts of Swanage should check their coastal and fluvial flood risk ratings and ensure their private drainage is in the best possible condition."
      }
    ],
    caseStudy: `Call-out to a Victorian guest house on Shore Road following a complete drainage failure in the ground-floor WC: the owner had noted slow drainage for several weeks but had delayed action during a busy summer season. CCTV survey confirmed a near-total blockage caused by a combination of grease, scale, and a section of corroded cast iron pipe that had partially collapsed—consistent with the corrosive saline coastal environment. High-pressure jetting cleared the blockage temporarily, and we followed with a structural cured-in-place pipe liner through the corroded section, restoring full bore without the need for excavation through the guest house's Victorian tiled floors. The job was completed over two days during a quiet period, with the guest house fully operational throughout.`
  },

  verwood: {
    landmarks: [
      "Verwood Town Centre",
      "Moors Valley Country Park",
      "Potterne Park",
      "Ebblake Industrial Estate",
      "Three Legged Cross",
      "Alderholt",
      "Cranborne Chase",
      "Verwood Heathland Heritage",
      "Manor Road",
      "Ringwood Road",
      "Howe Lane",
      "Margards Lane",
      "Noon Hill",
      "Stephens Castle Down",
      "Lake Road",
      "Station Road",
      "Dewlands Common",
      "Stroud Wood",
      "Verwood First School",
      "Potterne Way"
    ],
    drainageProfile: `Verwood is one of the newer towns in Dorset, having grown from a small heathland village with a pottery tradition into a substantial residential town almost entirely during the second half of the 20th century. This recent development history means Verwood has a more homogeneous drainage infrastructure than historic Dorset towns: the vast majority of properties were built between the 1960s and the 1990s with uPVC drainage, connected to relatively modern sewer systems. However, this youth brings its own set of maintenance considerations as that infrastructure now enters middle age.

The town sits on the Dorset heathland—part of the same Poole Formation sandy soils that underlie Canford Heath and Ferndown. These soils are the dominant influence on drainage performance in Verwood: highly sandy, acidic, and free-draining, they produce excellent surface water management but are subject to the gradual movement and settlement that affects all sandy substrates over time. Drain runs that were installed with the correct gradient in the 1970s or 1980s may have shifted subtly over subsequent decades, losing fall and creating low points where solids accumulate. This is the most common drainage finding in Verwood CCTV surveys: no dramatic failures, but gradual deformation of uPVC pipework leading to chronic slow drainage and periodic blockages.

Tree root intrusion, while less severe than in clay-piped Victorian areas, is still a relevant concern in Verwood's established residential streets. The heathland setting means gardens often contain birch, pine, and oak—species whose roots are adapted to seek water in porous sandy soils. Any joint in aging uPVC drainage is a potential entry point for fine roots, and once established, root masses grow quickly and can cause persistent blockages. Properties backing onto or adjacent to Moors Valley Country Park or Dewlands Common, where established heathland vegetation is present, have a higher root-intrusion risk than properties in more open settings.

The Ebblake Industrial Estate represents Verwood's commercial drainage requirements: light industrial, trade, and commercial premises generating workshop effluent, oils, and trade waste water that must be managed through properly maintained interceptors. We regularly service industrial-estate drainage in Verwood, including annual interceptor emptying and inspection to maintain compliance with Environment Agency discharge consents. The residential character of the broader town is well-served by our standard domestic drainage services, and our knowledge of Verwood's specific soil and infrastructure age profile means we give accurate diagnostic advice efficiently.`,
    localFAQs: [
      {
        question: "Is Verwood at risk of flooding?",
        answer: "Verwood sits on elevated heathland ground and has very low direct flood risk from rivers. The freely-draining sandy soils also mean surface water generally soaks away quickly. However, the Moors Valley area to the west has low-lying ground associated with the River Moors, and properties on the western edge of town near the country park should check their flood risk designation. For most Verwood properties, drainage problems are related to pipe condition rather than flooding."
      },
      {
        question: "How long do uPVC drains from the 1970s–1990s typically last?",
        answer: "Good-quality uPVC drainage can last 50+ years when correctly installed and maintained, but early-generation uPVC (1960s–1970s) can be more brittle and prone to cracking as it ages. Ground movement in sandy heathland soils can cause gradual deformation. If your Verwood property was built in this era and has never had a drain survey, it's worth investing in a CCTV inspection—particularly if you've experienced any slow drainage or recurrent blockages."
      },
      {
        question: "My Verwood garden backs onto heathland—should I be concerned about root intrusion?",
        answer: "Yes—heathland vegetation including birch, Scots pine, and gorse sends fine roots considerable distances in search of water. If your property borders established heathland or the Moors Valley country park, root ingress into drain joints is more likely than for properties in more built-up settings. A CCTV survey will show definitively whether root ingress has occurred. If it has, we can clear it with a robotic cutter and line the affected section to prevent recurrence."
      }
    ],
    caseStudy: `Drainage survey requested by owners of a 1985-built detached property in Manor Road ahead of a house sale: the survey revealed two areas of concern. First, a 6-metre section of the main drain had settled and lost its fall—consistent with Verwood's sandy soils—and was retaining solids after each flush cycle. Second, a fine birch root mass had entered at a joint adjacent to the garden boundary shared with an established birch tree. We cleared the roots by high-pressure jetting and robotic cutting, then installed a cured-in-place liner through both the root-affected joint and the deformed section. The vendor was able to provide the buyer with a clean drainage survey report, and the sale completed without renegotiation on drainage grounds.`
  },

  "blandford-forum": {
    landmarks: [
      "Blandford Forum Market Place",
      "River Stour",
      "Blandford Camp",
      "Bryanston School",
      "Blandford St Mary",
      "Crown Hotel",
      "The Old House",
      "Bryanston",
      "Durweston",
      "Stourpaine",
      "Pimperne",
      "Tarrant Keyneston",
      "Church Lane",
      "East Street",
      "Salisbury Street",
      "Sheep Market Hill",
      "The Plocks",
      "Damory Street",
      "Whitecliff Mill Street",
      "Blandford Forum Town Hall"
    ],
    drainageProfile: `Blandford Forum is architecturally unique in Dorset—a Georgian market town almost entirely rebuilt after a catastrophic fire in 1731 by the local architects John and William Bastard. The resulting townscape of brick-built Georgian townhouses and civic buildings is a conservation area of national importance, and it creates a very specific context for drainage work: the drainage infrastructure beneath these handsome 18th and 19th century streets is itself historic, and working within the conservation area requires sensitivity and often specialist no-dig approaches to avoid damage to historic surfaces and structures.

The River Stour runs through the eastern edge of the town, and the Stour valley flood risk is a defining concern for lower-lying Blandford properties. The Environment Agency's flood maps show Flood Zone 2 and 3 coverage along the Stour corridor, and the town has experienced significant flooding from the Stour during major catchment events. Properties near Whitecliff Mill Street, The Plocks, and the riverside areas of East Street are closest to the flood risk zone. The Stour here is a relatively powerful river in flood conditions, rising quickly in response to rainfall across the chalk downlands of Cranborne Chase and the Dorset/Wiltshire border. The water table in Stour-adjacent properties is seasonally high, and groundwater infiltration into drainage is a recurring issue for the riverside streets.

The chalk and clay geology beneath Blandford differs from the sandy heathland soils of coastal Dorset. The underlying chalk of Cranborne Chase transitions to Kimmeridge Clay in the vale, and Blandford sits at this geological boundary. This gives a variable sub-surface: some areas have relatively free-draining chalk rubble, others have heavy clay that retains water and can cause ground heave and movement—particularly in periods that alternate between wet and dry. Clay heave can stress buried drainage pipes, causing joint separation and cracking in ways that differ from the gradual settlement seen in sandy areas.

Blandford Camp, to the north-east of the town, is one of the largest British Army garrisons in the south of England and has its own drainage infrastructure managed by the Ministry of Defence. The surrounding civilian residential areas—including Blandford St Mary—connect to Wessex Water's public sewer network in the normal way. Our engineers work across the Blandford area on both residential and commercial properties, understanding the specific combination of historic conservation area constraints, Stour flood risk, and the geological transition between chalk downland and Stour valley clay.`,
    localFAQs: [
      {
        question: "Does Blandford Forum's conservation area status affect drainage work?",
        answer: "Yes. Many of Blandford's Georgian streets are within the conservation area, and any drainage work that requires excavation in public areas or affects Listed Buildings may require consent from Dorset Council. We are experienced in working within conservation area constraints and routinely use CCTV survey and no-dig pipe lining to avoid unnecessary excavation. For significant works on Listed Buildings, we can advise on the consent process and prepare supporting documentation."
      },
      {
        question: "How serious is the Stour flood risk for Blandford properties?",
        answer: "The River Stour at Blandford can rise significantly during major catchment rainfall events. Properties near the river in the Whitecliff Mill Street, The Plocks, and East Street areas should check their Environment Agency flood risk designation and consider flood-resilience measures. Fitting non-return valves on drain outfalls is advisable for flood-zone properties, and maintaining a CCTV-surveyed, well-maintained private drain reduces the risk of additional drainage back-flow during flood events."
      },
      {
        question: "What is the impact of chalk and clay geology on Blandford drainage?",
        answer: "Blandford sits where chalk downland meets Stour valley clay, creating variable ground conditions. Clay soils are subject to shrink-swell movement as they dry out in summer and rehydrate in winter. This ground movement can stress buried drainage, causing joint separation and cracking over time. CCTV surveys in properties on clay-dominated soils often reveal stress-related pipe defects that would not be present in more stable sandy or chalky soils."
      },
      {
        question: "Are there drainage issues specific to older Blandford Georgian properties?",
        answer: "The Georgian townhouses in central Blandford were built in the 1730s–1800s, and while the buildings themselves were extensively studied and conserved, the drainage beneath them is often original Victorian-era clay infrastructure added in the 19th century. These clay pipes are now 100+ years old and vulnerable to root intrusion, ground movement cracking, and joint failure. If you own or are purchasing a Georgian property in the Blandford conservation area, a professional CCTV survey before significant renovation work is strongly recommended."
      }
    ],
    caseStudy: `Instructed by a property owner on Salisbury Street—a well-preserved Georgian townhouse in the conservation area—who had discovered a persistent damp patch in the cellar that had been attributed to rising damp by a previous surveyor. Our CCTV drainage survey located a cracked section of Victorian clay drain running beneath the cellar floor at approximately 0.8 metres depth, with groundwater from the clay-rich subsoil entering through the fracture and seeping towards the cellar wall. Because excavation through the historic cellar floor was not acceptable to the building owner or the conservation officer, we installed a cured-in-place structural liner through the affected section from an external access point, eliminating both the pipe defect and the groundwater entry. Post-lining survey confirmed a fully sealed repair, and the damp patch resolved within six weeks of the work being completed.`
  }
};

export function getLocationHubContent(slug: string): LocationHubContent | undefined {
  return LOCATION_HUB_CONTENT[slug];
}
