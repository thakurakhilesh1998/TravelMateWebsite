export function onCreate()
{
document.getElementById('submit').addEventListener('click',onCreateTrip);
function onCreateTrip()
{
    const place=document.getElementById('placetogo').value;
    const date=document.getElementById('dateid').value;
    if(place=='')
    {
        document.getElementById('placetogo').style.cssText="border:1px solid red";
        document.getElementById('nameerror').innerHTML="enter name";
    }
    if(date=='')
    {
        document.getElementById('dateid').style.cssText="border:1px solid red";
        document.getElementById('dateerror').innerHTML="select appropriate date";
    }
   if(! isDateValid(date))
   {
    document.getElementById('dateid').style.cssText="border:1px solid red";
    document.getElementById('dateerror').innerHTML="select appropriate date";
   } 
   else {
    callGeoNameApi(place,date);
   }
}
}
function isDateValid(date1)
{
    let d = new Date();
    let date=new Date(date1);
    if(date<d)
    {
    return false;
    }
    return true;
}
 function callGeoNameApi(place,date)
{
    const baseUrl="http://api.geonames.org/geoCodeAddressJSON?q=";
    const username="thakurakhilesh20";
    fetchLatLang(place,baseUrl,username).then(function(data){
        const baseUrl="https://api.weatherbit.io/v2.0/forecast/daily?";
        const keyweatherapi='6c2d162ed1bc4892a05bd8aea23809f1';

        getWeatherData(baseUrl,keyweatherapi,data,date).then(function(wdata)
        {
            postDataToServer('http://localhost:3000/weatherdata',{weather:wdata,dateT:date,cityname:place}).then(
                function(serverData)
                {
                    getDataFromServer('http://localhost:3000/getWeather').then(function(getData)
                    {
                        updateUI(getData);
                    });
                }
            );
        });
    });
}

const fetchLatLang=async (place,baseUrl,username)=>
{
    let coord={
        lang:'',
        lat:'',
    };
    const response=await fetch(`${baseUrl}${place}&username=${username}`);
    try{
    const data=await response.json();
    coord['lng']=data['address']['lng'];
    coord['lat']=data['address']['lat'];
    return coord;}
    catch(error)
    {
        document.getElementById('placetogo').style.cssText="border:1px solid red";
        document.getElementById('nameerror').innerHTML="Sorry the service is not for your city";
    }  
}

/* Post data to the server */
const postDataToServer=async(baseUrl='',data={})=>
{
    const response=await fetch(baseUrl,{
        method:'POST',
        credentials:'same-origin',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(data),
    });
    try{
        const newData=await response.json();
        return newData;
    }
    catch(error)
    {
        console.log("error:"+error);
    }
}

//To fetch data from the weather api

const getWeatherData=async(baseUrl,key,data,date)=>
{
    const response=await fetch(`${baseUrl}lat=${data['lat']}&lon=${data['lng']}&key=${key}`);
    try{
        const dataWeather=await response.json();
        console.log(dataWeather);
        return dataWeather;
    }
    catch(error)
    {
        console.log(error);
    }
}

//To get the data saved on the server

const getDataFromServer=async (baseurl)=>
{
    const weatherdata=await fetch(baseurl);
    try{
        const getData=weatherdata.json();
        return getData;
    }
    catch(error)
    {
        console.log("server error"+error);
    }
}
function updateUI(getData)
{
    const pixaUrl="https://pixabay.com/api/?key=";
    const key='15959347-7d3d7d018d3cef11e12315e8d';
    getPixaBayImages(pixaUrl,key,getData);
    
}

const getPixaBayImages=async (url,key,getData)=>
{
    const length=getData['length']-1;
    console.log(getData['length']);
    const response=await fetch(`${url}${key}&q=${getData[length]['cityname']}+city&image_type=photo`);
     try{
    const image1=await response.json();
    Client.updateInterface(getData,image1);
    }
    catch(error)
    {
        console.log(error);
    }
}

