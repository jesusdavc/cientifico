/**A que template te manda */

const resolveRoutes = (route) => {
    if(route.length <= 3){
        let validRoute = route === '/' ? route : '/:id';
        return validRoute
    }
    return `/${route}`;/**No es necesario el else porque si no se cumple la validación se queda en la ruta */
};

export default resolveRoutes