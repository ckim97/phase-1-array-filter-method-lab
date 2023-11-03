function findMatching(names, string) {
    const lowerString = string.toLowerCase();

    const newNames = names.filter(function (name) {
        const lowerName = name.toLowerCase();
        return lowerName === lowerString;
    });
    return newNames;
}

function fuzzyMatch(names, string) {
    const newNames = names.filter(function(name) {
        let stringLength = string.length;
        for (let i = 0; i < stringLength; i++) {
            return (name[i] === string[i]);
        };
    });
    return newNames;
}

function matchName(drivers, string) {
    const newDrivers = drivers.filter(function(driver) {
        for (let i = 0; i < drivers.length; i++) {
            return (driver["name"] ===  string);
        };
    });
    return newDrivers;
}
