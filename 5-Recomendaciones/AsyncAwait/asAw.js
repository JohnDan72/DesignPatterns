
const f = () => {
    // callback hell
    ajax(() => {
        ajax(() => {
            ajax(() => {

            })
        })
    })
}

const fn1 = () => {
    ajax()
    .then(() => {
        return ajax()
    })
    .then(() => {
        return ajax()
    })
    .then(() => {
        return ajax()
    })
}

// async y await

const fn3 = async () => {
    const res = await ajax();
    const data = await res.json();
}