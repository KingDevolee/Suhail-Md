const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "true" ;  
global.video= "true" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="kingdavidtv2024@gmail.com"
global.location="Nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "true";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348057627946/";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923xxxxxxxx,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_02_05_07_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjIxLFxuICAgICAgICA2MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyLFxuICAgICAgICAxNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTksXG4gICAgICAgIDI3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMixcbiAgICAgICAgNTQsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyMixcbiAgICAgICAgNDksXG4gICAgICAgIDIzOCxcbiAgICAgICAgOCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDgxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTYzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTM2LFxuICAgICAgICA1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTksXG4gICAgICAgIDUxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjI0LFxuICAgICAgICA2MCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTksXG4gICAgICAgIDU2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDM2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEsXG4gICAgICAgIDExMCxcbiAgICAgICAgOTksXG4gICAgICAgIDYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjE4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDU2LFxuICAgICAgICA2MixcbiAgICAgICAgNDAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTI4LFxuICAgICAgICA0MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDQxLFxuICAgICAgICAxODgsXG4gICAgICAgIDYwLFxuICAgICAgICAyOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAxMTksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDc2LFxuICAgICAgICA5MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTksXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxODAsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNSxcbiAgICAgICAgMTgzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDI1LFxuICAgICAgICA1MSxcbiAgICAgICAgODMsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTczLFxuICAgICAgICA5NixcbiAgICAgICAgMixcbiAgICAgICAgNDcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTg2LFxuICAgICAgICA3NixcbiAgICAgICAgMTgsXG4gICAgICAgIDgxLFxuICAgICAgICAwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDU5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTEyLFxuICAgICAgICAyOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDM5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTY0LFxuICAgICAgICAzMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTgxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTYwLFxuICAgICAgICA0MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTksXG4gICAgICAgIDI4LFxuICAgICAgICAxMzksXG4gICAgICAgIDIxLFxuICAgICAgICAxODcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDY4LFxuICAgICAgICA4NyxcbiAgICAgICAgMyxcbiAgICAgICAgMTk4LFxuICAgICAgICA2NSxcbiAgICAgICAgODcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDU3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI5LFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZmJGcER2TzRLaWFvcjNrRUJPNGdUekNNalFzSTBUdHROYXhUSDNHVkY5Zz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSkd3OG55TExUbmF0S3dEQVlsbVdaQVwiLFxuICBcInBob25lSWRcIjogXCIwN2Y3ZDE3Ni03ZWFmLTQ1N2YtOGM2NS04ZWM1MDhkOWM0NjNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzksXG4gICAgICAxNDEsXG4gICAgICA4OCxcbiAgICAgIDE4MSxcbiAgICAgIDExMixcbiAgICAgIDYwLFxuICAgICAgMjM2LFxuICAgICAgMTE4LFxuICAgICAgMTQ1LFxuICAgICAgMTg0LFxuICAgICAgMjQ5LFxuICAgICAgMjAyLFxuICAgICAgMTU2LFxuICAgICAgMjI2LFxuICAgICAgMjksXG4gICAgICAxLFxuICAgICAgMTYsXG4gICAgICAyNixcbiAgICAgIDg1LFxuICAgICAgMjM3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4LFxuICAgICAgMTgxLFxuICAgICAgMTkyLFxuICAgICAgMSxcbiAgICAgIDk0LFxuICAgICAgMjM3LFxuICAgICAgMTI4LFxuICAgICAgMjAxLFxuICAgICAgMTY1LFxuICAgICAgMTIzLFxuICAgICAgNDYsXG4gICAgICAxMjAsXG4gICAgICA0OSxcbiAgICAgIDE2NixcbiAgICAgIDI0MyxcbiAgICAgIDEzMSxcbiAgICAgIDE1LFxuICAgICAgMTQwLFxuICAgICAgNixcbiAgICAgIDIxM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI5VEc1S0I5QlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODA1NzYyNzk0NjozNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTQwMTQwOTI0MTM3NTQyOjM1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xMdG9QQUhFTlg4OXJRR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwia1pqbVlMOUJ0T0kwcEZ5WHlzcE5VeGxhTlkwSlRNTVJHc1BTcDJTNk5pND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJxNEZWRjMrVUllVGxiL3FPclJiUnBsRmE4TGZLN1M4bFZOWFlIcWRTSHdpdlJwelpncHNyd3hyWVV2NmlLaTVVT28wSFh4OWtYK0x1NEZuWHhra1lDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIrRlBIeTdUZlpKNGJ0WGpqaFpMNTVRRXZkUDYzczR6ME5OOGNCcGlLWGRaLytSNzIrenk2QmhFVnVDSnl0YkRmV1RQVTdMRTdRZlJ0N0RIZmtIOW9DQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDU3NjI3OTQ2OjM1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDQ2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE2MTM5MTJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "King David +2348057627946",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "KING DAVID TV 📺 Bot🤖",
  ownername:process.env.OWNER_NAME|| "KING DAVID TV 📺",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "DKnmbToUJ7j5YzrsAT3wbtVJ",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-Ea9WuanufaqJp06U6yPtT3BlbkFJDPlIc2oWOsCGbDwR2ZIv",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
