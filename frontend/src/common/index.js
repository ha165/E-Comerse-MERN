const BackendDomain = "http://localhost:8080";

const summaryApi = {
    signUP: {
        url: `${BackendDomain}/api/signup`,
        method: "POST"
    },
    signIn: {
        url: `${BackendDomain}/api/signin`,
        method: "POST"
    },
    current_user : {
        url : `${BackendDomain}/api/user-details`,
        method : "GET"
    }
};

export default summaryApi;
