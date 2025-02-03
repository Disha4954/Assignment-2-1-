const appointments = [];

const addAppointment = (clientName, appointmentTime, serviceType) => {
    try {
        if (!clientName) throw new Error("Client name is required.");
        const date = new Date(appointmentTime);
        if (isNaN(date)) throw new Error("Invalid date format.");
        
        appointments.push({ clientName, appointmentTime: date, serviceType });
    } catch (error) {
        console.error("Error adding appointment:", error.message);
    }
};

const getUpcomingAppointments = () => {
    const now = new Date();
    const oneHourLater = new Date(now.getTime() + 60 * 60 * 1000);
    return appointments.filter(appt => appt.appointmentTime > now && appt.appointmentTime <= oneHourLater);
};

const sendReminder = () => {
    const now = new Date();
    appointments.forEach(appt => {
        const timeUntilAppointment = appt.appointmentTime - now;
        if (timeUntilAppointment > 0) {
            setTimeout(() => {
                console.log(`Reminder: Your appointment for ${appt.serviceType} with ${appt.clientName} is scheduled at ${appt.appointmentTime}.`);
            }, timeUntilAppointment);
        }
    });
};

module.exports = { addAppointment, getUpcomingAppointments, sendReminder };