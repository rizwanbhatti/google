const supabaseUrl = "https://gjbohzyvfjjmdvbhqoma.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdqYm9oenl2ZmpqbWR2Ymhxb21hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA0OTA1MzMsImV4cCI6MjA2NjA2NjUzM30.IHzRdh6NtXZERILB484yO2w06rBajdw8oHBPPfiopeM";
const client = supabase.createClient(supabaseUrl, supabaseKey);

// console.log(client);

// let email = document.getElementById("c-email");
// let password = document.getElementById("c-pass");

// async function signIn() {
//   const { data, error } = await client.auth.signUp({
//     email: email.value,
//     password: password.value,
//   });
//   if (error) {
//     alert("account is not creat", error.message);
//   } else {
//     alert("login plz verfied email");
//   }
// }




// async function login(){

// const { data, error } = await client.auth.signInWithPassword({
//   email: email.value,
//   password: password.value,
// })

// if(error){
//     alert('error'+error.message)
// }else{
//     alert('data', data)
//     window.location.href =`dashboard.html`

// }


// }




// async function logout(){
//     const { error } = await client.auth.signOut()

// window.location.href= `index.html`

// }




async function google() {
  const { data, error } = await client.auth.signInWithOAuth({
  provider: 'google',
  options: {
    redirectTo: 'https://github.com/rizwanbhatti/google/dashboard.html'
  }
})

if(error){
  console.log('Error'+ error.message);
  
}
else{
  console.log("Data", data);
  
}

}
