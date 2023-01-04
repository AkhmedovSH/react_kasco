import React from 'react'

import Header from '../../containers/header/Header1'
import Footer from '../../containers/footer/Footer'

import Background from '../../assets/img/menu-visual1.jpg'

function kas0855() {
  return (
    <>
      <div id="wrap">
        <Header />
        {/* [Start] main-area */}
        <section className="main-area" id="main">
          <div className="menu-visual" style={{ backgroundImage: `url(${Background})` }}>
            <h2 className="menu-visual__tit">
              배차정보 상세/수정
            </h2>
            <div className="breadcrumbs-area">
              <ol>
                <li className="breadcrumbs-area__step breadcrumbs-area__step--root">
                  <a href="/manageProduct1.html" className="breadcrumbs-area__link">
                    <i className="icon24 icon-home" />
                    <span className="a11y">홈으로</span>
                  </a>
                </li>
                <li className="breadcrumbs-area__step breadcrumbs-area__step--more"> {/* [D] sub menu 있을 시, breadcrumbs-area__step--more 클래스 추가 */}
                  <a href="#!" className="breadcrumbs-area__link">
                    <span>시스템관리</span>
                  </a>
                  <ul className="breadcrumbs-area__sub-menu">
                    <li>
                      <a href="/manageProduct1.html">시스템관리 1</a>
                    </li>
                    <li>
                      <a href="/manageProduct1.html">시스템관리 2</a>
                    </li>
                    <li>
                      <a href="/manageProduct1.html">시스템관리 3</a>
                    </li>
                  </ul>
                </li>
                <li className="breadcrumbs-area__step">
                  <a href="/manageProduct1.html" className="breadcrumbs-area__link">
                    <span>배차정보 상세/수정</span>
                  </a>
                </li>
              </ol>
            </div>
          </div>
          <div className="cont-area">
            <div className="cont-area__grid">
              <div className="cont-area__section">
                <article>
                  <div className="article-content">
                    <div className="tbl-area">
                      <div className="table-wrap">
                        <table>
                          <colgroup>
                            <col style={{ width: '250px' }} />
                            <col />
                            <col style={{ width: '250px' }} />
                            <col />
                          </colgroup>
                          <tbody>
                            <tr>
                              <th>출고번호</th>
                              <td>2022030-30</td>
                              <th>출고상태</th>
                              <td>출고지시</td>
                            </tr>
                            <tr>
                              <th>출고일자-순번</th>
                              <td>
                                <div className="form-area">
                                  <div className="form-item col2">
                                    <input type="text" id className="inp" defaultValue="2022-11-01" disabled />
                                    <input type="text" id className="inp" defaultValue={1} disabled />
                                  </div>
                                </div>
                              </td>
                              <th>차량종류</th>
                              <td>
                                <div className="form-area">
                                  <div className="form-item">
                                    <input type="text" className="inp" defaultValue="25톤" disabled />
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <th>도착지</th>
                              <td>
                                <div className="form-area">
                                  <div className="form-item">
                                    <input type="text" className="inp" defaultValue="강원도" disabled />
                                  </div>
                                </div>
                              </td>
                              <th>도착지전화번호</th>
                              <td>
                                <div className="form-area">
                                  <div className="form-item">
                                    <input type="text" className="inp" defaultValue="022-1121-1111" disabled />
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <th>인도조건</th>
                              <td>
                                <div className="form-area">
                                  <div className="form-item">
                                    <input type="text" className="inp" defaultValue="블라블라" disabled />
                                  </div>
                                </div>
                              </td>
                              <th>상차부 여부</th>
                              <td>
                                <div className="form-area">
                                  <div className="form-item">
                                    <input type="text" className="inp" defaultValue="블라블라" disabled />
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <th className="necessary">운전기사명</th>
                              <td>
                                <div className="form-area">
                                  <div className="form-item">
                                    <input type="text" className="inp" />
                                  </div>
                                </div>
                              </td>
                              <th className="necessary">운전기사 휴대폰번호</th>
                              <td>
                                <div className="form-area">
                                  <div className="form-item">
                                    <input type="text" className="inp" />
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <th className="necessary">차량번호</th>
                              <td>
                                <div className="form-area">
                                  <div className="form-item">
                                    <input type="text" className="inp" />
                                  </div>
                                </div>
                              </td>
                              <th>메모</th>
                              <td>
                                <div className="form-area">
                                  <div className="form-item">
                                    <input type="text" className="inp" />
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <th>최종수정자</th>
                              <td>홍길동</td>
                              <th>최종수정일시</th>
                              <td>2022-11-11 11:11:11</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </article>
                <div className="btn-area gap-x40">
                  <a href="#!" className="btn-base type-secondary size-m">
                    <span>최소</span>
                  </a>
                  <a href="#!" className="btn-base type-primary size-m grid-m">
                    <i className="icon24 icon-search-light" />
                    <span>
                      등록
                    </span>
                  </a>
                </div>
                <article>
                  <div className="article-header">
                    <h3 className="sub-title">출고상세 내역</h3>
                  </div>
                  <div className="article-content">
                    <div className="tbl-area">
                      <div className="table-wrap">
                        <table>
                          <colgroup>
                            <col style={{ width: '160px' }} />
                            <col />
                            <col style={{ width: '160px' }} />
                            <col />
                            <col style={{ width: '160px' }} />
                            <col style={{ width: '400px' }} />
                          </colgroup>
                          <tbody>
                            <tr>
                              <th>주문</th>
                              <td>
                                <div className="form-area">
                                  <div className="check-box">
                                    <input type="checkbox" id="check1" />
                                    <label htmlFor="check1" className="lb-chk">
                                      <span>경매</span>
                                    </label>
                                    <input type="checkbox" id="check2" />
                                    <label htmlFor="check2" className="lb-chk">
                                      <span>상시판매</span>
                                    </label>
                                  </div>
                                </div>
                              </td>
                              <th>제품구분</th>
                              <td>
                                <div className="form-area">
                                  <div className="check-box">
                                    <input type="checkbox" id="check3" />
                                    <label htmlFor="check3" className="lb-chk">
                                      <span>일반</span>
                                    </label>
                                    <input type="checkbox" id="check4" />
                                    <label htmlFor="check4" className="lb-chk">
                                      <span>패키지</span>
                                    </label>
                                  </div>
                                </div>
                              </td>
                              <th rowSpan={2} className="border-0">제품번호</th>
                              <td rowSpan={2} className="border-0">
                                <div className="product-num">
                                  <div className="item">
                                    <div className="form-area">
                                      <div className="form-item">
                                        <textarea className="inp" defaultValue={""} />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="summary">
                                    <p>
                                      *제품번호, 패키지번호 구분은 , 또는 엔터로 구분<br /><br />
                                      예) A3022,A0033
                                    </p>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <th>고객코드/고객명</th>
                              <td>
                                <div className="form-area">
                                  <div className="form-item col2 overlap-check">
                                    <input id className="inp" />
                                    <input id className="inp" />
                                    <button type="button" className="btn-check">찾기</button>
                                  </div>
                                </div>
                              </td>
                              <th>목적지코드/목적지명</th>
                              <td>
                                <div className="form-area">
                                  <div className="form-item col2 overlap-check">
                                    <input id className="inp" />
                                    <input id className="inp" />
                                    <button type="button" className="btn-check">찾기</button>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </article>
                <div className="btn-area gap-x40">
                  <a href="#!" className="btn-base type-secondary size-m">
                    <span>초기화</span>
                  </a>
                  <a href="#!" className="btn-base type-primary size-m grid-m">
                    <i className="icon24 icon-search-light" />
                    <span>
                      조회
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* // [End] main-area */}
        <Footer />
      </div>
    </>
  )
}

export default kas0855