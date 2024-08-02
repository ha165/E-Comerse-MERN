const BackendDomain = "http://localhost:8080"; 

const summaryApi = {
    signUP: {
        url: `${BackendDomain}/api/signup`,
        method: "POST"  
    }
};

export default summaryApi;
