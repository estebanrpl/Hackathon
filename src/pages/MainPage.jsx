import Grafico from '../components/Grafico';
import '../css/layout/_Main.css';
import React from 'react';
// import useApiRequest from '../hooks/useAPIRequest';

const MainPage = () => {
  const [ccNumber, setCcNumber] = React.useState(null);
  const [category, setCategory] = React.useState('');
  const [showData, setShowData] = React.useState(false)
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

  const handleGetData = (e) => {
    e.preventDefault();

    setShowData(true);
  };

  return (
    <>
      <section className='section_form'>

        <form className={`mainForm ${showData ? 'slideUp' : ""}`}>
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
            <option value='trans_date_trans_time'>Trans_date_trans_time</option>
            <option value='merchant'>Merchant</option>
            <option value='category'>Category</option>
            <option value='grocery_net'>Cum_Sum_Cashback</option>


          </select>
          <button onClick={handleGetData} className='mainButton'>
            Get data
          </button>
        </form>
        {showData && (
          <Grafico />
        )}
      </section>
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
