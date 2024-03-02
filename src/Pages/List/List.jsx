import React, { useState } from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import Header from '../../Component/Header/Header';
import './List.css'
import { useLocation } from 'react-router-dom';
import { format } from "date-fns";
import { DateRange } from 'react-date-range';
import SearchItem from '../../Component/SearchItem/SearchItem';
const List = () => {

  const location = useLocation();
  const [destination, setDestions] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [opendate, setOpendate] = useState(false);
  const [option, setoption] = useState(location.state.options);

  return (
    <div>
      <Navbar />
      <Header type='List' />
      <div className="listContiner">
        <div className="listwrapper">
          <div className="listSerch">
            <h1 className='lsTitle'>Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input type='text' />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span
                onClick={() => { setOpendate(!opendate) }

                }>
                {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}
              </span>
              {opendate &&
                (<DateRange
                  onChange={(item) => setDate([item.setoption])}
                  minDate={new Date}
                  ranges={date}
                />
                )}
            </div>
            <div className="istem">
              <label>Options</label>
              <div className="isOPtions">
                <div className="isOptionsItem">
                  <span className='isoptionsText'>
                    Min Prices <small>per night</small>
                  </span>
                  <input type='number' className='isoptioninput' />
                </div>

                <div className="isOptionsItem">
                  <span className='isoptionsText'>
                    Min Prices <small>per night</small>
                  </span>
                  <input type='number' className='isoptioninput' />
                </div>


                <div className="isOptionsItem">
                  <span className='isoptionsText'>
                    Adult
                  </span>
                  <input type='number' className='isoptioninput'
                    min={1}
                    placeholder={option.adult}
                  />
                </div>


                <div className="isOptionsItem">
                  <span className='isoptionsText'>
                    children
                  </span>
                  <input type='number' className='isoptioninput'
                    min={0}
                    placeholder={option.children}
                  />
                </div>

                <div className="isOptionsItem">
                  <span className='isoptionsText'>
                    Room
                  </span>
                  <input type='number' className='isoptioninput'
                    min={1}
                    placeholder={option.room}
                  />
                </div>
              </div>
            </div>
            <button className='btn'>Search</button>
          </div>
          <div className="listResult">
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
             <SearchItem/>
            <SearchItem/>
            <SearchItem/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List