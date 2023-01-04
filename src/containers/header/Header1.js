import React, { useState } from 'react'

import Logo from '../../assets/img/logo.png'

function Header1() {
  const [showHeaderArea, setShowHeaderArea] = useState(false)
  const [showCollapse, setShowCollapse] = useState(false)

  return (
    <>
      <div className={"header-area " + (showHeaderArea ? 'is-fold-notice' : '') + (showCollapse ? 'header-area--expanded' : '')} >
        <div className="header-notice type-ing1">
          <a href="#" className="header-notice__link">
            <div className="header-notice__grid">
              <p>
                <i className="icon24 icon-notice" />
                <strong>경매 진행중입니다.</strong>
                <span>2022년 07년 30일</span>
                <strong>1회차 14:00</strong>
              </p>
              <p>
                <span>남은시간</span>
                <span className="timer-area">
                  <strong>12</strong>
                  <span>:</span>
                  <strong>34</strong>
                  <span>:</span>
                  <strong>56</strong>
                </span>
              </p>
            </div>
          </a>
          <button type="button" className="header-notice__btn" onClick={() => setShowHeaderArea(!showHeaderArea)} />
        </div>
        <div className="header-area__inner">
          <div className="header-area__grid">
            <h1 className="header-area__logo">
              <a href="#">
                <img src={Logo} alt="카스코철강" style={{ backgroundColor: '#fff' }} />
              </a>
            </h1>
            <div className="header-area__util">
              <div className="header-area__user">
                카스코철강 <strong>홍길동</strong> 님
              </div>
              <a href="#" className="btn-util">
                <i className="icon20 icon-logout" />
                <span>로그아웃</span>
              </a>
              <a href="#" className="btn-util">
                <i className="icon20 icon-mypage" />
                <span>정보변경</span>
              </a>
              <a href="#" className="btn-util">
                <i className="icon20 icon-like" />
                <span>관심제품</span>
              </a>
              <div className="portal-search">
                <input type="text" title="검색어 입력" className="portal-search__inp" />
                <button type="button" className="portal-search__btn">
                  <i className="icon24 icon-search" />
                  <span className="a11y">검색하기</span>
                </button>
              </div>
            </div>
          </div>
          <div className="header-area__grid header-area__grid--menu">
            <div className="header-area__menu">
              <ul className="menu-list" onMouseEnter={() => setShowCollapse(true)} onMouseLeave={() => setShowCollapse(false)}>
                <li className={"menu-list__category " + (showCollapse ? 'is-hover' : '')}>
                  <a href="#" className="menu-list__btn">
                    <span>제품관리</span>
                  </a>
                  <ul className="menu-list__depth2">
                    <li>
                      <a href="#" className="menu-list__btn-sub">
                        <span>제품관리</span>
                        <i className="icon-dot" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="menu-list__btn-sub">
                        <span>경매할당대상제품조회</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-list__category"> {/* [D] 현재 위치인 메뉴에 is-active 클래스 추가 */}
                  <a href="#" className="menu-list__btn">
                    <span>경매관리</span>
                  </a>
                  <ul className="menu-list__depth2">
                    <li>
                      <a href="#" className="menu-list__btn-sub">
                        <span>회차별 경매관리</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="menu-list__btn-sub">
                        <span>경매시작단가관리</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-list__category">
                  <a href="#" className="menu-list__btn">
                    <span>경매몰관리</span>
                  </a>
                  <ul className="menu-list__depth2">
                    <li>
                      <a href="#" className="menu-list__btn-sub">
                        <span>경매응찰</span>
                        <i className="icon-dot" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="menu-list__btn-sub">
                        <span>경매응찰현황</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="menu-list__btn-sub">
                        <span>경매낙찰</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-list__category">
                  <a href="#" className="menu-list__btn">
                    <span>특가판매몰관리</span>
                  </a>
                  <ul className="menu-list__depth2">
                    <li>
                      <a href="#" className="menu-list__btn-sub">
                        <span>특가판매몰관리</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="menu-list__btn-sub">
                        <span>특가판매몰</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-list__category">
                  <a href="#" className="menu-list__btn">
                    <span>주문관리</span>
                  </a>
                  <ul className="menu-list__depth2">
                    <li>
                      <a href="#" className="menu-list__btn-sub">
                        <span>주문관리</span>
                        <i className="icon-dot" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="menu-list__btn-sub">
                        <span>주문단가관리</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-list__category">
                  <a href="#" className="menu-list__btn">
                    <span>출하·출고관리</span>
                  </a>
                  <ul className="menu-list__depth2">
                    <li>
                      <a href="#" className="menu-list__btn-sub">
                        <span>출하지시관리</span>
                        <i className="icon-dot" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="menu-list__btn-sub">
                        <span>출고관리</span>
                        <i className="icon-dot" />
                      </a>
                      <div className="menu-list__more-btn">
                        <a href="#" className="btn-round">
                          <span>출고등록</span>
                        </a>
                      </div>
                      <div className="menu-list__more-btn">
                        <a href="#" className="btn-round">
                          <span>출고현황</span>
                        </a>
                      </div>
                      <div className="menu-list__more-btn">
                        <a href="#" className="btn-round">
                          <span>출고실적</span>
                        </a>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="menu-list__category">
                  <a href="#" className="menu-list__btn">
                    <span>반품관리</span>
                  </a>
                  <ul className="menu-list__depth2">
                    <li>
                      <a href="#" className="menu-list__btn-sub">
                        <span>반품관리</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="menu-list__btn-sub">
                        <span>반품확정</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-list__category">
                  <a href="#" className="menu-list__btn">
                    <span>기준정보관리</span>
                  </a>
                  <ul className="menu-list__depth2">
                    <li>
                      <a href="#" className="menu-list__btn-sub">
                        <span>목적지관리</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="menu-list__btn-sub">
                        <span>운반비관리</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-list__category">
                  <a href="#" className="menu-list__btn">
                    <span>시스템관리</span>
                  </a>
                  <ul className="menu-list__depth2">
                    <li>
                      <a href="#" className="menu-list__btn-sub">
                        <span>고객관리</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="menu-list__btn-sub">
                        <span>사용자관리</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="menu-list__btn-sub">
                        <span>공지사항관리</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="menu-list__btn-sub">
                        <span>FAQ관리</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="menu-list__btn-sub">
                        <span>팝업관리</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header1