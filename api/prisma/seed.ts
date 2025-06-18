import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

// All hardcoded domains from the application
const defaultDomains = [
  // PDF Services
  { domain: "pdfescape.com", category: "pdf_service", notes: "PDF editing and conversion service" },
  { domain: "smallpdf.com", category: "pdf_service", notes: "PDF compression and conversion service" },
  { domain: "ilovepdf.com", category: "pdf_service", notes: "PDF manipulation and conversion service" },
  { domain: "pdf2go.com", category: "pdf_service", notes: "PDF conversion and editing service" },
  { domain: "freepdfconvert.com", category: "pdf_service", notes: "Free PDF conversion service" },
  { domain: "www.sejda.com", category: "pdf_service", notes: "PDF editing and conversion service" },
  { domain: "www.freeconvert.com", category: "pdf_service", notes: "File conversion service" },
  
  // Cloud Storage
  { domain: "1drv.ms", category: "cloud_storage", notes: "OneDrive short URL service" },
  { domain: "onedrive.live.com", category: "cloud_storage", notes: "Microsoft OneDrive cloud storage" },
  { domain: "onedrive.com", category: "cloud_storage", notes: "Microsoft OneDrive cloud storage" },
  
  // Company Services
  { domain: "pricol.freshservice.com", category: "company_service", notes: "Pricol Freshservice IT service management" },
  { domain: "myapp.pricol.co.in", category: "company_service", notes: "Pricol internal application" },
  { domain: "pricol.co.in", category: "company_service", notes: "Pricol company domain" },
  { domain: "pricol.com", category: "company_service", notes: "Pricol company domain" },
  { domain: "pricolprecision.com", category: "company_service", notes: "Pricol Precision company domain" },
  { domain: "pricolasia.com", category: "company_service", notes: "Pricol Asia company domain" },
  { domain: "pricoltravel.com", category: "company_service", notes: "Pricol Travel company domain" },
  { domain: "pricollimited.atlassian.net", category: "company_service", notes: "Pricol Atlassian workspace" },
  
  // Automotive Industry
  { domain: "bajajauto.co.in", category: "automotive", notes: "Bajaj Auto company domain" },
  { domain: "abdrive.bajajauto.com", category: "automotive", notes: "Bajaj Auto internal drive service" },
  { domain: "tradewithtvs.com", category: "automotive", notes: "TVS Motor trading platform" },
  { domain: "webpp.heromotocorp.biz", category: "automotive", notes: "Hero MotoCorp web platform" },
  { domain: "srm.inservices.tatamotors.com", category: "automotive", notes: "Tata Motors SRM system" },
  { domain: "tvscorp.tvsmotor.com", category: "automotive", notes: "TVS Motor corporate domain" },
  { domain: "srm.ashokleyland.com", category: "automotive", notes: "Ashok Leyland SRM system" },
  { domain: "smlisuzu.net", category: "automotive", notes: "SML Isuzu company domain" },
  { domain: "srmapps.mahindra.com", category: "automotive", notes: "Mahindra SRM applications" },
  { domain: "tvsholdings.com", category: "automotive", notes: "TVS Holdings company domain" },
  { domain: "sacl.co.in", category: "automotive", notes: "SACL company domain" },
  
  // Logistics
  { domain: "bulletlogistics.in", category: "logistics", notes: "Bullet Logistics company domain" },
  { domain: "twinengineers.com", category: "logistics", notes: "Twin Engineers company domain" },
  
  // Government Services
  { domain: "unifiedportal-mem.epfindia.gov.in", category: "government", notes: "EPF India unified portal" },
  { domain: "eportal.incometax.gov.in", category: "government", notes: "Income Tax e-portal" },
  { domain: "dgft.gov.in", category: "government", notes: "DGFT government portal" },
  { domain: "mca.gov.in", category: "government", notes: "Ministry of Corporate Affairs portal" },
  
  // Technology Services
  { domain: "dfos.azurewebsites.net", category: "tech_service", notes: "Azure web service" },
  { domain: "www.falstad.com", category: "tech_service", notes: "Falstad circuit simulator" },
  { domain: "adobe.com", category: "tech_service", notes: "Adobe software and services" },
  { domain: "gemini.google.com", category: "tech_service", notes: "Google Gemini AI service" },
  { domain: "chatgpt.com", category: "tech_service", notes: "OpenAI ChatGPT service" },
  { domain: "v2.zenclass.in", category: "tech_service", notes: "ZenClass learning platform" },
  { domain: "stimulate.icsi.edu", category: "tech_service", notes: "ICSI learning platform" },
  { domain: "publish.buffer.com", category: "tech_service", notes: "Buffer social media publishing" },
  { domain: "service.ariba.com", category: "tech_service", notes: "SAP Ariba procurement service" },
  
  // Telecommunications
  { domain: "airtel.com", category: "telecom", notes: "Airtel telecommunications" },
  
  // Banking
  { domain: "cibnext.icicibank.com", category: "banking", notes: "ICICI Bank corporate banking" }
];

async function main() {
  console.log('Starting database seeding...');
  
  try {
    // Check if domains already exist
    const existingCount = await prisma.whitelistedDomain.count();
    
    if (existingCount > 0) {
      console.log(`Database already contains ${existingCount} domains. Skipping seeding.`);
      return;
    }
    
    // Add all domains to the database
    for (const domainData of defaultDomains) {
      await prisma.whitelistedDomain.create({
        data: {
          domain: domainData.domain,
          category: domainData.category,
          notes: domainData.notes,
          addedBy: 'system',
          isActive: true,
          riskLevel: 'LOW',
          dataClass: 'PUBLIC',
          auditLogs: {
            create: {
              action: 'ADD',
              domainName: domainData.domain,
              performedBy: 'system',
              details: `Added during database seeding: ${domainData.notes}`
            }
          }
        }
      });
    }
    
    console.log(`Successfully seeded ${defaultDomains.length} domains to the database.`);
    
  } catch (error) {
    console.error('Error seeding database:', error);
    throw error;
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 