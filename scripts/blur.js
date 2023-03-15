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
                ._8nE1Y ._2KKXC .vQ0w7
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
                ._8nE1Y ._2KKXC .vQ0w7
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
