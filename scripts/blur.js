const [blurButton, unblurButton] = document.querySelectorAll('button')

blurButton.addEventListener('click', blurWa)
unblurButton.addEventListener('click', unblurWa)

async function blurWa() {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })

    if (tab.url.indexOf('web.whatsapp.com') !== -1) {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: () => {
                const blurCss = `
                #pane-side ._37FrU ._1qB8f,
                ._3Bc7H.g0rxnol2.thghmljt.p357zi0d.rjo8vgbg.ggj6brxn.f8m0rgwh.gfz4du6o.ag5g9lrv.bs7a17vp.ov67bkzj ._3uIPm.WYyr1 ._37FrU ._1qB8f
                {
                    filter: blur(8px);
                }`
                const head = document.head || document.getElementsByTagName('head')[0]
                const style = document.createElement('style')
                head.appendChild(style)
                style.type = 'text/css'

                if (style.styleSheet){
                    style.styleSheet.cssText = blurCss
                } else {
                    style.appendChild(document.createTextNode(blurCss))
                }
            },
        })
    }
}

async function unblurWa() {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })

    if (tab.url.indexOf('web.whatsapp.com') !== -1) {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: () => {
                const blurCss = `
                #pane-side ._37FrU ._1qB8f,
                ._3Bc7H.g0rxnol2.thghmljt.p357zi0d.rjo8vgbg.ggj6brxn.f8m0rgwh.gfz4du6o.ag5g9lrv.bs7a17vp.ov67bkzj ._3uIPm.WYyr1 ._37FrU ._1qB8f
                {
                    filter: blur(0px);
                }`
                const head = document.head || document.getElementsByTagName('head')[0]
                const style = document.createElement('style')
                head.appendChild(style)
                style.type = 'text/css'

                if (style.styleSheet){
                    style.styleSheet.cssText = blurCss
                } else {
                    style.appendChild(document.createTextNode(blurCss))
                }
            },
        })
    }
}