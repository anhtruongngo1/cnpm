import classNames from 'classnames/bind';
import styles from './Container.module.scss';
import bg1 from '~/assets/background/backgroundHome.jpg';
import bg2 from '~/assets/background/backgroundHome2.jpg';
import bg3 from '~/assets/background/home3.jpg';
import bg4 from '~/assets/background/home4.jpg';
import bg5 from '~/assets/background/home5.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import Defaultlayout from '../../Defaultlayout/Defaultlayout';
import { IconCircle } from '~/components/Icons/Icons';
import Image from '../../Defaultlayout/Image';
import { lazy, useEffect } from 'react';

const cx = classNames.bind(styles);

function Container() {
    useEffect(() => {
        ready();
    }, []);

    const ready = () => {
        if ('IntersectionObserver' in window) {
            var lazyImg = document.querySelectorAll('img[lazy-src]');

            let observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            load(entry.target);
                            // observer.unobserver();
                        }
                    });
                },
                {
                    rootMargin: '-100px',
                },
            );
            lazyImg.forEach((img) => {
                observer.observe(img);
            });
        }
    };
    const load = (img) => {
        const url = img.getAttribute('lazy-src');
        img.setAttribute('src', url);
        img.style.width = '95%';
    };

    return (
        <Defaultlayout>
            <div className={cx('wrapper')}>
                <div className={cx('image')}>
                    <Image className={cx('image-bg')} src={bg1} />
                </div>
                <div className={cx('image')}>
                    <div className={cx('image-box')}>
                        <div className={cx('image-col-image')}>
                            <img lazy-src={bg2} className={cx('image-bg')} />
                        </div>
                        <div className={cx('image-col-title')}>
                            <h6>ABOUT OUR COLLECTIONS</h6>
                            <h2>Experience new way of designing</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Enim ut sem viverra aliquet eget sit amet.
                            </p>
                            <div className={cx('image-col-icon-box')}>
                                <IconCircle className={cx('image-col-icon')} />

                                <span className={cx('image-col-icon-btn')}>Read More</span>
                            </div>
                        </div>
                    </div>
                    <div className={cx('image-box')}>
                        <div className={cx('image-col-title')}>
                            <h6>ABOUT OUR SHOP</h6>
                            <h2>Experience the shop</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Enim ut sem viverra aliquet eget sit amet
                                nunc.
                            </p>
                        </div>
                        <div className={cx('image-col-image1')}>
                            <img lazy-src={bg3} className={cx('image-bg1')} />
                        </div>
                    </div>
                    <div className={cx('image-box')}>
                        <div className={cx('image-col-image1')}>
                            <img lazy-src={bg4} className={cx('image-bg1')} />
                        </div>
                        <div className={cx('image-col-title')}>
                            <h6>ABOUT USED MATERIALS</h6>
                            <h2>Experience wood-work items</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Enim ut sem viverra aliquet eget sit amet
                                nunc.
                            </p>
                            <div className={cx('image-col-icon-box')}>
                                <IconCircle className={cx('image-col-icon')} />

                                <span className={cx('image-col-icon-btn')}>Read More</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('image')}>
                    <Image className={cx('image-bg')} src={bg5} />
                </div>
            </div>
        </Defaultlayout>
    );
}

export default Container;
