import { defaultTheme } from "vuepress"
export default {
    base:'/genshin-ics/',
    title:'Genshin-ics',
    evergreen:'true',
    head: [
        [ 'link' , { rel: 'icon' , href: '/assets/img/paimon-shock.png' } ]
    ],
    theme: defaultTheme({
        logo:'/assets/img/paimon-shock.png',
        locales:{
            colorMode:'auto',
            colorModeSwitch:'false',
            repo:'AkarinLiu/genshin-ics',
            // English site
            '/':{
                home:'/',
                lang:'en-US',
                description:'A Genshin impact character birthday Calendar',
                selectText:'Languages',
                label:'English | (en-US)',
                ariaLabel:'Languages',
                editLinkText:'Edit this page on GitHub',
                serviceWorker:{
                    updatePopup:'A new content update has been detected.',
                    buttonText:'Refresh Now!'
                },
                navbar:[
                    {
                        text: 'GitHub',
                        link: 'https://github.com/AkarinLiu/genshin-ics'
                    },
                    {
                        text: 'Languages',
                        children:[
                            {
                                text:'English | (en-US)',
                                link:'/'
                            },
                            {
                                text:'简体中文 | (zh-CN)',
                                link:'/zh-cn/'
                            },
                            {
                                text:'繁體中文 | (zh-TW)',
                                link:'/zh-tw/'
                            }
                        ]
                    }
                ],
            },
             // 简体中文网站
            '/zh-cn/':{
                home:'/zh-cn/',
                lang:'zh-CN',
                description:'一个原神生日日历',
                selectText:'语言',
                label:'简体中文 | (zh-CN)',
                ariaLabel:'语言',
                editLinkText:'在GitHub编辑此页',
                serviceWorker:{
                    updatePopup:'检测到有新内容更新。',
                    buttonText:'立即刷新！'  
                },
                navbar:[
                    {
                        text: 'GitHub',
                        link: 'https://github.com/AkarinLiu/genshin-ics'
                    },
                    {
                        text: 'Languages',
                        children:[
                            {
                                text:'English | (en-US)',
                                link:'/'
                            },
                            {
                                text:'简体中文 | (zh-CN)',
                                link:'/zh-cn/'
                            },
                            {
                                text:'繁體中文 | (zh-TW)',
                                link:'/zh-tw/'
                            }
                        ]
                    }
                ],
            },
            // 繁体中文网站
            '/zh-tw/':{
                home:'/zh-tw/',
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
                navbar:[
                    {
                        text: 'GitHub',
                        link: 'https://github.com/AkarinLiu/genshin-ics'
                    },
                    {
                        text: 'Languages',
                        children:[
                            {
                                text:'English | (en-US)',
                                link:'/'
                            },
                            {
                                text:'简体中文 | (zh-CN)',
                                link:'/zh-cn/'
                            },
                            {
                                text:'繁體中文 | (zh-TW)',
                                link:'/zh-tw/'
                            }
                        ]
                    }
                ],
            }
        },
    })

}