export const routerNavigation = (navigation) => {
    // eslint-disable-next-line no-undef
    const nodeEnv = process.env.NODE_ENV
    const hostName = "BiddingApp"
    if (nodeEnv !== 'development') {
        return `/${hostName}${navigation}`
    }
    return navigation
}

