import React, { useState }from 'react';
import { useId } from 'react';


type Props = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

export function SearchField({ onChange, value }: Props) {
  const ageInputId = useId();
  // const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  const handleSearch = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    // console.log('Search value:', searchValue);
  };
  {
    console.log('Generated ID:', ageInputId);
  }

  return (
    <div className='search-card'>
      <form onSubmit={handleSearch}>
        <label htmlFor={ageInputId}></label>
        <input
          id={ageInputId}
          name='search-input'
          type='text'
          placeholder='Sökelisök'
          // defaultValue='Sökelisök'
          value={value}
          onChange={onChange}
          className='ml-5 border border-black'
        />
        <SearchBtn />
      </form>

      <div className='tag-btn-container'>
        <div className='tag-btn'>tag1</div>
        <div className='tag-btn'>tag1</div>
      </div>
    </div>
  );
}

function SearchBtn() {
  return (
    <div>
      <button type='submit' className='ml-5'>🔎</button>
    </div>
  );
}

//* ---------------------------------------------
{
  /* <button type='button' className='btn-magifyingglass'>
          <svg
            className='icon-magifyingglass'
            xmlns='http://www.w3.org/2000/svg'
            // width='70'
            // height='67'
            width='40'
            height='40'
            viewBox='0 0 70 67'
            fill='none'
          >
            <path
              d='M62.4094 57.5153L48.3601 44.0682C52.3665 39.6584 54.4274 33.9319 54.1086 28.096C53.7898 22.26 51.116 16.7706 46.651 12.7847C42.186 8.79883 36.2785 6.62798 30.1739 6.72974C24.0692 6.83151 18.2443 9.19794 13.9271 13.3302C9.60976 17.4625 7.13736 23.0377 7.03104 28.8808C6.92472 34.7238 9.19278 40.3781 13.3571 44.6517C17.5215 48.9254 23.2567 51.4845 29.354 51.7897C35.4512 52.0949 41.4341 50.1222 46.0414 46.2876L60.0906 59.7347C60.4016 60.0121 60.813 60.1631 61.238 60.1559C61.663 60.1487 62.0686 59.9839 62.3692 59.6962C62.6698 59.4085 62.8419 59.0204 62.8494 58.6136C62.8569 58.2067 62.6992 57.813 62.4094 57.5153ZM10.3906 29.3125C10.3906 25.4821 11.5773 21.7376 13.8007 18.5527C16.0241 15.3678 19.1843 12.8854 22.8816 11.4196C26.579 9.95372 30.6474 9.57018 34.5725 10.3175C38.4976 11.0648 42.103 12.9093 44.9329 15.6179C47.7627 18.3264 49.6898 21.7773 50.4706 25.5342C51.2513 29.291 50.8506 33.1851 49.3191 36.724C47.7876 40.2629 45.1941 43.2877 41.8666 45.4157C38.5391 47.5438 34.627 48.6797 30.625 48.6797C25.2605 48.6735 20.1176 46.631 16.3243 43.0003C12.5311 39.3696 10.3971 34.4471 10.3906 29.3125Z'
              fill='black'
            />
          </svg>
        </button> */
}
