module.exports = {
    async beforeCreate(event) {
        console.log('beforeSave ', event)
        // event.params.data.mobile = 'xyzaaaaaaa'
        event.params.data.mobile = btoa(event.params.data.mobile)
        
    }
}