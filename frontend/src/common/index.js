const BackendDomain = "http://localhost:8080"; 

const summaryApi = {
    signUp: {
        url: `${BackendDomain}/api/signup`,
        method: "POST"  
    }
};

export default summaryApi;
