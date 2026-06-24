const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

const serviceAccount =
    require("../../edu-ai-project-a2851-firebase-adminsdk-fbsvc-25935618e0.json");

initializeApp({
    credential: cert(serviceAccount)
});

const db = getFirestore();

module.exports = db;