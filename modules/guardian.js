const user = localStorage.getItem('user') || null


if(!user) {
    location.assign('/pages/signin/')
}