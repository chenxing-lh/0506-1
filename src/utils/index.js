const routeTo = function(router){
	if(!router.href) return
	if(router.newWindow){
		if(router.urlType === 1){
			const url = this.$router.resolve({ path: router.href, query: router.query })
			window.open(url.href, '_blank')
			
		}else {
			window.open(router.href, '_blank')
		}
	}else {
		if(router.urlType === 2){
			window.open(router.href, '_self')
		}else {
			this.$router.push({ path: router.href, query: router.query })
		}
	}
}

export default {
	routeTo
}