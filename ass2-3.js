const studySessions = []

function addSession(topic, sessionTime, duration) {
    try {
        if (!topic || !sessionTime || !duration) {
            console.log("All fields are required...")
        }

        studySessions.push({ topic, sessionTime, duration })
        console.log('Session added successfully:', { topic, sessionTime, duration });
    } catch (err) {
        console.log(err)
    }
}

function listTodaysSessions() {
    const today = new Date();
    const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const endOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);

    return studySessions.filter(
        (session) => session.sessionTime >= startOfDay && session.sessionTime < endOfDay
    );
}


function sessionCountdown(topic, countdownTime) {
    setTimeout(() => {
        console.log(`Session on [${topic}] starts now!`);
    }, countdownTime);
}

async function fetchStudyMaterials(topic) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.3) {
                resolve(`Study materials for [${topic}] fetched successfully!`);
            } else {
                reject(new Error(`Failed to fetch study materials for [${topic}].`));
            }
        }, 2000);
    })
        .then((message) => console.log(message))
        .catch((error) => console.error(error.message));
}

module.exports = {
    addSession,
    listTodaysSessions,
    sessionCountdown,
    fetchStudyMaterials,
}