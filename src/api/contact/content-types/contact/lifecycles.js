module.exports = {
   async beforeCreate(event) {
       // console.log('beforeSave ', event)
       event.params.data.mobile = btoa(event.params.data.mobile)
       event.params.data.cardId = btoa(event.params.data.cardId)
       event.params.data.line = btoa(event.params.data.line)
   },

   async afterFindOne(event){
        //console.log(event)
        if(!event.result) return
        event.params.data.mobile = atob(event.result.data.mobile)
        event.params.data.cardId = atob(event.result.data.cardId)
        event.params.data.line = atob(event.result.data.line)
   },

   async afterFindMany(event){
     //console.log(event)
     if(!event.result) return
     await event.result.forEach(item => {
        item.mobile = atob(item.mobile)
        item.cardId = atob(item.cardId)
        item.line =   atob(item.line)
     });
  },
   async beforeUpdate(event){
        //console.log(event)
        if(!event.params.data.mobile && !event.params.data.cardId && !event.params.data.line) return
        event.params.data.mobile = btoa(event.params.data.mobile)
        event.params.data.cardId = btoa(event.params.data.cardId)
        event.params.data.line = btoa(event.params.data.line)
     },

}