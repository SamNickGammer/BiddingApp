JG.repeat(20, {
    id: JG.objectId(),
    createdAt: JG.date(new Date(2010, 0, 1), new Date(2015, 0, 1)),
    updatedAt() {
        return moment(this.createdAt).add(1, 'days');
    },
    eventName() {
        return `${this.locationOfEvent.state} ${JG.company()}`;
    },
    locationOfEvent: {
        address: `${JG.integer(1, 100)} ${JG.street()}`,
        city: JG.city(),
        state: JG.state(),
        pinCode: JG.integer(100000, 999999),
    },
    vehicleDetails: JG.repeat(JG.integer(1, 5), {
        id: JG.objectId(),
        typeOfVehicle: JG.random('two-wheeler', 'three-wheeler', 'four-wheeler'),
        name: JG.firstName(),
        mileage: `${JG.integer(10, 50)}km/l`,
        loanAccountNumber: "KA3025TW30502",
        registeredOwner: `${JG.firstName()} ${JG.lastName()}`,
        regNumber: "KA20EG5659",
        yearOfRegistration: 2014,
        yardName: "INTACT AUTOPARC INDIA PVT LTD",
        engineNo: "0G3DE2309814",
        chasisNo: "MD626BG32E2D37828",
        fuelType: "Petrol",
        color: JG.random('Black', 'Blue', 'White', 'Silver'),
        parkingAddress: {
            address: `${JG.integer(1, 100)} ${JG.street()}`,
            nearBy: JG.street(),
            city: JG.city(),
            state: JG.state(),
            pinCode: JG.integer(100000, 999999)
        }
    }),
    startDateTime: "2024-06-07T10:31:11.238Z",
    endDateTime: "2024-06-07T12:31:11.238Z",
    startPrice: JG.integer(10000, 99999),
    bidIncrease: JG.integer(100, 999)
});
