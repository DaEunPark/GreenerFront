
    <template div id="Container">
      <div id="Contents" class="m2105">
        <div class="sub_title_area customer">
            <h1>고객센터 <span>도움이 필요하신가요?</span></h1>
        </div>

        <ul class="comm1sTabs threeSet customer">
            <li id="tabFaq" class="on"><a href="javascript:common.faq.getFaqList('99');" title="선택됨">FAQ</a></li>
            <li id="tab1on1"><a href="javascript:common.link.moveQnaList();">1:1문의</a></li>
            <li id="tabNotice"><a href="https://#/store/counsel/getNoticeList.do" title="선택됨">공지사항</a></li>
        </ul>
        <form id="sForm" name="sForm">
            
            <fieldset class="search-faq">
                <legend>FAQ 검색</legend>

                <div class="input" id="sch_field2">
                    <input type="text" id="inqTitNm" name="inqTitNm" title="질문 키워드를 입력해주세요." placeholder="질문 키워드를 입력해주세요." value="">
                    <a href="javascript:;" class="btn_sch_del"><span class="blind">검색어 삭제</span></a>
                    <input type="submit" id="searchFaq" value="검색">
                </div>
            </fieldset>
            <input type="hidden" id="faqLrclCd" name="faqLrclCd" value="99">
            <input type="hidden" id="faqMdclCd" name="faqMdclCd" value="">
            <input type="hidden" id="tagYn" name="tagYn" value="">
        </form>
        
            <div class="tag_list_wrap">
                <span class="tag_list_tit">인기키워드</span>
                <div class="tag_list" style="margin-left: -202.941px;">
                    
                        <a href="javascript:faq.list.searchFaqTagList('기프트카드');">기프트카드</a>
                    
                        <a href="javascript:faq.list.searchFaqTagList('선물하기');">선물하기</a>
                    
                        <a href="javascript:faq.list.searchFaqTagList('리뷰');">리뷰</a>
                    
                        <a href="javascript:faq.list.searchFaqTagList('빠른결제');">빠른결제</a>
                    
                        <a href="javascript:faq.list.searchFaqTagList('배송');">배송</a>
                    
                        <a href="javascript:faq.list.searchFaqTagList('반품');">반품</a>
                    
                        <a href="javascript:faq.list.searchFaqTagList('결제');">결제</a>
                    
                        <a href="javascript:faq.list.searchFaqTagList('교환');">교환</a>
                    
                        <a href="javascript:faq.list.searchFaqTagList('매장반품');">매장반품</a>
                    
                </div>
            </div>
        

        <div id="TabsOpenArea">
            <div class="area-customer commsTabDiv">
                <ul class="comm2sTabs">
        
                    <li data-cd="200">
                        <button type="button" class="icon_tab02">온라인몰</button>
                        <ul class="twoTabs twoTabsIdx200">
                                <li class="on"><button type="button" title="선택됨">전체</button></li>
                            
                                <li data-cd="201"><button type="button">회원/멤버십</button></li>
                            
                                <li data-cd="202"><button type="button">주문/결제</button></li>
                            
                                <li data-cd="203"><button type="button">배송문의</button></li>
                            
                                <li data-cd="204"><button type="button">취소/교환/환불</button></li>
                            
                                <li data-cd="205"><button type="button">이벤트</button></li>
                            
                                <li data-cd="206"><button type="button">사이트 이용 오류/개선</button></li>
                            
                        </ul>
                    </li>
            
                    <li data-cd="300">
                        <button type="button" class="icon_tab03">오늘드림</button>
                        <ul class="twoTabs twoTabsIdx300">
                        
                                <li class="on"><button type="button" title="선택됨">전체</button></li>
                            
                                <li data-cd="301"><button type="button">주문/결제</button></li>
                            
                                <li data-cd="302"><button type="button">배송문의</button></li>
                            
                                <li data-cd="303"><button type="button">취소/교환/환불</button></li>
                            
                                <li data-cd="304"><button type="button">이벤트</button></li>
                            
                        </ul>
                    </li>
            
                    <li data-cd="400">
                        <button type="button" class="icon_tab04">매장</button>
                        
                        <ul class="twoTabs twoTabsIdx400">
                        
                                <li class="on"><button type="button" title="선택됨">전체</button></li>
                            
                                <li data-cd="401"><button type="button">결제/교환/환불</button></li>
                            
                                <li data-cd="402"><button type="button">이벤트</button></li>
                            
                                <li data-cd="403"><button type="button">매장 문의</button></li>
                            
                                <li data-cd="404"><button type="button">서비스 제안/개선</button></li>
                            
                        </ul>
                    </li>
            
                </ul>
            
            <div class="topTen on" id="btnFaqTop10"><a href="#n">자주 하는 질문10개 </a></div>
            </div>
            <div class="TabsConts tote on">
                <div class="list-customer">
                    <ul>
                        <li class="topThree">
                            <!-- #n == faq.faqLrclCd로 -->
                            <a href="#n" role="button" class="tit" title="답변 내용보기" data-attr="고객센터^FAQ_TOP10_TOP10^[픽업]픽업 서비스가 궁금해요"><strong>TOP10</strong><span class="txt_bold">[픽업]</span>픽업 서비스가 궁금해요</a>
                            <ul class="conts">
                                <li class="question">
                                    <div class="pdzero">
                                        <p>온라인몰에서 상품을 구매하고, 원하는 매장에서 상품을 수령하는 서비스입니다.<br>
                                            원하는 매장을 선택하여 주문하시고 해당 매장에서 상품 준비가 완료되면 바코드가 발송됩니다.<br>
                                            바코드 수신 후 선택한 매장에 방문하시어 상품을 수령해주세요.<br>
                                            ※현재 일부 매장에서만 픽업 서비스 이용이 가능하며, 순차적으로 확대될 예정입니다.<br>
                                            픽업 서비스에 대한 상세 안내는 하기 페이지를 참고해주세요.<br>
                                            <a href="https://#/store/planshop/getPlanShopDetail.do?dispCatNo=500000100720116"><span class="txt_bold">[픽업 사용 설명서 페이지 바로가기]</span>&nbsp;</a><br>
                                            &nbsp;</p>

                                    </div>
                                    
                                    <p class="faq_txt_good">답변이 도움이 되었나요? <button class="btn_faq_good" id="btn_faq_good_245" onclick="faq.list.setFaqTagList('245'); return false;"><span>도움이 되었어요</span></button></p>
                                    <input type="hidden" id="faqTagType245" name="faqTagType245" value="">
                                </li>
                            </ul>
                        </li>
                                        
                        <li class="topThree">
                            <!-- #n == faq.faqLrclCd로 -->
                            <a href="#n" role="button" class="tit" title="답변 내용보기" data-attr="고객센터^FAQ_TOP10_TOP10^[오늘드림] 교환&amp;반품도 매장에서 하면되나요?"><strong>TOP10</strong><span class="txt_bold">[오늘드림]</span> 교환&amp;반품도 매장에서 하면되나요?</a>
                            <ul class="conts">
                                <li class="question">
                                    <div class="pdzero">
                                        매장에서 교환은 어려우며, 온라인몰을 통한 교환/반품 신청이 필요합니다.<br>
                                            <br>
                                            [마이페이지-주문내역] 교환/반품 신청을 통해 아래 방법으로 처리해주세요.<br>
                                            교환 : 회수 택배 기사님을 통해 물류센터로 교환&nbsp;<br>
                                            반품 : 회수 택배 기사님을 통해 물류센터로 반품 / 오프라인 매장에 방문하여 직접 반품<br>
                                            단, 매장 반품의 경우 일부 매장에 한해 가능하므로 반품접수 페이지에서<br>
                                            "가능매장찾기"를 이용하시어 확인 후 반품접수 부탁드립니다. &nbsp; &nbsp;
                                    </div>
                                    
                                    <p class="faq_txt_good">답변이 도움이 되었나요? <button class="btn_faq_good" id="btn_faq_good_241" onclick="faq.list.setFaqTagList('241'); return false;"><span>도움이 되었어요</span></button></p>
                                    <input type="hidden" id="faqTagType241" name="faqTagType241" value="">
                                </li>
                            </ul>
                        </li>
                                        
                        <li class="topThree">
                            <!-- faq.faqLrclCd로 -->
                            <a href="#n" role="button" class="tit" title="답변 내용보기" data-attr="고객센터^FAQ_TOP10_TOP10^[오늘드림] 오늘드림 서비스는 연락없이 비대면으로 진행 되나요?"><strong>TOP10</strong><span class="txt_bold">[오늘드림]</span> 오늘드림 서비스는 연락없이 비대면으로 진행 되나요?</a>
                            <ul class="conts">
                                <li class="question">
                                    <div class="pdzero">
                                        오늘드림&nbsp;서비스는 비대면 배송으로 진행됩니다.<br>
                                                <br>
                                                비대면 서비스의 경우 주문시 기재해주신 공동현관 출입 방법이 정확하지 않을 경우<br>
                                                부득이 상품은 반송 처리 될 수 있는점 양해 부탁드립니다.&nbsp;<br>
                                                &nbsp;
                                    </div>
                                    
                                    <p class="faq_txt_good">답변이 도움이 되었나요? <button class="btn_faq_good" id="btn_faq_good_234" onclick="faq.list.setFaqTagList('234'); return false;"><span>도움이 되었어요</span></button></p>
                                    <input type="hidden" id="faqTagType234" name="faqTagType234" value="">
                                </li>
                            </ul>
                        </li>
                                        
                        <li>
                            <!-- faq.faqLrclCd로 -->
                            <a href="#n" role="button" class="tit" title="답변 내용보기" data-attr="고객센터^FAQ_TOP10_TOP10^[오늘드림] 오늘드림 서비스가 궁금해요"><strong>TOP10</strong><span class="txt_bold">[오늘드림]</span> 오늘드림 서비스가 궁금해요</a>
                            <ul class="conts">
                                <li class="question">
                                    <div class="pdzero">
                                        올리브영만의 배송 걱정 없는 3가지 당일 배송 서비스입니다.<br>
                                            <br>
                                            주문 후 +3시간(빠름 배송) : 밤 8시까지 주문 시 당일 &nbsp;3시간 이내 배송 도착<br>
                                            낮 3~4시(3!4! 배송) : 낮 1시까지 주문 시 오늘 낮 3시~4시 배송 도착<br>
                                            밤 10시~12시(미드나잇 배송) : 밤 8시까지 주문 시 오늘 밤 10~12시까지 배송 도착<br>
                                            <br>
                                            오늘드림 서비스에 대한 상세 안내는 하기 페이지를 참고해주세요.<br>
                                            <a href="https://www.oliveyoung.co.kr/store/planshop/getPlanShopDetail.do?dispCatNo=500000100700005"><span class="txt_bold">[오늘드림 사용 설명서 페이지 바로가기]</span>&nbsp;</a><br>
                                            &nbsp;
                                                                                </div>
                                    
                                    <p class="faq_txt_good">답변이 도움이 되었나요? <button class="btn_faq_good" id="btn_faq_good_233" onclick="faq.list.setFaqTagList('233'); return false;"><span>도움이 되었어요</span></button></p>
                                    <input type="hidden" id="faqTagType233" name="faqTagType233" value="">
                                </li>
                            </ul>
                        </li>
                                        
                        <li>
                            <!-- faq.faqLrclCd로 -->
                            <a href="#n" role="button" class="tit" title="답변 내용보기" data-attr="고객센터^FAQ_TOP10_TOP10^[오늘드림] 오늘 드림 서비스는 배송비가 얼마 인가요?"><strong>TOP10</strong><span class="txt_bold">[오늘드림]</span> 오늘 드림 서비스는 배송비가 얼마 인가요?</a>
                            <ul class="conts">
                                <li class="question">
                                    <div class="pdzero">
                                        <p>오늘드림&nbsp;서비스의 배송비는 실결제금액 기준 3만원 이상 결제 시 무료이며, 3만원 이하 결제의 경우 각 배송 옵션별 상이하게 적용됩니다.<br>
                                            <br>
                                            주문 후 +3시간(빠름 배송) : 5,000원<br>
                                            낮 3~4시(3!4! 배송) : 2,500원<br>
                                            밤 10시~12시(미드나잇 배송) : 2,500원</p>

                                    </div>
                                    
                                    <p class="faq_txt_good">답변이 도움이 되었나요? <button class="btn_faq_good" id="btn_faq_good_140" onclick="faq.list.setFaqTagList('140'); return false;"><span>도움이 되었어요</span></button></p>
                                    <input type="hidden" id="faqTagType140" name="faqTagType140" value="">
                                </li>
                            </ul>
                        </li>
                                        
                        <li>
                            <!-- faq.faqLrclCd로 -->
                            <a href="#n" role="button" class="tit" title="답변 내용보기" data-attr="고객센터^FAQ_TOP10_TOP10^[올영체험단] 올영체험단 후기는 어디에서 작성하나요?"><strong>TOP10</strong><span class="txt_bold">[올영체험단]</span> 올영체험단 후기는 어디에서 작성하나요?</a>
                            <ul class="conts">
                                <li class="question">
                                    <div class="pdzero">
                                        <strong>[PC 사이트로 접속하신 경우]</strong><br>
                                        마이페이지 &gt; 마이 활동 &gt; 올영체험단 리뷰 에서 작성할 수 있습니다.<br>
                                        <a href="https://www.oliveyoung.co.kr/store/mypage/getMyOllyoungList.do">(바로가기)</a><br>
                                        <br>
                                        <strong>[모바일로 접속하신 경우]</strong><br>
                                        마이페이지 &gt; 리뷰 &gt; 올영체험단 에서 작성할 수 있습니다.<br>
                                        <a href="https://m.oliveyoung.co.kr/m/mypage/getMyOllyoungList.do">(바로가기)</a><br>
                                        올영체험단 신청 후 올영체험단 리뷰 작성 기간(초대일로부터 약 4주)내 리뷰 미작성 시 다음 탑리뷰어 선정에서 제외됩니다.
                                         </div>
                                    
                                    <p class="faq_txt_good">답변이 도움이 되었나요? <button class="btn_faq_good" id="btn_faq_good_132" onclick="faq.list.setFaqTagList('132'); return false;"><span>도움이 되었어요</span></button></p>
                                    <input type="hidden" id="faqTagType132" name="faqTagType132" value="">
                                </li>
                            </ul>
                        </li>
                                        
                        <li>
                            <!-- faq.faqLrclCd로 -->
                            <a href="#n" role="button" class="tit" title="답변 내용보기" data-attr="고객센터^FAQ_TOP10_TOP10^[배송] 배송비는 얼마인가요?"><strong>TOP10</strong><span class="txt_bold">[배송]</span> 배송비는 얼마인가요?</a>
                            <ul class="conts">
                                <li class="question">
                                    <div class="pdzero">
                                        배송비는 실결제금액 기준 2만원 이상 결제 시 무료이며, 2만원 이하 결제의 경우 기본적으로 배송비는 2,500원입니다.<br>
                                                <br>
                                                ※ 추가 배송비가&nbsp;발생하는 경우<br>
                                                &nbsp;- 도서산간:&nbsp;+2,500원 (5,000원)<br>
                                                &nbsp;- 제주도:&nbsp;&nbsp;+2,500원 (5,000원)<br>
                                                &nbsp;- 제주도의 도서산간 지역:&nbsp;&nbsp;+7,000원 (9,500원)<br>
                                                &nbsp; ※ 업체배송 상품의 경우 업체의 규정에 따라 비용이 상이할 수 있습니다.<br>
                                                <br>
                                                ※ 오늘드림 서비스 이용 배송비는 3만원 이상 구매 시 무료입니다.<br>
                                                &nbsp; &nbsp; 3만원 이하 구매 시, 3!4! 및 미드나잇 배송비는 2,500원이며<br>
                                                &nbsp; &nbsp; 빠름배송 배송비는 5.000원입니다.
                                    </div>
                                    
                                    <p class="faq_txt_good">답변이 도움이 되었나요? <button class="btn_faq_good" id="btn_faq_good_130" onclick="faq.list.setFaqTagList('130'); return false;"><span>도움이 되었어요</span></button></p>
                                    <input type="hidden" id="faqTagType130" name="faqTagType130" value="">
                                </li>
                            </ul>
                        </li>
                                        
                        <li>
                            <!-- faq.faqLrclCd로 -->
                            <a href="#n" role="button" class="tit" title="답변 내용보기" data-attr="고객센터^FAQ_TOP10_TOP10^[반품] 반품할 때 비용이 드나요?"><strong>TOP10</strong><span class="txt_bold">[반품]</span> 반품할 때 비용이 드나요?</a>
                            <ul class="conts">
                                <li class="question">
                                    <div class="pdzero">
                                        반품 시 지불하셔야 하는 반품비용은 회수비 2,500원입니다.<br>
                                        단, 매장반품의 경우 별도 회수비용 없이 반품가능합니다.<br>
                                        <br>
                                        ※ 추가비용이 발생하는 경우<br>
                                        &nbsp;- 도서산간: +2,500원 (5,000원)<br>
                                        &nbsp;- 제주도: &nbsp;+2,500원 (5,000원)<br>
                                        &nbsp;- 제주도의 도서산간 지역: &nbsp;+7,000원 (9,500원)<br>
                                        &nbsp;- 무료배송이었으나 부분적인 반품으로 인해 무료배송 조건(결제금액 2만원 이상)이 깨진 경우<br>
                                        &nbsp; &nbsp;: &nbsp;면제받으셨던 초기 배송비 2,500원 추가 발생<br>
                                        &nbsp; &nbsp;*&nbsp; 오늘드림 배송 옵션 별 상이 발생&nbsp;<br>
                                        <br>
                                        ※ 반품비는 환불금액에서 차감처리 됩니다.<br>
                                        ※ 업체배송 상품의 경우 업체의 규정에 따라 비용이 상이할 수 있습니다.<br>
                                        ※ 상품의 불량, 배송 오류 등 당사의 실수로 인한 반품의 경우, 반품에 필요한 비용은 당사가 부담합니다.
                                            </div>
                                    
                                    <p class="faq_txt_good">답변이 도움이 되었나요? <button class="btn_faq_good" id="btn_faq_good_126" onclick="faq.list.setFaqTagList('126'); return false;"><span>도움이 되었어요</span></button></p>
                                    <input type="hidden" id="faqTagType126" name="faqTagType126" value="">
                                </li>
                            </ul>
                        </li>
                                        
                        <li>
                            <!-- faq.faqLrclCd로 -->
                            <a href="#n" role="button" class="tit" title="답변 내용보기" data-attr="고객센터^FAQ_TOP10_TOP10^[반품] 반품은 언제까지 가능한가요?"><strong>TOP10</strong><span class="txt_bold">[반품]</span> 반품은 언제까지 가능한가요?</a>
                            <ul class="conts">
                                <li class="question">
                                    <div class="pdzero">
                                        반품은 상품을 수령하신 날짜를 기준으로 15일 이내에 가능합니다.<br>
                                        다만 상품의 불량, 배송 오류 등 당사의 실수로 인한 반품인 경우, 30일 이내 신청이 가능합니다.
                                    </div>
                                    
                                    <p class="faq_txt_good">답변이 도움이 되었나요? <button class="btn_faq_good" id="btn_faq_good_123" onclick="faq.list.setFaqTagList('123'); return false;"><span>도움이 되었어요</span></button></p>
                                    <input type="hidden" id="faqTagType123" name="faqTagType123" value="">
                                </li>
                            </ul>
                        </li>
                                        
                        <li>
                            <!-- faq.faqLrclCd로 -->
                            <a href="#n" role="button" class="tit" title="답변 내용보기" data-attr="고객센터^FAQ_TOP10_TOP10^[배송] 주문한 상품은 언제 배송되나요?"><strong>TOP10</strong><span class="txt_bold">[배송]</span> 주문한 상품은 언제 배송되나요?</a>
                            <ul class="conts">
                                <li class="question">
                                    <div class="pdzero">
                                        <p>온라인몰에서 주문하신 상품은 주문일 기준 3일~5일 이내(주말 및 공휴일 제외)로 배송됩니다.<br>
                                        <br>
                                        ※ 도서산간, 제주도 지역의 경우 5~7일 이내 배송됩니다.<br>
                                        ※ 브랜드 세일 기간에는 주문량 폭주로 인해 주문일로부터 5~7일 이내 배송됩니다.<br>
                                        ※ 예약배송 상품의 경우, 지정된 배송일에 배송됩니다.<br>
                                        &nbsp;</p>
                                        <br>
                                        &nbsp;
                                    </div>
                                    
                                    <p class="faq_txt_good">답변이 도움이 되었나요? <button class="btn_faq_good" id="btn_faq_good_121" onclick="faq.list.setFaqTagList('121'); return false;"><span>도움이 되었어요</span></button></p>
                                    <input type="hidden" id="faqTagType121" name="faqTagType121" value="">
                                </li>
                            </ul>
                        </li>
                
        
    

                    </ul>
                </div>
            </div>
            


        

        <div class="pageing">
            <strong title="현재 페이지">1</strong>
        </div>

        <div class="phone-banner">
                <div class="deposits">
                    <strong>매장</strong>
                    <em>1577-4887</em>
                    <span>평일 09:00 ~ 18:00</span>
                </div>
        <div class="online">
                    <strong>온라인몰</strong>
                    <em>1522-0882</em>
                    <span>평일 09:00 ~ 18:00</span>
                </div>
            </div>



        </div>
    </div>
</template>