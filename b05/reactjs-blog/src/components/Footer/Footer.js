import './footer.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function Footer() {

  useEffect(() => {
    const script = document.createElement('script');
    script.setAttribute('async', '')
    script.setAttribute('defer', '')
    script.setAttribute('crossorigin', 'anonymous')
    script.setAttribute('nonce', 'uJmxruXL');
    script.src = 'https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v10.0';

    document.body.append(script);
  }, [])

  return (
    <footer id="footer" className="bg-white">
      
      <div className="tcl-container">
        <div className="footer">
          <div className="tcl-row">
            {/* Footer Column */}
            <div className="tcl-col-12 tcl-col-sm-6 tcl-col-md-4 tcl-col-lg-3">
              <div className="footer-logo">
                <img src="assets/images/logo.png" alt="NuxtBlog Logo" />
              </div>
              <p>© 2020, All Rights Reserved.</p>
              <p>Created by <Link to="https://www.facebook.com/congluc1902" target="_blank" rel="noreferrer">Luctc</Link></p>
            </div>
            {/* Footer Column */}
            <div className="tcl-col-12 tcl-col-sm-6 tcl-col-md-4 tcl-col-lg-2">
              <div className="footer-title">
                <p>Categories</p>
              </div>
              <ul className="footer-content__list">
                <li><Link to="/">ReactJs</Link></li>
                <li><Link to="/">Javascript</Link></li>
                <li><Link to="/">Angular</Link></li>
                <li><Link to="/">HTML, HTML5</Link></li>
              </ul>
            </div>
            {/* Footer Column */}
            <div className="tcl-col-12 tcl-col-sm-6 tcl-col-md-4 tcl-col-lg-3">
              <div className="footer-title">
                <p>Liên hệ</p>
              </div>
              <ul className="footer-content__list">
                <li>219/78 Trần Văn Đang - Quận 10 - Thành phố Hồ chí Minh</li>
                <li>0343 261 825</li>
              </ul>
            </div>
            {/* Footer Column */}
            <div className="tcl-col-12 tcl-col-sm-6 tcl-col-md-4 tcl-col-lg-4">
              <div className="footer-title">
                <p>Fanpage</p>
              </div>
              <div className="footer-facebook">
                <div className="fb-page" data-href="https://www.facebook.com/HocLapTrinhWebTrenProjectsThucTe/" data-tabs="" data-width="" data-height="" data-small-header="false" data-adapt-container-width="false" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/HocLapTrinhWebTrenProjectsThucTe/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/HocLapTrinhWebTrenProjectsThucTe/">Học Lập Trình Web Thông Qua Projects Thực Tế</a></blockquote></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}