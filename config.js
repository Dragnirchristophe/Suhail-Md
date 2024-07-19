const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_05_13_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMixcbiAgICAgICAgMyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDksXG4gICAgICAgIDM5LFxuICAgICAgICA0NixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTA0LFxuICAgICAgICAzMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTM5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDY2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDU5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDUyLFxuICAgICAgICA0NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzLFxuICAgICAgICA0NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDczLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEsXG4gICAgICAgIDQ5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTE3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTk1LFxuICAgICAgICA4MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwLFxuICAgICAgICAwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzYsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDQwLFxuICAgICAgICAxODYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTksXG4gICAgICAgIDEzNyxcbiAgICAgICAgODEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDcyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNSxcbiAgICAgICAgMTg0LFxuICAgICAgICA3NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDExMixcbiAgICAgICAgMzAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTksXG4gICAgICAgIDExNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDUxLFxuICAgICAgICA5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDExLFxuICAgICAgICAxNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDQsXG4gICAgICAgIDYyLFxuICAgICAgICA3MCxcbiAgICAgICAgMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExLFxuICAgICAgICAzMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDk5LFxuICAgICAgICAxODksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTA5LFxuICAgICAgICAzMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTksXG4gICAgICAgIDMxLFxuICAgICAgICAxNjksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTksXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjUwLFxuICAgICAgICA3OCxcbiAgICAgICAgNTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA3N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDYsXG4gICAgICAgIDMyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTM5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDU2LFxuICAgICAgICA5NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjQyLFxuICAgICAgICA5MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDUwLFxuICAgICAgICAxODcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTkzLFxuICAgICAgICA0OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDksXG4gICAgICAgIDg2LFxuICAgICAgICA1LFxuICAgICAgICA2NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDI0MixcbiAgICAgICAgOTUsXG4gICAgICAgIDIzLFxuICAgICAgICAxNTksXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjE5LFxuICAgICAgICA5MSxcbiAgICAgICAgNCxcbiAgICAgICAgMTkxLFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJLV1NKdXlBazV4OGdjdE9FRFdWMHJ2M21kUW1XR1l3eHd2K1IrbmFvVnc4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJSLVhQMWtlblF2MkdJSEhPZktUTlp3XCIsXG4gIFwicGhvbmVJZFwiOiBcImFlNjU4YmQ0LTc2MjEtNDViNS1hNzU1LTcxMDJlZDg5N2IwOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzMsXG4gICAgICA4MCxcbiAgICAgIDE2NyxcbiAgICAgIDMzLFxuICAgICAgMTA3LFxuICAgICAgMCxcbiAgICAgIDExMyxcbiAgICAgIDgxLFxuICAgICAgMTg2LFxuICAgICAgMjI0LFxuICAgICAgODIsXG4gICAgICA4NCxcbiAgICAgIDQ4LFxuICAgICAgNTYsXG4gICAgICAxNzMsXG4gICAgICAxMzYsXG4gICAgICAxODgsXG4gICAgICAxMjgsXG4gICAgICAxNjQsXG4gICAgICAyMzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA2LFxuICAgICAgMSxcbiAgICAgIDEwNSxcbiAgICAgIDYxLFxuICAgICAgMTYxLFxuICAgICAgMjMxLFxuICAgICAgNjgsXG4gICAgICAxMjcsXG4gICAgICA2NixcbiAgICAgIDIxNixcbiAgICAgIDE5NyxcbiAgICAgIDE4MixcbiAgICAgIDcwLFxuICAgICAgMjA2LFxuICAgICAgMjA3LFxuICAgICAgMTUxLFxuICAgICAgNTgsXG4gICAgICA3MCxcbiAgICAgIDkzLFxuICAgICAgMTM3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIllZR05NTDg4XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMjU0MTM5NDA5NzoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI4NjcyODc5NDc1MTA2NToyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01hVWxjRUNFT3ZyNTdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaCtYdWlXT29IQVJMRVM1RGVOTFpGcW5IU3ZPNkQ0Q3A2UDJjcnhEWXhYQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ5dmp4dnIrdkhkT2VORk9QQWRMSE4zdTl3NHBaT3M3cHVlOFJRdjhGaldMRUoxM0Uvc1hac2IvbGo1STAxQzFIMjlzY0V1NFQ3R3pXWklmRE5DUDNDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI3eVJ0eFRFNjAxMkJ0YXRYb3hZV3lmbnVOa20xT1BEV0VneGVNVXJkdDlVVkpxdmNmNERHR2xRUExwQVVGQjJUR1Y4OERaaE42bnlxdWdmenZJei9BZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMjU0MTM5NDA5NzoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDExMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMzY1OTk5XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ==",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
