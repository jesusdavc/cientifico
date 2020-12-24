const getHash = () => 
    location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/'; /** Se buscan las rutas */

    export default getHash