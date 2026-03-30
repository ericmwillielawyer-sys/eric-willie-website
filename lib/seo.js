const DOMAIN = "https://www.williedasherlaw.net";
const PHONE = "(512) 478-0834";
const FIRM = "Eric M. Willie, P.C.";

// Per-page SEO metadata
export const PAGE_SEO = {
  "/": {
    title: "Austin Divorce Lawyer | Eric M. Willie, P.C. — Family Law Attorney",
    description: `Experienced Austin family law attorney with 20+ years and 4.8 stars across 198 reviews. Divorce, custody, child support, military divorce. Free consultation: ${PHONE}`,
    priority: 1.0,
    schema: "Attorney",
  },
  "/austin-divorce-lawyer": {
    title: "Austin Divorce Lawyer — Protect What Matters Most | Eric M. Willie",
    description: "Contested or uncontested divorce in Austin, TX. 20+ years experience in Travis County courts. Property division, custody, support. Free consultation.",
    priority: 0.95,
    schema: "LegalService",
    service: "Divorce",
  },
  "/austin-child-custody-lawyer": {
    title: "Austin Child Custody Lawyer — Fighting for Your Children | Eric M. Willie",
    description: "Experienced Austin custody attorney handling conservatorship, visitation, and modification. Standard Possession Order, father's rights, interstate custody. Free consultation.",
    priority: 0.95,
    schema: "LegalService",
    service: "Child Custody",
  },
  "/austin-child-support-lawyer": {
    title: "Austin Child Support Lawyer — Establishment, Modification & Enforcement",
    description: "Texas child support calculations, modifications, and enforcement actions. 20% for 1 child, income cap ~$9,200/mo. Free consultation with Eric M. Willie.",
    priority: 0.9,
    schema: "LegalService",
    service: "Child Support",
  },
  "/austin-military-divorce-lawyer": {
    title: "Austin Military Divorce Lawyer — SCRA, Retirement Division, Tricare",
    description: "Military divorce specialist near Fort Cavazos. USFSPA retirement division, 10/10 rule, SCRA protections, SBP elections, deployment custody. Free consultation.",
    priority: 0.9,
    schema: "LegalService",
    service: "Military Divorce",
  },
  "/austin-lgbtq-divorce-lawyer": {
    title: "Austin LGBTQ Divorce Lawyer — Affirming Representation | Eric M. Willie",
    description: "Experienced, affirming legal representation for same-sex divorce, custody, and property division in Texas. Pre-Obergefell property issues, non-biological parent rights.",
    priority: 0.85,
    schema: "LegalService",
    service: "LGBTQ Divorce",
  },
  "/high-net-worth-divorce-austin": {
    title: "High Net Worth Divorce Lawyer in Austin — Complex Asset Division",
    description: "Protecting complex assets in Austin divorce: business valuations, stock options, RSUs, real estate portfolios, cryptocurrency. Forensic accounting. Free consultation.",
    priority: 0.85,
    schema: "LegalService",
    service: "High Net Worth Divorce",
  },
  "/austin-property-division-lawyer": {
    title: "Austin Property Division Lawyer — Community vs. Separate Property in Texas",
    description: "Texas community property division in divorce. Asset tracing, reimbursement claims, hidden asset discovery, QDRO retirement division. Free consultation.",
    priority: 0.85,
    schema: "LegalService",
    service: "Property Division",
  },
  "/alimony-lawyer-austin-texas": {
    title: "Austin Alimony Lawyer — Spousal Maintenance & Contractual Alimony in Texas",
    description: "Texas alimony caps at $5,000/month for court-ordered maintenance. Contractual alimony has no caps. Negotiation, modification, and enforcement. Free consultation.",
    priority: 0.85,
    schema: "LegalService",
    service: "Spousal Support",
  },
  "/austin-collaborative-divorce-lawyer": {
    title: "Austin Collaborative Divorce Lawyer — Uncontested & Collaborative Options",
    description: "Collaborative and uncontested divorce in Austin. 40-60% less than litigation. 3-6 month resolution. Neutral financial and child specialists. Free consultation.",
    priority: 0.8,
    schema: "LegalService",
    service: "Collaborative Divorce",
  },
  "/austin-adoption-lawyer": {
    title: "Austin Adoption Lawyer — Stepparent, Agency & Private Adoption in Texas",
    description: "Stepparent, agency, private, interstate, and foster care adoption in Austin. Home studies, TPR, ICPC compliance. Experienced adoption attorney. Free consultation.",
    priority: 0.8,
    schema: "LegalService",
    service: "Adoption",
  },
  "/austin-domestic-violence-lawyer": {
    title: "Austin Protective Order Lawyer — Emergency Protection from Domestic Violence",
    description: "Same-day emergency protective order filing in Travis County. Temporary and final protective orders, custody intersection, false accusation defense. Free consultation.",
    priority: 0.85,
    schema: "LegalService",
    service: "Domestic Violence & Protective Orders",
  },
  "/austin-paternity-lawyer": {
    title: "Austin Paternity & Father's Rights Lawyer — Establishing Parental Rights",
    description: "Establish paternity, assert father's custody rights, or challenge paternity claims in Austin. DNA testing, AOP, court-ordered paternity. Free consultation.",
    priority: 0.8,
    schema: "LegalService",
    service: "Paternity & Father's Rights",
  },
  "/austin-grandparent-rights-lawyer": {
    title: "Austin Grandparent Rights Lawyer — Visitation & Custody in Texas",
    description: "Fighting for grandparent visitation and custody rights in Travis County. Standing requirements, Troxel analysis, kinship care, CPS cases. Free consultation.",
    priority: 0.8,
    schema: "LegalService",
    service: "Grandparent Rights",
  },
  "/austin-family-law-mediation": {
    title: "Austin Family Law Mediation — Resolving Disputes Without Court",
    description: "Over 80% of Austin family law cases settle in mediation. Experienced mediation advocate. MSA negotiation, preparation strategy. Free consultation.",
    priority: 0.8,
    schema: "LegalService",
    service: "Mediation",
  },
  "/austin-custody-modification-lawyer": {
    title: "Austin Custody Modification & Enforcement Lawyer | Eric M. Willie",
    description: "Modify custody, support, or property orders when circumstances change. Enforce court orders through contempt proceedings. Free consultation.",
    priority: 0.8,
    schema: "LegalService",
    service: "Enforcement & Modification",
  },
  "/about-eric-willie": {
    title: "About Eric M. Willie — Austin Family Law Attorney | 20+ Years Experience",
    description: "Pepperdine Law graduate with 20+ years in Austin family courts. 4.8 stars, 198 reviews. Limited caseload for personal attention. Travis, Williamson, Hays counties.",
    priority: 0.7,
    schema: null,
  },
  "/austin-divorce-lawyer-reviews": {
    title: "Client Reviews — Eric M. Willie, P.C. | Austin Divorce Lawyer Reviews",
    description: "Read what Austin families say about Eric M. Willie. 4.8 stars across 198 Google reviews. Divorce, custody, child support, and family law testimonials.",
    priority: 0.6,
    schema: null,
  },
  "/contact-austin-family-lawyer": {
    title: "Contact Eric M. Willie — Free Family Law Consultation in Austin",
    description: `Schedule a free consultation with Austin family law attorney Eric M. Willie. Call ${PHONE} or submit the online form. 3755 S Capital of Texas Hwy #295, Austin.`,
    priority: 0.6,
    schema: null,
  },
  "/austin-family-law-blog": {
    title: "Austin Family Law Blog — Divorce, Custody & Support Resources | Eric M. Willie",
    description: "Expert insights on Texas divorce, child custody, child support, and family law from Austin attorney Eric M. Willie. 25+ articles covering common questions.",
    priority: 0.7,
    schema: null,
  },
};

export function getPageSeo(slug) {
  const path = "/" + (slug || []).join("/");
  return PAGE_SEO[path] || PAGE_SEO["/"];
}

export function getPath(slug) {
  return "/" + (slug || []).join("/");
}

export const ALL_PAGES = Object.keys(PAGE_SEO);

export { DOMAIN, PHONE, FIRM };
