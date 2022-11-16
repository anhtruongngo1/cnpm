import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import footer1 from "~/assets/images/footer-logo-group.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightDots, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Image from '../Image';

const cx = classNames.bind(styles);
function Footer({ children }) {
    return (
        <div className={cx('wrapper')}>
        <div className={cx(['container'])}>
        <div className={cx('footer')}>
                <h3> Umera</h3>
                <p>
                Welcome to a place of refinement and beauty. This is Umeå, a WP gem we made for all furniture stores & brands.
                </p>
                <div className={cx('footer-widget')}>
                    <h6>FB.</h6>
                    <h6>TW.</h6>
                    <h6>IN.</h6>
                    <h6>BE.</h6>
                    <h6>DR.</h6>

                </div>

            </div>
            <div className={cx('footer')}>
                <h3> Studio</h3>
                <li>Visit our Store  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className={cx('footer-icon')} />  </li>
                <li>About Us  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className={cx('footer-icon')} />  </li>
                <li>Our Blog  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className={cx('footer-icon')} />  </li>
                <li>Craftsmanship  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className={cx('footer-icon')} />  </li>
                <li>Apply For a Job  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className={cx('footer-icon')} />  </li>

            </div>
            <div className={cx('footer')}>
                <h3> Shopping </h3>
                <li>Online Payments  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className={cx('footer-icon')} />  </li>
                <li>Gift Cards  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className={cx('footer-icon')} />  </li>
                <li>Return Policy  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className={cx('footer-icon')} />  </li>
                <li>Furniture Assembling  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className={cx('footer-icon')} />  </li>
                <li>Shipping Methods  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className={cx('footer-icon')} />  </li>

            </div>
            <div className={cx('footer')}>
                <h3> Payment Methods</h3>
                <p>
                Select one of many supported payment providers from the list below.
                </p>
                <div  className={cx('footer-widget')}> 
                <Image src={footer1} />

                </div>

            </div>

        </div>
        <div className={cx(['container'])}>
            <p className={cx(['container-overight'])} >© 2021 Qode Interactive, All Rights Reserved</p>

        </div>

        </div>
    )
}

export default Footer;
