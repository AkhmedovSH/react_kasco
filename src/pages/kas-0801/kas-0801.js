import React from 'react'

import Header from '../../containers/header/Header1'
import Footer from '../../containers/footer/Footer'

import Background from '../../assets/img/menu-visual1.jpg'

function kas0801() {
	return (
		<>
			<div id="wrap">
				<Header />
				{/* [Start] main-area */}
				<section className="main-area" id="main">
					<div className="menu-visual" style={{ backgroundImage: `url(${Background})` }}>
						<h2 className="menu-visual__tit">
							주문관리
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
										<span>주문관리</span>
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
														<col style={{ width: '160px' }} />
														<col />
														<col style={{ width: '160px' }} />
														<col />
														<col style={{ width: '160px' }} />
														<col />
													</colgroup>
													<tbody>
														<tr>
															<th>주문확정일자</th>
															<td>
																<div className="form-area">
																	<div className="form-item type-range">
																		<input type="date" id className="inp type-date" defaultValue="2022-11-01" />
																		<span className="form-division">~</span>
																		<input type="date" id className="inp type-date" defaultValue="2022-11-01" />
																	</div>
																</div>
															</td>
															<th>판매구분</th>
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
														</tr>
														<tr>
															<th>목적지코드</th>
															<td>
																<div className="form-area">
																	<div className="form-item overlap-check">
																		<input type="text" className="inp" />
																		<button type="button" className="btn-check">찾기</button>
																	</div>
																</div>
															</td>
															<th>목적지명</th>
															<td>
																<div className="form-area">
																	<div className="form-item overlap-check">
																		<input type="text" className="inp" />
																		<button type="button" className="btn-check">찾기</button>
																	</div>
																</div>
															</td>
															<th>주문번호</th>
															<td>
																<div className="form-area">
																	<div className="form-item">
																		<input type="text" className="inp" />
																	</div>
																</div>
															</td>
														</tr>
														<tr>
															<th rowSpan={3} className="border-0">제품번호</th>
															<td rowSpan={3} className="border-0">
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
															<th rowSpan={3} className="border-0">패키지번호</th>
															<td rowSpan={3} className="border-0">
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
														</tr>
														<tr>
															<th>출하상태</th>
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
														</tr>
														<tr>
															<th>출고상태</th>
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
								<article className="space">
									<div className="aticle-content">
										<div className="tbl-area">
											<div className="tbl-base">
												<table>
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
														<col />
														<col />
														<col />
														<col />
													</colgroup>
													<thead>
														<tr>
															<th>대표품명</th>
															<th>경매일자</th>
															<th>경매번호</th>
															<th>고객코드</th>
															<th>고객명</th>
															<th>목적지명</th>
															<th>착지전화번호</th>
															<th>승인상태</th>
															<th>낙찰상태</th>
															<th>제품수량</th>
															<th>낙찰중량</th>
															<th>제품금액</th>
															<th>운반금액</th>
															<th>입금요청액</th>
															<th>주소</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<th>대표품명1</th>
															<th>2022-11-11
															</th><th>
															</th><th>C0022</th>
															<th>C1112</th>
															<th>제깅철강</th>
															<th>울산시</th>
															<th>01-111-1111</th>
															<th>승인대기</th>
															<th>낙찰</th>
															<th>22</th>
															<th>30,000,000</th>
															<th>10,030,000</th>
															<th>10,030,000</th>
															<th>10,030,000</th>
															<th>울산시 중구</th>
														</tr>
														<tr>
															<th>대표품명1</th>
															<th>2022-11-11
															</th><th>
															</th><th>C0022</th>
															<th>C1111</th>
															<th>신흥철강</th>
															<th>울산시</th>
															<th>01-111-1111</th>
															<th>승인대기</th>
															<th>낙찰</th>
															<th>22</th>
															<th>30,000,000</th>
															<th>10,030,000</th>
															<th>10,030,000</th>
															<th>10,030,000</th>
															<th>울산시 중구</th>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
									</div>
								</article>
								<article className="space">
									<div className="article-content">
										<div className="tbl-area">
											<div className="tbl-upper">
												<div className="tbl-upper__cont">
													<button type="button" className="btn-round-util">
														<span>주문취소</span>
													</button>
												</div>
												<div className="tbl-upper__util">
													<strong className="tbl-area__tit">
														선택 중량(KG) 993,934
													</strong>
													<a href="#!" className="btn-base type-dark">
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

export default kas0801