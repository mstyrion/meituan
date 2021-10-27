import vue from 'vue'
const userInfo = 'mt-username'

export function getInfo() {
    // return localStorage.getItem(userInfo)
    return vue.$cookies.get(userInfo)
}

export function setInfo(username) {
    // return localStorage.setItem(userInfo, username)
    return vue.$cookies.set(userInfo, username)
}

export function removeInfo() {
    // return localStorage.removeItem(userInfo)
    return vue.$cookies.remove(userInfo)
}