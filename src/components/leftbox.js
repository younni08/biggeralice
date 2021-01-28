import React from "react";

const Leftbox = () => {
    return (
        <div className="leftbox">
            <div className="profile">
                <div>
                    <div>
                        <img src="./pics/profile.png" />
                    </div>
                    <span>앨리스 온라인</span>
                    <span>MVP 대행 전문</span>
                </div>
            </div>
            <div className="navi">
                <div><span><i className="xi-info xi-x"></i></span><span>이용가이드</span></div>
                <div><span><i className="xi-paper xi-x"></i></span><span>이용후기</span></div>
                <div><span><i className="xi-gift-o xi-x"></i></span><span>MVP 대행</span></div>
                <div><span><i className="xi-tv xi-x"></i></span><span>PC방 대행</span></div>
            </div>
            <div className="maintalk">
                <div>
                    <span><i className="xi-kakaotalk xi-5x"></i></span>
                    <span>카톡상담 바로가기</span>
                    <span>클릭시 상담카톡으로 넘어갑니다</span>
                </div>
            </div>
        </div>
    )
}

export default Leftbox;