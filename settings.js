/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */


const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUdrMHJLNGZUN1Bkcm8wOWVOeXFyMFJRZFAzRE1aY0dtckJPVnVlZGhYdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieS82bmxTWitkNFY1aWlhSXgzM1pMRm00M05zS2RiQkt2a01ONWI2d3VUYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRRTVTZ09Xamk2RlFuYUNSaUlqU0ZnUEFmeWpOWkNnYmZuQ1gxSFkrY2t3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjT0tYVFVIRlRTNXpDS1NEUWNwLzd4SXhWd0orZVVLZGlISUcvaEJuR1JVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklOeEw3Sm1uWkQ2aVB2V2kzQVkvOFhIdEZEZW95NDZxaEhyZHVDOThPblk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImViNVlDcER5R1RRR2hnUUZpTlFSVmhPbGZraUNoWEF2Q21UWDdPM25ybm89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0ZWZXlIMFU3YThGeEtacTNxcm1SaDRVUUVJamZBVVNpbEV5M011N1JXQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUDV5dlBBTWRhNW14UHBha1FKTk5mUUlwdkpxdWRYL0lGQWhFbDRTRnlFbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZDUXE3RU1sZnFBc21TZ3JTc2JCV0padSttK1pSdUxaaUMzc2VYNks5TVFtWVdBdXgxUzZqTW1Tbk5DRXBnYytiM2EyOGFYM21TalR6eHVDdm5sM2dBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMsImFkdlNlY3JldEtleSI6Ii8xcVVicUoxZ21qaUY3eDExV3U1bGNYdWoybmhwckhsOTRhWmMzLzAzM0k9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjZZRDg2OHQ5UndxVU5XSHpPWWV0TWciLCJwaG9uZUlkIjoiYjc4YWRjNzktN2NlOS00ZDEzLTg2NzQtYzNlNWNiMTQ2NmZhIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJLUy9yYVBNU3dLdHRydHU5K2xJdmM4eE9Xaz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnS2Y4YnhqOTZFRFBuUW4wWks5V0kzbm1pMU09In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiV1hLNUJEV00iLCJtZSI6eyJpZCI6IjkyMzAyMzIyMjA5Mzo0OEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT0dkMWJnQ0VPcnMwcm9HR0JBZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTzJkQVQxa3U0WkRJbGVoRHJNcW9WaW0yL25SdEVNVUZnVE9xOHVvbG9Wdz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiczBOdEdCTFZubjZFQ3puSVJ5Z0wrMXd6YXozeXpDcmIyQTNHK2piRW1zcTltQmJkazV5Q2RmRlNaOU9Mb1NiMzM5R1dnck42bTNtS1JWMittNzdIREE9PSIsImRldmljZVNpZ25hdHVyZSI6IkE0UWdCR1l2bC9RVjhJanZYVzN1Y0tLd2xoQW9sMHVYalVYeGNhVFlzYnpmdVJXZjVaUFRIOFpSWjNERGkvOG9aSnhFS25nNHdxam96OUNEdmw3R2pRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMDIzMjIyMDkzOjQ4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlR0blFFOVpMdUdReUpYb1E2ektxRllwdHY1MGJSREZCWUV6cXZMcUphRmMifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzM2MDQ5ODMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBR1MwIn0=';

const prefix = process.env.PREFIX || '.';
const mycode = process.env.CODE || "254";
const author = process.env.STICKER_AUTHOR || 'Keith';
const packname = process.env.PACKNAME || 'keith';
const dev = process.env.DEV || '254748387615';
const DevKeith = dev.split(",");
const botname = process.env.BOTNAME || 'KEITH-MD';
const mode = process.env.MODE || 'public';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'online';

const antitag = process.env.ANTITAG || 'true';
const antibot = process.env.ANTIBOT || 'true';
const anticall = process.env.ANTICALL || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const autoread = process.env.AUTOREAD || 'true';
const autobio = process.env.AUTOBIO || 'false';

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  botname,
  autobio,
  mode,
  prefix,
  anticall,
  autolike,
  mycode,
  author,
  packname,
  dev,
  DevKeith,
  gcpresence,
  antionce,
  antibot,
  session,
  antitag,
  antidelete
};
