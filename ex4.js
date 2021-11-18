const storeService = (function (){

    const storeArr = []

    function loadData(url){
        fetch(url)
            .then(  response => response.json())
            .then(  data => {

                console.log(data)

            })
    }

    return {loadData}

})()