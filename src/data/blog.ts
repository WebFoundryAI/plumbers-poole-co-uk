import { BRAND } from './brand';

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  updatedDate?: string;
  category: string;
  tags: string[];
  readingTime: number;
  featured?: boolean;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "signs-of-blocked-drain",
    title: "7 Warning Signs You Have a Blocked Drain",
    metaTitle: "7 Warning Signs of a Blocked Drain | When to Call a Professional",
    metaDescription: "Learn the early warning signs of a blocked drain in Poole. From slow drainage to bad smells, know when to call a professional before it becomes an emergency.",
    excerpt: "Catching a blocked drain early can save you hundreds of pounds in emergency repairs. Here are the key warning signs every Poole homeowner should know.",
    content: `Blocked drains are among the most common plumbing complaints we receive from homeowners across Poole, Bournemouth, and the wider Dorset coast. Properties in areas like Canford Cliffs, Parkstone, and Sandbanks are particularly vulnerable due to a combination of mature tree-lined streets and the sandy, shifting soil that characterises much of the Poole Harbour shoreline. Recognising the early indicators of a developing blockage allows you to arrange a professional visit before the situation deteriorates into a full-blown emergency.

## 1. Water Draining at a Crawl

One of the earliest red flags is water pooling in your basin, shower tray, or bath rather than disappearing promptly. In many Poole properties, especially older homes around the Parkstone and Upper Hamworthy neighbourhoods, cast-iron or clay waste pipes narrow over the decades as limescale and sediment build up inside. If you notice your kitchen sink holding water for thirty seconds or longer after you pull the plug, a partial obstruction is almost certainly forming further down the line.

## 2. Gurgling or Bubbling Noises

Air trapped behind a partial blockage is forced back through the water seal in your trap, creating an audible gurgle. You might hear this when a toilet finishes flushing or when a washing machine empties. In terraced and semi-detached homes throughout Broadstone and Poole town centre, shared soil stacks can amplify the sound, making it seem like the noise is coming from a different room entirely.

## 3. Foul Odours Rising from Plugholes

Decomposing food scraps, soap residue, and hair caught in a partial blockage produce an unmistakable smell. Coastal properties around Lilliput and Sandbanks sometimes experience a more pronounced odour during warm summer months, as higher temperatures accelerate bacterial breakdown within the pipes. If the smell persists after cleaning the plughole and trap, the obstruction is likely deeper in the system.

## 4. Toilet Water Rising Abnormally After Flushing

When you flush and the water level climbs higher than normal before slowly receding, the main soil pipe or underground drain is struggling to carry waste away. This is a warning that should never be ignored, particularly in properties built on the sandy subsoil common around Poole Harbour, where ground movement can displace pipe joints over time.

## 5. Water Backing Up Through Other Fixtures

If running the kitchen tap causes water to bubble up through a downstairs shower tray, or flushing a toilet pushes water into a nearby basin, you are dealing with a blockage in a shared section of pipework. This interconnected symptom indicates the problem is beyond individual fixture traps and usually sits in the underground drainage run.

## 6. More Than One Drain Affected Simultaneously

Multiple slow-running or blocked outlets throughout the house point firmly at the main sewer connection. Tree root ingress is a frequent culprit in leafy areas of Canford Cliffs, Branksome Park, and Broadstone, where mature oaks and chestnuts send roots towards the moisture in clay pipe joints. A [CCTV drain survey](/services/cctv-drain-surveys/) is the fastest way to pinpoint the exact location and nature of the intrusion.

## 7. Damp Patches or Watermarks Near Drain Runs

Unexplained damp on an interior wall or a persistently soggy patch in the garden can signal that a blocked pipe has cracked under pressure, allowing waste water to seep into the surrounding ground. Properties close to Poole Harbour or on the low-lying land around Hamworthy are at heightened risk because the high water table limits natural drainage away from the leak.

## Taking the Right Action

Minor slow drainage from a single fixture can sometimes be improved with a plunger or a natural baking-soda-and-vinegar flush. However, if more than one of the signs above applies, or the problem keeps returning, professional intervention is the most cost-effective route. Our team at ${BRAND.brandName} uses [high-pressure jetting](/services/drain-jetting/) and [CCTV inspection cameras](/services/cctv-drain-surveys/) to locate, clear, and document blockages in a single visit.

We respond to [emergency drain calls](/services/emergency-drain-services/) around the clock across [Poole](/locations/poole/) and every town in the Dorset conurbation. For a no-obligation assessment, call us on ${BRAND.phoneFormatted} or [book online](/contact/).`,
    author: "Plumbers Poole",
    publishDate: "2026-01-15",
    category: "Drain Maintenance",
    tags: ["blocked drains", "drain problems", "home maintenance", "plumbing tips"],
    readingTime: 5,
    featured: true
  },
  {
    slug: "prevent-blocked-drains-kitchen",
    title: "How to Prevent Blocked Kitchen Drains: A Complete Guide",
    metaTitle: "Prevent Kitchen Drain Blockages | Poole Tips",
    metaDescription: "Stop kitchen drain blockages before they start. Expert tips on preventing grease buildup, food waste disposal, and maintaining clear drains in your Poole home.",
    excerpt: "Kitchen drains are the most commonly blocked drains in UK homes. Learn how to prevent costly blockages with these simple daily habits.",
    content: `Ask any plumber working in Poole which room generates the most call-outs, and the answer is always the kitchen. Between roast dinners, barbecues overlooking Poole Harbour, and the general wear and tear of daily cooking, kitchen waste pipes endure a punishing workload. The good news is that the vast majority of kitchen blockages are entirely preventable with a handful of straightforward habits.

## Understanding the Grease Problem

Fats, oils, and grease, sometimes abbreviated to FOG in the trade, are responsible for roughly three-quarters of the kitchen drain blockages we attend across Poole, Broadstone, and Bournemouth. When warm, these substances flow freely through your pipes. Once they cool, they congeal on the pipe walls, gradually narrowing the bore until water can no longer pass through. Coastal Dorset properties are not immune despite the milder climate, because even moderate cooling is enough to solidify cooking fat inside a waste pipe.

## Habits That Keep Your Drains Clear

### Collect Grease Instead of Pouring It Away

The single most effective measure is to never pour liquid fat down the sink. Allow bacon grease, roasting-tin drippings, and frying-pan oil to cool in the pan, then scrape or wipe them into a container for disposal with your general household waste. BCP Council provides food-waste caddies that accept small amounts of solidified fat, making proper disposal convenient for Poole residents.

### Fit a Mesh Sink Strainer

A stainless-steel strainer sitting over your plughole catches rice grains, vegetable peelings, tea leaves, and other debris before they enter the waste pipe. These cost only a few pounds from any Poole hardware shop or supermarket and dramatically reduce the organic matter reaching your drainage system.

### Scrape Every Plate Thoroughly

Before plates and pans go into the washing-up bowl or dishwasher, scrape all food residue into your kitchen bin or food-waste caddy. Even small amounts of pasta, rice, or bread will swell with moisture inside your pipes and contribute to a growing obstruction.

### Flush With Hot Water After Washing Up

After you finish at the sink, let the hot tap run for twenty to thirty seconds. This pulse of hot water helps push any residual grease further along the pipe, reducing the chance of it settling and solidifying near the trap. It is an especially worthwhile step after washing greasy roasting tins or baking trays.

## Monthly Maintenance That Makes a Difference

### The Boiling-Water Treatment

Once a week, pour a full kettle of freshly boiled water slowly down the kitchen drain. The intense heat melts grease deposits that may have started to accumulate on the pipe walls, flushing them downstream before they can harden into a full blockage.

### A Natural Cleaning Flush

For a deeper clean every month, try this chemical-free approach:

1. Tip half a cup of bicarbonate of soda directly into the plughole
2. Follow with half a cup of white vinegar
3. Allow the fizzing reaction to work for fifteen minutes
4. Rinse with a full kettle of boiling water

This method is gentle on pipes, environmentally sound, and surprisingly effective at dissolving organic build-up without the corrosive effects of shop-bought chemical cleaners.

## Products and Practices to Avoid

- **Chemical drain unblockers** can corrode older copper and cast-iron pipework common in pre-war Poole properties
- **Coffee grounds** do not clean drains despite the popular myth; they clump together and worsen blockages
- **Flour and starchy water** create a paste-like residue that hardens inside pipes
- **Eggshells** fragment into gritty particles that catch other debris, accelerating build-up

## When Professional Help Is the Sensible Choice

If your kitchen drain runs slowly despite following the advice above, or if the same sink blocks repeatedly over a few months, there is likely a deeper obstruction or a structural issue within the underground pipework. A professional [CCTV drain survey](/services/cctv-drain-surveys/) can reveal root ingress, displaced joints, or collapsed sections that no amount of home maintenance will resolve.

For stubborn grease blockages, our [high-pressure jetting service](/services/drain-jetting/) scours pipe walls far more thoroughly than any domestic remedy, restoring full flow in minutes. If you are dealing with a [blocked kitchen sink](/services/blocked-drains/blocked-sink/) that refuses to clear, our engineers typically have it flowing again within the hour.

Contact ${BRAND.brandName} on ${BRAND.phoneFormatted} for straightforward advice and prompt assistance, or [send us a message online](/contact/).`,
    author: "Plumbers Poole",
    publishDate: "2026-01-10",
    category: "Drain Maintenance",
    tags: ["kitchen drains", "prevention tips", "drain maintenance", "grease blockages"],
    readingTime: 6
  },
  {
    slug: "cctv-drain-survey-home-buyers",
    title: "Why Every Home Buyer Needs a CCTV Drain Survey",
    metaTitle: "CCTV Drain Survey Before Buying | Poole Guide",
    metaDescription: "Buying a house in Poole? Discover why a pre-purchase CCTV drain survey could save you thousands and give you negotiating power.",
    excerpt: "A CCTV drain survey before buying a property can reveal hidden problems that cost thousands to fix. Here's what you need to know.",
    content: `Purchasing a home in Poole or anywhere along the Dorset coastline is one of the largest financial commitments most people will ever make. Solicitors, mortgage lenders, and estate agents will guide you through building surveys, searches, and valuations, yet one critical element of the property is almost always left uninspected: the drainage system beneath your feet. A pre-purchase CCTV drain survey fills that gap and has saved countless Dorset buyers from inheriting expensive underground problems.

## How a CCTV Drain Survey Works

A compact, waterproof camera mounted on a flexible rod is fed into the drainage system through an access point such as a manhole or rodding eye. As the camera travels along the pipes, it transmits live high-definition footage to a monitor above ground. The drainage engineer records the entire survey, noting the precise location and nature of any defects. At the end, you receive a written report and the video itself, both of which can be shared with solicitors, mortgage providers, or insurers.

## Why Standard Property Surveys Fall Short

A homebuyer survey, even the more detailed RICS Level 3 Building Survey, examines only the visible and accessible parts of a property. Drainage pipes run underground and behind walls, placing them firmly outside the surveyor's scope. Unless the property is already showing obvious signs of drainage failure such as subsidence cracks or damp, no flag will be raised. That omission can prove costly.

## Drainage Hazards Specific to Poole Properties

### Tree Root Infiltration

Poole's tree-lined residential streets in areas like Canford Cliffs, Branksome Park, and Penn Hill are beautiful, but mature trees pose a real threat to underground pipes. Roots follow moisture gradients towards cracked or poorly jointed drains, eventually forcing their way inside, fragmenting the pipe, and creating stubborn blockages. Properties with large willows, oaks, or poplars within ten metres of the drainage run are at particular risk.

### Sandy and Shifting Ground

Much of Poole sits on sandy heathland soil. While this drains surface water quickly, it also means underground pipes receive less lateral support than they would in heavy clay. Over decades, slight ground movement causes pipe joints to separate, allowing waste to leak out and soil to wash in. A CCTV survey reveals these displaced joints before they lead to a sinkhole or collapse.

### Ageing Pipe Materials

Many properties built before the 1970s in Parkstone, Hamworthy, and central Poole still rely on pitch-fibre or salt-glazed clay pipes. Pitch fibre is notorious for deforming under load, while clay pipes crack and crumble as they age. Either material can appear sound from the surface while being close to failure below ground.

### Coastal Moisture and Salt Exposure

Properties near Poole Harbour, Sandbanks, and the Quay sit in an environment where the water table fluctuates with the tides. Elevated groundwater seeps into cracked pipes, increasing flow volume and accelerating erosion. Salt-laden air can also corrode exposed metallic components in older gully traps and inspection chambers.

## The Financial Case for Surveying Before You Buy

Drain repairs range enormously in cost depending on the severity and access requirements:

- Clearing a straightforward blockage: around 80 to 200 pounds
- Patch lining a localised crack: 800 to 1,500 pounds
- Full pipe relining across a drainage run: 1,500 to 3,500 pounds
- Excavation and pipe replacement: 3,000 to 10,000 pounds or more
- Complete drainage system reconstruction: 10,000 to 25,000 pounds

A pre-purchase CCTV survey typically costs between 150 and 350 pounds, a fraction of even a modest repair bill. Many of our Poole customers have used the survey findings to negotiate thousands off the asking price, turning the survey fee into one of the best investments of the entire purchase.

## How to Use the Results to Your Advantage

If the survey uncovers issues, you have several paths forward:

1. **Negotiate a reduction** in the purchase price equivalent to the estimated repair cost
2. **Ask the seller to remedy** the defects before exchange of contracts
3. **Walk away** if the scale of the problems makes the property unviable at the agreed price
4. **Proceed with full awareness**, budgeting for repairs and scheduling them at your convenience

## What Sets a Good Survey Provider Apart

Look for a drainage company that delivers:

- Full HD footage supplied on USB or via a secure download link
- A clearly written report identifying every defect with its location
- Plain-English explanations rather than jargon
- Honest, impartial recommendations without pressure to commit to repairs
- Fixed pricing with no hidden charges

At ${BRAND.brandName}, we carry out comprehensive [pre-purchase drain surveys](/services/cctv-drain-surveys/pre-purchase-survey/) across [Poole](/locations/poole/) and every surrounding Dorset town. Our engineers take the time to walk you through the footage and answer every question before you make any decisions.

Should the survey reveal damage, we also provide professional [drain repairs](/services/drain-repairs/) including [no-dig pipe relining](/services/drain-repairs/pipe-relining/) and, where necessary, [excavation and replacement](/services/drain-repairs/drain-excavation/).

Book your [CCTV drain survey](/services/cctv-drain-surveys/) today by calling ${BRAND.phoneFormatted} or [get in touch online](/contact/).`,
    author: "Plumbers Poole",
    publishDate: "2026-01-05",
    category: "CCTV Surveys",
    tags: ["CCTV survey", "home buying", "property survey", "drain inspection"],
    readingTime: 7,
    featured: true
  },
  {
    slug: "emergency-drain-problems-what-to-do",
    title: "Emergency Drain Problems: What to Do Before the Engineer Arrives",
    metaTitle: "Emergency Drain Problems | Immediate Steps While Waiting for Help",
    metaDescription: "Experiencing a drain emergency in Poole? Learn what to do immediately to minimise damage while waiting for professional help to arrive.",
    excerpt: "When drains fail, every minute counts. Here's how to protect your property while waiting for emergency drainage help.",
    content: `Drain emergencies have a talent for striking at the least convenient moment. A sewage backup on a Sunday evening, a flooded kitchen during a dinner party, or an overflowing manhole in the middle of a Dorset downpour are situations that demand immediate, level-headed action. Knowing what to do in those first critical minutes can dramatically reduce the damage to your Poole property and make the engineer's job faster once they arrive.

## Identifying a Genuine Drain Emergency

Not every plumbing inconvenience qualifies as an emergency, but the following scenarios warrant an urgent call:

- Raw sewage rising through floor drains or toilet bowls into living spaces
- Water flooding from external manholes or inspection chambers onto driveways and gardens
- Two or more drains throughout the house failing at the same time
- A strong, persistent sewage odour inside the building
- Visible waste water pooling in your garden, particularly concerning for properties near Poole Harbour where contamination could reach the waterway

## Your Immediate Action Checklist

### Step 1 — Halt All Water Usage

The moment you realise the drains are failing, stop adding water to the system. Do not flush any toilet, run any tap, or start any appliance that discharges water. Every additional litre you introduce worsens the backflow. If you have a combi boiler with an automatic pressure-relief valve that drips into a drain, consider switching the heating off temporarily.

### Step 2 — Protect Belongings and Flooring

Move furniture, rugs, electrical equipment, and anything of value away from the affected area. Lay old towels along doorways to act as temporary barriers. If water is entering from an overflowing manhole, sandbags or tightly rolled towels placed across external doorsteps can slow its progress indoors.

### Step 3 — Shut Off the Mains If Necessary

If the overflow is continuous and you cannot identify which fixture is feeding it, locate your internal stopcock, usually found under the kitchen sink or in the downstairs cloakroom, and turn it clockwise until it is fully closed. This cuts the fresh-water supply to every outlet in the house and stops new water entering the drainage system.

### Step 4 — Ventilate and Stay Safe

Sewage releases hydrogen sulphide and methane, both of which are harmful in enclosed spaces. Open windows and external doors to create airflow through affected rooms. Keep children, elderly family members, and pets away from contaminated areas. If you must walk through standing sewage water, wear rubber boots and disposable gloves, and wash your hands and forearms thoroughly afterwards.

### Step 5 — Record Everything for Insurance

Take photos and short videos of the flooding, the affected areas, and any damaged belongings. Note the time the problem started and any observations such as whether neighbouring properties are also affected. This documentation is invaluable when filing an insurance claim. Most home insurance policies cover sudden drainage failures, but you will need evidence to support the claim.

## Mistakes That Make Things Worse

### Pouring Chemicals Down the Drain

Commercial drain-cleaning liquids are designed for slow-running sinks, not full-blown emergencies. Pouring caustic chemicals into a system that is already backing up achieves nothing useful and can create a hazardous mix if sewage contacts the chemical solution.

### Lifting Manhole Covers Without Training

While it is tempting to investigate, sewer manholes can contain toxic gases and sharp, contaminated debris. Lifting a cover without proper protective equipment puts you at risk of injury and illness. Leave manhole access to the professionals.

### Waiting and Hoping It Resolves Itself

A backed-up drainage system does not self-correct. Delay allows contaminated water to soak deeper into flooring, plasterboard, and soft furnishings, escalating both the health risk and the restoration bill.

## Preparing for the Engineer's Arrival

While you wait for the ${BRAND.brandName} team to reach your Poole property, a few preparatory steps speed up the repair:

- Clear the path to external manholes and any gullies around the property
- Make a note of exactly where water is entering or rising
- Check with immediate neighbours to see whether they are experiencing the same issue, as a shared sewer blockage requires a different approach
- Keep your mobile phone charged and within reach

## Calling Us for Emergency Assistance

When you ring ${BRAND.phoneFormatted}, our dispatcher will ask for your address and postcode, a brief description of what is happening, when the problem started, and a contact number. We aim to have an engineer at your door within one to two hours for [emergency callouts across Poole](/locations/poole/emergency-drain-services/) and surrounding Dorset areas.

Our [emergency drain team](/services/emergency-drain-services/) carries [CCTV camera equipment](/services/cctv-drain-surveys/) and [high-pressure jetting rigs](/services/drain-jetting/) as standard, enabling diagnosis and resolution on the same visit wherever possible. Whether the crisis involves a [flooding situation](/services/emergency-drain-services/flooding-emergency/) or a [sewage backup](/services/emergency-drain-services/sewage-emergency/), we have the capability to make your property safe again.

Call us immediately on ${BRAND.phoneFormatted} if you are experiencing a drain emergency, or [request urgent assistance online](/contact/).`,
    author: "Plumbers Poole",
    publishDate: "2025-12-28",
    category: "Emergency Services",
    tags: ["emergency drains", "flooding", "sewage backup", "drain emergency"],
    readingTime: 6
  },
  {
    slug: "drain-jetting-vs-drain-rods",
    title: "Drain Jetting vs Drain Rods: Which Method is Best?",
    metaTitle: "Drain Jetting vs Rods | Poole Comparison",
    metaDescription: "Should you use drain rods or high-pressure jetting to clear a blockage? Our Poole drainage experts explain when each method works best.",
    excerpt: "Not all drain clearing methods are equal. Learn when jetting beats rods and why professionals prefer high-pressure water.",
    content: `Homeowners across Poole and Dorset often ask whether they should attempt to clear a blocked drain themselves with a set of rods or call in a professional jetting service. It is a fair question, and the answer depends on the nature of the blockage, the condition of your pipes, and how confident you feel working around your property's underground drainage. Here is an honest comparison to help you decide.

## How Drain Rods Work

Drain rods are flexible fibreglass or polypropylene sections that screw together end to end. The operator feeds them into the pipe through a manhole or rodding eye and pushes towards the blockage, rotating as they go. Various attachments can be fitted to the leading end, including plungers for dislodging soft obstructions and worm-screw heads for breaking apart compacted debris.

### Where Rods Perform Well

- Shallow, accessible blockages that you can almost see from the manhole
- Soft obstructions such as a build-up of toilet paper or a single item lodged in the trap
- Situations where no power or water supply is available
- As a first-response measure to restore minimal flow before a professional can attend

### Where Rods Fall Short

- They have a practical reach of roughly twelve to fifteen metres before becoming difficult to control
- They push debris further along the pipe rather than removing it, potentially creating a worse blockage downstream
- Excessive force can crack clay pipes or puncture pitch-fibre pipes, both of which are common in older Poole properties around Parkstone, Hamworthy, and Longfleet
- Rods cannot clean grease, scale, or root fibres from the pipe walls, meaning the blockage is likely to reform within weeks or months

## How High-Pressure Jetting Works

Professional drain jetting equipment pumps water through a reinforced hose at pressures of up to 4,000 PSI. The hose terminates in a specialised nozzle with rear-facing jets that propel the hose forward while blasting debris back towards the access point. Different nozzle configurations tackle different problems: rotating heads for grease, chisel tips for tree roots, and penetrating jets for compacted silt.

### Advantages of Professional Jetting

- **Thorough cleaning**: The high-pressure water scours the internal pipe surface, removing grease, limescale, and sediment, not just the blockage itself
- **Extended reach**: Modern jetting rigs can clear pipes over a hundred metres from the access point, essential for longer drainage runs on larger Poole properties and commercial sites
- **Speed**: Most domestic blockages are cleared within fifteen to thirty minutes of jetting commencing
- **Root management**: Specialised cutting nozzles can shear through fine root ingress, buying time while a permanent repair is planned
- **Preventative value**: Periodic jetting keeps pipes in optimal condition, reducing the likelihood of future blockages

### Limitations to Be Aware Of

- Professional equipment is not available for DIY hire in most circumstances
- Jetting requires a pressurised water supply, although our vans carry their own water tanks for sites where mains access is difficult
- Damaged or collapsed pipes can be worsened by high-pressure water, which is why we always recommend a [CCTV inspection](/services/cctv-drain-surveys/) before jetting any drain where structural failure is suspected

## Choosing the Right Method for Your Situation

### Reach for Rods When:

- You have a simple, single-point blockage visible from the access chamber
- The blockage is soft and recent, such as a child's toy or a wad of wet wipes
- You need a temporary fix late at night before a professional can attend in the morning

### Book Professional Jetting When:

- The blockage recurs within a few weeks of being cleared
- Fat, grease, or cooking oil is the suspected cause
- Tree roots have been identified or are suspected, particularly in Canford Cliffs, Branksome, and Broadstone where mature trees are prevalent
- Multiple fixtures are draining slowly or backing up
- You want a thorough clean rather than just punching a hole through the debris
- The property is commercial, such as a restaurant, takeaway, or pub, where grease volumes are significantly higher

## Our Approach at ${BRAND.brandName}

When you call us for a blocked drain in Poole, we follow a consistent process:

1. Assess access points and gather information about symptoms
2. Deploy a CCTV camera to locate and identify the obstruction when the cause is unclear
3. Select the appropriate jetting nozzle based on the blockage type and pipe material
4. Clear the drain with controlled, high-pressure water
5. Carry out a post-clearance camera check to confirm the pipe is fully open and structurally sound
6. Provide you with honest advice on preventing a recurrence

## Thinking About Long-Term Costs

A set of drain rods from a DIY store costs around twenty to forty pounds, which seems like a bargain compared with a professional call-out. However, consider the broader picture: incomplete clearance leads to repeat blockages, each of which disrupts your day, and there is a real risk of cracking an old clay pipe, which can cost thousands to excavate and replace. Professional jetting delivers a lasting result and gives you peace of mind that the pipe is structurally intact.

If recurring blockages suggest a deeper structural problem, a [CCTV drain survey](/services/cctv-drain-surveys/) can confirm whether [drain repairs](/services/drain-repairs/) are needed before you commit to more extensive work.

For dependable [drain clearing across Poole](/locations/poole/drain-jetting/), call ${BRAND.brandName} on ${BRAND.phoneFormatted} or [request a quote online](/contact/). We also cover [Bournemouth](/locations/bournemouth/), [Christchurch](/locations/christchurch/), and [Wimborne](/locations/wimborne/).`,
    author: "Plumbers Poole",
    publishDate: "2025-12-20",
    category: "Drain Services",
    tags: ["drain jetting", "drain rods", "blocked drains", "drain clearing"],
    readingTime: 7
  }
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getFeaturedPosts(): BlogPost[] {
  return BLOG_POSTS.filter((post) => post.featured);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return BLOG_POSTS.filter((post) => post.category === category);
}

export function getAllCategories(): string[] {
  const categories = BLOG_POSTS.map((post) => post.category);
  return [...new Set(categories)];
}

export function getRecentPosts(count: number = 5): BlogPost[] {
  return [...BLOG_POSTS]
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, count);
}

// Blog posts related to each service - used for cross-linking on service pages
export const SERVICE_BLOG_POSTS: Record<string, string[]> = {
  "blocked-drains": ["signs-of-blocked-drain", "prevent-blocked-drains-kitchen"],
  "drain-unblocking": ["signs-of-blocked-drain", "prevent-blocked-drains-kitchen"],
  "cctv-drain-surveys": ["cctv-drain-survey-home-buyers", "signs-of-blocked-drain"],
  "drain-jetting": ["drain-jetting-vs-drain-rods", "prevent-blocked-drains-kitchen"],
  "emergency-drain-services": ["emergency-drain-problems-what-to-do", "signs-of-blocked-drain"],
  "drain-repairs": ["cctv-drain-survey-home-buyers", "drain-jetting-vs-drain-rods"],
};

export function getRelatedBlogPosts(serviceSlug: string): BlogPost[] {
  const relatedSlugs = SERVICE_BLOG_POSTS[serviceSlug] || [];
  return relatedSlugs
    .map((slug) => getBlogPostBySlug(slug))
    .filter((post): post is BlogPost => post !== undefined);
}
