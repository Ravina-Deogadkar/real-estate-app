const env = "local";
const hostURL = {
	"local": "http://localhost:8030"
}



const config= {"HostURL" : hostURL[env]};

export default config;