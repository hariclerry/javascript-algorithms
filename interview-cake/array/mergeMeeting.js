const meetings = [
    { startTime: 0, endTime: 1 },
    { startTime: 3, endTime: 5 },
    { startTime: 4, endTime: 8 },
    { startTime: 10, endTime: 12 },
    { startTime: 9, endTime: 10 },
]

/* [
    { startTime: 0, endTime: 1 },
    { startTime: 3, endTime: 8 },
    { startTime: 9, endTime: 12 },
] */

const mergeRanges = (arr) => {
    const newMeetingRange = [];
    const newMeetingRange2 = [];

    arr.forEach(element => {
        newMeetingRange.push(element.startTime)
        newMeetingRange2.push(element.endTime)
    });

    console.log("heteeeeee", newMeetingRange)
    console.log("heteeeeee", newMeetingRange2)
}

mergeRanges(meetings)