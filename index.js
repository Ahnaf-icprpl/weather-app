

async function fetchUserData() {
    const url = 'https://api.bmkg.go.id/publik/prakiraan-cuaca?adm4=31.71.03.1001';  
    const response = await fetch(url);
    const data = await response.json();

    const locationName = data.data;

    return locationName;
    
}

console.log(await fetchUserData());
