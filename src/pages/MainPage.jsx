import '../App.css';
import React from 'react';
// import useApiRequest from '../hooks/useAPIRequest';

const MainPage = () => {
  const [ccNumber, setCcNumber] = React.useState(null);
  const [category, setCategory] = React.useState('');
  //   const [mainData, setMainData] = React.useState([]);
  //   const { fetchData } = useApiRequest();
  //   React.useEffect(() => {
  //     const url = import.meta.env.VITE_SERVER_URL + '/main';
  //     const onSuccess = (data) => {
  //       console.log('Has tenido éxito en la carga de datos');
  //       setMainData(data);
  //     };
  //     const onError = (error) => {
  //       console.log(error.message);
  //     };
  //     const urlData = {};
  //     fetchData(url, urlData, onSuccess, onError);
  //   }, [fetchData]);
  return (
    <>
      <form className='mainForm'>
        <select
          onChange={(e) => setCcNumber(e.target.value)}
          className='mainInput'
        >
          <option value='30270432095985'>Credit card 1</option>
          <option value='344709867813900'>Credit card 2</option>
          <option value='4364010865167176'>Credit card 3</option>
          <option value='4512828414983801773'>Credit card 4</option>
          <option value='4586810168620942'>Credit card 5</option>
          <option value='4642255475285942'>Credit card 6</option>
          <option value='4904681492230012'>Credit card 7</option>
          <option value='6011438889172900'>Credit card 8</option>
          <option value='6538891242532018'>Credit card 9</option>
          <option value='6538441737335434'>Credit card 10</option>
        </select>

        <select
          className='mainButton'
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value='entertaiment'>Entertaiment</option>
          <option value='food_dining'>Food dining</option>
          <option value='gas_transport'>Gas transport</option>
          <option value='grocery_net'>Grocery net</option>
          <option value='grocery_pos'>Grocery pos</option>
          <option value='health_fitness'>Health && fitness</option>
          <option value='home'>Home</option>
          <option value='kids_pets'>Kids && pets</option>
          <option value='misc_net'>Misc net</option>
          <option value='misc_post'>Misc pos</option>
          <option value='personal_care'>Personal care</option>
          <option value='shopping_net'>Shopping net</option>
          <option value='oshopping_pos'>Shopping pos</option>
          <option value='travel'>Travel</option>
        </select>
        <button onClick={(e) => e.preventDefault()} className='mainButton'>
          Get data
        </button>
      </form>
      <div>
        <p>{ccNumber}</p>
        <p>{category}</p>
      </div>

      {/* {mainData.map((data) => {
        return (
          <>
            <ul>
              <li key={data.cc_num}>{data.cc_num}</li>
              <li>{data.category}</li>
              <li>{data.atm}</li>
            </ul>
          </>
        );
      })} */}
    </>
  );
};
export default MainPage;
