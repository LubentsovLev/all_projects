function urlGenerator (domain) {  
    return function (url) {  
        return `http://${url}.${domain}`
    }
}
const comF = urlGenerator('com')
const ruF = urlGenerator('ru')

console.log(comF("google"));