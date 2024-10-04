
# Car Management Tool Roadmap

> [!CAUTION]
> This project had modifications in terms of configuration due to the use of Linux, instead of Windows. Please verify on your side before clone and use.

---- Epics ----
## New Car Management Tool - The MVP (High)
Acceptance Criteria
- The solution presents a list of the complete CTW car pool;
- The tool allows the user to filter by the desired timeslot, to check which vehicles are available for booking;
- The tool shows the car details to the user;
- It is possible to check reservation history (timeslots reserved and drivers);
- The admin user can add and remove cars to the car poll, keeping the fleet up to date.

## Reservation Restrictions (Medium)
Acceptance Criteria
- A car cannot be reserved for more than 4 days.
- There should be at least one hour interval between reservation:
- The pickup date should be at least one hour after the previous reservation.
- The drop-off date should be at least one hour before the next reservation.
- Weekend reservation only from Friday 20:00 till Monday 08:00.

---- Backlog ----
## Add Engine Type to car information (High / User) 
✅ Acceptance Criteria
- List of cars provides the info on engine type of each car.

## Check Car details (High / User)
✅ Acceptance Criteria
- Clicking on "View" button, a new screen is opened;
- The following details are listed:
- brand;
- model;
[?] - seats;
[?] - license plate;
- engine type
    BEV, // Electric
    PHEV, // Plugin hybrid
    GASOLINE, // ICE/Gasoline
    DIESEL; // ICE/Diesel
[?] - autonomy;
[?] - color
[?] - Image. (? - Photo)

>[!NOTE]
> The following details identified with [?] are not required for MVP, but are important for the user experience. Plus, there's code behind but not implemented yet (commented).

## Add new cars (High / Admin)
✅ Acceptance Criteria
- 'Add New Car' button is available on top of the page; (? - You mean create new car)
- Clicking on the button, a form is oppened to fill the new car information;
- A save button is available to confirm the submission;
[?] - If the new car is added with success, a success pop up shows up;
[?] - If an error occurs, an error pop up shows up;
- The carpool list is updated successfully.

## Remove cars (High / Admin)
✅ Acceptance Criteria
- Remove car button is available on each car from the list;
[?] - If the new car is removed with success, a success pop up shows up;
[?] - If an error occurs, an error pop up shows up;
- The carpool list is updated successfully.

## Edit car information (High / Admin)
✅ Acceptance Criteria
- 'Edit' button is available on each car from the list;
- Clicking on the button, a form is oppened to edit the car information;
[?] - A save button is available to confirm the edition;
[?] - If the changes are saved with with success, a success pop up shows up;
[?] - If an error occurs, an error pop up shows up;
- The carpool list is updated successfully.

## Check and book available cars (High / User)
Acceptance Criteria
[?] - It is possible to select the desired  pick up and to drop off date/time;
[?] - The date/time to pick up needs to be the same as the current date or in the future; 
[?] - A search button is available to execute the search;
- Unavailable cars are inactive;
- Available cars are active and available to reserve;
- A 'Reserve' button is available;
- After clicking in the reserve button, a form to fill the driver's information is presented with the fields:
    - name;
    - contact;
    - license number.
- After confirmation, the reservation is concluded.
- If the reservation is concluded with success, a success pop up shows up;
- If an error occurs, an error pop up shows up.

## Car's Booking history (High / User)
[?] Acceptance Criteria
- It is possible to select pick up and drop off date/time;
- After executing the search, when a car is selected, the list of reservations for that time slot can be consulted;
- All reservations are identified by pick up and drop off date/time and the driver's name;
- If the car has no reservations for the time slot, the list is empty.

## Limit reservation periods (Medium / Admin)
Acceptance Criteria
- When applying the date filters, once the client clicks on the pick up date, only the next four days are available to drop off;
- Only friday 20:00 reservations can be extended through the weekend, with mandatory drop off on monday 8:00.

## Limit time between reservations (Medium / Admin)
Acceptance Criteria
- Two reservations need to be separated for, at least, one hour:
    - The pick up date/time needs to be, at least, one hour after the previous reservation;
    - The drop off date/time needs to be, at least one hour before the last reservation.