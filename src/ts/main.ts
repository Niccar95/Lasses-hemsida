import axios from 'axios'
import '../scss/style.scss'
import { IBoredResponse } from './IBoredResponse';



  const fetchData = async () : Promise<string> =>  {
  
      const response = await axios.get<IBoredResponse>("http://www.boredapi.com/api/activity?type=recreational");

      console.log(response.data.activity);

      return response.data.activity;   

      
  }
 
fetchData();
  