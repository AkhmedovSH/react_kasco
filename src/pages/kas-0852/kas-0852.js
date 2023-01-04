import React from 'react'

import Header from '../../containers/header/Header1'

import Background from '../../assets/img/menu-visual1.jpg'

function kas0852() {
  return (
    <>
      <div id="wrap">
        <Header />
        {/* [Start] main-area */}
        <section className="main-area" id="main">
          <div className="menu-visual" style={{ backgroundImage: `url(${Background})` }}>
            <h2 className="menu-visual__tit">
              출고관리
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
                  <a href="javascript:void(0);" className="breadcrumbs-area__link">
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
                    <span>출고관리</span>
                  </a>
                </li>
              </ol>
            </div>
          </div>
          <div className="cont-area">
            <div className="cont-area__grid">
              <div className="cont-area__header">
                <div className="cont-area__header-inner">
                  <div className="tab-area">
                    <a href="#" className="tab-area__btn"> {/* [D] 활성화 탭 버튼에 tab-area__btn--active 클래스 추가 */}
                      <span>출고요청</span>
                    </a>
                    <a href="#" className="tab-area__btn tab-area__btn--active">
                      <span>배차/출고등록</span>
                    </a>
                    <a href="#" className="tab-area__btn">
                      <span>출고현황</span>
                    </a>
                    <a href="#" className="tab-area__btn">
                      <span>출고실적</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="cont-area__section">
                <article>
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
                            <col />
                          </colgroup>
                          <tbody>
                            <tr>
                              <th>출고등록일자</th>
                              <td colSpan={5}>
                                <div className="form-area">
                                  <div className="form-item cols3">
                                    <input type="date" id className="inp type-date" defaultValue="2022-11-01" />
                                    <span className="form-division">~</span>
                                    <input type="date" id className="inp type-date" defaultValue="2022-11-01" />
                                    <select className="selectbox inp mr-10">
                                      <option value>순번전체</option>
                                      <option value>옵션1</option>
                                      <option value>옵션2</option>
                                      <option value>옵션3</option>
                                    </select>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <th>매입처</th>
                              <td>
                                <div className="form-area">
                                  <div className="form-item">
                                    <select className="selectbox">
                                      <option value>전체</option>
                                      <option value>옵션1</option>
                                      <option value>옵션2</option>
                                      <option value>옵션3</option>
                                    </select>
                                  </div>
                                </div>
                              </td>
                              <th>창고</th>
                              <td>
                                <div className="form-area">
                                  <div className="form-item">
                                    <select className="selectbox">
                                      <option value>전체</option>
                                      <option value>옵션1</option>
                                      <option value>옵션2</option>
                                      <option value>옵션3</option>
                                    </select>
                                  </div>
                                </div>
                              </td>
                              <th>출고번호</th>
                              <td>
                                <div className="form-area">
                                  <div className="form-item">
                                    <input type="text" className="inp" />
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
                              <th>배차정보 입력여부</th>
                              <td>
                                <div className="form-area">
                                  <div className="check-box">
                                    <input type="checkbox" id="check1" />
                                    <label htmlFor="check1" className="lb-chk">
                                      <span>Y</span>
                                    </label>
                                    <input type="checkbox" id="check2" />
                                    <label htmlFor="check2" className="lb-chk">
                                      <span>N</span>
                                    </label>
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
                  <a href="#" className="btn-base type-secondary size-m">
                    <span>초기화</span>
                  </a>
                  <a href="#" className="btn-base type-primary size-m grid-m">
                    <i className="icon24 icon-search-light" />
                    <span>
                      조회
                    </span>
                  </a>
                </div>
                <article className="space">
                  <div className="article-content">
                    <div className="tbl-area">
                      <div className="tbl-upper">
                        <div className="tbl-upper__cont">
                          <button type="button" className="btn-round-util">
                            <span>배차정보 등록</span>
                          </button>
                          <button type="button" className="btn-round-util">
                            <span>배차취소</span>
                          </button>
                        </div>
                        <div className="tbl-upper__util">
                          <a href="#" className="btn-base type-dark">
                            <span>다운로드</span>
                          </a>
                          <select className="selectbox type-light">
                            <option value>50개씩</option>
                            <option value>옵션1</option>
                            <option value>옵션2</option>
                            <option value>옵션3</option>
                          </select>
                        </div>
                      </div>
                      <div className="tbl-base type-hover">
                      </div>
                    </div>
                  </div>
                </article>
                <div className="tbl-footer">
                  <div className="tbl-footer__cont">
                    <strong className="tbl-footer__tit">총 30,000건</strong>
                  </div>
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
                            <col />
                          </colgroup>
                          <tbody>
                            <tr>
                              <th>주문</th>
                              <td>
                                <div className="form-area">
                                  <div className="check-box">
                                    <input type="checkbox" id="check3" />
                                    <label htmlFor="check3" className="lb-chk">
                                      <span>경매</span>
                                    </label>
                                    <input type="checkbox" id="check4" />
                                    <label htmlFor="check4" className="lb-chk">
                                      <span>상시판매</span>
                                    </label>
                                  </div>
                                </div>
                              </td>
                              <th>제품구분</th>
                              <td>
                                <div className="form-area">
                                  <div className="check-box">
                                    <input type="checkbox" id="check5" />
                                    <label htmlFor="check5" className="lb-chk">
                                      <span>일반</span>
                                    </label>
                                    <input type="checkbox" id="check6" />
                                    <label htmlFor="check6" className="lb-chk">
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
                  <a href="#" className="btn-base type-secondary size-m">
                    <span>초기화</span>
                  </a>
                  <a href="#" className="btn-base type-primary size-m grid-m">
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
        <footer className="footer-area" />
      </div>
    </>
  )
}

export default kas0852