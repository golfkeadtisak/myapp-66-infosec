module.exports = {
    ...
    async afterFindMany(event) {
       await event.result.map(item => {
             console.log('item ', item)
             item.mobile = atob(item.mobile)
             return item
       })
    },
 };