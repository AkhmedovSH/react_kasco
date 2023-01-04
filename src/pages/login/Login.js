import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


import Logo from '../../assets/img/logo.png'

function Login() {
  let navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: ''
  })

  return (
    <>
<div id="wrap" className="login-wrap">
  <header className="login-header">
    <div className="login-header__logo">
      <a href="#">
        <img src={Logo} alt="카스코철강" />
      </a>
    </div>
  </header>
  <section className="login-area" id="main">
    <div className="login-area__grid">
      <div className="login-box">
        <div className="login-box__visual" />
        <div className="login-box__forms">
          <div className="form-area">
            <div className="form-tit">
              <label htmlFor="inpId">아이디</label>
            </div>
            <div className="form-item">
              <input type="text" id="inpId" className="inp type-gray" placeholder="아이디를 입력하세요" />
            </div>
          </div>
          <div className="form-area">
            <div className="form-tit">
              <label htmlFor="inpPw">비밀번호</label>
            </div>
            <div className="form-item">
              <input type="password" id="inpPw" className="inp type-gray" placeholder="비밀번호를 입력하세요" />
            </div>
          </div>
          <div className="form-area gap-x20">
            <div className="lb-item">
              <input type="checkbox" id="chkAutoLogin" name />
              <label htmlFor="chkAutoLogin" className="lb-chk">
                <span>자동로그인</span>
              </label>
            </div>
            <div className="lb-item">
              <input type="checkbox" id="chkSaveId" name />
              <label htmlFor="chkSaveId" className="lb-chk">
                <span>아이디 저장</span>
              </label>
            </div>
          </div>
          <div className="btn-area gap-x20">
            <button type="button" className="btn-base type-primary size-m grid-full">
              <span>로그인</span>
              <i className="icon30 icon-go" />
            </button>
          </div>
          <div className="btn-area tal gap-x20">
            <a href="#" className="btn-icon">
              <i className="icon34 icon-user" />
              <span>회원가입</span>
            </a>
          </div>
        </div>
      </div>
      <div className="login-area__footer">
        <p>아이디, 비밀번호 분실 등의 문의는 업무 담당자에게 직접 연락 주세요.</p>
        <p>
          <i className="icon24 icon-chat" />
          <strong>2023년 1월 1일 이후 공인인증서 로그인이 삭제되었습니다. 아이디/비밀번호 로그인 후 사용해주세요.</strong>
        </p>
      </div>
    </div>
  </section>
</div>

    </>
  )
}

export default Login