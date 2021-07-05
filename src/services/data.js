export default class Data{
	static async SignUpFetch(username , password){
		let res = await fetch('http://192.168.0.102:8080/users/sign_up', {
			method: "POST",
			headers:{
				"Content-Type":"application/json",
			},
			body:JSON.stringify({
				username , password
			})
		})
		res = await res.json()
		return res
	}
}