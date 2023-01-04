import React, { useState } from 'react'

import Header from '../../containers/header/Header1'
import Footer from '../../containers/footer/Footer'

import { Bar, Pie } from "react-chartjs-2";

import { Chart, ArcElement, CategoryScale, LinearScale, registerables } from 'chart.js'
Chart.register(ArcElement);
Chart.register(CategoryScale);
Chart.register(LinearScale);
Chart.register(...registerables)

const Data = [
  {
    id: 1,
    label: '23M321',
    userGain: 100,
  },
  {
    id: 2,
    label: '23M321',
    userGain: 90,
  },
  {
    id: 3,
    label: '23M321',
    userGain: 80,
  },
  {
    id: 4,
    label: '23M321',
    userGain: 70,
  },
  {
    id: 5,
    label: '23M321',
    userGain: 60,
  },
  {
    id: 5,
    label: '23M321',
    userGain: 50,
  },
  {
    id: 6,
    label: '23M321',
    userGain: 40,
  },
  {
    id: 7,
    label: '23M321',
    userGain: 30,
  },
  {
    id: 8,
    label: '23M321',
    userGain: 20,
  },
];


const data = {
  labels: ['Red', 'Orange', 'Blue'],
  // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
  datasets: [
    {
      label: 'Popularity of colours',
      data: [55, 23, 96],
      // you can set indiviual colors for each bar
      backgroundColor: [
        'rgba(255, 255, 255, 0.6)',
        'rgba(255, 255, 255, 0.6)',
        'rgba(255, 255, 255, 0.6)'
      ],
      borderWidth: 1,
      categorySpacing: 0
    }
  ]
}


function kas0000() {
  const chartData = {
    labels: Data.map((data) => data.label),
    datasets: [
      {
        label: "Density ",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        // barThickness: 100
      }
    ]
  }

  return (
    <>
      <div id="wrap">
        <Header />
        <main className="main-content" id="main">
          <div className="container">
            <section className="section-1">
              <article>
                <div className="article-header">
                  <h3>금일자 경매/상시판매 현황 &gt;</h3>
                </div>
                <div className="article-content">
                  <div className="table-wrap">
                    <table className="table">
                      <colgroup>
                        <col style={{ width: '80px' }} />
                        <col style={{ width: '100px' }} />
                        <col style={{ width: '70px' }} />
                        <col style={{ width: '170px' }} />
                        <col />
                        <col />
                        <col />
                      </colgroup>
                      <thead>
                        <tr><th colSpan={3}>구분</th>
                          <th>08/16(화)</th>
                          <th>일누계</th>
                          <th className="emphasis">월누계</th>
                          <th className="emphasis">년누계</th>
                        </tr></thead>
                      <tbody>
                        <tr>
                          <td rowSpan={4}>현대제철</td>
                          <td rowSpan={3}>경매<br />(203,400톤)</td>
                          <td>오전</td>
                          <td>163,405톤 / 952천원(톤)</td>
                          <td rowSpan={3}>163,405톤<br /> / 952천원(톤)</td>
                          <td rowSpan={3} className="emphasis">163,405톤<br /> / 952천원(톤)</td>
                          <td rowSpan={3} className="emphasis">163,405톤<br /> / 952천원(톤)</td>
                        </tr>
                        <tr>
                          <td>오후</td>
                          <td>163,405톤 / 952천원(톤)</td>
                        </tr>
                        <tr>
                          <td>추가</td>
                          <td>163,405톤 / 952천원(톤)</td>
                        </tr>
                        <tr>
                          <td>상시판매<br />(203,400톤)</td>
                          <td />
                          <td>163,405톤 / 952천원(톤)</td>
                          <td>163,405톤<br /> / 952천원(톤)</td>
                          <td className="emphasis">163,405톤<br /> / 952천원(톤)</td>
                          <td className="emphasis">163,405톤<br /> / 952천원(톤)</td>
                        </tr>
                        <tr>
                          <td rowSpan={4}>카스코철강</td>
                          <td rowSpan={3}>경매<br />(203,400톤)</td>
                          <td>오전</td>
                          <td>163,405톤 / 952천원(톤)</td>
                          <td rowSpan={3}>163,405톤<br /> / 952천원(톤)</td>
                          <td rowSpan={3} className="emphasis">163,405톤<br /> / 952천원(톤)</td>
                          <td rowSpan={3} className="emphasis">163,405톤<br /> / 952천원(톤)</td>
                        </tr>
                        <tr>
                          <td>오후</td>
                          <td>163,405톤 / 952천원(톤)</td>
                        </tr>
                        <tr>
                          <td>추가</td>
                          <td>163,405톤 / 952천원(톤)</td>
                        </tr>
                        <tr>
                          <td>상시판매<br />(203,400톤)</td>
                          <td />
                          <td>163,405톤 / 952천원(톤)</td>
                          <td>163,405톤<br /> / 952천원(톤)</td>
                          <td className="emphasis">163,405톤<br /> / 952천원(톤)</td>
                          <td className="emphasis">163,405톤<br /> / 952천원(톤)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </article>
              <article>
                <div className="article-header">
                  <h3>금일자 매입처별 제품현황 &gt;</h3>
                  <small className="note">(기준 전체 판매비율 대비 판매비율)</small>
                </div>
                <div className="article-content">
                  <div className="graph-area">
                    {/* 그래프 영역 */}
                    <div id="chart_div" style={{ width: '100%', height: '224px', border: '1px solid #d8dee5' }}>
                      <Bar
                        data={chartData}
                        width={window.innerWidth * 0.4}
                        height={224}
                        options={{
                          plugins: {
                            legend: {
                              display: false
                            },
                            scales: {
                              xAxes: [{ barPercentage: 0.5 }]
                            }
                          }
                        }}
                      />
                    </div>
                  </div>
                  <div className="table-wrap">
                    <table className="table">
                      <colgroup>
                        <col style={{ width: '90px' }} />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                      </colgroup>
                      <thead>
                        <tr>
                          <th>구분/순위</th>
                          <th>1위</th>
                          <th>2위</th>
                          <th>3위</th>
                          <th>4위</th>
                          <th>5위</th>
                          <th>6위</th>
                          <th>7위</th>
                          <th>8위</th>
                          <th>9위</th>
                          <th>10위</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>규격약호</td>
                          <td>23M321</td>
                          <td>23M321</td>
                          <td>23M321</td>
                          <td>23M321</td>
                          <td>23M321</td>
                          <td>23M321</td>
                          <td>23M321</td>
                          <td>23M321</td>
                          <td>23M321</td>
                          <td>Ce2</td>
                        </tr>
                        <tr>
                          <td>판매비율</td>
                          <td>90%</td>
                          <td>90%</td>
                          <td>90%</td>
                          <td>90%</td>
                          <td>90%</td>
                          <td>90%</td>
                          <td>90%</td>
                          <td>90%</td>
                          <td>90%</td>
                          <td>90%</td>
                        </tr>
                        <tr>
                          <td>판매중량</td>
                          <td>110,000,00톤</td>
                          <td>110,000,00톤</td>
                          <td>110,000,00톤</td>
                          <td>110,000,00톤</td>
                          <td>110,000,00톤</td>
                          <td>110,000,00톤</td>
                          <td>110,000,00톤</td>
                          <td>110,000,00톤</td>
                          <td>110,000,00톤</td>
                          <td>110,000,00톤</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="graph-area">
                    {/* 그래프 영역 */}
                    <div id="chart_div_2" style={{ width: '100%', height: '224px', border: '1px solid #d8dee5' }} >
                      <Bar
                        data={chartData}
                        width={window.innerWidth * 0.4}
                        height={224}
                        options={{
                          plugins: {
                            legend: {
                              display: false
                            },
                            scales: {
                              xAxes: [{ barPercentage: 0.5 }]
                            }
                          }
                        }}
                      />
                    </div>
                  </div>
                  <div className="table-wrap">
                    <table className="table">
                      <colgroup>
                        <col style={{ width: '90px' }} />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                      </colgroup>
                      <thead>
                        <tr>
                          <th>구분/순위</th>
                          <th>1위</th>
                          <th>2위</th>
                          <th>3위</th>
                          <th>4위</th>
                          <th>5위</th>
                          <th>6위</th>
                          <th>7위</th>
                          <th>8위</th>
                          <th>9위</th>
                          <th>10위</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>두께</td>
                          <td>9.4</td>
                          <td>9.4</td>
                          <td>9.4</td>
                          <td>9.4</td>
                          <td>9.4</td>
                          <td>9.4</td>
                          <td>9.4</td>
                          <td>9.4</td>
                          <td>9.4</td>
                          <td>9.4</td>
                        </tr>
                        <tr>
                          <td>판매비율</td>
                          <td>90%</td>
                          <td>90%</td>
                          <td>90%</td>
                          <td>90%</td>
                          <td>90%</td>
                          <td>90%</td>
                          <td>90%</td>
                          <td>90%</td>
                          <td>90%</td>
                          <td>90%</td>
                        </tr>
                        <tr>
                          <td>판매중량</td>
                          <td>110,000,00톤</td>
                          <td>110,000,00톤</td>
                          <td>110,000,00톤</td>
                          <td>110,000,00톤</td>
                          <td>110,000,00톤</td>
                          <td>110,000,00톤</td>
                          <td>110,000,00톤</td>
                          <td>110,000,00톤</td>
                          <td>110,000,00톤</td>
                          <td>110,000,00톤</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </article>
            </section>
            <section className="section-2">
              <article>
                <div className="article-header">
                  <h3>금일자 매입처별 제품현황 &gt;</h3>
                  <small className="note">(단위 톤/천원)</small>
                </div>
                <div className="article-content">
                  <div className="double type-2">
                    <div className="table-wrap">
                      <table className="table">
                        <colgroup>
                          <col />
                          <col />
                        </colgroup>
                        <thead>
                          <tr>
                            <th>구분</th>
                            <th>예상재고현황</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>현대제철</td>
                            <td>163,405/952</td>
                          </tr>
                          <tr>
                            <td>카스코철강</td>
                            <td>163,405/952</td>
                          </tr>
                          <tr className="total">
                            <td>합계</td>
                            <td>163,405/952</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="table-wrap">
                      <table className="table">
                        <colgroup>
                          <col />
                          <col />
                          <col />
                          <col />
                          <col />
                        </colgroup>
                        <thead>
                          <tr>
                            <th>구분</th>
                            <th>판매구분</th>
                            <th>낙찰완료</th>
                            <th>주문완료</th>
                            <th>츨고완료</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td rowSpan={2}>현대제철</td>
                            <td>경매</td>
                            <td>163,405/952</td>
                            <td>163,405/952</td>
                            <td>163,405/952</td>
                          </tr>
                          <tr>
                            <td>상시판매</td>
                            <td>163,405/952</td>
                            <td>163,405/952</td>
                            <td>163,405/952</td>
                          </tr>
                          <tr>
                            <td rowSpan={2}>카스코철강</td>
                            <td>경매</td>
                            <td>163,405/952</td>
                            <td>163,405/952</td>
                            <td>163,405/952</td>
                          </tr>
                          <tr>
                            <td>상시판매</td>
                            <td>163,405/952</td>
                            <td>163,405/952</td>
                            <td>163,405/952</td>
                          </tr>
                          <tr className="total">
                            <td colSpan={2}>합계</td>
                            <td>163,405/952</td>
                            <td>163,405/952</td>
                            <td>163,405/952</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </article>
              <article>
                <div className="article-header">
                  <h3>금일자 경매/상시판매 현황 &gt;</h3>
                </div>
                <div className="article-content">
                  <div className="table-wrap">
                    <table className="table">
                      <colgroup>
                        <col style={{ width: '80px' }} />
                        <col style={{ width: '70px' }} />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                      </colgroup>
                      <thead>
                        <tr>
                          <th colSpan={2}>구분</th>
                          <th>0회차 <span className="color-box" style={{ backgroundColor: '#4472c4' }} /></th>
                          <th>1~7회차 <span className="color-box" style={{ backgroundColor: '#ed7d31' }} /></th>
                          <th>8~29회차 <span className="color-box" style={{ backgroundColor: '#a5a5a5' }} /></th>
                          <th>30~49회차 <span className="color-box" style={{ backgroundColor: '#ffc000' }} /></th>
                          <th>50~99회차 <span className="color-box" style={{ backgroundColor: '#5a9bd6' }} /></th>
                          <th>100회 이상 <span className="color-box" style={{ backgroundColor: '#92d050' }} /></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td rowSpan={2}>현대제철</td>
                          <td>경매</td>
                          <td>309</td>
                          <td>309</td>
                          <td>309</td>
                          <td>309</td>
                          <td>309</td>
                          <td>309</td>
                        </tr>
                        <tr>
                          <td>상시판매</td>
                          <td>309</td>
                          <td>309</td>
                          <td>309</td>
                          <td>309</td>
                          <td>309</td>
                          <td>309</td>
                        </tr>
                        <tr>
                          <td rowSpan={2}>카스코철강</td>
                          <td>경매</td>
                          <td>309</td>
                          <td>309</td>
                          <td>309</td>
                          <td>309</td>
                          <td>309</td>
                          <td>309</td>
                        </tr>
                        <tr>
                          <td>상시판매</td>
                          <td>309</td>
                          <td>309</td>
                          <td>309</td>
                          <td>309</td>
                          <td>309</td>
                          <td>309</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="graph-list">
                    <ul>
                      <li>
                        <dl>
                          <dt>[현대제철] 경매</dt>
                          <dd>
                            <div id="chart_div_3_1" style={{ width: '100%', height: '174px', border: '1px solid #d8dee5' }} >
                              <div className="d-flex align-items-center" style={{ width: '70%', height: '100%', margin: 'auto' }}>
                                <Pie
                                  data={chartData}
                                  options={{

                                    plugins: {
                                      title: {
                                        display: false,
                                        text: "Users Gained between 2016-2020"
                                      },
                                      legend: {
                                        display: false,
                                      },
                                    }
                                  }}
                                />
                              </div>
                            </div>
                          </dd>
                        </dl>
                      </li>
                      <li>
                        <dl>
                          <dt>[현대제철] 상시판매</dt>
                          <dd>
                            <div id="chart_div_3_2" style={{ width: '100%', height: '174px', border: '1px solid #d8dee5' }}>
                              <div className="d-flex align-items-center" style={{ width: '70%', height: '100%', margin: 'auto' }}>
                                <Pie
                                  data={chartData}
                                  options={{

                                    plugins: {
                                      title: {
                                        display: false,
                                        text: "Users Gained between 2016-2020"
                                      },
                                      legend: {
                                        display: false,
                                      },
                                    }
                                  }}
                                />
                              </div>
                            </div>
                          </dd>
                        </dl>
                      </li>
                      <li>
                        <dl>
                          <dt>[카스코철강] 경매</dt>
                          <dd>
                            <div id="chart_div_3_3" style={{ width: '100%', height: '174px', border: '1px solid #d8dee5' }} >
                              <div className="d-flex align-items-center" style={{ width: '70%', height: '100%', margin: 'auto' }}>
                                <Pie
                                  data={chartData}
                                  options={{

                                    plugins: {
                                      title: {
                                        display: false,
                                        text: "Users Gained between 2016-2020"
                                      },
                                      legend: {
                                        display: false,
                                      },
                                    }
                                  }}
                                />
                              </div>
                            </div>
                          </dd>
                        </dl>
                      </li>
                      <li>
                        <dl>
                          <dt>[카스코철강] 상시판매</dt>
                          <dd>
                            <div id="chart_div_3_4" style={{ width: '100%', height: '174px', border: '1px solid #d8dee5' }} >
                              <div className="d-flex align-items-center" style={{ width: '70%', height: '100%', margin: 'auto' }}>
                                <Pie
                                  data={chartData}
                                  options={{

                                    plugins: {
                                      title: {
                                        display: false,
                                        text: "Users Gained between 2016-2020"
                                      },
                                      legend: {
                                        display: false,
                                      },
                                    }
                                  }}
                                />
                              </div>
                            </div>
                          </dd>
                        </dl>
                      </li>
                    </ul>
                  </div>
                </div>
              </article>
              <article>
                <div className="article-header">
                  <h3>고객사별 경매/상시 주문 현황</h3>
                  <small className="note">(단위 톤/천원)</small>
                </div>
                <div className="article-content">
                  <div className="double">
                    <div className="table-wrap">
                      <table className="table">
                        <colgroup>
                          <col style={{ width: '50px' }} />
                          <col />
                          <col />
                          <col />
                          <col />
                        </colgroup>
                        <thead>
                          <tr>
                            <th colSpan={5}>최근 일주일</th>
                          </tr>
                          <tr>
                            <th>순위</th>
                            <th>고객사</th>
                            <th>경매낙찰</th>
                            <th>상시주문</th>
                            <th>합계</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>동국철강</td>
                            <td>163,405/952</td>
                            <td>163,405/952</td>
                            <td className="total">163,405/952</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>동국철강</td>
                            <td>163,405/952</td>
                            <td>163,405/952</td>
                            <td className="total">163,405/952</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>동국철강</td>
                            <td>163,405/952</td>
                            <td>163,405/952</td>
                            <td className="total">163,405/952</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>동국철강</td>
                            <td>163,405/952</td>
                            <td>163,405/952</td>
                            <td className="total">163,405/952</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>동국철강</td>
                            <td>163,405/952</td>
                            <td>163,405/952</td>
                            <td className="total">163,405/952</td>
                          </tr>
                          <tr>
                            <td>6</td>
                            <td>동국철강</td>
                            <td>163,405/952</td>
                            <td>163,405/952</td>
                            <td className="total">163,405/952</td>
                          </tr>
                          <tr>
                            <td>7</td>
                            <td>동국철강</td>
                            <td>163,405/952</td>
                            <td>163,405/952</td>
                            <td className="total">163,405/952</td>
                          </tr>
                          <tr>
                            <td>8</td>
                            <td>동국철강</td>
                            <td>163,405/952</td>
                            <td>163,405/952</td>
                            <td className="total">163,405/952</td>
                          </tr>
                          <tr>
                            <td>9</td>
                            <td>동국철강</td>
                            <td>163,405/952</td>
                            <td>163,405/952</td>
                            <td className="total">163,405/952</td>
                          </tr>
                          <tr>
                            <td>10</td>
                            <td>동국철강</td>
                            <td>163,405/952</td>
                            <td>163,405/952</td>
                            <td className="total">163,405/952</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="table-wrap">
                      <table className="table">
                        <colgroup>
                          <col style={{ width: '50px' }} />
                          <col />
                          <col />
                          <col />
                          <col />
                        </colgroup>
                        <thead>
                          <tr>
                            <th colSpan={5}>최근 한달</th>
                          </tr>
                          <tr>
                            <th>순위</th>
                            <th>고객사</th>
                            <th>경매낙찰</th>
                            <th>상시주문</th>
                            <th>합계</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>동국철강</td>
                            <td>163,405/952</td>
                            <td>163,405/952</td>
                            <td className="total">163,405/952</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>동국철강</td>
                            <td>163,405/952</td>
                            <td>163,405/952</td>
                            <td className="total">163,405/952</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>동국철강</td>
                            <td>163,405/952</td>
                            <td>163,405/952</td>
                            <td className="total">163,405/952</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>동국철강</td>
                            <td>163,405/952</td>
                            <td>163,405/952</td>
                            <td className="total">163,405/952</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>동국철강</td>
                            <td>163,405/952</td>
                            <td>163,405/952</td>
                            <td className="total">163,405/952</td>
                          </tr>
                          <tr>
                            <td>6</td>
                            <td>동국철강</td>
                            <td>163,405/952</td>
                            <td>163,405/952</td>
                            <td className="total">163,405/952</td>
                          </tr>
                          <tr>
                            <td>7</td>
                            <td>동국철강</td>
                            <td>163,405/952</td>
                            <td>163,405/952</td>
                            <td className="total">163,405/952</td>
                          </tr>
                          <tr>
                            <td>8</td>
                            <td>동국철강</td>
                            <td>163,405/952</td>
                            <td>163,405/952</td>
                            <td className="total">163,405/952</td>
                          </tr>
                          <tr>
                            <td>9</td>
                            <td>동국철강</td>
                            <td>163,405/952</td>
                            <td>163,405/952</td>
                            <td className="total">163,405/952</td>
                          </tr>
                          <tr>
                            <td>10</td>
                            <td>동국철강</td>
                            <td>163,405/952</td>
                            <td>163,405/952</td>
                            <td className="total">163,405/952</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </article>
            </section>
          </div>
        </main>
        {/* // [End] main-area */}
        <Footer />
      </div>
    </>
  )
}

export default kas0000