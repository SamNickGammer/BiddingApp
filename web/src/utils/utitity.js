import {VEHICLE_TYPE_MAP} from "./contants";

export const convertNumberToCurrencyFormat = (price) => {
    const numberPrice = Number(price);

    if (isNaN(numberPrice)) {
        throw new Error('Invalid input: price must be a number');
    }

    const formatter = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 0,
    });

    return formatter.format(numberPrice);
}

export const getUniqueVehicleTypes = (vehicleDetails) => {
    const uniqueTypes = new Set(vehicleDetails.map(vehicle => vehicle.typeOfVehicle));
    const mappedTypes = Array.from(uniqueTypes)
        .map(type => VEHICLE_TYPE_MAP[type])
        .filter(mappedType => mappedType); // Filter out undefined or null mappings

    return mappedTypes.join('/');
}

export const formatDateAndTime = (startDateStr, endDateStr) => {
    const formatDate = (dateStr) => {
        const date = new Date(dateStr);

        const formattedDate = date.toLocaleDateString('en-GB');

        const hours = date.getHours();
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const period = hours >= 12 ? 'PM' : 'AM';
        const formattedTime = `${hours % 12 || 12}:${minutes} ${period}`;

        return {date: formattedDate, time: formattedTime};
    };

    const startDate = formatDate(startDateStr);
    const endDate = formatDate(endDateStr);

    return {
        startDate: startDate.date,
        startTime: startDate.time,
        endDate: endDate.date,
        endTime: endDate.time,
    };
};