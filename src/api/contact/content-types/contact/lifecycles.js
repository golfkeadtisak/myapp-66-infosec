module.exports = {
   async beforeCreate(event) {
        // console.log('beforeSave ', event)
        event.params.data.mobile = btoa(event.params.data.mobile)
        event.params.data.cardId = btoa(event.params.data.cardId)
        event.params.data.line = btoa(event.params.data.line)
    },

    async afterFindOne(event) {
      event.result.mobile = atob(event.result.mobile)
   },

   async afterFindMany(event) {
      await event.result.map(item => {
            console.log('item ', item)
            item.mobile = atob(item.mobile)
            return item
      })
   },
};