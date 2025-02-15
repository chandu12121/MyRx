function minPlatforms(arr, dep) {
    const convertToMinutes = (time) => {
        let [hours, minutes] = time.split(":").map(Number);
        return hours * 60 + minutes;
    };

    let arrivals = arr.map(convertToMinutes).sort((a, b) => a - b);
    let departures = dep.map(convertToMinutes).sort((a, b) => a - b);

    let i = 0, j = 0, platforms = 0, maxPlatforms = 0;

    while (i < arrivals.length) {
        if (arrivals[i] < departures[j]) {
            platforms++; 
            maxPlatforms = Math.max(maxPlatforms, platforms);
            i++;
        } else {
            platforms--; 
            j++;
        }
    }

    return maxPlatforms;
}


module.exports=minPlatforms


