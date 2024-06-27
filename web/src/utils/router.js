export const routerNavigation = (navigation) => {
    const nodeEnv = process.env.NODE_ENV
    const hostName = "BiddingApp"
    // console.log('RouterNavigation', navigation, process.env.NODE_ENV);
    if (nodeEnv !== 'development') {
        return `/${hostName}${navigation}`
    }
    return navigation
}

