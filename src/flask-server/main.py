from ics import Calendar
import requests
from datetime import datetime, date, timedelta
import numpy as np

DISPLAY_WEEK = 1
START_TIME = 8.0  # 8AM
END_TIME = 20.0  # 8PM

# TEST DATA / RECOMMENDED FORMAT
# This is what will be sent to the react frontend
# - It's a list of weeks,
# - "0" - "4" represents Monday - Friday
# - each day contains a list of time blocks
weeks = [
    {
        "date": "2024-04-22",
        "days": {
            "0": [
                {
                    "start": "3:00",
                    "end":  "6:00",
                },
                {
                    "start": "11:00",
                    "end":  "12:00",
                }
            ],
            "1": [
                {
                    "start": "3:00",
                    "end":  "6:00",
                },
                {
                    "start": "11:00",
                    "end":  "12:00",
                }
            ],
            "2": [
                {
                    "start": "3:00",
                    "end":  "6:00",
                },
                {
                    "start": "11:00",
                    "end":  "12:00",
                },
                {
                    "start": "13:00",
                    "end":  "15:00",
                }
            ],
            "3": [
                {
                    "start": "3:00",
                    "end":  "6:00",
                },
                {
                    "start": "11:00",
                    "end":  "12:00",
                }
            ],
            "4": [
                {
                    "start": "3:00",
                    "end":  "6:00",
                }
            ]
        }
    },
    {
        "date": "2024-04-22",
        "days": {
            "0": [
                {
                    "start": "3:00",
                    "end":  "6:00",
                },
                {
                    "start": "11:00",
                    "end":  "12:00",
                }
            ],
            "1": [
                {
                    "start": "3:00",
                    "end":  "6:00",
                },
                {
                    "start": "11:00",
                    "end":  "12:00",
                }
            ],
            "2": [
                {
                    "start": "3:00",
                    "end":  "6:00",
                },
                {
                    "start": "11:00",
                    "end":  "12:00",
                },
                {
                    "start": "13:00",
                    "end":  "15:00",
                }
            ],
            "3": [
                {
                    "start": "3:00",
                    "end":  "6:00",
                },
                {
                    "start": "11:00",
                    "end":  "12:00",
                }
            ],
            "4": [
                {
                    "start": "3:00",
                    "end":  "6:00",
                }
            ]
        }
    },
]


# iso format: YYYY-MM-DD"T"hh:mm:ss"+"{UTC-zone}
def get_date(isoTime):
    dateList = isoTime.split("T")[0].split("-")
    return [int(dates) for dates in dateList]


def get_time(isoTime):
    utcTime = isoTime.split("T")[1]
    timeList = utcTime.split("+")[0].split(":")
    # get hour and minute in float
    return float(timeList[0]) + float(timeList[1]) / 60


def merge_timeblock(timetableList) -> list:
    # Output the block of time they are in classes
    mergedTimeblock = set(
        [
            num
            for index, num in enumerate(timetableList)
            if index > 0 and num == timetableList[index - 1]
        ]
    )
    mergedTimeblock = sorted(list(set(timetableList) - mergedTimeblock))
    mergedIncrementTimeblock = []
    for index, element in enumerate(mergedTimeblock):
        if index % 2 == 0:
            for num in range(
                int((mergedTimeblock[index + 1] - mergedTimeblock[index]) / 0.5) + 1
            ):
                if num == int(
                    (mergedTimeblock[index + 1] - mergedTimeblock[index]) * 2
                ):
                    pass
                else:
                    mergedIncrementTimeblock.append(mergedTimeblock[index] + num / 2)
    return mergedIncrementTimeblock


def find_freeblock(mergedTimeblock):
    validTimeDoubled = list(range(2 * int(START_TIME), 2 * int(END_TIME), 1))
    validTime = list(np.divide(validTimeDoubled, 2))
    freeblockList = [time for time in validTime if time not in mergedTimeblock]
    return freeblockList

def main(url1, url2):
    #link from allocate+
    cal = Calendar(requests.get(url1).text)
    cal2 = Calendar(requests.get(url2).text)

    person_a = get_calendar(cal)
    person_b = get_calendar(cal2)

def get_calendar(cal):
    lastDate = None
    freetimeList = []
    testDictionary = {}
    tempList = []
    currentDate = date.today()
    boundaryDate = currentDate + timedelta(days=7*DISPLAY_WEEK)

    for event in list(cal.timeline):
        eventBeginDateList = get_date(str(event.begin))
        eventBeginDate = date(eventBeginDateList[0],
                            eventBeginDateList[1],
                            eventBeginDateList[2])

        # if lastDate == None:
        #     lastDate = str(eventBeginDate)

        BeginTimeFloat = get_time(str(event.begin))
        EndTimeFloat = get_time(str(event.end))
        # ignore the past dates
        if eventBeginDate < currentDate:
            continue
        # also ignore the dates more the set week
        if eventBeginDate > boundaryDate:
            break

        if not(lastDate is None) and str(eventBeginDate) != lastDate:
           freetimeList.append((lastDate2,find_freeblock(merge_timeblock(tempList))))
           tempList = []

        lastDate = str(eventBeginDate)
        lastDate2 = eventBeginDate
        tempList.append(BeginTimeFloat)
        tempList.append(EndTimeFloat)

    freetimeList.append((lastDate2,find_freeblock(merge_timeblock(tempList))))
    return freetimeList

def standardising(freetime:list,date_list:list):
    """This functions aim to create a dictionary with 
    dates as the keys and 
    the free time available as the values

    Args:
        freetime (list): A nested list of dates and the times that you are free to hang out
    """
    DISPLAY_WEEK = 1
    values = [None for x in range(len(date_list))]

    test_dict = {k:v for (k,v) in zip(date_list,values)}

    for elements in freetime:
        test_dict[elements[0].weekday()] = elements[1]
    
    return test_dict

def comparison(person_a:dict,student_b:dict,period:list):
    for date in period:
        if person_a[date] != None and student_b[date] != None:
            final = set(person_a[date]).intersection(set(student_b[date]))
            print(f"On this date: ({date}) you both are available during these times \n {final}")
# # Testing
# print(main("https://my-timetable.monash.edu/even/rest/calendar/ical/9cf97753-fcd9-4634-871d-de828696900e"))

if __name__ == "__main__":
    url1 = "https://my-timetable.monash.edu/even/rest/calendar/ical/9cf97753-fcd9-4634-871d-de828696900e"
    url2 = "https://my-timetable.monash.edu/even/rest/calendar/ical/570d3a7c-5a14-4199-9b85-c906dda749e1"
    main(url1,url2)
