const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="kingdavidtv2024@gmail.com"
global.location="Nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "West African Time";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348057627946";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923xxxxxxxx,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_51_07_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAzNixcbiAgICAgICAgMTk3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTMwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMixcbiAgICAgICAgNzAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDk2LFxuICAgICAgICA0MCxcbiAgICAgICAgODQsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI4LFxuICAgICAgICAzLFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5LFxuICAgICAgICAxODAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMixcbiAgICAgICAgNTgsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAzOCxcbiAgICAgICAgNTksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODMsXG4gICAgICAgIDI0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTI5LFxuICAgICAgICAzMyxcbiAgICAgICAgMjQyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDUzLFxuICAgICAgICA2LFxuICAgICAgICA4NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA1MixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNixcbiAgICAgICAgMjI2LFxuICAgICAgICA0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNCxcbiAgICAgICAgMzksXG4gICAgICAgIDE4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxODcsXG4gICAgICAgIDU1LFxuICAgICAgICA4MCxcbiAgICAgICAgOCxcbiAgICAgICAgODAsXG4gICAgICAgIDMyLFxuICAgICAgICAzMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgODEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNixcbiAgICAgICAgMTcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDIwLFxuICAgICAgICAzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDksXG4gICAgICAgIDgsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDgxLFxuICAgICAgICAyNixcbiAgICAgICAgMTk1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTcyLFxuICAgICAgICA2MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwLFxuICAgICAgICAzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTY2LFxuICAgICAgICA2NixcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjE1LFxuICAgICAgICA2NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA2MixcbiAgICAgICAgMjYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQxLFxuICAgICAgICA1NixcbiAgICAgICAgODIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDQsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDg2LFxuICAgICAgICAyMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDk1LFxuICAgICAgICA1OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxODMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTE2LFxuICAgICAgICA0MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTA4LFxuICAgICAgICA5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4NixcbiAgICAgICAgOTgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzksXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTkyLFxuICAgICAgICA2MSxcbiAgICAgICAgMjU1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTM3LFxuICAgICAgICA3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjcsXG4gICAgICAgIDUwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDY3LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQ4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm1qZzZpY3NHMllDRlFxOWNIZWVNelZ0bnJ5d2lOSHo3SlE2SktQQkM3dEk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkhFeTIzTXJaUzFHNzdzMzBqV1c0NVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDVhOTc4ODYtMjk5Ni00YzZmLWI4NGItYTU5OGIzNmZkNDU2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyNyxcbiAgICAgIDIyNCxcbiAgICAgIDE4LFxuICAgICAgMTM0LFxuICAgICAgMjUyLFxuICAgICAgNSxcbiAgICAgIDE1NSxcbiAgICAgIDIzNyxcbiAgICAgIDgyLFxuICAgICAgMTI1LFxuICAgICAgNTksXG4gICAgICA1LFxuICAgICAgMTA2LFxuICAgICAgMjQ3LFxuICAgICAgMzgsXG4gICAgICAxNDAsXG4gICAgICAxMzksXG4gICAgICAxMTYsXG4gICAgICAxODYsXG4gICAgICA3M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjMsXG4gICAgICAyNTIsXG4gICAgICAxOTEsXG4gICAgICAyMTgsXG4gICAgICA0OCxcbiAgICAgIDQ3LFxuICAgICAgMTYyLFxuICAgICAgMTYyLFxuICAgICAgMjA1LFxuICAgICAgMTQwLFxuICAgICAgMTQ4LFxuICAgICAgMjE0LFxuICAgICAgNDAsXG4gICAgICAxNCxcbiAgICAgIDEwNixcbiAgICAgIDE2MCxcbiAgICAgIDAsXG4gICAgICAxMTksXG4gICAgICA4OSxcbiAgICAgIDE4MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJKSERGOVY5OFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODA1NzYyNzk0NjozNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTQwMTQwOTI0MTM3NTQyOjM2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xMdG9QQUhFT0x4ZzdVR0dBVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwia1pqbVlMOUJ0T0kwcEZ5WHlzcE5VeGxhTlkwSlRNTVJHc1BTcDJTNk5pND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJDU2NmZWFUdW54dnZ6b3gvbHBmR08remhnemNvRDBUMzBxcTN5aklIZjhyT2hvcHlaaUZ6QUdaWTI3NkFCRFY4ckpiYUFEVjRCZ25uVnNna2txV0JCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJJV21VVmxPUjIvWXlxOXF1elgwK2JFRWk1bUtyd043SW9pY3RKQzJERHdHaWNnWjhGZnpSWHZ5SDBHY0M1VTVVcDYvUlNHeVhha1dmaVNzQmVkS0RBQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDU3NjI3OTQ2OjM2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDQ2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE4MjU1MTAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFOYjJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5iMi5qc29uIjogIntcImtleURhdGFcIjpcInJTZElKdUw3VHVwUS9INVdqelJteENMTVJ3UmJyRUwrSHJpODJ2bHZlMWc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjExNDQ2NzUwNSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "/",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "KING DAVID TV 📺 BOT 🤖",
  ownername:process.env.OWNER_NAME|| "King David",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "DKnmbToUJ7j5YzrsAT3wbtVJ",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-VMVcLcE9mHpaQbCaRSVDT3BlbkFJRZkEpkmQSKFHV4LjZ6g1",
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
