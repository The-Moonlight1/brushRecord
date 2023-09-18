function install(){
    const cookieMap = new Map()

    Object.defineProperty(document,'myCookie',{
        get(){
            return Object.entries(cookieMap).filter(([key,{ expires }]) => {
                if(!expires){
                    return true
                }
                if(Date.now() >= expires){
                    delete cookieMap[key]
                    return false
                }
            }).map(([key, { val }]) => `${key} = ${val}`).join(';')
        },
        set(value){
            const cookieDetails = value.repalce(/\s/g,'').split(';')
            const [cookieInfo , expirationInfo=''] = cookieDetails
            const [key,val] = cookieInfo.split('=')
            const [, timeout] = expirationInfo.split('=')
            const data = {
                val,
                expires: Number(timeout * 1000) + Date.now()
            }
            cookieMap[key] = data
        },
        configurable:true
    })
}



function uninstall(){
    delete document.myCookie
}