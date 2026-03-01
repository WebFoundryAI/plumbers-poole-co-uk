import { BRAND } from './brand';
import { getLocationHubContent } from './locationHubContent';

export interface FAQ {
  question: string;
  answer: string;
}

export const GENERIC_FAQS: FAQ[] = [
  {
    question: "Do you charge a call-out fee?",
    answer: `No. ${BRAND.brandName} never charges a call-out fee. You are only billed for the actual work we carry out, and we always confirm the cost with you before we start.`,
  },
  {
    question: "How quickly can you arrive in an emergency?",
    answer: `In most cases we reach properties across Poole, Bournemouth, and wider Dorset within sixty to ninety minutes of your call. Response times can vary slightly during peak traffic or severe weather, but we always keep you updated.`,
  },
  {
    question: "Are you available for emergencies?",
    answer: `Absolutely. Our engineers are on call around the clock, every day of the year, including bank holidays. Ring ${BRAND.phoneFormatted} whenever you need us and we will dispatch someone straight away.`,
  },
  {
    question: "How much does drain unblocking cost?",
    answer: "Pricing depends on the nature of the blockage, where it is located, and whether any repairs are required. We provide a transparent fixed quote before any work begins so there are no surprises on the bill.",
  },
  {
    question: "What is included in your service visit?",
    answer: "Every visit starts with a thorough assessment of the problem, followed by the most appropriate clearance or repair method. We finish by explaining what caused the issue and offering practical guidance to help you avoid a repeat occurrence.",
  },
  {
    question: "Do you work with landlords and commercial properties?",
    answer: "Yes. We assist private homeowners, buy-to-let landlords, managing agents, and businesses ranging from harbourside restaurants to retail units and office blocks across Poole and Dorset.",
  },
  {
    question: "Do you provide a guarantee on your work?",
    answer: "We do. All work carried out by our engineers is backed by a workmanship guarantee, giving you confidence that the job has been done properly.",
  },
];

export const SERVICE_FAQS: Record<string, FAQ[]> = {
  "blocked-drains": [
    {
      question: "How quickly can you clear a blocked drain?",
      answer: "The majority of domestic blockages in Poole are resolved within one to two hours of our arrival. If the situation turns out to be more involved, for instance a collapsed section beneath the garden, we will explain the next steps and provide a clear timeline before proceeding.",
    },
    {
      question: "What causes drains to become blocked?",
      answer: "The most frequent culprits we encounter across Dorset properties are accumulated cooking fat, hair and soap build-up, tree root intrusion from the mature gardens common in Canford Cliffs and Broadstone, and foreign objects accidentally flushed. A CCTV inspection allows us to pinpoint the exact cause.",
    },
    {
      question: "Will clearing a blocked drain damage my pipes?",
      answer: "Not when done correctly. We select our methods and pressure settings to match the pipe material and condition. Older clay or pitch-fibre pipes found in many pre-1970s Poole homes require a gentler approach, and our engineers are trained to adapt accordingly.",
    },
  ],
  "cctv-drain-surveys": [
    {
      question: "What does a CCTV drain survey show?",
      answer: "The camera footage reveals the internal state of your pipes in real time: blockages, cracks, root penetration, joint displacement, and corrosion are all clearly visible. You receive a written report and the video recording for your own records.",
    },
    {
      question: "Do I need a drain survey before buying a house?",
      answer: "We strongly advise it, particularly for Poole properties near the harbour or in areas with sandy subsoil and mature trees. Underground drainage problems rarely show obvious above-ground symptoms until they become severe, and the survey gives you hard evidence for price negotiations or peace of mind.",
    },
    {
      question: "How long does a CCTV drain survey take?",
      answer: "A standard residential survey in Poole typically takes between one and two hours, depending on the length and complexity of the drainage run. We walk you through the findings on site and follow up with the formal report within a few working days.",
    },
  ],
  "drain-jetting": [
    {
      question: "Is high-pressure drain jetting safe for old pipes?",
      answer: "Yes, provided it is carried out by experienced engineers. We adjust the water pressure based on the pipe material, age, and condition. For the older clay and pitch-fibre systems found in many Parkstone and Hamworthy properties, we use lower pressures combined with specialist nozzles to clean effectively without causing harm.",
    },
    {
      question: "How often should drains be jetted?",
      answer: "For a typical Poole household, an annual or biannual jetting session keeps the system flowing freely. Commercial kitchens, restaurants along the Quay, and food-service businesses usually benefit from quarterly maintenance to manage heavier grease volumes.",
    },
  ],
  "emergency-drain-services": [
    {
      question: "How quickly can you respond to an emergency?",
      answer: `Our target is to reach any property in Poole, Bournemouth, or the surrounding Dorset area within one to two hours of receiving your call. Dial ${BRAND.phoneFormatted} and we will get an engineer on the way immediately.`,
    },
    {
      question: "Do you charge extra for out-of-hours emergencies?",
      answer: "We maintain competitive fixed pricing for all work regardless of the time or day. There are no premium rates for evenings, weekends, or bank holidays. We will always quote you a price before we begin.",
    },
  ],
};

export function getServiceFAQs(serviceSlug: string): FAQ[] {
  const serviceFaqs = SERVICE_FAQS[serviceSlug] || [];
  return [...serviceFaqs, ...GENERIC_FAQS];
}

export function getLocationFAQs(locationName: string): FAQ[] {
  // Map location name to slug for content lookup
  const locationSlug = locationName.toLowerCase().replace(/\s+/g, '-');
  const hubContent = getLocationHubContent(locationSlug);

  if (hubContent && hubContent.localFAQs) {
    return hubContent.localFAQs as FAQ[];
  }

  // Fallback to generic location FAQs if location-specific content not found
  return [
    {
      question: `Do you cover ${locationName}?`,
      answer: `Yes, ${BRAND.brandName} provides comprehensive drainage services throughout ${locationName} and the surrounding locations of ${BRAND.serviceAreaLabel}.`,
    },
    {
      question: `How quickly can you get to ${locationName}?`,
      answer: `We typically arrive within 1-2 hours for emergency callouts in ${locationName}. For scheduled appointments, we offer flexible booking times.`,
    },
    {
      question: `What drainage services do you offer in ${locationName}?`,
      answer: `We offer all our services in ${locationName} including drain unblocking, CCTV surveys, drain jetting, repairs, and 24/7 emergency callouts.`,
    },
  ];
}

export const PAGE_FAQS: FAQ[] = [
  {
    question: "How quickly can you respond to an emergency callout?",
    answer: 'Our engineers typically reach properties in <a href="/locations/poole/" class="text-primary hover:underline">Poole</a> and throughout Dorset within sixty to ninety minutes. We operate a genuine round-the-clock <a href="/services/emergency-drain-services/" class="text-primary hover:underline">emergency service</a>, so whether it is three in the afternoon or three in the morning, an engineer can be dispatched.'
  },
  {
    question: "Do you charge a call-out fee?",
    answer: "There is no call-out fee whatsoever. We quote a fixed price for the work required, and you only pay once the job is completed to your satisfaction. No hidden extras, no surcharges for unsociable hours."
  },
  {
    question: "What locations do you cover?",
    answer: 'We serve the entire Poole and Dorset conurbation including <a href="/locations/bournemouth/" class="text-primary hover:underline">Bournemouth</a>, <a href="/locations/christchurch/" class="text-primary hover:underline">Christchurch</a>, <a href="/locations/wimborne/" class="text-primary hover:underline">Wimborne Minster</a>, Ferndown, Wareham, Broadstone, Canford Cliffs, Parkstone, and Sandbanks. Visit our <a href="/locations/" class="text-primary hover:underline">full coverage map</a> for the complete list.'
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept debit and credit cards, contactless payments, cash, and bank transfers. Payment is collected once the work has been completed and you are happy with the result."
  },
  {
    question: "Can you help with commercial drainage problems?",
    answer: 'Certainly. We work with restaurants, pubs, offices, retail premises, and industrial units across Poole and Bournemouth. Services include <a href="/services/blocked-drains/" class="text-primary hover:underline">blockage clearance</a>, scheduled <a href="/services/drain-jetting/commercial-jetting/" class="text-primary hover:underline">commercial jetting</a>, and <a href="/services/drain-repairs/" class="text-primary hover:underline">pipe repairs</a> tailored to the demands of busy commercial properties.'
  },
  {
    question: "What is a CCTV drain survey and when is it needed?",
    answer: 'A <a href="/services/cctv-drain-surveys/" class="text-primary hover:underline">CCTV drain survey</a> involves feeding a small waterproof camera through your pipes to capture live footage of their internal condition. It is particularly valuable for diagnosing recurring blockages, assessing storm-damage after coastal weather, and providing evidence for insurance claims. We also offer dedicated <a href="/services/cctv-drain-surveys/pre-purchase-survey/" class="text-primary hover:underline">pre-purchase surveys</a> for anyone buying property in the Poole area.'
  },
  {
    question: "How can I prevent blocked drains?",
    answer: 'Keep cooking fats out of the sink, fit mesh strainers over plugholes to catch hair and food debris, and avoid flushing anything other than toilet paper. Periodic professional <a href="/services/drain-jetting/" class="text-primary hover:underline">drain jetting</a> clears build-up before it becomes a blockage. Our <a href="/blog/prevent-blocked-drains-kitchen/" class="text-primary hover:underline">kitchen drain prevention guide</a> has more detailed advice.'
  },
  {
    question: "Are your engineers qualified and insured?",
    answer: 'Every engineer on our team is fully trained in modern drainage techniques, experienced with the pipe materials and soil conditions found across Dorset, and covered by comprehensive public liability insurance. Read more <a href="/about/" class="text-primary hover:underline">about our team and credentials</a>.'
  }
];

/** Alias used by the homepage */
export const HOMEPAGE_FAQS = PAGE_FAQS;
