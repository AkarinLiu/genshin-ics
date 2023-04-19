module.exports = {
    base:'/genshin-ics/',
    title:'Genshin-ics',
    evergreen:'true',
    head: [
        [ 'link' , { rel: 'icon' , href: '/assets/img/paimon-shock.png' } ]
    ],
    themeConfig:{
        logo:'/assets/img/paimon-shock.png',
        locales:{
            // English site
            '/':{
                lang:'en-US',
                description:'A Genshin impact character birthday Calendar',
                selectText:'Languages',
                label:'English|(en-US)',
                ariaLabel:'Languages',
                editLinkText:'Edit this page on GitHub',
                serviceWorker:{
                    updatePopup:'A new content update has been detected.',
                    buttonText:'Refresh Now!'
                },
                nav:[
                    {text:'GitHub',link:'https://github.com/AkarinLiu/genshin-ics'},
                    {
                        text:'Languages',
                        ariaLabel:'Language Menu',
                        items:[
                            {text:'English',link:'/'},
                            {text:'简体中文',link:'/zh-cn/'},
                            {text:'繁體中文',link:'/zh-tw/'}
                        ]
                    },
                ]
            },
             // 简体中文网站
            '/zh-cn/':{
                lang:'zh-CN',
                description:'一个原神生日日历',
                selectText:'语言',
                label:'简体中文|(zh-CN)',
                ariaLabel:'语言',
                editLinkText:'在GitHub编辑此页',
                serviceWorker:{
                    updatePopup:'检测到有新内容更新。',
                    buttonText:'立即刷新！'
                },
                nav:[
                    {text:'GitHub',link:'https://github.com/AkarinLiu/genshin-ics'},
                    {
                        text:'语言',
                        ariaLabel:'语言菜单',
                        items:[
                            {text:'English',link:'/'},
                            {text:'简体中文',link:'/zh-cn/'},
                            {text:'繁體中文',link:'/zh-tw/'}
                        ]
                    },
                ]
            },
            // 中文繁体网站
            '/zh-tw/':{
                lang:'zh-TW',
                description:'一個原神角色生日日曆',
                selectText:'語言', 
                label:'繁體中文| (zh-TW)',  
                ariaLabel:'語言', 
                editLinkText:'在GitHub編輯此頁',
                 serviceWorker:{ 
                     updatePopup:'檢測到有新內容更新。', 
                     buttonText:'立即重新整理!' 
                    },
                    nav:[
                        {text:'GitHub',link:'https://github.com/AkarinLiu/genshin-ics'},
                        {
                            text:'語言',
                            ariaLabel:'語言菜單',
                            items:[
                                {text:'English',link:'/'},
                                {text:'简体中文',link:'/zh-cn/'},
                                {text:'繁體中文',link:'/zh-tw/'}
                            ]
                        },
                    ]
            }

        },

    },
}