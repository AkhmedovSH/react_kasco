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
                  <h3>????????? ??????/???????????? ?????? &gt;</h3>
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
                        <tr><th colSpan={3}>??????</th>
                          <th>08/16(???)</th>
                          <th>?????????</th>
                          <th className="emphasis">?????????</th>
                          <th className="emphasis">?????????</th>
                        </tr></thead>
                      <tbody>
                        <tr>
                          <td rowSpan={4}>????????????</td>
                          <td rowSpan={3}>??????<br />(203,400???)</td>
                          <td>??????</td>
                          <td>163,405??? / 952??????(???)</td>
                          <td rowSpan={3}>163,405???<br /> / 952??????(???)</td>
                          <td rowSpan={3} className="emphasis">163,405???<br /> / 952??????(???)</td>
                          <td rowSpan={3} className="emphasis">163,405???<br /> / 952??????(???)</td>
                        </tr>
                        <tr>
                          <td>??????</td>
                          <td>163,405??? / 952??????(???)</td>
                        </tr>
                        <tr>
                          <td>??????</td>
                          <td>163,405??? / 952??????(???)</td>
                        </tr>
                        <tr>
                          <td>????????????<br />(203,400???)</td>
                          <td />
                          <td>163,405??? / 952??????(???)</td>
                          <td>163,405???<br /> / 952??????(???)</td>
                          <td className="emphasis">163,405???<br /> / 952??????(???)</td>
                          <td className="emphasis">163,405???<br /> / 952??????(???)</td>
                        </tr>
                        <tr>
                          <td rowSpan={4}>???????????????</td>
                          <td rowSpan={3}>??????<br />(203,400???)</td>
                          <td>??????</td>
                          <td>163,405??? / 952??????(???)</td>
                          <td rowSpan={3}>163,405???<br /> / 952??????(???)</td>
                          <td rowSpan={3} className="emphasis">163,405???<br /> / 952??????(???)</td>
                          <td rowSpan={3} className="emphasis">163,405???<br /> / 952??????(???)</td>
                        </tr>
                        <tr>
                          <td>??????</td>
                          <td>163,405??? / 952??????(???)</td>
                        </tr>
                        <tr>
                          <td>??????</td>
                          <td>163,405??? / 952??????(???)</td>
                        </tr>
                        <tr>
                          <td>????????????<br />(203,400???)</td>
                          <td />
                          <td>163,405??? / 952??????(???)</td>
                          <td>163,405???<br /> / 952??????(???)</td>
                          <td className="emphasis">163,405???<br /> / 952??????(???)</td>
                          <td className="emphasis">163,405???<br /> / 952??????(???)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </article>
              <article>
                <div className="article-header">
                  <h3>????????? ???????????? ???????????? &gt;</h3>
                  <small className="note">(?????? ?????? ???????????? ?????? ????????????)</small>
                </div>
                <div className="article-content">
                  <div className="graph-area">
                    {/* ????????? ?????? */}
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
                          <th>??????/??????</th>
                          <th>1???</th>
                          <th>2???</th>
                          <th>3???</th>
                          <th>4???</th>
                          <th>5???</th>
                          <th>6???</th>
                          <th>7???</th>
                          <th>8???</th>
                          <th>9???</th>
                          <th>10???</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>????????????</td>
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
                          <td>????????????</td>
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
                          <td>????????????</td>
                          <td>110,000,00???</td>
                          <td>110,000,00???</td>
                          <td>110,000,00???</td>
                          <td>110,000,00???</td>
                          <td>110,000,00???</td>
                          <td>110,000,00???</td>
                          <td>110,000,00???</td>
                          <td>110,000,00???</td>
                          <td>110,000,00???</td>
                          <td>110,000,00???</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="graph-area">
                    {/* ????????? ?????? */}
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
                          <th>??????/??????</th>
                          <th>1???</th>
                          <th>2???</th>
                          <th>3???</th>
                          <th>4???</th>
                          <th>5???</th>
                          <th>6???</th>
                          <th>7???</th>
                          <th>8???</th>
                          <th>9???</th>
                          <th>10???</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>??????</td>
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
                          <td>????????????</td>
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
                          <td>????????????</td>
                          <td>110,000,00???</td>
                          <td>110,000,00???</td>
                          <td>110,000,00???</td>
                          <td>110,000,00???</td>
                          <td>110,000,00???</td>
                          <td>110,000,00???</td>
                          <td>110,000,00???</td>
                          <td>110,000,00???</td>
                          <td>110,000,00???</td>
                          <td>110,000,00???</td>
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
                  <h3>????????? ???????????? ???????????? &gt;</h3>
                  <small className="note">(?????? ???/??????)</small>
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
                            <th>??????</th>
                            <th>??????????????????</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>????????????</td>
                            <td>163,405/952</td>
                          </tr>
                          <tr>
                            <td>???????????????</td>
                            <td>163,405/952</td>
                          </tr>
                          <tr className="total">
                            <td>??????</td>
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
                            <th>??????</th>
                            <th>????????????</th>
                            <th>????????????</th>
                            <th>????????????</th>
                            <th>????????????</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td rowSpan={2}>????????????</td>
                            <td>??????</td>
                            <td>163,405/952</td>
                            <td>163,405/952</td>
                            <td>163,405/952</td>
                          </tr>
                          <tr>
                            <td>????????????</td>
                            <td>163,405/952</td>
                            <td>163,405/952</td>
                            <td>163,405/952</td>
                          </tr>
                          <tr>
                            <td rowSpan={2}>???????????????</td>
                            <td>??????</td>
                            <td>163,405/952</td>
                            <td>163,405/952</td>
                            <td>163,405/952</td>
                          </tr>
                          <tr>
                            <td>????????????</td>
                            <td>163,405/952</td>
                            <td>163,405/952</td>
                            <td>163,405/952</td>
                          </tr>
                          <tr className="total">
                            <td colSpan={2}>??????</td>
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
                  <h3>????????? ??????/???????????? ?????? &gt;</h3>
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
                          <th colSpan={2}>??????</th>
                          <th>0?????? <span className="color-box" style={{ backgroundColor: '#4472c4' }} /></th>
                          <th>1~7?????? <span className="color-box" style={{ backgroundColor: '#ed7d31' }} /></th>
                          <th>8~29?????? <span className="color-box" style={{ backgroundColor: '#a5a5a5' }} /></th>
                          <th>30~49?????? <span className="color-box" style={{ backgroundColor: '#ffc000' }} /></th>
                          <th>50~99?????? <span className="color-box" style={{ backgroundColor: '#5a9bd6' }} /></th>
                          <th>100??? ?????? <span className="color-box" style={{ backgroundColor: '#92d050' }} /></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td rowSpan={2}>????????????</td>
                          <td>??????</td>
                          <td>309</td>
                          <td>309</td>
                          <td>309</td>
                          <td>309</td>
                          <td>309</td>
                          <td>309</td>
                        </tr>
                        <tr>
                          <td>????????????</td>
                          <td>309</td>
                          <td>309</td>
                          <td>309</td>
                          <td>309</td>
                          <td>309</td>
                          <td>309</td>
                        </tr>
                        <tr>
                          <td rowSpan={2}>???????????????</td>
                          <td>??????</td>
                          <td>309</td>
                          <td>309</td>
                          <td>309</td>
                          <td>309</td>
                          <td>309</td>
                          <td>309</td>
                        </tr>
                        <tr>
                          <td>????????????</td>
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
                          <dt>[????????????] ??????</dt>
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
                          <dt>[????????????] ????????????</dt>
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
                          <dt>[???????????????] ??????</dt>
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
                          <dt>[???????????????] ????????????</dt>
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
                  <h3>???????????? ??????/?????? ?????? ??????</h3>
                  <small className="note">(?????? ???/??????)</small>
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
                            <th colSpan={5}>?????? ?????????</th>
                          </tr>
                          <tr>
                            <th>??????</th>
                            <th>?????????</th>
                            <th>????????????</th>
                            <th>????????????</th>
                            <th>??????</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>????????????</td>
                            <td>163,405/952</td>
                            <td>163,405/952</td>
                            <td className="total">163,405/952</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>????????????</td>
                            <td>163,405/952</td>
                            <td>163,405/952</td>
                            <td className="total">163,405/952</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>????????????</td>
                            <td>163,405/952</td>
                            <td>163,405/952</td>
                            <td className="total">163,405/952</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>????????????</td>
                            <td>163,405/952</td>
                            <td>163,405/952</td>
                            <td className="total">163,405/952</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>????????????</td>
                            <td>163,405/952</td>
                            <td>163,405/952</td>
                            <td className="total">163,405/952</td>
                          </tr>
                          <tr>
                            <td>6</td>
                            <td>????????????</td>
                            <td>163,405/952</td>
                            <td>163,405/952</td>
                            <td className="total">163,405/952</td>
                          </tr>
                          <tr>
                            <td>7</td>
                            <td>????????????</td>
                            <td>163,405/952</td>
                            <td>163,405/952</td>
                            <td className="total">163,405/952</td>
                          </tr>
                          <tr>
                            <td>8</td>
                            <td>????????????</td>
                            <td>163,405/952</td>
                            <td>163,405/952</td>
                            <td className="total">163,405/952</td>
                          </tr>
                          <tr>
                            <td>9</td>
                            <td>????????????</td>
                            <td>163,405/952</td>
                            <td>163,405/952</td>
                            <td className="total">163,405/952</td>
                          </tr>
                          <tr>
                            <td>10</td>
                            <td>????????????</td>
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
                            <th colSpan={5}>?????? ??????</th>
                          </tr>
                          <tr>
                            <th>??????</th>
                            <th>?????????</th>
                            <th>????????????</th>
                            <th>????????????</th>
                            <th>??????</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>????????????</td>
                            <td>163,405/952</td>
                            <td>163,405/952</td>
                            <td className="total">163,405/952</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>????????????</td>
                            <td>163,405/952</td>
                            <td>163,405/952</td>
                            <td className="total">163,405/952</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>????????????</td>
                            <td>163,405/952</td>
                            <td>163,405/952</td>
                            <td className="total">163,405/952</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>????????????</td>
                            <td>163,405/952</td>
                            <td>163,405/952</td>
                            <td className="total">163,405/952</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>????????????</td>
                            <td>163,405/952</td>
                            <td>163,405/952</td>
                            <td className="total">163,405/952</td>
                          </tr>
                          <tr>
                            <td>6</td>
                            <td>????????????</td>
                            <td>163,405/952</td>
                            <td>163,405/952</td>
                            <td className="total">163,405/952</td>
                          </tr>
                          <tr>
                            <td>7</td>
                            <td>????????????</td>
                            <td>163,405/952</td>
                            <td>163,405/952</td>
                            <td className="total">163,405/952</td>
                          </tr>
                          <tr>
                            <td>8</td>
                            <td>????????????</td>
                            <td>163,405/952</td>
                            <td>163,405/952</td>
                            <td className="total">163,405/952</td>
                          </tr>
                          <tr>
                            <td>9</td>
                            <td>????????????</td>
                            <td>163,405/952</td>
                            <td>163,405/952</td>
                            <td className="total">163,405/952</td>
                          </tr>
                          <tr>
                            <td>10</td>
                            <td>????????????</td>
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