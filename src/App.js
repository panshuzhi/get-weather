import React, { useEffect, useState } from 'react'
import api from './api'
import Select from './componets/Select';

import './App.css';

/* @ 根据城市id 获取城市天气情况
 * 1.获取国家列表，根据select 所选的 国家， 获取城市列表，并返回所选择城市的ID。
 * 2.
 */

function App() {
    const [country, setCountry] = useState([])
    const [city, setCity] = useState([])

    // 获取天气的方法方法
    const getDate = (params) => {
        api.getCurrentWeather(params)
            .then(function (response) {
                return response.json();
            }).then(function (data) {
                console.log(data);
            });
    }

    // 5. 调用删除接口，删除所选 li item的数据
    const removeItem = (id) => {

    }

    // 4.根据 所选li item 的ID ，查询城市的天气
    const getWeater = (id) => {
        getDate({ id })
    }

    // getCity
    const getCity = () => {
        // 3.根据城市ID 获取当前城市的天气情况
        getDate({
            id: '524901'
        })
    }

    // 2. 根据所选的国家，获取当前国家所属的城市
    const getCountry = () => { }

    useEffect(() => {
        //1. 根据API 获取国家列表数据 and 获取历史记录
        // setCountry()

        // () => {
        //     setCountry([])
        // }
    }, [])
    return (
        <div className="contanier">
            <header>
                <h3>Today’s Weather</h3>
            </header>
            <section>
                <div className="search">
                    <div>
                        Country:
                        <Select data={country} onChange={getCountry} />
                        {/* 封装重复使用的控件 */}
                    </div>
                    <div>
                        City:
                        <Select data={city} onChange={getCity} />
                        {/* 封装重复使用的控件 */}
                    </div>
                    <button
                        className='search-btn'
                    >
                        <i className="iconfont icon-search"></i>
                    </button>
                    <button>
                        <i className="iconfont icon-clear"></i>
                    </button>
                </div>
                <div className='show-weather'>
                    <p>Johor, MY</p>
                    <h2>Cloud</h2>
                    <p>
                        <label>Discription:</label>
                        scattered clouds
                    </p>
                    <p>
                        <label>Temperature:</label>
                        scattered clouds
                    </p>
                    <p>
                        <label>Humidity:</label>
                        scattered clouds
                    </p>
                    <p>
                        <label>Time:</label>
                        scattered clouds
                    </p>
                </div>
            </section>
            <section>
                <h3>Search History</h3>
                <ul>
                    <li>
                        <div className="f-l"> Johor, MY</div>
                        <div className="f-r">
                            <span>03:15:30 PM</span>
                            <button
                                className='search-btn'
                                onChange={getWeater}
                            >
                                <i className="iconfont icon-search"></i>
                            </button>
                            <button
                                className='delete-btn'
                                onChange={removeItem}
                            >
                                <i className="iconfont icon-delete"></i>
                            </button>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    );
}

export default App;
